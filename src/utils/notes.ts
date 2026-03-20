import type { NoteManifest } from '@/types/note'

let manifestCache: NoteManifest | null = null

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

