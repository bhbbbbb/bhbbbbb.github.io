<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HomeHero from '@/components/sections/HomeHero.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import TimelineRow from '@/components/rows/TimelineRow.vue'
import ProjectRow from '@/components/rows/ProjectRow.vue'
import PublicationRow from '@/components/rows/PublicationRow.vue'
import SimpleRow from '@/components/rows/SimpleRow.vue'
import FilterPill from '@/components/common/FilterPill.vue'
import { homeContent } from '@/data/home'
import { getFeaturedTagFilters, getAllFilters, isMetaFilter } from '@/utils/filter'

const activeFilters = ref<string[]>([])
const hoveredFilter = ref<string | null>(null)

const allFilters = computed(() => getAllFilters())
const featuredTagFilters = computed(() => getFeaturedTagFilters())

watch(activeFilters, (filters) => {
  if (filters.length === 0) {
    clearHoveredFilter()
  }
})

function toggleFilter(filterId: string) {
  const clickedIsMeta = isMetaFilter(filterId)
  const activeMetaId = activeFilters.value.find((id) => isMetaFilter(id))
  const activeMode = activeMetaId ? 'meta' : activeFilters.value.length ? 'tag' : 'none'

  if (clickedIsMeta) {
    if (activeMode === 'meta' && activeFilters.value[0] === filterId) {
      activeFilters.value = []
      return
    }

    activeFilters.value = [filterId]
    return
  }

  if (activeMode === 'meta') {
    activeFilters.value = [filterId]
    return
  }

  if (activeFilters.value.includes(filterId)) {
    activeFilters.value = activeFilters.value.filter((item) => item !== filterId)
    return
  }

  activeFilters.value = [...activeFilters.value, filterId]
}

function setHoveredFilter(filterId: string) {
  hoveredFilter.value = filterId
}

function clearHoveredFilter() {
  hoveredFilter.value = null
}

function clearFilters() {
  activeFilters.value = []
}

function matchesActiveFilters(filters?: { id: string }[]) {
  if (!activeFilters.value.length) return true
  if (!filters?.length) return false
  return activeFilters.value.some((activeId) =>
    filters.some((rowFilter) => rowFilter.id === activeId),
  )
}

function getItemFilters(item: { tags?: { id: string }[]; meta?: { id: string }[] }) {
  return [...(item.tags ?? []), ...(item.meta ?? [])]
}

const filteredEducation = computed(() =>
  homeContent.education.filter((item) => matchesActiveFilters(getItemFilters(item))),
)

const filteredProjects = computed(() =>
  homeContent.projects.filter((item) => matchesActiveFilters(getItemFilters(item))),
)

const filteredPublications = computed(() =>
  homeContent.publications.filter((item) => matchesActiveFilters(getItemFilters(item))),
)

const filteredOthers = computed(() =>
  homeContent.others.filter((item) => matchesActiveFilters(getItemFilters(item))),
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

    <section v-if="activeFilters.length" class="active-filters" aria-label="Active filters">
      <p class="active-filters__label">Active filters</p>

      <div class="active-filters__pills">
        <FilterPill
          v-for="filter in allFilters.filter((item) => activeFilters.includes(item.id))"
          :key="filter.id"
          :id="filter.id"
          :label="filter.defaultLabel"
          :variant="filter.isMeta ? 'meta' : 'default'"
          active
          @click="toggleFilter"
          @enter="setHoveredFilter"
          @leave="clearHoveredFilter"
        />
      </div>

      <button class="active-filters__clear" type="button" @click="clearFilters">Clear</button>
    </section>

    <HomeSection v-if="filteredEducation.length" id="education" title="Education">
      <TimelineRow
        v-for="item in filteredEducation"
        :key="`${item.title}-${item.period}`"
        :title="item.title"
        :organization="item.organization"
        :description="item.description"
        :period="item.period"
        :tags="item.tags"
        :meta="item.meta"
        :badge="item.badge"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="toggleFilter"
        @filter-enter="setHoveredFilter"
        @filter-leave="clearHoveredFilter"
      />
    </HomeSection>

    <HomeSection v-if="filteredProjects.length" id="projects" title="Projects">
      <ProjectRow
        v-for="item in filteredProjects"
        :key="`${item.title}-${item.year}`"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :year="item.year"
        :tags="item.tags"
        :meta="item.meta"
        :links="item.links"
        :image="item.image"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="toggleFilter"
        @filter-enter="setHoveredFilter"
        @filter-leave="clearHoveredFilter"
      />
    </HomeSection>

    <HomeSection v-if="filteredPublications.length" id="publications" title="Selected Publications">
      <PublicationRow
        v-for="item in filteredPublications"
        :key="`${item.title}-${item.year}`"
        :id="item.id"
        :title="item.title"
        :authors="item.authors"
        :venue="item.venue"
        :year="item.year"
        :description="item.description"
        :tags="item.tags"
        :meta="item.meta"
        :links="item.links"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="toggleFilter"
        @filter-enter="setHoveredFilter"
        @filter-leave="clearHoveredFilter"
      />
    </HomeSection>

    <HomeSection v-if="filteredOthers.length" id="others" title="Honors & Awards">
      <SimpleRow
        v-for="item in filteredOthers"
        :key="`${item.title}-${item.year}`"
        :title="item.title"
        :description="item.description"
        :year="item.year"
        :tags="item.tags"
        :meta="item.meta"
        :active-filters="activeFilters"
        :hovered-filter="hoveredFilter"
        @filter-click="toggleFilter"
        @filter-enter="setHoveredFilter"
        @filter-leave="clearHoveredFilter"
      />
    </HomeSection>

    <HomeSection id="skills" title="Skills">
      <div class="skills-grid">
        <FilterPill
          v-for="filter in featuredTagFilters"
          :key="filter.id"
          :id="filter.id"
          :label="filter.defaultLabel"
          :active="activeFilters.includes(filter.id)"
          :dimmed="!!hoveredFilter && hoveredFilter !== filter.id"
          variant="skill"
          @click="toggleFilter"
          @enter="setHoveredFilter"
          @leave="clearHoveredFilter"
        />
      </div>
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

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
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
