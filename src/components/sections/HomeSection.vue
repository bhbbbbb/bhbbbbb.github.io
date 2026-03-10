<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    title: string
    hideTitle?: boolean
  }>(),
  {
    hideTitle: false,
  },
)
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--titleless': hideTitle }">
    <div v-if="!hideTitle" class="section-head">
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

.section--titleless {
  margin-bottom: var(--space-4);
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
