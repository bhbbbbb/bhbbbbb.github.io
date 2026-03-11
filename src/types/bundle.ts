import type { FilterId, TimelineId, RawRowFilter } from './filter'
import type { PublicationAuthor, NavLink } from './content'

// Plain string: 'Name' → not highlighted
// Bold string:  '**Name**' → highlighted
// Object: { name, highlight? } → passed through as-is
export type RawAuthor = string | PublicationAuthor

export interface EntityBundle {
  id: FilterId
  timeline: TimelineId

  // Shared fallbacks — applied to all sections unless the section overrides
  tags?: RawRowFilter[]
  links?: NavLink[]
  image?: string

  project?: {
    title: string
    description: string
    year: string | number
    // [](bundleId) and [](timelineId) are auto-appended if not already present
    meta: RawRowFilter[]
    tags?: RawRowFilter[] // row-first, then bundle extras appended (deduped by id)
    links?: NavLink[]     // overrides bundle links
    image?: string        // overrides bundle image
  }

  publication?: {
    id?: string           // defaults to `${bundleId}-pub`
    title: string
    authors: RawAuthor[]
    venue: string
    year: string | number
    description?: string
    meta: RawRowFilter[]
    tags?: RawRowFilter[]
    links?: NavLink[]
  }

  awards?: Array<{
    title: string
    description: string
    year: string | number
    show?: boolean
    meta: RawRowFilter[]
    tags?: RawRowFilter[]
  }>
}
