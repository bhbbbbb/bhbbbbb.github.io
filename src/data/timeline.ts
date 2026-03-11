import type { RawTimelineDef } from '@/types/timeline'

export const timelineDefs = [
  {
    id: 'ms',
    title: 'M.S. in Data Science',
    organization: 'National Taiwan University',
    period: '2023 — 2026',
    tags: ['gnn', 'llm', 'recsys', 'ml'],
    // badge: '/ntu.svg',
  },
  {
    id: 'bs',
    title: 'B.S. in Electrical Engineering',
    organization: 'National Cheng Kung University',
    period: '2019 — 2023',
  },
] as const satisfies readonly RawTimelineDef[]
