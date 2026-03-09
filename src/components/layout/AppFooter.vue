<script setup lang="ts">
import { siteContent } from '@/data/home'
const currentYear = new Date().getFullYear()
const lastUpdated = __BUILD_DATE__
</script>

<template>
  <footer class="footer">
    <div class="inner container">
      <p>© {{ currentYear }} {{ siteContent.brand }}</p>
      <p>Last updated: {{ lastUpdated }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: var(--space-20);
  padding: var(--space-10) 0 var(--space-14);
  border-top: 1px solid var(--color-border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.inner p {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-text-soft);
}

@media (max-width: 640px) {
  .inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
