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
import type { SimpleItem } from '@/types/content'

const activeFilters = ref<string[]>([])
const hoveredFilter = ref<string | null>(null)

const allFilters = computed(() => getAllFilters())
const featuredTagFilters = computed(() => getFeaturedTagFilters())

const activeMetaId = computed(() => activeFilters.value.find((id) => isMetaFilter(id)) ?? null)
const isMetaMode = computed(() => !!activeMetaId.value)
const activeMetaFilter = computed(
  () => allFilters.value.find((item) => item.id === activeMetaId.value) ?? null,
)

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
  if (!activeFilters.value.length) return false
  if (!filters?.length) return false
  return activeFilters.value.some((activeId) =>
    filters.some((rowFilter) => rowFilter.id === activeId),
  )
}

function shouldActive(item: { tags?: { id: string }[]; meta?: { id: string }[]; show?: boolean }) {
  if (!activeFilters.value.length) return item?.show ?? true
  if (matchesActiveFilters(item.meta)) return true
  if (matchesActiveFilters(item.tags)) return item?.show ?? true
  return false
}

const filteredEducation = computed(() => homeContent.education.filter(shouldActive))

const filteredProjects = computed(() => homeContent.projects.filter(shouldActive))

const filteredPublications = computed(() => homeContent.publications.filter(shouldActive))

const filteredOthers = computed(() => homeContent.others.filter(shouldActive))
console.log(shouldActive(homeContent.others[0] as SimpleItem))
</script>

<template>
  <AppHeader />

  <main class="home" :class="{ 'home--thread-mode': isMetaMode }">
    <HomeHero
      :eyebrow="homeContent.hero.eyebrow"
      :name="homeContent.hero.name"
      :intro="homeContent.hero.intro"
      :focus-title="homeContent.hero.focusTitle"
      :focuses="homeContent.hero.focuses"
      :links="homeContent.hero.links"
    />

    <section v-if="isMetaMode && activeMetaFilter" class="thread-bar" aria-label="Active thread">
      <div class="thread-bar__left">
        <span class="thread-bar__label">Thread</span>
        <FilterPill
          :id="activeMetaFilter.id"
          :label="activeMetaFilter.defaultLabel"
          variant="meta"
          active
          @click="clearFilters"
          @enter="setHoveredFilter"
          @leave="clearHoveredFilter"
        />
      </div>

      <button class="thread-bar__exit" type="button" @click="clearFilters">Exit thread</button>
    </section>

    <section v-else-if="activeFilters.length" class="active-filters" aria-label="Active filters">
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

    <HomeSection
      v-if="filteredEducation.length"
      id="education"
      title="Education"
      :hide-title="isMetaMode"
    >
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

    <HomeSection
      v-if="filteredProjects.length"
      id="projects"
      title="Projects"
      :hide-title="isMetaMode"
    >
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

    <HomeSection
      v-if="filteredPublications.length"
      id="publications"
      title="Selected Publications"
      :hide-title="isMetaMode"
    >
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

    <HomeSection
      v-if="filteredOthers.length"
      id="others"
      title="Honors & Awards"
      :hide-title="isMetaMode"
    >
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

    <HomeSection v-if="!isMetaMode" id="skills" title="Skills">
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

.home--thread-mode {
  padding-top: var(--space-12);
}

.thread-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
  padding: 0 0 var(--space-5);
  border-bottom: 1px solid var(--color-border);
}

.thread-bar__left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
}

.thread-bar__label {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text-soft);
  white-space: nowrap;
}

.thread-bar__exit {
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

.thread-bar__exit:hover {
  color: var(--color-primary);
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
  .thread-bar,
  .active-filters {
    grid-template-columns: 1fr;
    align-items: start;
    gap: var(--space-3);
  }

  .thread-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .active-filters {
    grid-template-columns: 1fr;
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
