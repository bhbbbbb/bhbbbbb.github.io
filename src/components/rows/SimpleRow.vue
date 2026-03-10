<script setup lang="ts">
import { computed, toRef } from 'vue'
import FilterContainer from '@/components/common/FilterContainer.vue'
import { useRowFilterState } from '@/composables/useRowFilterState'
import type { RowFilter } from '@/types/filter'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    year: string | number
    tags?: RowFilter[]
    meta?: RowFilter[]
    activeFilters?: string[]
    hoveredFilter?: string | null
  }>(),
  {
    tags: () => [],
    meta: () => [],
    activeFilters: () => [],
    hoveredFilter: null,
  },
)

const emit = defineEmits<{
  filterClick: [filterId: string]
  filterEnter: [filterId: string]
  filterLeave: []
}>()

const rowFilters = computed(() => [...props.tags, ...props.meta])
const activeFilters = toRef(props, 'activeFilters')
const hoveredFilter = toRef(props, 'hoveredFilter')

const { matchesActiveFilters, matchesHoveredFilter, isDimmed } = useRowFilterState(
  rowFilters,
  activeFilters,
  hoveredFilter,
)
</script>

<template>
  <article
    v-if="matchesActiveFilters"
    class="other-item"
    :class="{
      'other-item--dimmed': isDimmed,
      'other-item--highlighted': hoveredFilter && matchesHoveredFilter,
    }"
  >
    <div class="other-main">
      <FilterContainer
        v-if="meta.length"
        class="other-meta"
        :filters="meta"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        variant="meta"
        @filter-click="emit('filterClick', $event)"
        @filter-enter="emit('filterEnter', $event)"
        @filter-leave="emit('filterLeave')"
      />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <FilterContainer
        v-if="tags.length"
        class="other-tags"
        :filters="tags"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="emit('filterClick', $event)"
        @filter-enter="emit('filterEnter', $event)"
        @filter-leave="emit('filterLeave')"
      />
    </div>

    <div class="other-year">{{ year }}</div>
  </article>
</template>

<style scoped>
.other-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition:
    opacity var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.other-item--dimmed {
  opacity: 0.45;
}

.other-item--highlighted {
  border-color: var(--color-primary-border);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
}

.other-main {
  min-width: 0;
}

.other-main h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.other-main p {
  margin: var(--space-2) 0 0;
  line-height: var(--line-base);
  color: var(--color-text-muted);
}

.other-meta,
.other-tags {
  margin-top: var(--space-4);
}

.other-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

@media (max-width: 860px) {
  .other-item {
    flex-direction: column;
  }

  .other-year {
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .other-item {
    border-radius: var(--radius-md);
  }
}
</style>
