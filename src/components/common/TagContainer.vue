<script setup lang="ts">
import TagPill from '@/components/common/TagPill.vue'

const props = withDefaults(
  defineProps<{
    tags?: string[]
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
</script>

<template>
  <div v-if="tags.length" class="tag-container">
    <TagPill
      v-for="tag in tags"
      :key="tag"
      :label="tag"
      :active="activeTags.includes(tag)"
      :dimmed="isDimmed(tag)"
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
