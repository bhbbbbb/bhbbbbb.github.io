<script setup lang="ts">
import type { NoteHeading } from '@/types/note'

const props = defineProps<{
  headings: NoteHeading[]
}>()

function jumpToHeading(event: MouseEvent, headingId: string) {
  event.preventDefault()

  const target = document.getElementById(headingId)
  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const url = new URL(window.location.href)
  url.hash = headingId
  window.history.replaceState(window.history.state, '', url.toString())
}
</script>

<template>
  <aside class="note-toc">
    <p class="note-toc-label">On this page</p>
    <nav class="note-toc-nav" aria-label="Table of contents">
      <a
        v-for="heading in headings"
        :key="heading.id"
        :href="`#${heading.id}`"
        class="note-toc-link"
        :class="`toc-level-${heading.level}`"
        @click="jumpToHeading($event, heading.id)"
      >
        {{ heading.text }}
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.note-toc {
  position: sticky;
  top: 28px;
  padding-left: 18px;
  border-left: 1px solid var(--color-border);
}

.note-toc-label {
  margin: 0 0 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-soft);
}

.note-toc-nav {
  display: grid;
  gap: 4px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}

.note-toc-link {
  display: block;
  padding: 6px 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}

.note-toc-link:hover {
  color: var(--color-text-strong);
}

.toc-level-3 {
  padding-left: 20px;
}

.toc-level-4 {
  padding-left: 30px;
  font-size: 0.87rem;
}

@media (max-width: 1180px) {
  .note-toc {
    position: static;
    order: -1;
    padding-left: 0;
    padding-bottom: 14px;
    border-left: none;
    border-bottom: 1px solid var(--color-border);
  }

  .note-toc-nav {
    max-height: none;
  }
}
</style>
