import { parseFrontmatter } from '@/utils/markdown'
import type { NoteFrontmatter, NoteManifest } from '@/types/note'

let manifestCache: NoteManifest | null = null
const frontmatterCache = new Map<string, NoteFrontmatter>()

export async function loadManifest(): Promise<NoteManifest> {
  if (manifestCache) return manifestCache

  const res = await fetch('/notes/notes-manifest.json')
  if (!res.ok) throw new Error('Failed to load manifest')

  manifestCache = await res.json()
  return manifestCache!
}

export async function getNoteBySlug(slug: string) {
  const manifest = await loadManifest()
  return manifest.notes.find((n) => n.slug === slug) ?? null
}

export async function loadNoteFrontmatter(slug: string): Promise<NoteFrontmatter> {
  const cached = frontmatterCache.get(slug)
  if (cached) return cached

  const res = await fetch(`${slug}.md`)
  if (!res.ok) throw new Error(`Failed to load note metadata (${res.status})`)

  const raw = await res.text()
  const frontmatter = parseFrontmatter(raw).data as NoteFrontmatter
  frontmatterCache.set(slug, frontmatter)

  return frontmatter
}
