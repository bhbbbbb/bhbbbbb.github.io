<script setup lang="ts">
defineProps<{
  title: string
  description: string
  year: string | number
}>()
</script>

<template>
  <article class="other-item">
    <div class="other-main">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <div class="other-year">{{ year }}</div>
  </article>
</template>

<style scoped>
.other-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.other-main h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.other-main p {
  margin: var(--space-2) 0 0;
  line-height: var(--line-base);
  color: var(--color-text-muted);
}

.other-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

@media (max-width: 860px) {
  .other-item {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .other-item {
    border-radius: var(--radius-md);
  }
}
</style>
