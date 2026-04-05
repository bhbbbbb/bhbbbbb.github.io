export interface NoteManifestItem {
  slug: string
  title: string
  group: string
  navVisibility?: string
  // sourcePath: string
}

export interface NoteManifest {
  version: number
  exportedAt: string
  notes: NoteManifestItem[]
}

export interface NoteTreeNode {
  label: string
  path: string
  note?: NoteManifestItem
  children: NoteTreeNode[]
}

export interface NoteHeading {
  id: string
  level: number
  text: string
}

export interface NoteFrontmatter {
  title?: string
  author?: string
  created?: string
  last_modified?: string
  date?: string
  'creation date'?: string
  updated?: string
  tags?: string[]
  section?: string
  slug?: string
  description?: string
  summary?: string
  source_path?: string
  nav_visibility?: string
  [key: string]: unknown
}
