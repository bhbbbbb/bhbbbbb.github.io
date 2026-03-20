import mermaid from 'mermaid'

mermaid.initialize({ startOnLoad: false })

export async function renderMermaid(container: HTMLElement) {
  const blocks = container.querySelectorAll('pre code.language-mermaid')

  for (const block of blocks) {
    const parent = block.parentElement
    if (!parent) continue

    const code = block.textContent || ''

    const div = document.createElement('div')
    div.className = 'mermaid'
    div.textContent = code

    parent.replaceWith(div)
  }

  await mermaid.run()
}
