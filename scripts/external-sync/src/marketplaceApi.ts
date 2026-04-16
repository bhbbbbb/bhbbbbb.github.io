export type StatsSnapshot = {
  snapshotAt: string
  downloads: number | null
  avgRating: number | null
  ratingCount: number | null
}

type ExtensionStatistic = {
  statisticName: string
  value: number
}

type ExtensionQueryResponse = {
  results?: Array<{
    extensions?: Array<{
      statistics?: ExtensionStatistic[]
    }>
  }>
}

export class NotImplementedDomainError extends Error {
  constructor(hostname: string) {
    super(`Not implemented for domain: ${hostname}`)
    this.name = 'NotImplementedDomainError'
  }
}

function extractItemName(inputUrl: string): string {
  let parsed: URL

  try {
    parsed = new URL(inputUrl)
  } catch {
    throw new Error(`Invalid URL: ${inputUrl}`)
  }

  const itemName = parsed.searchParams.get('itemName')?.trim()

  if (!itemName) {
    throw new Error(`Missing itemName query param in URL: ${inputUrl}`)
  }

  return itemName
}

function toStatsSnapshot(statistics: ExtensionStatistic[] | undefined): StatsSnapshot {
  const stats = new Map<string, number>()

  for (const stat of statistics ?? []) {
    if (typeof stat.statisticName === 'string' && typeof stat.value === 'number') {
      stats.set(stat.statisticName, stat.value)
    }
  }

  return {
    snapshotAt: new Date().toISOString(),
    downloads: stats.get('install') ?? null,
    avgRating: stats.get('averagerating') ?? null,
    ratingCount: stats.get('ratingcount') ?? null,
  }
}

export async function fetchSnapshot(url: string): Promise<StatsSnapshot> {
  const parsed = new URL(url)

  switch (parsed.hostname) {
    case 'marketplace.visualstudio.com':
      return fetchVsMarketplace(url)
    default:
      throw new NotImplementedDomainError(parsed.hostname)
  }
}

async function fetchVsMarketplace(url: string): Promise<StatsSnapshot> {
  const itemName = extractItemName(url)

  const body = {
    filters: [
      {
        criteria: [
          {
            filterType: 8,
            value: 'Microsoft.VisualStudio.Code',
          },
          {
            filterType: 7,
            value: itemName,
          },
        ],
        pageNumber: 1,
        pageSize: 1,
        sortBy: 0,
        sortOrder: 0,
      },
    ],
    assetTypes: [],
    flags:
      0x1 | // includeVersions
      0x2 | // includeFiles
      0x4 | // includeCategoryAndTags
      0x8 | // includeSharedAccounts
      0x10 | // includeVersionProperties
      0x40 | // includeInstallationTargets
      0x80 | // includeAssetUri
      0x100 | // includeStatistics
      0x8000, // includeNameConflictInfo
  }

  const apiVersion = '7.2-preview.1'
  const timeoutMs = 10_000

  const endpoint = new URL(
    'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
  )
  endpoint.searchParams.set('api-version', apiVersion)

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(endpoint.toString(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Marketplace API request failed: ${response.status} ${response.statusText}`)
    }

    const data = (await response.json()) as ExtensionQueryResponse
    const extension = data.results?.[0]?.extensions?.[0]

    if (!extension) {
      throw new Error(`Extension not found for itemName: ${itemName}`)
    }

    return toStatsSnapshot(extension.statistics)
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Marketplace API request timed out after ${timeoutMs}ms`)
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}
