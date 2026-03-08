<script setup lang="ts">
const name = 'Your Name'

const highlights = [
  {
    title: 'LLM & Retrieval Systems',
    description:
      'Building practical systems using LLMs, retrieval pipelines, and structured knowledge.',
  },
  {
    title: 'Machine Learning Engineering',
    description:
      'Production-oriented ML systems with emphasis on reliability, evaluation, and infrastructure.',
  },
  {
    title: 'Graph-based Knowledge',
    description: 'Exploring graph representations and structured reasoning for AI systems.',
  },
]

const links = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Writing', href: '/writing' },
  { name: 'Resume', href: '/resume' },
  { name: 'GitHub', href: 'https://github.com' },
]
</script>

<template>
  <main class="container">
    <!-- Hero -->
    <section class="hero">
      <h1>{{ name }}</h1>
      <p class="tagline">
        ML/AI engineer focused on building practical systems with LLMs, retrieval, and structured
        knowledge.
      </p>

      <div class="links">
        <a v-for="link in links" :key="link.name" :href="link.href" class="link">
          {{ link.name }}
        </a>
      </div>
    </section>

    <!-- Summary -->
    <section class="section">
      <h2>About</h2>
      <p>
        I work on applied machine learning systems, with a focus on large language models, retrieval
        pipelines, and knowledge representation. My interests include building reliable AI
        infrastructure, improving model grounding, and designing systems that combine structured and
        unstructured data.
      </p>
    </section>

    <!-- Highlights -->
    <section class="section">
      <h2>Focus Areas</h2>

      <div class="grid">
        <div v-for="item in highlights" :key="item.title" class="card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Future assistant teaser -->
    <section class="section">
      <h2>Portfolio Assistant</h2>
      <p>
        This site will include an AI assistant that can answer questions about my projects,
        experience, and research using grounded retrieval over my work.
      </p>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 20px;
  line-height: 1.6;
}

.hero {
  margin-bottom: 48px;
}

h1 {
  font-size: 36px;
  margin-bottom: 12px;
}

.tagline {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.link {
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2px;
}

.section {
  margin-top: 40px;
}

.section h2 {
  margin-bottom: 12px;
  font-size: 22px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.card {
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}

.card h3 {
  margin-bottom: 6px;
  font-size: 18px;
}
</style>
