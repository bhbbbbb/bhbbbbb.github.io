import type { filterDefs } from '@/data/filter'

export type FilterId = (typeof filterDefs)[number]['id']

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
