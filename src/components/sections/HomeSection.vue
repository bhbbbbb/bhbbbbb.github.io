<script setup lang="ts">
defineProps<{
  id: string
  title: string
}>()
</script>

<template>
  <section :id="id" class="section">
    <div class="section-head">
      <h2>{{ title }}</h2>
    </div>

    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: var(--space-16);
  scroll-margin-top: var(--section-scroll-offset);
}

.section-head {
  margin-bottom: var(--space-7);
}

.section-head h2 {
  margin: 0;
  font-size: var(--text-lg);
  letter-spacing: -0.02em;
  color: var(--color-text-strong);
}

.section-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
</style>
