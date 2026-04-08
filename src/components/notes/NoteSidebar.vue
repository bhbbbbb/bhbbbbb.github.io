<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { loadManifest, loadNoteFrontmatter } from '@/utils/notes'
import type { NoteCategoryKind, NoteManifestItem, NoteTreeNode } from '@/types/note'
import NoteTreeNodeVue from './NoteTreeNode.vue'

const props = defineProps<{
  currentSlug: string
  showAppendix?: boolean
}>()

function prettify(segment: string): string {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

type CategorizedNote = NoteManifestItem & {
  categoryKind: NoteCategoryKind
  categoryLabel?: string
}

const CATEGORY_ORDER: Record<NoteCategoryKind, number> = {
  knowledge: 0,
  solution: 1,
  other: 2,
}

function parseCategory(category: unknown): {
  categoryKind: NoteCategoryKind
  categoryLabel?: string
  rawCategory?: string
} {
  if (typeof category !== 'string') {
    return { categoryKind: 'other' }
  }

  const normalized = category.trim().toLowerCase()
  if (!normalized) {
    return { categoryKind: 'other' }
  }

  const [kind, label] = normalized.split(':', 2)
  const categoryKind: NoteCategoryKind =
    kind === 'knowledge' || kind === 'solution' ? kind : 'other'

  return {
    categoryKind,
    categoryLabel: label?.trim() || undefined,
    rawCategory: normalized,
  }
}

function sortNodes(nodes: NoteTreeNode[]): NoteTreeNode[] {
  for (const node of nodes) {
    if (node.children.length > 0) {
      sortNodes(node.children)
      node.category = node.children.reduce<NoteCategoryKind>(
        (current, child) =>
          CATEGORY_ORDER[child.category] < CATEGORY_ORDER[current] ? child.category : current,
        'other',
      )
    }
  }

  nodes.sort((left, right) => {
    const categoryDelta = CATEGORY_ORDER[left.category] - CATEGORY_ORDER[right.category]
    if (categoryDelta !== 0) return categoryDelta

    const leafDelta = Number(!!left.note) - Number(!!right.note)
    if (leafDelta !== 0) return leafDelta

    return left.label.localeCompare(right.label)
  })

  return nodes
}

function buildTree(notes: CategorizedNote[]): NoteTreeNode[] {
  const root: NoteTreeNode[] = []

  for (const note of notes) {
    const parts = note.slug.replace(/^\/notes\//, '').split('/')
    let level = root
    let path = '/notes'

    for (let i = 0; i < parts.length - 1; i++) {
      path += '/' + parts[i]
      let node = level.find((n) => n.path === path)
      if (!node) {
        node = {
          label: prettify(parts[i]!),
          path,
          category: 'other',
          children: [],
        }
        level.push(node)
      }
      level = node.children
    }

    level.push({
      label: note.title,
      path: note.slug,
      category: note.categoryKind,
      categoryLabel: note.categoryLabel,
      note,
      children: [],
    })
  }

  return sortNodes(root)
}

const tree = ref<NoteTreeNode[]>([])
const loading = ref(true)

async function loadTree() {
  loading.value = true
  const manifest = await loadManifest()
  const noteVisibility = await Promise.all(
    manifest.notes.map(async (note) => {
      const frontmatter = await loadNoteFrontmatter(note.slug)
      const parsedCategory = parseCategory(frontmatter.category)

      return {
        note: {
          ...note,
          category: parsedCategory.rawCategory,
        },
        navVisibility:
          typeof frontmatter.nav_visibility === 'string' ? frontmatter.nav_visibility : 'normal',
        categoryKind: parsedCategory.categoryKind,
        categoryLabel: parsedCategory.categoryLabel,
      }
    }),
  )

  const filteredNotes = noteVisibility
    .filter(({ navVisibility }) => props.showAppendix || navVisibility !== 'appendix')
    .map(({ note, navVisibility, categoryKind, categoryLabel }) => ({
      ...note,
      navVisibility,
      categoryKind,
      categoryLabel,
    }))

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
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 16px;
  box-sizing: border-box;
}

.sidebar-loading {
  font-size: 13px;
  color: #888;
}
</style>
