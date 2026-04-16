import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import {
  fetchMarketplaceStatistics,
  getMarketplaceItemName,
  MarketplaceSnapshot,
} from './marketplaceApi'

type MarketplaceFile = Record<string, MarketplaceSnapshot | null>

const ROOT_DIR = path.resolve(__dirname, '../../..')
const DATA_FILE = path.join(ROOT_DIR, 'data', 'marketplace.json')

function sortObjectKeys<T>(obj: Record<string, T>): Record<string, T> {
  return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)))
}

async function readMarketplaceFile(filePath: string): Promise<MarketplaceFile> {
  const raw = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(raw) as MarketplaceFile
}

async function writeJsonAtomic(filePath: string, data: unknown): Promise<void> {
  const dir = path.dirname(filePath)
  const tempPath = path.join(dir, `.${path.basename(filePath)}.${process.pid}.${Date.now()}.tmp`)

  const json = JSON.stringify(data, null, 2) + '\n'
  await fs.writeFile(tempPath, json, 'utf-8')
  await fs.rename(tempPath, filePath)
}

async function updateMarketplace(): Promise<void> {
  const marketplace = await readMarketplaceFile(DATA_FILE)
  const nextMarketplace: MarketplaceFile = { ...marketplace }

  for (const [url, previousSnapshot] of Object.entries(marketplace)) {
    try {
      const itemName = getMarketplaceItemName(url)
      const statistics = await fetchMarketplaceStatistics(itemName)
      const marketplaceSnapshot: MarketplaceSnapshot = {
        snapshotAt: new Date().toISOString(),
        statistics,
      }
      nextMarketplace[url] = marketplaceSnapshot
      console.log(`[ok] ${url}`, marketplaceSnapshot)
    } catch (error) {
      nextMarketplace[url] = previousSnapshot ?? null
      console.error(`[failed] ${url}`)

      if (error instanceof Error) {
        console.error(`  ${error.name}: ${error.message}`)
      } else {
        console.error(`  Unknown error: ${String(error)}`)
      }
    }
  }

  await writeJsonAtomic(DATA_FILE, sortObjectKeys(nextMarketplace))
}

updateMarketplace().catch((error) => {
  console.error(error)
  process.exit(1)
})
