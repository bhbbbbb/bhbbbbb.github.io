<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HomeHero from '@/components/sections/HomeHero.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import TimelineRow from '@/components/rows/TimelineRow.vue'
import ProjectRow from '@/components/rows/ProjectRow.vue'
import SimpleRow from '@/components/rows/SimpleRow.vue'
import { homeContent } from '@/data/home'
import PublicationRow from '@/components/rows/PublicationRow.vue'
</script>

<template>
  <AppHeader />

  <main class="home">
    <HomeHero
      :eyebrow="homeContent.hero.eyebrow"
      :name="homeContent.hero.name"
      :intro="homeContent.hero.intro"
      :focus-title="homeContent.hero.focusTitle"
      :focuses="homeContent.hero.focuses"
      :links="homeContent.hero.links"
    />

    <HomeSection id="education" title="Education">
      <TimelineRow
        v-for="item in homeContent.education"
        :key="`${item.title}-${item.period}`"
        :title="item.title"
        :organization="item.organization"
        :description="item.description"
        :tags="item.tags"
        :period="item.period"
        :badge="item.badge"
      />
    </HomeSection>

    <HomeSection id="projects" title="Projects">
      <ProjectRow
        v-for="item in homeContent.projects"
        :id="item.id"
        :key="`${item.title}-${item.year}`"
        :meta="item.meta"
        :year="item.year"
        :title="item.title"
        :description="item.description"
        :tags="item.tags"
        :links="item.links"
        :image="item.image"
      />
    </HomeSection>

    <HomeSection id="publications" title="Selected Publications">
      <PublicationRow
        v-for="item in homeContent.publications"
        :id="item.id"
        :authors="item.authors"
        :venue="item.venue"
        :key="`${item.title}-${item.year}`"
        :meta="item.meta"
        :year="item.year"
        :title="item.title"
        :description="item.description"
        :tags="item.tags"
        :links="item.links"
      />
    </HomeSection>

    <HomeSection id="others" title="Others">
      <SimpleRow
        v-for="item in homeContent.others"
        :key="`${item.title}-${item.year}`"
        :title="item.title"
        :description="item.description"
        :year="item.year"
      />
    </HomeSection>
  </main>
</template>

<style scoped>
.home {
  width: min(var(--container-width), calc(100% - var(--container-padding)));
  margin: 0 auto;
  padding: var(--space-14) 0 var(--space-20);
}

@media (max-width: 640px) {
  .home {
    width: min(100% - var(--container-padding-mobile), var(--container-width));
    padding-top: var(--space-10);
    padding-bottom: 48px;
  }
}
</style>
