<script setup lang="ts">
import { ref, toRef, computed } from 'vue'
import FilterContainer from '@/components/common/FilterContainer.vue'
import { useRowFilterState } from '@/composables/useRowFilterState'
import type { RowFilter } from '@/types/filter'

interface FeatureLink {
  label: string
  href: string
}

const props = withDefaults(
  defineProps<{
    id: string
    title: string
    description: string
    year?: string | number
    meta?: RowFilter[]
    tags?: RowFilter[]
    links?: FeatureLink[]
    image?: string
    activeFilters?: string[]
    hoveredFilter?: string | null
  }>(),
  {
    tags: () => [],
    meta: () => [],
    links: () => [],
    activeFilters: () => [],
    hoveredFilter: null,
  },
)

const emit = defineEmits<{
  filterClick: [filterId: string]
  filterEnter: [filterId: string]
  filterLeave: []
}>()

const isPreviewOpen = ref(false)

function openPreview() {
  if (!props.image) return
  isPreviewOpen.value = true
}

function closePreview() {
  isPreviewOpen.value = false
}

const rowFilters = computed(() => [...props.tags, ...props.meta])
const activeFilters = toRef(props, 'activeFilters')
const hoveredFilter = toRef(props, 'hoveredFilter')

const { matchesActiveFilters, matchesHoveredFilter, isDimmed } = useRowFilterState(
  rowFilters,
  activeFilters,
  hoveredFilter,
)

const visibleMeta = computed(() => props.meta.filter((item) => item.show))
const hasVisibleMeta = computed(() => visibleMeta.value.length > 0)
const showTopline = computed(() => hasVisibleMeta.value)
const showFloatingYear = computed(() => !hasVisibleMeta.value && !!props.year)
</script>

<template>
  <article
    v-if="matchesActiveFilters"
    :id="id"
    class="feature-card"
    :class="{
      'feature-card--dimmed': isDimmed,
      'feature-card--highlighted': hoveredFilter && matchesHoveredFilter,
      'feature-card--with-floating-year': showFloatingYear,
    }"
  >
    <button
      v-if="image"
      class="feature-image-button"
      type="button"
      aria-label="Open image preview"
      @click="openPreview"
    >
      <div class="feature-image-frame">
        <img class="feature-image" :src="image" :alt="title" />
      </div>
    </button>

    <div v-else class="feature-image-frame feature-image-placeholder" />

    <div class="feature-content">
      <div class="feature-content-top">
        <span v-if="showFloatingYear" class="feature-year feature-year--floating">{{ year }}</span>

        <div v-if="showTopline" class="feature-topline">
          <div class="meta-row">
            <FilterContainer
              :filters="visibleMeta"
              :active-filters="activeFilters"
              :hovered-filter="hoveredFilter"
              variant="meta"
              @filter-click="emit('filterClick', $event)"
              @filter-enter="emit('filterEnter', $event)"
              @filter-leave="emit('filterLeave')"
            />
          </div>

          <span v-if="year" class="feature-year">{{ year }}</span>
        </div>

        <h3>{{ title }}</h3>
      </div>

      <p class="feature-desc feature-content-middle">
        {{ description }}
      </p>

      <div v-if="tags.length || links?.length" class="feature-content-bottom">
        <FilterContainer
          v-if="tags.length"
          :filters="tags"
          :active-filters="activeFilters"
          :hovered-filter="hoveredFilter"
          @filter-click="emit('filterClick', $event)"
          @filter-enter="emit('filterEnter', $event)"
          @filter-leave="emit('filterLeave')"
        />

        <div v-if="links?.length" class="link-row">
          <a
            v-for="link in links"
            :key="`${title}-${link.label}`"
            :href="link.href"
            :target="link.href.startsWith('#') ? undefined : '_blank'"
            :rel="link.href.startsWith('#') ? undefined : 'noopener noreferrer'"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </article>

  <div v-if="isPreviewOpen && image" class="image-preview-overlay" @click="closePreview">
    <div class="image-preview-dialog" @click.stop>
      <button
        class="image-preview-close"
        type="button"
        aria-label="Close image preview"
        @click="closePreview"
      >
        ×
      </button>

      <img class="image-preview-full" :src="image" :alt="title" />
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: center;
  gap: var(--space-9);
  padding: var(--space-8);
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

.feature-card--dimmed {
  opacity: 0.45;
}

.feature-card--highlighted {
  border-color: var(--color-primary-border);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
}

.feature-image-button {
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.feature-image-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background:
    linear-gradient(135deg, var(--color-image-grad-a), var(--color-image-grad-b)),
    var(--color-image-bg);
}

.feature-image-placeholder {
  min-height: 0;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-fast);
}

.feature-image-button:hover .feature-image {
  transform: scale(1.02);
}

.feature-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 100%;
  position: relative;
}

.feature-content-top {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.feature-card--with-floating-year .feature-content {
  padding-top: 2px;
}

.feature-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.meta-row {
  flex: 1;
  min-width: 0;
}

.feature-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

.feature-year--floating {
  position: absolute;
  top: 0;
  right: 0;
}

.feature-content h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
  padding-right: 72px;
}

.feature-desc {
  margin: 0;
  line-height: var(--line-base);
  color: var(--color-text-muted);
}

.feature-content-middle {
  display: flex;
  align-items: center;
  flex: 1;
  padding-block: var(--space-4);
}

.feature-content-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: auto;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
}

.link-row a {
  color: var(--color-primary);
  font-weight: 600;
  transition: var(--transition-fast);
}

.link-row a:hover {
  opacity: 0.72;
}

.image-preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
}

.image-preview-dialog {
  position: relative;
  max-width: min(960px, 100%);
  max-height: min(90vh, 100%);
}

.image-preview-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--color-text-strong);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

.image-preview-full {
  display: block;
  max-width: 100%;
  max-height: 90vh;
  border-radius: var(--radius-md);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
}

@media (max-width: 860px) {
  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-topline {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .feature-card {
    border-radius: var(--radius-md);
  }

  .image-preview-overlay {
    padding: 16px;
  }
}
</style>
