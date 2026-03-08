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
  gap: 24px;
  padding: 22px 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.timeline-main h3 {
  margin: 0;
  line-height: 1.3;
  color: #0f172a;
}

.timeline-org {
  margin: 6px 0 0;
  font-weight: 600;
  color: #4f46e5;
}

.timeline-desc {
  margin: 10px 0 0;
  line-height: 1.7;
  color: #475569;
}

.timeline-meta {
  white-space: nowrap;
  font-size: 0.94rem;
  font-weight: 600;
  color: #64748b;
}

@media (max-width: 860px) {
  .timeline-item {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .timeline-item {
    border-radius: 16px;
  }
}
</style>
