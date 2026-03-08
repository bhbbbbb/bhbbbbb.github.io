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
  gap: 22px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.feature-image {
  min-height: 150px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(14, 165, 233, 0.08)), #eef2ff;
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: #eef2ff;
  color: #4338ca;
  font-size: 0.82rem;
  font-weight: 700;
}

.feature-year {
  white-space: nowrap;
  font-size: 0.94rem;
  font-weight: 600;
  color: #64748b;
}

.feature-content h3 {
  margin: 0;
  line-height: 1.3;
  color: #0f172a;
}

.feature-desc {
  margin: 0;
  line-height: 1.72;
  color: #475569;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 10px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #334155;
  font-size: 0.82rem;
  font-weight: 600;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 2px;
}

.link-row a {
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
  transition: 0.18s ease;
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
    border-radius: 16px;
  }
}
</style>
