import { filterDefs } from '@/data/filter'
import type { FilterDef, RowFilter } from '@/types/filter'

type RawFilter = string | { id: string; label?: string; show?: boolean }

const filterDefMap = new Map<string, FilterDef>(filterDefs.map((def) => [def.id, def]))

const FILTER_LINK_RE = /^\[(.*)\]\(([^)]+)\)$/

function resolveSingleFilter(input: RawFilter): RowFilter {
  if (typeof input !== 'string') {
    const def = filterDefMap.get(input.id)

    return {
      id: input.id,
      label: input.label ?? def?.defaultLabel ?? input.id,
      show: input.show ?? true,
    }
  }

  const matched = input.match(FILTER_LINK_RE)

  if (matched) {
    const [, rawLabel, id] = matched
    if (rawLabel === undefined || id === undefined) {
      throw new Error(`[tag] Invalid tag format: "${input}"`)
    }
    const def = filterDefMap.get(id)

    return {
      id,
      label: rawLabel || def?.defaultLabel || id,
      show: rawLabel !== '',
    }
  }

  const def = filterDefMap.get(input)

  return {
    id: input,
    label: def?.defaultLabel ?? input,
    show: true,
  }
}

export function resolveRowFilters(inputs: RawFilter[]): RowFilter[] {
  return inputs.map(resolveSingleFilter)
}

export function getAllFilters(): FilterDef[] {
  // return [...filterDefs].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return [...filterDefs]
}

export function getFeaturedTagFilters() {
  return getAllFilters().filter((filter) => !filter.isMeta && filter.featured !== false)
}

export function getFilterDef(id: string) {
  return filterDefMap.get(id)
}

export function isMetaFilter(id: string) {
  return !!filterDefMap.get(id)?.isMeta
}
