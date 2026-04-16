import { promises as fs } from 'node:fs'
import * as path from 'node:path'
// import { fetchSnapshot, StatsSnapshot } from './scrapers'
import { fetchSnapshot, StatsSnapshot } from './marketplaceApi'

type StatsFile = Record<string, StatsSnapshot | null>

const ROOT_DIR = path.resolve(__dirname, '../../..')
const DATA_FILE = path.join(ROOT_DIR, 'data', 'stats.json')

function sortObjectKeys<T>(obj: Record<string, T>): Record<string, T> {
  return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)))
}

async function readStatsFile(filePath: string): Promise<StatsFile> {
  const raw = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(raw) as StatsFile
}

async function writeJsonAtomic(filePath: string, data: unknown): Promise<void> {
  const dir = path.dirname(filePath)
  const tempPath = path.join(dir, `.${path.basename(filePath)}.${process.pid}.${Date.now()}.tmp`)

  const json = JSON.stringify(data, null, 2) + '\n'
  await fs.writeFile(tempPath, json, 'utf-8')
  await fs.rename(tempPath, filePath)
}

async function updateStats(): Promise<void> {
  const stats = await readStatsFile(DATA_FILE)
  const nextStats: StatsFile = { ...stats }

  for (const [url, previousSnapshot] of Object.entries(stats)) {
    try {
      const snapshot = await fetchSnapshot(url)
      nextStats[url] = snapshot
      console.log(`[ok] ${url}`, snapshot)
    } catch (error) {
      nextStats[url] = previousSnapshot ?? null
      console.error(`[failed] ${url}`)

      if (error instanceof Error) {
        console.error(`  ${error.name}: ${error.message}`)
      } else {
        console.error(`  Unknown error: ${String(error)}`)
      }
    }
  }

  await writeJsonAtomic(DATA_FILE, sortObjectKeys(nextStats))
}

updateStats().catch((error) => {
  console.error(error)
  process.exit(1)
})
