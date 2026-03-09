<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    active?: boolean
    dimmed?: boolean
  }>(),
  {
    active: false,
    dimmed: false,
  },
)

const emit = defineEmits<{
  click: [label: string]
  enter: [label: string]
  leave: []
}>()

function handleClick() {
  emit('click', props.label)
}

function handleMouseEnter() {
  emit('enter', props.label)
}

function handleMouseLeave() {
  emit('leave')
}
</script>

<template>
  <button
    class="tag-pill"
    :class="{
      'tag-pill--active': active,
      'tag-pill--dimmed': dimmed,
    }"
    type="button"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.tag-pill:hover {
  transform: translateY(-1px);
  border-color: var(--color-primary-border);
  background: var(--color-primary-soft);
  color: var(--color-primary);
}

.tag-pill--active {
  border-color: var(--color-primary-border);
  background: var(--color-primary);
  color: white;
}

.tag-pill--dimmed {
  opacity: 0.48;
}
</style>
