import type { EntityBundle } from '@/types/bundle'
import type { TimelineId, RowFilter, RawRowFilter } from '@/types/filter'
import type { ProjectItem, PublicationItem, SimpleItem, TimelineItem } from '@/types/content'
import type { RawTimelineDef } from '@/types/timeline'
import { resolveRowFilters } from '@/utils/filter'

function resolve(filters: RawRowFilter[] | undefined): RowFilter[] {
  if (!filters?.length) return []
  return resolveRowFilters(filters as Parameters<typeof resolveRowFilters>[0])
}

// Row-first merge: row tags appear first, bundle tags appended (deduped by id, row wins)
function mergeTags(rowTags: RawRowFilter[] | undefined, bundleTags: RawRowFilter[] | undefined): RowFilter[] {
  const resolvedRow = resolve(rowTags)
  const resolvedBundle = resolve(bundleTags)
  const rowIds = new Set(resolvedRow.map((f) => f.id))
  return [...resolvedRow, ...resolvedBundle.filter((f) => !rowIds.has(f.id))]
}

// Builds final meta for a section: explicit meta + auto-append [](bundleId) and [](timelineId)
function buildSectionMeta(sectionMeta: RawRowFilter[], bundleId: string, timelineId: TimelineId): RowFilter[] {
  const resolved = resolve(sectionMeta)
  const ids = new Set(resolved.map((f) => f.id))
  if (!ids.has(bundleId)) resolved.push(...resolveRowFilters([`[](${bundleId})`]))
  if (!ids.has(timelineId)) resolved.push(...resolveRowFilters([`[](${timelineId})`]))
  return resolved
}

// Resolves raw timeline defs and appends hidden meta/tag refs from bundles
function enrichTimelines(
  bundles: EntityBundle[],
  timelines: readonly RawTimelineDef[],
): TimelineItem[] {
  const map = new Map(
    timelines.map((t) => [
      t.id as TimelineId,
      {
        id: t.id as TimelineId,
        title: t.title,
        organization: t.organization,
        period: t.period,
        description: t.description,
        badge: t.badge,
        tags: resolveRowFilters([...(t.tags ?? [])]),
        meta: [] as RowFilter[],
      } satisfies TimelineItem,
    ]),
  )

  for (const bundle of bundles) {
    const tl = map.get(bundle.timeline)
    if (!tl) continue

    // Collect all meta IDs that will appear on this bundle's section items
    const bundleMetaIds = new Set<string>([bundle.id])
    const allSectionMetas: RawRowFilter[] = [
      ...(bundle.project?.meta ?? []),
      ...(bundle.publication?.meta ?? []),
      ...(bundle.awards?.flatMap((a) => a.meta) ?? []),
    ]
    for (const f of resolve(allSectionMetas)) bundleMetaIds.add(f.id)

    // Append hidden meta refs not already on timeline
    const existingMetaIds = new Set(tl.meta.map((f) => f.id))
    for (const id of bundleMetaIds) {
      if (!existingMetaIds.has(id)) {
        tl.meta.push(resolveRowFilters([`[](${id})`])[0])
        existingMetaIds.add(id)
      }
    }

    // Collect all tag IDs across all sections of this bundle
    const allBundleTagRaws: RawRowFilter[] = [
      ...(bundle.tags ?? []),
      ...(bundle.project?.tags ?? []),
      ...(bundle.publication?.tags ?? []),
      ...(bundle.awards?.flatMap((a) => a.tags ?? []) ?? []),
    ]

    // Append hidden tag refs not already on timeline
    const existingTagIds = new Set(tl.tags.map((f) => f.id))
    for (const f of resolve(allBundleTagRaws)) {
      if (!existingTagIds.has(f.id)) {
        tl.tags.push(resolveRowFilters([`[](${f.id})`])[0])
        existingTagIds.add(f.id)
      }
    }
  }

  return timelines.map((t) => map.get(t.id as TimelineId)!)
}

export function expandBundles(
  bundles: EntityBundle[],
  timelines: readonly RawTimelineDef[],
): {
  projects: ProjectItem[]
  publications: PublicationItem[]
  others: SimpleItem[]
  timelines: TimelineItem[]
} {
  const projects: ProjectItem[] = []
  const publications: PublicationItem[] = []
  const others: SimpleItem[] = []

  for (const bundle of bundles) {
    const { id, timeline, tags: bundleTags, links: bundleLinks, image: bundleImage } = bundle

    if (bundle.project) {
      const p = bundle.project
      projects.push({
        id,
        title: p.title,
        description: p.description,
        year: p.year,
        image: p.image ?? bundleImage,
        tags: mergeTags(p.tags, bundleTags),
        links: p.links ?? bundleLinks,
        meta: buildSectionMeta(p.meta, id, timeline),
      })
    }

    if (bundle.publication) {
      const pub = bundle.publication
      publications.push({
        id: pub.id ?? `${id}-pub`,
        title: pub.title,
        authors: pub.authors,
        venue: pub.venue,
        year: pub.year,
        description: pub.description,
        tags: mergeTags(pub.tags, bundleTags),
        links: pub.links ?? bundleLinks,
        meta: buildSectionMeta(pub.meta, id, timeline),
      })
    }

    for (const award of bundle.awards ?? []) {
      others.push({
        title: award.title,
        description: award.description,
        year: award.year,
        show: award.show,
        tags: mergeTags(award.tags, bundleTags),
        meta: buildSectionMeta(award.meta, id, timeline),
      })
    }
  }

  return { projects, publications, others, timelines: enrichTimelines(bundles, timelines) }
}
