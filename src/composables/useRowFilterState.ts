import type { RowFilter } from '@/types/filter'
import { computed, type Ref } from 'vue'

export function useRowFilterState(
  rowFilters: Ref<RowFilter[]>,
  activeFilters: Ref<string[]>,
  hoveredFilter: Ref<string | null>,
) {
  const rowFilterIds = computed(() => rowFilters.value.map((filter) => filter.id))

  const matchesActiveFilters = computed(() => {
    if (!activeFilters.value.length) return true
    return activeFilters.value.some((filterId) => rowFilterIds.value.includes(filterId))
  })

  const matchesHoveredFilter = computed(() => {
    if (!hoveredFilter.value) return true
    return rowFilterIds.value.includes(hoveredFilter.value)
  })

  const isDimmed = computed(() => {
    if (activeFilters.value.length > 0) return false
    if (!hoveredFilter.value) return false
    return !matchesHoveredFilter.value
  })

  return {
    rowFilterIds,
    matchesActiveFilters,
    matchesHoveredFilter,
    isDimmed,
  }
}
