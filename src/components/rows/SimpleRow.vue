<script setup lang="ts">
import { toRef } from 'vue'
import TagContainer from '@/components/common/TagContainer.vue'
import { useRowTagState } from '@/composables/useRowTagState'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    year: string | number
    tags?: string[]
    activeTags?: string[]
    hoveredTag?: string | null
  }>(),
  {
    tags: () => [],
    activeTags: () => [],
    hoveredTag: null,
  },
)

const emit = defineEmits<{
  tagClick: [tag: string]
  tagEnter: [tag: string]
  tagLeave: []
}>()

const rowTags = toRef(props, 'tags')
const activeTags = toRef(props, 'activeTags')
const hoveredTag = toRef(props, 'hoveredTag')

const { matchesActiveFilters, matchesHoveredTag, isDimmed } = useRowTagState(
  rowTags,
  activeTags,
  hoveredTag,
)
</script>

<template>
  <article
    v-if="matchesActiveFilters"
    class="other-item"
    :class="{
      'other-item--dimmed': isDimmed,
      'other-item--highlighted': hoveredTag && matchesHoveredTag,
    }"
  >
    <div class="other-main">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <TagContainer
        v-if="tags.length"
        class="other-tags"
        :tags="tags"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="emit('tagClick', $event)"
        @tag-enter="emit('tagEnter', $event)"
        @tag-leave="emit('tagLeave')"
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
