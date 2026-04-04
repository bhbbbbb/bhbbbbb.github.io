<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getNoteBySlug } from '@/utils/notes'
import { parseMarkdown } from '@/utils/markdown'
import { renderMermaid } from '@/utils/mermaid'
import NoteSidebar from '@/components/notes/NoteSidebar.vue'

const route = useRoute()

const loading = ref(true)
const error = ref<string | null>(null)
const html = ref('')
const meta = ref<Record<string, unknown> | null>(null)

const currentSlug = computed(() => route.path.replace(/\/+$/, ''))

async function load() {
  loading.value = true
  error.value = null

  try {
    const note = await getNoteBySlug(currentSlug.value)

    if (!note) {
      error.value = 'Note not found'
      return
    }

    const res = await fetch(`${note.slug}.md`)
    const raw = await res.text()
    console.log(res)

    const parsed = parseMarkdown(raw)

    html.value = parsed.html
    meta.value = parsed.frontmatter

    await nextTick()
    const container = document.querySelector('.note-content')
    if (container) await renderMermaid(container as HTMLElement)
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
  <div class="note-layout">
    <NoteSidebar :current-slug="currentSlug" />

    <main class="note-main">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>

      <article v-else>
        <div class="note-meta" v-if="meta">
          <p v-if="meta['creation date']">📅 {{ meta['creation date'] }}</p>
          <p v-if="meta.author">✍️ {{ meta.author }}</p>
        </div>

        <div class="note-content" v-html="html"></div>
      </article>
    </main>
  </div>
</template>

<style scoped>
.note-layout {
  display: flex;
  min-height: 100vh;
}

.note-main {
  flex: 1;
  min-width: 0;
  max-width: 800px;
  padding: 40px 32px;
}

.note-meta {
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

.note-content :deep(pre) {
  background: #0f172a;
  color: #e2e8f0;
  padding: 16px;
  overflow-x: auto;
}

.note-content :deep(code) {
  font-family: monospace;
}
</style>
