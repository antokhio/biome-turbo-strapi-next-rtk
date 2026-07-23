# Project Architecture & Stack Summary

This repository is a modern monorepo orchestrated with **Turborepo** and **pnpm**, featuring a decoupled architecture with a Next.js frontend and a Strapi headless CMS backend.

## 🏗️ Architecture & Global Tooling

* **Package Manager:** pnpm
* **Monorepo Tooling:** Turborepo
* **Code Quality:** Biome (root-level workspace configuration)
* **Git Hooks:** Lefthook installs a pre-commit hook through `pnpm prepare`; it runs Biome checks on staged JavaScript, TypeScript, JSX, TSX, and JSON files.
* **Language:** TypeScript (Strict Mode)
* **Runtime:** Node.js v24.18.0

## 📦 Workspace Applications

### Frontend (`/apps/frontend`)

* **Framework:** Next.js (Pages Router)
* **UI Library:** Material UI (MUI) (TODO)
* **State Management:** Redux Toolkit with `next-redux-wrapper` (TODO)
* **Linting Strategy:** Biome handles formatting, linting, and import organization.

### Backend (`/apps/backend`)

* **Framework:** Strapi (v5+)
* **Database:** SQLite (Local Development)
* **Linting Strategy:** Biome. The local configuration extends the root workspace configuration.

### Shared configuration (`/packages/typescript-config`)

The frontend and backend extend dedicated Next.js and Strapi TypeScript presets from the shared internal package. App-level `tsconfig.json` files contain only app-specific paths and file scopes.

## 🚀 Available Scripts

From the root of the repository, Turborepo orchestrates the following tasks across all workspaces:

* `pnpm dev`: Launches both the Next.js frontend and the Strapi backend development servers simultaneously.
* `pnpm build`: Builds the applications with Turborepo caching.
* `pnpm lint`: Executes Biome checks in both applications through Turborepo.
* `pnpm lint:fix`: Applies safe Biome lint, formatting, and import fixes in both applications.
* `pnpm format`: Formats the whole repository with Biome.
* `pnpm check-types`: Runs `tsc --noEmit` in both applications through Turborepo.

## 🛠️ Package Manager Overrides

To prevent binary conflicts and hoisting issues across the frontend and backend, the workspace enforces a strict unified version of `esbuild` using the `"pnpm.overrides"` block in the root `package.json`.

---

[Building a Full-Stack Monorepo](https://www.youtube.com/watch?v=bH87ZUYp1GU)

This video walkthrough on building a production-grade application provides great architectural insights into structuring a TypeScript monorepo with Turborepo and Next.js.