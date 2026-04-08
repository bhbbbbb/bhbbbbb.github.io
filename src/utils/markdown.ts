import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import { footnote } from '@mdit/plugin-footnote'
// @ts-expect-error no-ts
import callouts from 'markdown-it-obsidian-callouts'
import 'katex/dist/katex.min.css'
import type { NoteFrontmatter, NoteHeading } from '@/types/note'

function slugifyHeading(value: string): string {
  return (
    value
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
      .trim()
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  )
}

function normalizeFrontmatter(data: Record<string, unknown>): NoteFrontmatter {
  const normalized: NoteFrontmatter = {}

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      normalized[key] = value.map((item) => String(item))
      continue
    }

    normalized[key] = typeof value === 'string' ? value : value == null ? undefined : String(value)
  }

  return normalized
}

function parseScalarValue(value: string): string {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

export function parseFrontmatter(raw: string): { content: string; data: Record<string, unknown> } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { content: raw, data: {} }

  const lines = (match[1] ?? '').split(/\r?\n/)
  const data: Record<string, unknown> = {}
  let currentArrayKey: string | null = null

  for (const line of lines) {
    const arrayMatch = line.match(/^\s*-\s+(.*)$/)
    if (arrayMatch && currentArrayKey) {
      const current = data[currentArrayKey]
      if (Array.isArray(current)) {
        current.push(parseScalarValue(arrayMatch[1] ?? ''))
      }
      continue
    }

    currentArrayKey = null

    const colon = line.indexOf(':')
    if (colon === -1) continue

    const key = line.slice(0, colon).trim()
    const rawValue = line.slice(colon + 1)
    if (!key) continue

    if (rawValue.trim() === '') {
      data[key] = []
      currentArrayKey = key
      continue
    }

    data[key] = parseScalarValue(rawValue)
  }

  return { content: match[2] ?? '', data }
}

function createMarkdownRenderer(headings: NoteHeading[]) {
  const slugCounts = new Map<string, number>()
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })

  md.use(katex)
  md.use(footnote)
  md.use(callouts)

  const defaultHeadingOpen =
    md.renderer.rules.heading_open ??
    ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))
  const defaultFence =
    md.renderer.rules.fence ??
    ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token) return defaultHeadingOpen(tokens, idx, options, env, self)

    const inline = tokens[idx + 1]
    const level = Number(token.tag.slice(1))
    const text = inline?.type === 'inline' ? inline.content.trim() : ''
    const baseId = slugifyHeading(text)
    const count = slugCounts.get(baseId) ?? 0
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`

    slugCounts.set(baseId, count + 1)
    token.attrSet('id', id)

    if (text) {
      headings.push({ id, level, text })
    }

    return defaultHeadingOpen(tokens, idx, options, env, self)
  }

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token) return defaultFence(tokens, idx, options, env, self)

    if (token.info.trim() === 'table-of-contents') {
      return ''
    }

    return defaultFence(tokens, idx, options, env, self)
  }

  return md
}

export function parseMarkdown(raw: string) {
  const parsed = parseFrontmatter(raw)
  const headings: NoteHeading[] = []
  const md = createMarkdownRenderer(headings)
  const frontmatter = normalizeFrontmatter(parsed.data)
  const html = md.render(parsed.content)
  const title =
    typeof frontmatter.title === 'string' && frontmatter.title.trim().length > 0
      ? frontmatter.title
      : headings.find((heading) => heading.level === 1)?.text

  return {
    html,
    frontmatter,
    headings,
    title,
  }
}
