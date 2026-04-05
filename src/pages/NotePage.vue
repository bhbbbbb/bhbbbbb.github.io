<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { getNoteBySlug } from '@/utils/notes'
import { parseMarkdown } from '@/utils/markdown'
import { renderMermaid } from '@/utils/mermaid'
import NoteSidebar from '@/components/notes/NoteSidebar.vue'
import NoteToc from '@/components/notes/NoteToc.vue'
import type { NoteFrontmatter, NoteHeading } from '@/types/note'

const route = useRoute()

const loading = ref(true)
const error = ref<string | null>(null)
const html = ref('')
const meta = ref<NoteFrontmatter | null>(null)
const pageTitle = ref('')
const headings = ref<NoteHeading[]>([])
const noteContent = ref<HTMLElement | null>(null)

const currentSlug = computed(() => route.path.replace(/\/+$/, ''))
const showAppendix = computed(() => {
  const appendix = route.query.appendix
  if (Array.isArray(appendix)) return appendix.some((value) => value === '1' || value === 'true')
  return appendix === '1' || appendix === 'true'
})
const visibleHeadings = computed(() =>
  headings.value.filter((heading) => heading.level >= 2 && heading.level <= 4),
)
const showToc = computed(
  () => visibleHeadings.value.length > 0 && meta.value?.nav_visibility !== 'appendix',
)
const metaEntries = computed(() => {
  if (!meta.value) return []

  const entries: Array<{ label: string; value: string }> = []
  const created = meta.value.created ?? meta.value['creation date']
  const updated = meta.value.last_modified ?? meta.value.updated ?? meta.value.date

  if (typeof created === 'string' && created) entries.push({ label: 'Created', value: created })
  if (typeof updated === 'string' && updated)
    entries.push({ label: created ? 'Updated' : 'Date', value: updated })
  if (typeof meta.value.author === 'string' && meta.value.author)
    entries.push({ label: 'Author', value: meta.value.author })
  if (typeof meta.value.section === 'string' && meta.value.section)
    entries.push({ label: 'Section', value: meta.value.section })

  return entries
})
const tagList = computed(() => {
  const tags = meta.value?.tags
  return Array.isArray(tags)
    ? tags.filter((tag): tag is string => typeof tag === 'string' && tag.length > 0)
    : []
})

