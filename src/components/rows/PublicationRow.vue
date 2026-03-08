<script setup lang="ts">
// import TagRow from '@/components/common/TagRow.vue'

interface PublicationAuthor {
  name: string
  highlight?: boolean
}

interface PublicationLink {
  label: string
  href: string
}

defineProps<{
  id: string
  title: string
  authors: PublicationAuthor[]
  venue?: string
  year?: string | number
  meta?: string[]
  tags?: string[]
  links?: PublicationLink[]
}>()
</script>

<template>
  <article :id="id" class="publication-row">
    <div class="publication-main">
      <!-- <div v-if="(meta && meta.length) || year" class="publication-topline">
        <div v-if="meta?.length" class="meta-row">
          <span v-for="item in meta" :key="item" class="meta-pill">
            {{ item }}
          </span>
        </div>

        <span v-if="year" class="publication-year">{{ year }}</span>
      </div> -->

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

      <!-- <TagRow v-if="tags?.length" class="publication-tags" :tags="tags" /> -->

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
</template>

<style scoped>
.publication-row {
  padding: var(--space-8) var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  scroll-margin-top: var(--section-scroll-offset);
}

.publication-main {
  min-width: 0;
}

.publication-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
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

.publication-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
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

@media (max-width: 860px) {
  .publication-topline {
    flex-direction: column;
    align-items: flex-start;
  }

  .publication-year {
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .publication-row {
    padding: var(--space-8);
    border-radius: var(--radius-md);
  }
}
</style>
