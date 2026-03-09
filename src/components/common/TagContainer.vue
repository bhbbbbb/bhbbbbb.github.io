<script setup lang="ts">
import TagPill from '@/components/common/TagPill.vue'
import type { RowTag } from '@/types/tag'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tags?: RowTag[]
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

function isDimmed(tag: string) {
  if (props.activeTags.length > 0) {
    return !props.activeTags.includes(tag)
  }

  if (props.hoveredTag) {
    return props.hoveredTag !== tag
  }

  return false
}
const renderedTags = computed(() => {
  const activeSet = new Set(props.activeTags)

  return props.tags.filter((tag) => {
    if (tag.show) return true
    if (activeSet.has(tag.id)) return true
    // if (props.hoveredTag === tag.id) return true
    return false
  })
})
</script>

<template>
  <div v-if="renderedTags.length" class="tag-container">
    <TagPill
      v-for="tag in renderedTags"
      :key="tag.id"
      :id="tag.id"
      :label="tag.label"
      :active="activeTags.includes(tag.id)"
      :dimmed="isDimmed(tag.id)"
      @click="emit('tagClick', $event)"
      @enter="emit('tagEnter', $event)"
      @leave="emit('tagLeave')"
    />
  </div>
</template>

<style scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
