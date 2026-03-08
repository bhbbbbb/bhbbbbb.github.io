<script setup lang="ts">
defineProps<{
  tags?: string[]
}>()
</script>

<template>
  <div v-if="tags?.length" class="tag-row">
    <span v-for="tag in tags" :key="tag" class="tag">
      {{ tag }}
    </span>
  </div>
</template>

<style scoped>
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: 1.2;
}
</style>
