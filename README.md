# shark-about-me

Personal portfolio site, built with Vue 3 and Vite. The site presents projects, publications, and notes in a lightweight single-page app.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Markdown-it, KaTeX, Mermaid

## Local Development

Use Node `^20.19.0 || >=22.12.0` and `pnpm`.

```sh
pnpm install
pnpm dev
```

Useful commands:

- `pnpm dev` starts the local development server
- `pnpm build` runs type-checking and creates a production build
- `pnpm preview` serves the production build locally
- `pnpm lint` runs Oxlint and ESLint with fixes
- `pnpm format` formats files under `src/`

## Project Structure

- `src/` application code, routes, components, and typed content definitions
- `src/data/` portfolio and site content used by the UI
- `public/` static assets such as images, PDFs, and published notes
- `data/` generated or external content inputs used by the app
