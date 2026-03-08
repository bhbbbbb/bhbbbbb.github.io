<script setup lang="ts">
interface HeroLink {
  label: string
  href: string
}

defineProps<{
  eyebrow: string
  name: string
  intro: string
  focusTitle: string
  focuses: string[]
  links: HeroLink[]
}>()
</script>

<template>
  <section id="about" class="hero">
    <div class="hero-text">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ name }}</h1>
      <p class="hero-intro">
        {{ intro }}
      </p>

      <div class="hero-links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <div class="hero-side">
      <div class="hero-card">
        <p class="hero-card-label">{{ focusTitle }}</p>
        <ul>
          <li v-for="focus in focuses" :key="focus">
            {{ focus }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: var(--space-10);
  align-items: stretch;
  margin-bottom: var(--space-18);
}

.hero-text,
.hero-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.hero-text {
  padding: var(--space-12);
}

.eyebrow {
  margin: 0 0 var(--space-3);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.hero h1 {
  margin: 0;
  font-size: var(--text-hero);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-text-strong);
}

.hero-intro {
  max-width: 60ch;
  margin: var(--space-7) 0 0;
  font-size: var(--text-md);
  line-height: var(--line-relaxed);
  color: var(--color-text-muted);
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

.hero-links a {
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-primary-border);
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-weight: 600;
  transition: var(--transition-fast);
}

.hero-links a:hover {
  opacity: 0.72;
}

.hero-card {
  height: 100%;
  padding: var(--space-10);
}

.hero-card-label {
  margin: 0 0 var(--space-5);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-muted);
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--color-tag-text);
  line-height: 1.9;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-text,
  .hero-card {
    border-radius: var(--radius-md);
    padding: var(--space-9);
  }
}
</style>
