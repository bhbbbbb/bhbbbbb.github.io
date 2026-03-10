import type { FilterDef } from '@/types/filter'

export const filterDefs = [
  { id: 'python', defaultLabel: 'Python', order: 9, featured: true },
  { id: 'ml', defaultLabel: 'Machine Learning', order: 10, featured: true },
  { id: 'llm', defaultLabel: 'LLMs', order: 20, featured: true },
  { id: 'graph', defaultLabel: 'Graph', order: 30, featured: true },
  { id: 'gnn', defaultLabel: 'Graph Neural Networks', order: 40, featured: true },
  { id: 'recsys', defaultLabel: 'Recommendation Systems', order: 50, featured: true },
  { id: 'ir', defaultLabel: 'Information Retrieval', order: 60, featured: false },
  { id: 'lora', defaultLabel: 'LoRA', order: 70, featured: true },
  { id: 'pydantic', defaultLabel: 'Pydantic', order: 70, featured: true },
  { id: 'xai', defaultLabel: 'XAI', order: 80, featured: false },
  { id: 'dgl', defaultLabel: 'DGL', order: 90, featured: true },
  { id: 'ts', defaultLabel: 'TypeScript', order: 100, featured: false },
  { id: 'vscode-ext', defaultLabel: 'VSCode Extension', order: 110, featured: false },
  { id: 'ahk', defaultLabel: 'AutoHotkey', order: 120, featured: false },
  { id: 'rdb', defaultLabel: 'Relational Database', order: 130, featured: false },

  // Metas
  { id: 'atomhin', defaultLabel: 'AtomHIN', order: 1000, isMeta: true },
  { id: 'betag', defaultLabel: 'BETag', order: 1001, isMeta: true },
  { id: 'synhing', defaultLabel: 'SynHING', order: 1002, isMeta: true },
  { id: 'ahkdoc', defaultLabel: 'AHKDoc', order: 1002, isMeta: true },
  { id: 'ms', defaultLabel: 'M.S.', order: 1003, isMeta: true },
  { id: 'bs', defaultLabel: 'B.S.', order: 1004, isMeta: true },
] as const satisfies readonly FilterDef[]
