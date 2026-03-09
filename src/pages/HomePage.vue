<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import HomeHero from '@/components/sections/HomeHero.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import TimelineRow from '@/components/rows/TimelineRow.vue'
import ProjectRow from '@/components/rows/ProjectRow.vue'
import SimpleRow from '@/components/rows/SimpleRow.vue'
import PublicationRow from '@/components/rows/PublicationRow.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import TagPill from '@/components/common/TagPill.vue'
import { homeContent } from '@/data/home'
import { getAllTags } from '@/utils/tag'

const activeTags = ref<string[]>([])
const hoveredTag = ref<string | null>(null)
// const skillTags = computed(() => getAllTags().filter((tag) => tag.featured !== false))
const skillTags = computed(() => getAllTags())

watch(activeTags, (tags) => {
  if (tags.length === 0) {
    clearHoveredTag()
  }
})

function toggleTag(tag: string) {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter((item) => item !== tag)
    return
  }

  activeTags.value = [...activeTags.value, tag]
}

function setHoveredTag(tag: string) {
  hoveredTag.value = tag
}

function clearHoveredTag() {
  hoveredTag.value = null
}

function clearTags() {
  activeTags.value = []
}

function matchesActiveTags(tags?: { id: string }[]) {
  if (!activeTags.value.length) return true
  if (!tags?.length) return false
  return activeTags.value.some((tag) => tags.some((rowTag) => rowTag.id === tag))
}

const filteredEducation = computed(() =>
  homeContent.education.filter((item) => matchesActiveTags(item.tags)),
)

const filteredProjects = computed(() =>
  homeContent.projects.filter((item) => matchesActiveTags(item.tags)),
)

const filteredPublications = computed(() =>
  homeContent.publications.filter((item) => matchesActiveTags(item.tags)),
)

const filteredOthers = computed(() =>
  homeContent.others.filter((item) => matchesActiveTags(item.tags)),
)
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

    <section v-if="activeTags.length" class="active-filters" aria-label="Active filters">
      <p class="active-filters__label">Active filters</p>

      <div class="active-filters__pills">
        <TagPill
          v-for="tag in skillTags.filter((item) => activeTags.includes(item.id))"
          :key="tag.id"
          :id="tag.id"
          :label="tag.defaultLabel"
          active
          @click="toggleTag"
          @enter="setHoveredTag"
          @leave="clearHoveredTag"
        />
      </div>

      <button class="active-filters__clear" type="button" @click="clearTags">Clear</button>
    </section>

    <HomeSection v-if="filteredEducation.length" id="education" title="Education">
      <TimelineRow
        v-for="item in filteredEducation"
        :key="`${item.title}-${item.period}`"
        :title="item.title"
        :organization="item.organization"
        :description="item.description"
        :tags="item.tags"
        :period="item.period"
        :badge="item.badge"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="toggleTag"
        @tag-enter="setHoveredTag"
        @tag-leave="clearHoveredTag"
      />
    </HomeSection>

    <HomeSection v-if="filteredProjects.length" id="projects" title="Projects">
      <ProjectRow
        v-for="item in filteredProjects"
        :id="item.id"
        :key="`${item.title}-${item.year}`"
        :meta="item.meta"
        :year="item.year"
        :title="item.title"
        :description="item.description"
        :tags="item.tags"
        :links="item.links"
        :image="item.image"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="toggleTag"
        @tag-enter="setHoveredTag"
        @tag-leave="clearHoveredTag"
      />
    </HomeSection>

    <HomeSection v-if="filteredPublications.length" id="publications" title="Selected Publications">
      <PublicationRow
        v-for="item in filteredPublications"
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
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="toggleTag"
        @tag-enter="setHoveredTag"
        @tag-leave="clearHoveredTag"
      />
    </HomeSection>

    <HomeSection v-if="filteredOthers.length" id="others" title="Others">
      <SimpleRow
        v-for="item in filteredOthers"
        :key="`${item.title}-${item.year}`"
        :title="item.title"
        :description="item.description"
        :year="item.year"
        :tags="item.tags"
        :active-tags="activeTags"
        :hovered-tag="hoveredTag"
        @tag-click="toggleTag"
        @tag-enter="setHoveredTag"
        @tag-leave="clearHoveredTag"
      />
    </HomeSection>
  </main>

  <AppFooter />
</template>

<style scoped>
.home {
  width: min(var(--container-width), calc(100% - var(--container-padding)));
  margin: 0 auto;
  padding: var(--space-14) 0 var(--space-20);
}

.active-filters {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-4) var(--space-6);
  margin-bottom: var(--space-12);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--color-border);
}

.active-filters__label {
  margin: 0;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text-strong);
  white-space: nowrap;
}

.active-filters__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  min-width: 0;
}

.active-filters__clear {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-text-soft);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);
}

.active-filters__clear:hover {
  color: var(--color-primary);
}

@media (max-width: 720px) {
  .active-filters {
    grid-template-columns: 1fr;
    align-items: start;
    gap: var(--space-3);
  }

  .active-filters__clear {
    justify-self: start;
  }
}

@media (max-width: 640px) {
  .home {
    width: min(100% - var(--container-padding-mobile), var(--container-width));
    padding-top: var(--space-10);
    padding-bottom: 48px;
  }
}
</style>
