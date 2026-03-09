import type { tagDefs } from '@/data/tag'

export type TagId = (typeof tagDefs)[number]['id']

export interface TagDef {
  id: string
  defaultLabel: string
  category?: string
  order?: number
  featured?: boolean
}

export interface RowTag {
  id: string
  label: string
  show: boolean
}

export type RawRowTagObject = {
  id: TagId
  label?: string
  show?: boolean
}

export type RawRowTag = TagId | `[${string}](${TagId})` | RawRowTagObject
