<script setup lang="ts">
defineProps<{
  title: string
  organization: string
  description: string
  period: string
}>()
</script>

<template>
  <article class="timeline-item">
    <div class="timeline-main">
      <h3>{{ title }}</h3>
      <p class="timeline-org">{{ organization }}</p>
      <p class="timeline-desc">{{ description }}</p>
    </div>

    <div class="timeline-meta">{{ period }}</div>
  </article>
</template>

<style scoped>
.timeline-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-10);
  padding: var(--space-9) var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.timeline-main h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.timeline-org {
  margin: var(--space-1) 0 0;
  font-weight: 600;
  color: var(--color-primary);
}

.timeline-desc {
  margin: var(--space-3) 0 0;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.timeline-meta {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

@media (max-width: 860px) {
  .timeline-item {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .timeline-item {
    border-radius: var(--radius-md);
  }
}
</style>
