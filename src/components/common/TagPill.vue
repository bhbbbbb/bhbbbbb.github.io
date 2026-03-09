<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string
    label: string
    active?: boolean
    dimmed?: boolean
    variant?: 'default' | 'skill'
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
    class="tag-pill"
    :class="[
      `tag-pill--${variant}`,
      {
        'tag-pill--active': active,
        'tag-pill--dimmed': dimmed,
      },
    ]"
    type="button"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span class="tag-pill__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.tag-pill {
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

.tag-pill__label {
  display: block;
}

.tag-pill:hover {
  transform: translateY(-1px);
}

.tag-pill:focus-visible {
  outline: none;
  border-color: var(--color-primary-border);
  box-shadow: 0 0 0 3px var(--color-primary-soft);
}

.tag-pill--default {
  background: var(--color-tag-bg);
  border-color: transparent;
  color: var(--color-tag-text);
}

.tag-pill--default:hover {
  background: color-mix(in srgb, var(--color-tag-bg) 72%, white);
  border-color: var(--color-primary-border);
  color: var(--color-primary);
}

.tag-pill--skill {
  background: var(--color-surface-strong);
  border-color: var(--color-border);
  color: var(--color-text);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.tag-pill--skill:hover {
  background: var(--color-primary-soft);
  border-color: var(--color-primary-border);
  color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}

.tag-pill--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: 0 6px 16px rgba(104, 25, 0, 0.16);
}

.tag-pill--active:hover {
  background: var(--color-primary-strong);
  border-color: var(--color-primary-strong);
  color: white;
}

.tag-pill--dimmed {
  opacity: 0.42;
}

.tag-pill--active.tag-pill--dimmed {
  opacity: 1;
}
</style>
