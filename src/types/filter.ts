import type { filterDefs } from '@/data/filter'
import type { timelineDefs } from '@/data/timeline'

export type FilterId = (typeof filterDefs)[number]['id']
export type TimelineId = (typeof timelineDefs)[number]['id']

export interface FilterDef {
  id: string
  defaultLabel: string
  category?: string
  order?: number
  featured?: boolean
  isMeta?: boolean
}

export interface RowFilter {
  id: string
  label: string
  show: boolean
}

export type RawRowFilterObject = {
  id: FilterId
  label?: string
  show?: boolean
}

export type RawRowFilter = FilterId | `[${string}](${FilterId})` | RawRowFilterObject
