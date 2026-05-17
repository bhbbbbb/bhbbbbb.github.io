# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vue 3 + Vite site. Main app code lives in `src/`, with page components in `src/pages`, reusable UI in `src/components`, route setup in `src/router`, static data in `src/data`, shared helpers in `src/utils`, and TypeScript types in `src/types`. Public assets such as images and PDFs live in `public/`. Build output goes to `dist/` and should not be edited manually. A small workspace utility for sync tasks lives in `scripts/external-sync/`.

## Build, Test, and Development Commands

Use `pnpm install` with Node `^20.19.0 || >=22.12.0`.

- `pnpm dev`: start the local Vite dev server.
- `pnpm build`: run `vue-tsc` type-checking, then create a production build.
- `pnpm preview`: serve the built app locally.
- `pnpm lint`: run Oxlint and ESLint with auto-fixes.
- `pnpm format`: run Prettier on `src/`.
- `pnpm --filter external-sync sync`: run the workspace sync script in `scripts/external-sync`.
