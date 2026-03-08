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
  gap: 20px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.other-main h3 {
  margin: 0;
  line-height: 1.3;
  color: #0f172a;
}

.other-main p {
  margin: 8px 0 0;
  line-height: 1.72;
  color: #475569;
}

.other-year {
  white-space: nowrap;
  font-size: 0.94rem;
  font-weight: 600;
  color: #64748b;
}

@media (max-width: 860px) {
  .other-item {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .other-item {
    border-radius: 16px;
  }
}
</style>
