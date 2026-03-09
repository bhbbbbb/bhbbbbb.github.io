<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useRowTagState } from '@/composables/useRowTagState'

import TagContainer from '@/components/common/TagContainer.vue'
import type { RowTag } from '@/types/tag'

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
    meta?: string[]
    tags?: RowTag[]
    links?: FeatureLink[]
    image?: string
    activeTags?: string[]
    hoveredTag?: string | null
  }>(),
  {
    tags: () => [],
    links: () => [],
    meta: () => [],
    activeTags: () => [],
    hoveredTag: null,
  },
)

const emit = defineEmits<{
  tagClick: [tag: string]
  tagEnter: [tag: string]
  tagLeave: []
}>()

const isPreviewOpen = ref(false)

function openPreview() {
  if (!props.image) return
  isPreviewOpen.value = true
}

function closePreview() {
  isPreviewOpen.value = false
}

const rowTags = toRef(props, 'tags')
const activeTags = toRef(props, 'activeTags')
const hoveredTag = toRef(props, 'hoveredTag')
const { matchesActiveFilters, matchesHoveredTag, isDimmed } = useRowTagState(
  // rowTagIds,
  rowTags,
  activeTags,
  hoveredTag,
)
</script>

<template>
  <article
    v-if="matchesActiveFilters"
    :id="id"
    class="feature-card"
    :class="{
      'feature-card--dimmed': isDimmed,
      'feature-card--highlighted': hoveredTag && matchesHoveredTag,
    }"
  >
    <button
      v-if="image"
      class="feature-image-button"
      type="button"
      @click="openPreview"
      aria-label="Open image preview"
    >
      <div class="feature-image-frame">
        <img class="feature-image" :src="image" :alt="title" />
      </div>
    </button>

    <div v-else class="feature-image-frame feature-image-placeholder" />

    <div class="feature-content">
      <div v-if="(meta && meta.length) || year" class="feature-topline">
        <div v-if="meta?.length" class="meta-row">
          <span v-for="item in meta" :key="item" class="meta-pill">
            {{ item }}
          </span>
        </div>

        <span v-if="year" class="feature-year">{{ year }}</span>
      </div>

      <h3>{{ title }}</h3>

      <p class="feature-desc">
        {{ description }}
      </p>

      <TagContainer
        :tags="tags"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="emit('tagClick', $event)"
        @tag-enter="emit('tagEnter', $event)"
        @tag-leave="emit('tagLeave')"
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
  gap: var(--space-4);
  min-width: 0;
}

.feature-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--color-pill-bg);
  color: var(--color-pill-text);
  font-size: var(--text-xs);
  font-weight: 700;
}

.feature-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

.feature-content h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.feature-desc {
  margin: 0;
  line-height: var(--line-base);
  color: var(--color-text-muted);
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  padding-top: 2px;
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
