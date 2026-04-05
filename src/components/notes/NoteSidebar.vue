<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { loadManifest, loadNoteFrontmatter } from '@/utils/notes'
import type { NoteManifestItem, NoteTreeNode } from '@/types/note'
import NoteTreeNodeVue from './NoteTreeNode.vue'

const props = defineProps<{
  currentSlug: string
  showAppendix?: boolean
}>()

function prettify(segment: string): string {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function buildTree(notes: NoteManifestItem[]): NoteTreeNode[] {
  const root: NoteTreeNode[] = []

  for (const note of notes) {
    const parts = note.slug.replace(/^\/notes\//, '').split('/')
    let level = root
    let path = '/notes'

    for (let i = 0; i < parts.length - 1; i++) {
      path += '/' + parts[i]
      let node = level.find((n) => n.path === path)
      if (!node) {
        node = { label: prettify(parts[i]!), path, children: [] }
        level.push(node)
      }
      level = node.children
    }

    level.push({ label: note.title, path: note.slug, note, children: [] })
  }

  return root
}

const tree = ref<NoteTreeNode[]>([])
const loading = ref(true)

async function loadTree() {
  loading.value = true
  const manifest = await loadManifest()
  const noteVisibility = await Promise.all(
    manifest.notes.map(async (note) => {
      const frontmatter = await loadNoteFrontmatter(note.slug)
      return {
        note,
        navVisibility:
          typeof frontmatter.nav_visibility === 'string' ? frontmatter.nav_visibility : 'normal',
      }
    }),
  )

  const filteredNotes = noteVisibility
    .filter(({ navVisibility }) => props.showAppendix || navVisibility !== 'appendix')
    .map(({ note, navVisibility }) => ({ ...note, navVisibility }))

  tree.value = buildTree(filteredNotes)
  loading.value = false
}

onMounted(loadTree)
watch(() => props.showAppendix, loadTree)
</script>

<template>
  <nav class="note-sidebar">
    <div v-if="loading" class="sidebar-loading">Loading...</div>
    <template v-else>
      <NoteTreeNodeVue
        v-for="node in tree"
        :key="node.path"
        :node="node"
        :current-slug="currentSlug"
      />
    </template>
  </nav>
</template>

<style scoped>
.note-sidebar {
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 16px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.sidebar-loading {
  font-size: 13px;
  color: #888;
}
</style>
