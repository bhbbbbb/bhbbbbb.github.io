export type MarketplaceStatistics = {
  onpremDownloads: number | null
  averagerating: number | null
  weightedRating: number | null
  install: number | null
  trendingdaily: number | null
  ratingcount: number | null
  trendingmonthly: number | null
  updateCount: number | null
  downloadCount: number | null
  trendingweekly: number | null
}

export type MarketplaceSnapshot = {
  snapshotAt: string
  statistics: MarketplaceStatistics
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

export function getMarketplaceItemName(inputUrl: string): string {
  let parsed: URL

  try {
    parsed = new URL(inputUrl)
  } catch {
    throw new Error(`Invalid URL: ${inputUrl}`)
  }

  if (parsed.hostname !== 'marketplace.visualstudio.com') {
    throw new NotImplementedDomainError(parsed.hostname)
  }

  const itemName = parsed.searchParams.get('itemName')?.trim()

  if (!itemName) {
    throw new Error(`Missing itemName query param in URL: ${inputUrl}`)
  }

  return itemName
}

function toMarketplaceStatistics(
  statistics: ExtensionStatistic[] | undefined,
): MarketplaceStatistics {
  const marketplaceStatistics = new Map<string, number>()

  for (const stat of statistics ?? []) {
    if (typeof stat.statisticName === 'string' && typeof stat.value === 'number') {
      marketplaceStatistics.set(stat.statisticName, stat.value)
    }
  }

  return {
    onpremDownloads: marketplaceStatistics.get('onpremDownloads') ?? null,
    averagerating: marketplaceStatistics.get('averagerating') ?? null,
    weightedRating: marketplaceStatistics.get('weightedRating') ?? null,
    install: marketplaceStatistics.get('install') ?? null,
    trendingdaily: marketplaceStatistics.get('trendingdaily') ?? null,
    ratingcount: marketplaceStatistics.get('ratingcount') ?? null,
    trendingmonthly: marketplaceStatistics.get('trendingmonthly') ?? null,
    updateCount: marketplaceStatistics.get('updateCount') ?? null,
    downloadCount: marketplaceStatistics.get('downloadCount') ?? null,
    trendingweekly: marketplaceStatistics.get('trendingweekly') ?? null,
  }
}

export async function fetchMarketplaceStatistics(
  itemName: string,
): Promise<MarketplaceStatistics> {
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

    return toMarketplaceStatistics(extension.statistics)
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Marketplace API request timed out after ${timeoutMs}ms`)
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}
