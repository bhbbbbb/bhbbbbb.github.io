<script setup lang="ts">
import { computed, toRef } from 'vue'
import FilterPill from '@/components/common/FilterPill.vue'
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

const visibleMeta = computed(() => props.meta.filter((item) => item.show))
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
    <div class="other-head">
      <div class="other-titleline">
        <h3>{{ title }}</h3>

        <div v-if="visibleMeta.length" class="other-meta-inline">
          <FilterPill
            v-for="item in visibleMeta"
            :key="item.id"
            :id="item.id"
            :label="item.label"
            :active="activeFilters.includes(item.id)"
            :dimmed="
              activeFilters.length > 0
                ? !activeFilters.includes(item.id)
                : !!hoveredFilter && hoveredFilter !== item.id
            "
            variant="meta"
            @click="emit('filterClick', $event)"
            @enter="emit('filterEnter', $event)"
            @leave="emit('filterLeave')"
          />
        </div>
      </div>

      <div class="other-year">{{ year }}</div>
    </div>

    <div class="other-main">
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.other-item {
  padding: var(--space-5) var(--space-8);
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

.other-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.other-titleline {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;
}

.other-titleline h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.other-meta-inline {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  min-width: 0;
}

.other-year {
  flex-shrink: 0;
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

.other-main p {
  margin: var(--space-2) 0 0;
  line-height: 1.65;
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .other-item {
    padding: var(--space-5) var(--space-6);
    border-radius: var(--radius-md);
  }

  .other-head {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .other-year {
    white-space: normal;
  }
}
</style>
