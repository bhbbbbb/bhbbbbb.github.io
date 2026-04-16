import * as cheerio from 'cheerio'

export type StatsSnapshot = {
  snapshotAt: string
  downloads: number | null
  avgRating: number | null
  ratingCount: number | null
}

export class NotImplementedDomainError extends Error {
  constructor(hostname: string) {
    super(`Not implemented for domain: ${hostname}`)
    this.name = 'NotImplementedDomainError'
  }
}

function parseNumberLike(text: string): number | null {
  const cleaned = text.replace(/,/g, '').trim()
  const match = cleaned.match(/(\d+(?:\.\d+)?)/)
  if (!match) return null
  return Number(match[1])
}

function parseInstalls(text: string): number | null {
  // e.g. "213,540,539 installs"
  return parseNumberLike(text)
}

function parseAvgRating(text: string): number | null {
  // e.g. "Average rating: 4.2 out of 5"
  const match = text.match(/Average rating:\s*(\d+(?:\.\d+)?)/i)
  if (!match) return null
  return Number(match[1])
}

export async function fetchSnapshot(url: string): Promise<StatsSnapshot> {
  const parsed = new URL(url)

  switch (parsed.hostname) {
    case 'marketplace.visualstudio.com':
      return scrapeVsMarketplace(url)
    default:
      throw new NotImplementedDomainError(parsed.hostname)
  }
}

async function scrapeVsMarketplace(url: string): Promise<StatsSnapshot> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'stats-crawler/1.0 (+https://example.com)',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  const installsText = $('.installs-text').first().text().trim()

  const reviewAnchor = $('#review-details').first()
  const reviewRating = $('.ux-item-review-rating').first()

  const reviewLabel =
    reviewAnchor.attr('aria-label') || reviewRating.attr('title') || reviewAnchor.text()

  const ratingCountText =
    $('.ux-item-rating-count span').first().text().trim() ||
    $('.ux-item-rating-count').first().text().trim()

  const downloads = installsText ? parseInstalls(installsText) : null
  const avgRating = reviewLabel ? parseAvgRating(reviewLabel) : null
  const ratingCount = ratingCountText ? parseNumberLike(ratingCountText) : null

  return {
    snapshotAt: new Date().toISOString(),
    downloads,
    avgRating,
    ratingCount,
  }
}
