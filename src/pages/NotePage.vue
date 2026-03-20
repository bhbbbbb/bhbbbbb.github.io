<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getNoteBySlug } from '@/utils/notes'
import { parseMarkdown } from '@/utils/markdown'
import { renderMermaid } from '@/utils/mermaid'

const route = useRoute()

const loading = ref(true)
const error = ref<string | null>(null)
const html = ref('')
const meta = ref<Record<string, unknown> | null>(null)

async function load() {
  loading.value = true
  error.value = null

  try {
    const slug = route.path.replace(/\/+$/, '')
    const note = await getNoteBySlug(slug)

    if (!note) {
      error.value = 'Note not found'
      return
    }

    const res = await fetch(`${note.slug}.md`)
    const raw = await res.text()

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
  <main class="note-page">
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
</template>

<style scoped>
.note-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
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
