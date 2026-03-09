import { computed, type Ref } from 'vue'

export function useRowTagState(
  rowTags: Ref<string[]>,
  activeTags: Ref<string[]>,
  hoveredTag: Ref<string | null>,
) {
  const matchesActiveFilters = computed(() => {
    if (!activeTags.value.length) return true
    return activeTags.value.some((tag) => rowTags.value.includes(tag))
  })

  const matchesHoveredTag = computed(() => {
    if (!hoveredTag.value) return true
    return rowTags.value.includes(hoveredTag.value)
  })

  const isDimmed = computed(() => {
    if (activeTags.value.length > 0) return false
    if (!hoveredTag.value) return false
    return !matchesHoveredTag.value
  })

  return {
    matchesActiveFilters,
    matchesHoveredTag,
    isDimmed,
  }
}
