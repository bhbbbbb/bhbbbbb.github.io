import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import 'katex/dist/katex.min.css'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

md.use(katex)

function parseFrontmatter(raw: string): { content: string; data: Record<string, string> } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { content: raw, data: {} }

  const data: Record<string, string> = {}
  for (const line of match[1]!.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const value = line.slice(colon + 1).trim()
    if (key) data[key] = value
  }

  return { content: match[2] ?? '', data }
}

export function parseMarkdown(raw: string) {
  const { content, data } = parseFrontmatter(raw)
  const html = md.render(content)

  return {
    html,
    frontmatter: data,
  }
}
