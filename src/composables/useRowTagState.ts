import type { RowTag } from '@/types/tag'
import { computed, type Ref } from 'vue'

export function useRowTagState(
  rowTags: Ref<RowTag[]>,
  activeTags: Ref<string[]>,
  hoveredTag: Ref<string | null>,
) {
  const rowTagIds = computed(() => rowTags.value.map((tag) => tag.id))

  const matchesActiveFilters = computed(() => {
    if (!activeTags.value.length) return true
    return activeTags.value.some((tag) => rowTagIds.value.includes(tag))
  })

  const matchesHoveredTag = computed(() => {
    if (!hoveredTag.value) return true
    return rowTagIds.value.includes(hoveredTag.value)
  })

  const isDimmed = computed(() => {
    if (activeTags.value.length > 0) return false
    if (!hoveredTag.value) return false
    return !matchesHoveredTag.value
  })

  return {
    rowTagIds,
    matchesActiveFilters,
    matchesHoveredTag,
    isDimmed,
  }
}
