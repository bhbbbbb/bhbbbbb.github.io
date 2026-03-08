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
  margin-bottom: 52px;
  scroll-margin-top: 88px;
}

.section-head {
  margin-bottom: 18px;
}

.section-head h2 {
  margin: 0;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  color: #0f172a;
}

.section-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