async function load() {
  loading.value = true
  error.value = null
  html.value = ''
  meta.value = null
  pageTitle.value = ''
  headings.value = []

  try {
    const note = await getNoteBySlug(currentSlug.value)

    if (!note) {
      error.value = 'Note not found'
      return
    }

    const res = await fetch(`${note.slug}.md`)
    if (!res.ok) throw new Error(`Failed to load note (${res.status})`)
    const raw = await res.text()

    const parsed = parseMarkdown(raw)

    html.value = parsed.html
    meta.value = parsed.frontmatter
    pageTitle.value = parsed.title ?? note.title
    headings.value = parsed.headings

    await nextTick()
    if (noteContent.value) await renderMermaid(noteContent.value)
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : String(e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(() => route.fullPath, load)
</script>

<template>
  <AppHeader />

  <div class="note-page">
    <div class="note-layout">
      <NoteSidebar :current-slug="currentSlug" :show-appendix="showAppendix" />

      <main class="note-main">
        <div v-if="loading" class="note-state">Loading note...</div>
        <div v-else-if="error" class="note-state note-state-error">{{ error }}</div>

        <div v-else class="note-shell">
          <article class="note-article">
            <header class="note-hero">
              <div class="note-hero-copy">
                <p v-if="meta?.section" class="note-eyebrow">{{ meta.section }}</p>
                <h1 class="note-title">{{ pageTitle }}</h1>
                <p v-if="meta?.description || meta?.summary" class="note-summary">
                  {{ meta.description ?? meta.summary }}
                </p>
              </div>

              <div v-if="metaEntries.length > 0 || tagList.length > 0" class="note-meta-card">
                <div v-if="metaEntries.length > 0" class="note-meta-grid">
                  <div v-for="entry in metaEntries" :key="entry.label" class="note-meta-item">
                    <span class="note-meta-label">{{ entry.label }}</span>
                    <span class="note-meta-value">{{ entry.value }}</span>
                  </div>
                </div>

                <div v-if="tagList.length > 0" class="note-tags">
                  <span v-for="tag in tagList" :key="tag" class="note-tag">{{ tag }}</span>
                </div>
              </div>
            </header>

            <div ref="noteContent" class="note-content" v-html="html"></div>
          </article>

          <NoteToc v-if="showToc" :headings="visibleHeadings" />
        </div>
      </main>
    </div>
  </div>

  <AppFooter />
</template>

<style scoped>
.note-page {
  min-height: calc(100vh - var(--header-height));
  width: min(1480px, calc(100% - var(--container-padding)));
  margin: 0 auto;
}

.note-layout {
  display: flex;
  min-height: calc(100vh - var(--header-height));
  overflow-x: clip;
}

.note-main {
  flex: 1;
  min-width: 0;
  padding: 28px 32px 64px;
}

.note-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  gap: 44px;
  align-items: start;
  max-width: 1220px;
  min-width: 0;
}

.note-article {
  min-width: 0;
}

.note-state {
  display: grid;
  place-items: center;
  min-height: 45vh;
  padding: 24px;
  border-left: 2px solid var(--color-primary-border);
  background: transparent;
  color: var(--color-text-muted);
}

.note-state-error {
  color: #9f1239;
}

.note-hero {
  padding: 0 0 26px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--color-border);
}

.note-hero-copy {
  max-width: 760px;
}

.note-eyebrow {
  margin: 0 0 10px;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
}

.note-title {
  margin: 0;
  color: var(--color-text-strong);
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.note-summary {
  margin: 14px 0 0;
  max-width: 64ch;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.note-meta-card {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(104, 25, 0, 0.12);
}

.note-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.note-meta-item {
  display: grid;
  gap: 4px;
}

.note-meta-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-soft);
}

.note-meta-value {
  color: var(--color-text-strong);
  font-size: 0.95rem;
}

.note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.note-tag {
  padding: 0;
  color: var(--color-primary);
  font-size: 0.84rem;
  font-weight: 600;
}

.note-tag::before {
  content: '#';
  margin-right: 1px;
  color: var(--color-text-soft);
}

.note-content {
  padding: 0;
  background: transparent;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.note-content :deep(h1),
.note-content :deep(h2),
.note-content :deep(h3),
.note-content :deep(h4) {
  scroll-margin-top: calc(var(--header-height) + 20px);
  color: var(--color-text-strong);
  letter-spacing: -0.03em;
}

.note-content :deep(h1) {
  margin: 0 0 1rem;
  font-size: clamp(1.9rem, 2.2vw, 2.4rem);
}

.note-content :deep(h2) {
  margin-top: 3rem;
  margin-bottom: 0.9rem;
  font-size: clamp(1.45rem, 1.8vw, 1.75rem);
  padding-top: 0.4rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}

.note-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  font-size: 1.18rem;
}

.note-content :deep(h4) {
  margin-top: 1.3rem;
  margin-bottom: 0.55rem;
  font-size: 1rem;
}

.note-content :deep(p),
.note-content :deep(ul),
.note-content :deep(ol),
.note-content :deep(blockquote),
.note-content :deep(table) {
  margin: 1rem 0;
}

.note-content :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-color: rgba(104, 25, 0, 0.28);
  text-underline-offset: 3px;
}

.note-content :deep(blockquote) {
  padding: 4px 0 4px 18px;
  border-left: 3px solid rgba(104, 25, 0, 0.24);
  color: var(--color-text-muted);
}

.note-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
}

.note-content :deep(th),
.note-content :deep(td) {
  padding: 10px 12px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  text-align: left;
}

.note-content :deep(th) {
  background: rgba(104, 25, 0, 0.06);
}

.note-content :deep(img) {
  margin: 24px auto;
  border-radius: 8px;
}

.note-content :deep(pre) {
  background: #0f172a;
  color: #e2e8f0;
  padding: 18px;
  overflow-x: auto;
  border-radius: 8px;
}

.note-content :deep(code) {
  font-family: monospace;
}

.note-content :deep(:not(pre) > code) {
  padding: 0.12rem 0.4rem;
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.06);
  color: var(--color-text-strong);
}

@media (max-width: 1180px) {
  .note-shell {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
}

@media (max-width: 900px) {
  .note-page {
    width: min(100% - var(--container-padding-mobile), 1480px);
  }

  .note-layout {
    display: block;
  }

  .note-main {
    padding: 24px 16px 48px;
  }
}

@media (max-width: 640px) {
  .note-title {
    font-size: 1.9rem;
  }

  .note-main {
    padding: 20px 16px 40px;
  }
}
</style>
