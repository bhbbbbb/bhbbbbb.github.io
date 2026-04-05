<script setup lang="ts">
import { ref, computed } from 'vue'
import type { NoteTreeNode as NoteTreeNodeType } from '@/types/note'
import NoteTreeNode from './NoteTreeNode.vue'

const props = defineProps<{
  node: NoteTreeNodeType
  currentSlug: string
}>()

const isLeaf = computed(() => !!props.node.note)
const isActive = computed(() => props.node.path === props.currentSlug)
const isAppendix = computed(() => props.node.note?.navVisibility === 'appendix')

function containsCurrent(node: NoteTreeNodeType): boolean {
  if (node.note && node.path === props.currentSlug) return true
  return node.children.some(containsCurrent)
}

const isOpen = ref(containsCurrent(props.node))
</script>

<template>
  <div v-if="isLeaf" class="tree-leaf" :class="{ active: isActive, appendix: isAppendix }">
    <RouterLink :to="node.path">{{ node.label }}</RouterLink>
  </div>

  <div v-else class="tree-folder">
    <button class="folder-toggle" @click="isOpen = !isOpen">
      <span class="toggle-icon">{{ isOpen ? '▾' : '▸' }}</span>
      {{ node.label }}
    </button>
    <div v-if="isOpen" class="folder-children">
      <NoteTreeNode
        v-for="child in node.children"
        :key="child.path"
        :node="child"
        :current-slug="currentSlug"
      />
    </div>
  </div>
</template>

<style scoped>
.tree-leaf {
  padding: 2px 0;
}

.tree-leaf a {
  display: block;
  padding: 3px 8px;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  overflow-wrap: anywhere;
}

.tree-leaf a:hover {
  background: rgba(0, 0, 0, 0.06);
}

.tree-leaf.active a {
  background: rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.tree-leaf.appendix:not(.active) a {
  opacity: 0.52;
}

.tree-leaf.appendix a::after {
  content: ' appendix';
  margin-left: 6px;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-soft);
}

.folder-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 3px 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: inherit;
  text-align: left;
  border-radius: 4px;
  overflow: hidden;
}

.folder-toggle:hover {
  background: rgba(0, 0, 0, 0.06);
}

.toggle-icon {
  font-size: 10px;
  width: 12px;
  flex-shrink: 0;
}

.folder-children {
  padding-left: 14px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 5px;
  min-width: 0;
}
</style>
