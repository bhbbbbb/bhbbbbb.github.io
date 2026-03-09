<script setup lang="ts">
import { toRef } from 'vue'
// import TagContainer from '@/components/common/TagContainer.vue'
import { useRowTagState } from '@/composables/useRowTagState'

interface PublicationAuthor {
  name: string
  highlight?: boolean
}

interface PublicationLink {
  label: string
  href: string
}

const props = withDefaults(
  defineProps<{
    id: string
    title: string
    authors: PublicationAuthor[]
    venue?: string
    year?: string | number
    meta?: string[]
    tags?: string[]
    links?: PublicationLink[]
    activeTags?: string[]
    hoveredTag?: string | null
  }>(),
  {
    meta: () => [],
    tags: () => [],
    links: () => [],
    activeTags: () => [],
    hoveredTag: null,
  },
)

// const emit = defineEmits<{
//   tagClick: [tag: string]
//   tagEnter: [tag: string]
//   tagLeave: []
// }>()

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
    :id="id"
    class="publication-row"
    :class="{
      'publication-row--dimmed': isDimmed,
      'publication-row--highlighted': hoveredTag && matchesHoveredTag,
    }"
  >
    <div class="publication-main">
      <h3 class="publication-title">
        {{ title }}
      </h3>

      <p class="publication-authors">
        <template v-for="(author, index) in authors" :key="`${author.name}-${index}`">
          <span class="author" :class="{ 'author-highlight': author.highlight }">
            {{ author.name }}
          </span>
          <span v-if="index < authors.length - 1" class="author-sep">, </span>
        </template>
      </p>

      <p v-if="venue || year" class="publication-venue">
        <template v-if="venue">
          <i>{{ venue }}</i>
        </template>
        <template v-if="venue && year">, </template>
        <template v-if="year">
          {{ year }}
        </template>
      </p>

      <!-- <TagContainer
        v-if="tags.length"
        class="publication-tags"
        :tags="tags"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="emit('tagClick', $event)"
        @tag-enter="emit('tagEnter', $event)"
        @tag-leave="emit('tagLeave')"
      /> -->

      <div v-if="links.length" class="link-row">
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
</template>

<style scoped>
.publication-row {
  padding: var(--space-8) var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  scroll-margin-top: var(--section-scroll-offset);
  transition:
    opacity var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.publication-row--dimmed {
  opacity: 0.45;
}

.publication-row--highlighted {
  border-color: var(--color-primary-border);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
}

.publication-main {
  min-width: 0;
}

.publication-title {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.publication-authors {
  margin: var(--space-1) 0 0;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.author {
  color: inherit;
}

.author-highlight {
  color: var(--color-primary);
  font-weight: 700;
}

.author-sep {
  color: var(--color-text-soft);
}

.publication-tags {
  margin-top: var(--space-4);
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  margin-top: var(--space-4);
}

.link-row a {
  color: var(--color-primary);
  font-weight: 600;
  transition: var(--transition-fast);
}

.link-row a:hover {
  opacity: 0.72;
}

.publication-venue {
  margin: var(--space-2) 0 0;
  font-size: var(--text-sm);
  color: var(--color-text-soft);
}

@media (max-width: 640px) {
  .publication-row {
    padding: var(--space-8);
    border-radius: var(--radius-md);
  }
}
</style>
