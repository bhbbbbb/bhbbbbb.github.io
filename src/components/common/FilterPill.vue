<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string
    label: string
    active?: boolean
    dimmed?: boolean
    variant?: 'default' | 'skill' | 'meta'
  }>(),
  {
    active: false,
    dimmed: false,
    variant: 'default',
  },
)

const emit = defineEmits<{
  click: [id: string]
  enter: [id: string]
  leave: []
}>()

function handleClick() {
  emit('click', props.id)
}

function handleMouseEnter() {
  emit('enter', props.id)
}

function handleMouseLeave() {
  emit('leave')
}
</script>

<template>
  <button
    class="filter-pill"
    :class="[
      `filter-pill--${variant}`,
      {
        'filter-pill--active': active,
        'filter-pill--dimmed': dimmed,
      },
    ]"
    type="button"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span class="filter-pill__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.filter-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background: var(--color-surface-strong);
  color: var(--color-text);
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.filter-pill__label {
  display: block;
}

.filter-pill:hover {
  transform: translateY(-1px);
}

.filter-pill:focus-visible {
  outline: none;
  border-color: var(--color-primary-border);
  box-shadow: 0 0 0 3px var(--color-primary-soft);
}

.filter-pill--default {
  background: var(--color-tag-bg);
  border-color: transparent;
  color: var(--color-tag-text);
}

.filter-pill--default:hover {
  background: color-mix(in srgb, var(--color-tag-bg) 72%, white);
  border-color: var(--color-primary-border);
  color: var(--color-primary);
}

.filter-pill--skill {
  background: var(--color-surface-strong);
  border-color: var(--color-border);
  color: var(--color-text);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.filter-pill--skill:hover {
  background: var(--color-primary-soft);
  border-color: var(--color-primary-border);
  color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}

.filter-pill--meta {
  min-height: auto;
  padding: var(--space-1) var(--space-3);
  border: 1px solid transparent;
  background: var(--color-pill-bg);
  color: var(--color-pill-text);
  font-size: var(--text-xs);
  font-weight: 700;
  box-shadow: none;
}

.filter-pill--meta:hover {
  background: color-mix(in srgb, var(--color-pill-bg) 82%, white);
  border-color: color-mix(in srgb, var(--color-pill-text) 18%, white);
  color: var(--color-pill-text);
  transform: translateY(-1px);
}

.filter-pill--meta.filter-pill--active {
  background: var(--color-pill-text);
  border-color: var(--color-pill-text);
  color: white;
  box-shadow: none;
}

.filter-pill--meta.filter-pill--active:hover {
  background: color-mix(in srgb, var(--color-pill-text) 90%, black);
  border-color: color-mix(in srgb, var(--color-pill-text) 90%, black);
  color: white;
}

.filter-pill--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: 0 6px 16px rgba(104, 25, 0, 0.16);
}

.filter-pill--active:hover {
  background: var(--color-primary-strong);
  border-color: var(--color-primary-strong);
  color: white;
}

.filter-pill--dimmed {
  opacity: 0.42;
}

.filter-pill--active.filter-pill--dimmed {
  opacity: 1;
}
</style>
