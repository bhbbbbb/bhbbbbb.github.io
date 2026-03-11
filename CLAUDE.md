# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server (Vite)
yarn build        # Type-check + build for production
yarn build-only   # Build without type-check
yarn type-check   # Run vue-tsc type checking
yarn lint         # Run oxlint then eslint (both with --fix)
yarn format       # Prettier format src/
yarn preview      # Preview production build
```

There are no tests in this project.

## Architecture

This is a personal portfolio site (Vue 3 + Vite + TypeScript, single-page).

### Data flow

All content lives in `src/data/home.ts` as two exports:
- `siteContent` — nav links and site metadata
- `homeContent` — all page content (hero, timeline, projects, publications, others)

Content items use `resolveRowFilters()` to convert raw filter strings into typed `RowFilter` objects. This is the main data transformation step.

### Filter system

The filter system is central to the UI — it lets users cross-link items across sections:

- **`src/data/filter.ts`** — single source of truth for all filter definitions (`filterDefs`). Each filter has an `id`, `defaultLabel`, `order`, `featured` flag, and optional `isMeta` flag.
- **`src/types/filter.ts`** — `FilterDef` and `RowFilter` types.
- **`src/utils/filter.ts`** — `resolveRowFilters()` parses a compact string syntax into `RowFilter[]`. Strings can be plain IDs (`'python'`) or markdown-link style with custom labels (`'[ICLR 2026](atomhin)'`). An empty label `[](id)` means hidden (show: false).

Two filter modes exist:
- **Tag mode** — multiple tags can be active; items matching any active tag are shown.
- **Meta mode** — activated by clicking a "meta" filter (e.g. a project name like `atomhin`); exclusive single-select that shows all items related to that project/thread across sections.

The `useRowFilterState` composable (`src/composables/useRowFilterState.ts`) handles per-row highlight/dim logic based on active/hovered filters.

### Component structure

```
src/
  pages/HomePage.vue          # Top-level page; owns all filter state, computes filtered lists
  components/
    layout/
      AppHeader.vue
      AppFooter.vue
    sections/
      HomeHero.vue            # Hero/intro block
      HomeSection.vue         # Generic section wrapper with title
    rows/
      TimelineRow.vue         # Education/experience entries
      ProjectRow.vue          # Project cards with image
      PublicationRow.vue      # Publication entries with authors
      SimpleRow.vue           # Generic row (awards, honors)
    common/
      FilterPill.vue          # Clickable filter tag pill (variants: default, meta, skill)
      FilterContainer.vue     # Wraps a row's filter pills
  data/
    home.ts                   # All page content
    filter.ts                 # All filter definitions
  types/
    content.ts                # Content interfaces (HomeContent, ProjectItem, etc.)
    filter.ts                 # Filter interfaces
    header.ts                 # SiteContent / NavLink types
  utils/
    filter.ts                 # Filter resolution and query utilities
  composables/
    useRowFilterState.ts      # Per-row filter highlight/dim logic
```

### Adding content

To add a new project/publication/timeline entry, edit `src/data/home.ts`. To add a new filter tag or meta filter, add it to the `filterDefs` array in `src/data/filter.ts` first, then reference it in content via `resolveRowFilters()`.

Items with `show: false` are hidden by default but appear when a matching filter is active (used for items that belong to a meta thread but shouldn't appear in the unfiltered view).
