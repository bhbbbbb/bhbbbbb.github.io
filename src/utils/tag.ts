import { tagDefs } from '@/data/tag'
import type { RawRowTag, RowTag, TagDef } from '@/types/tag'

const TAG_LINK_RE = /^\[(.*)\]\(([^)]+)\)$/

type ConcreteTagDef = (typeof tagDefs)[number]

function getTagDef(id: string): ConcreteTagDef {
  const tagDef = tagDefs.find((t) => t.id === id)

  if (!tagDef) {
    throw new Error(`[tag] Unknown tag id: "${id}"`)
  }

  return tagDef
}

function parseRawStringTag(raw: string): RowTag {
  const match = raw.match(TAG_LINK_RE)

  if (!match) {
    const tagDef = getTagDef(raw)
    return {
      id: tagDef.id,
      label: tagDef.defaultLabel,
      show: true,
    }
  }

  const [, rawLabel, rawId] = match
  if (rawLabel === undefined || rawId === undefined) {
    throw new Error(`[tag] Invalid tag format: "${raw}"`)
  }
  const tagDef = getTagDef(rawId)

  return {
    id: tagDef.id,
    label: rawLabel.trim() ? rawLabel : tagDef.defaultLabel,
    show: rawLabel.trim() !== '',
  }
}

function resolveRawObjectTag(raw: Exclude<RawRowTag, string>): RowTag {
  const tagDef = getTagDef(raw.id)

  return {
    id: tagDef.id,
    label: raw.label?.trim() || tagDef.defaultLabel,
    show: raw.show ?? true,
  }
}

export function resolveRowTag(raw: RawRowTag): RowTag {
  if (typeof raw === 'string') {
    return parseRawStringTag(raw)
  }

  return resolveRawObjectTag(raw)
}

export function resolveRowTags(rawTags?: RawRowTag[]): RowTag[] {
  if (!rawTags?.length) return []

  return rawTags.map(resolveRowTag)
}

export function getTagLabel(tagId: string): string {
  return getTagDef(tagId).defaultLabel
}

export function getAllTags(): TagDef[] {
  return [...tagDefs]
  // return [...tagDefs].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
