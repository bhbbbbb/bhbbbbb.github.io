import type { TagDef } from '@/types/tag'

export const tagDefs = [
  { id: 'ml', defaultLabel: 'Machine Learning', order: 10, featured: true },
  { id: 'llm', defaultLabel: 'LLMs', order: 20, featured: true },
  { id: 'graph', defaultLabel: 'Graph', order: 30, featured: true },
  { id: 'gnn', defaultLabel: 'Graph Neural Networks', order: 40, featured: true },
  { id: 'recsys', defaultLabel: 'Recommendation Systems', order: 50, featured: true },
  { id: 'ir', defaultLabel: 'Information Retrieval', order: 60, featured: true },
  { id: 'lora', defaultLabel: 'LoRA', order: 70, featured: true },
  { id: 'xai', defaultLabel: 'XAI', order: 80, featured: true },
  { id: 'dgl', defaultLabel: 'DGL', order: 90, featured: true },
  { id: 'ts', defaultLabel: 'TypeScript', order: 100, featured: true },
  { id: 'vscode-ext', defaultLabel: 'VSCode Extension', order: 110, featured: true },
  { id: 'ahk', defaultLabel: 'AutoHotkey', order: 120, featured: true },
  { id: 'rdb', defaultLabel: 'Relational Database', order: 130, featured: true },
  { id: 'atomhin', defaultLabel: 'Atomic HINs', order: 1000, featured: false },
  { id: 'betag', defaultLabel: 'BETag', order: 1000, featured: false },
  { id: 'synhing', defaultLabel: 'SynHING', order: 1000, featured: false },
  { id: 'ms', defaultLabel: 'M.S.', order: 1000, featured: false },
  { id: 'bs', defaultLabel: 'B.S', order: 1000, featured: false },
] as const satisfies readonly TagDef[]
