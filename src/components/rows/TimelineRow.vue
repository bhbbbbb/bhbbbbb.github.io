<script setup lang="ts">
import { computed, toRef } from 'vue'
import FilterContainer from '@/components/common/FilterContainer.vue'
import { useRowFilterState } from '@/composables/useRowFilterState'
import type { RowFilter } from '@/types/filter'

const props = withDefaults(
  defineProps<{
    title: string
    organization: string
    period: string
    description?: string
    tags?: RowFilter[]
    meta?: RowFilter[]
    badge?: string
    activeFilters?: string[]
    hoveredFilter?: string | null
  }>(),
  {
    description: undefined,
    tags: () => [],
    meta: () => [],
    badge: undefined,
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
    class="timeline-item"
    :class="{
      'no-badge': !badge,
      'timeline-item--dimmed': isDimmed,
      'timeline-item--highlighted': hoveredFilter && matchesHoveredFilter,
    }"
  >
    <div v-if="badge" class="timeline-left">
      <div class="timeline-badge">
        <img :src="badge" :alt="`${organization} badge`" />
      </div>
    </div>

    <div class="timeline-main">
      <div class="timeline-head">
        <div class="timeline-title-group">
          <h3>{{ title }}</h3>
          <p class="timeline-org">{{ organization }}</p>
        </div>

        <div class="timeline-meta">{{ period }}</div>
      </div>

      <p v-if="description" class="timeline-desc">
        {{ description }}
      </p>

      <!-- <FilterContainer
        v-if="meta.length"
        class="timeline-meta-filters"
        :filters="meta"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        variant="meta"
        @filter-click="emit('filterClick', $event)"
        @filter-enter="emit('filterEnter', $event)"
        @filter-leave="emit('filterLeave')"
      /> -->

      <FilterContainer
        v-if="tags.length"
        class="timeline-tags"
        :filters="tags"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="emit('filterClick', $event)"
        @filter-enter="emit('filterEnter', $event)"
        @filter-leave="emit('filterLeave')"
      />
    </div>
  </article>
</template>

<style scoped>
.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-8);
  align-items: flex-start;
  padding: var(--space-9) var(--space-10);
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

.timeline-item--dimmed {
  opacity: 0.45;
}

.timeline-item--highlighted {
  border-color: var(--color-primary-border);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
}

.timeline-left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 56px;
}

.timeline-item.no-badge {
  grid-template-columns: 1fr;
}

.timeline-badge {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-surface-strong);
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-badge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-main {
  min-width: 0;
}

.timeline-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-8);
}

.timeline-title-group h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.timeline-org {
  margin: var(--space-1) 0 0;
  font-weight: 600;
  color: var(--color-primary);
}

.timeline-meta {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

.timeline-desc {
  margin: var(--space-3) 0 0;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.timeline-meta-filters,
.timeline-tags {
  margin-top: var(--space-4);
}

@media (max-width: 860px) {
  .timeline-head {
    flex-direction: column;
    gap: var(--space-2);
  }

  .timeline-meta {
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .timeline-item {
    grid-template-columns: 1fr;
    border-radius: var(--radius-md);
  }

  .timeline-left {
    min-width: 0;
  }
}
</style>
