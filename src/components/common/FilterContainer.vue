<script setup lang="ts">
import { computed } from 'vue'
import FilterPill from '@/components/common/FilterPill.vue'
import type { RowFilter } from '@/types/filter'

const props = withDefaults(
  defineProps<{
    filters?: RowFilter[]
    activeFilters?: string[]
    hoveredFilter?: string | null
    variant?: 'default' | 'skill' | 'meta'
  }>(),
  {
    filters: () => [],
    activeFilters: () => [],
    hoveredFilter: null,
    variant: 'default',
  },
)

const emit = defineEmits<{
  filterClick: [filterId: string]
  filterEnter: [filterId: string]
  filterLeave: []
}>()

function isDimmed(filterId: string) {
  if (props.activeFilters.length > 0) {
    return !props.activeFilters.includes(filterId)
  }

  if (props.hoveredFilter) {
    return props.hoveredFilter !== filterId
  }

  return false
}

const renderedFilters = computed(() => {
  const activeSet = new Set(props.activeFilters)

  return props.filters.filter((filter) => {
    if (filter.show) return true
    if (activeSet.has(filter.id)) return true
    return false
  })
})
</script>

<template>
  <div v-if="renderedFilters.length" class="filter-container">
    <FilterPill
      v-for="filter in renderedFilters"
      :key="filter.id"
      :id="filter.id"
      :label="filter.label"
      :active="activeFilters.includes(filter.id)"
      :dimmed="isDimmed(filter.id)"
      :variant="variant"
      @click="emit('filterClick', $event)"
      @enter="emit('filterEnter', $event)"
      @leave="emit('filterLeave')"
    />
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
