<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HomeHero from '@/components/sections/HomeHero.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import TimelineRow from '@/components/rows/TimelineRow.vue'
import FeatureRow from '@/components/rows/FeatureRow.vue'
import SimpleRow from '@/components/rows/SimpleRow.vue'
</script>

<template>
  <AppHeader />

  <main class="home">
    <HomeHero />

    <HomeSection id="education" title="Education">
      <TimelineRow
        title="M.S. in Computer Science"
        organization="University Name"
        description="Focus on machine learning, representation learning, retrieval systems, and practical AI applications."
        period="2023 — Present"
      />
      <TimelineRow
        title="B.S. in Computer Science"
        organization="University Name"
        description="Coursework in algorithms, distributed systems, software engineering, and machine learning."
        period="2019 — 2023"
      />
    </HomeSection>

    <HomeSection id="publications" title="Selected Publications">
      <FeatureRow
        type="Conference"
        year="2024"
        title="Paper Title Example for a Research Publication"
        description="A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly."
        :tags="['LLM', 'Retrieval', 'Knowledge Graph']"
        :links="[
          { label: 'Paper', href: '#' },
          { label: 'Code', href: '#' },
          { label: 'Project', href: '#' },
        ]"
      />
      <FeatureRow
        type="Journal"
        year="2024"
        title="Paper Title Example for a Research Publication"
        description="A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly."
        :tags="['Representation Learning', 'Graph ML', 'Evaluation']"
        :links="[
          { label: 'Paper', href: '#' },
          { label: 'Code', href: '#' },
          { label: 'Project', href: '#' },
        ]"
      />
    </HomeSection>

    <HomeSection id="projects" title="Projects">
      <FeatureRow
        type="Project"
        year="2025"
        title="Project Example: AI Assistant for Portfolio Website"
        description="An interactive assistant that answers grounded questions about my background, projects, and research using retrieved evidence from structured and unstructured sources."
        :tags="['FastAPI', 'Vue', 'RAG', 'LLM']"
        :links="[
          { label: 'Code', href: '#' },
          { label: 'Demo', href: '#' },
          { label: 'Docs', href: '#' },
        ]"
      />
      <FeatureRow
        type="Project"
        year="2024"
        title="Project Example: Developer Tooling / VSCode Extension"
        description="A developer-focused tool that improves workflow efficiency. This row layout gives enough space to explain the problem, implementation, and practical value."
        :tags="['TypeScript', 'VSCode', 'DX']"
        :links="[
          { label: 'Code', href: '#' },
          { label: 'Marketplace', href: '#' },
          { label: 'Docs', href: '#' },
        ]"
      />
    </HomeSection>

    <HomeSection id="others" title="Others">
      <SimpleRow
        title="Scholarship / Honor / Certificate"
        description="Short description of the recognition or achievement."
        year="2024"
      />
      <SimpleRow
        title="Scholarship / Honor / Certificate"
        description="Short description of the recognition or achievement."
        year="2023"
      />
    </HomeSection>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background: #f5f7fb;
  color: #1f2937;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

:global(*) {
  box-sizing: border-box;
}

.home {
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  padding: 40px 0 72px;
}

@media (max-width: 640px) {
  .home {
    width: min(100% - 24px, 980px);
    padding-top: 24px;
    padding-bottom: 48px;
  }
}
</style>
