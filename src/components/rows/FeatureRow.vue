<script setup lang="ts">
interface FeatureLink {
  label: string
  href: string
}

defineProps<{
  type: string
  year: string | number
  title: string
  description: string
  tags?: string[]
  links?: FeatureLink[]
}>()
</script>

<template>
  <article class="feature-card">
    <div class="feature-image"></div>

    <div class="feature-content">
      <div class="feature-topline">
        <span class="meta-pill">{{ type }}</span>
        <span class="feature-year">{{ year }}</span>
      </div>

      <h3>{{ title }}</h3>

      <p class="feature-desc">
        {{ description }}
      </p>

      <div v-if="tags?.length" class="tag-row">
        <span v-for="tag in tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>

      <div v-if="links?.length" class="link-row">
        <a v-for="link in links" :key="`${title}-${link.label}`" :href="link.href">
          {{ link.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.feature-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: var(--space-9);
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.feature-image {
  min-height: 150px;
  border-radius: var(--radius-sm);
  background:
    linear-gradient(135deg, var(--color-image-grad-a), var(--color-image-grad-b)),
    var(--color-image-bg);
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.feature-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--color-pill-bg);
  color: var(--color-pill-text);
  font-size: var(--text-xs);
  font-weight: 700;
}

.feature-year {
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-soft);
}

.feature-content h3 {
  margin: 0;
  line-height: var(--line-tight);
  color: var(--color-text-strong);
}

.feature-desc {
  margin: 0;
  line-height: var(--line-base);
  color: var(--color-text-muted);
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  font-size: var(--text-xs);
  font-weight: 600;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  padding-top: 2px;
}

.link-row a {
  color: var(--color-primary);
  font-weight: 600;
  transition: var(--transition-fast);
}

.link-row a:hover {
  opacity: 0.72;
}

@media (max-width: 860px) {
  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-image {
    min-height: 180px;
  }
}

@media (max-width: 640px) {
  .feature-card {
    border-radius: var(--radius-md);
  }
}
</style>
