<script setup lang="ts">
import { siteContent } from '@/data/home'

function resolveHref(href: string) {
  if (href === '#') return '/'
  if (href.startsWith('#')) return `/${href}`
  return href
}
</script>

<template>
  <header class="header">
    <div class="inner">
      <a class="brand" href="/">
        {{ siteContent.brand }}
      </a>

      <nav class="nav">
        <a v-for="item in siteContent.nav" :key="item.href" :href="resolveHref(item.href)">
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.inner {
  width: min(var(--container-width), calc(100% - var(--container-padding)));
  margin: 0 auto;
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.brand {
  font-weight: 700;
  color: var(--color-text-strong);
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-7);
}

.nav a {
  color: var(--color-text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  transition: var(--transition-fast);
}

.nav a:hover {
  color: var(--color-text-strong);
}

@media (max-width: 720px) {
  .inner {
    width: min(100% - var(--container-padding-mobile), var(--container-width));
    min-height: auto;
    padding: var(--space-5) 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    gap: var(--space-5);
  }
}
</style>
