export interface NoteManifestItem {
  slug: string
  title: string
  group: string
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
