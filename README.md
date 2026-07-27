# Project Architecture & Stack Summary

This repository is a modern monorepo orchestrated with **Turborepo** and **pnpm**, featuring a decoupled architecture with a Next.js frontend and a Strapi headless CMS backend.

## 🏗️ Architecture & Global Tooling

* **Package Manager:** pnpm 11
* **Monorepo Tooling:** Turborepo
* **Code Quality:** Biome (root-level workspace configuration)
* **Git Hooks:** Lefthook installs a pre-commit hook through `pnpm prepare`; it runs Biome checks on staged JavaScript, TypeScript, JSX, TSX, and JSON files.
* **Language:** TypeScript (Strict Mode)
* **Runtime:** Node.js v24.18.0

## 📦 Workspace Applications

### Frontend (`/apps/frontend`)

* **Framework:** Next.js (Pages Router)
* **UI Library:** Material UI (MUI) with the Next.js Pages Router SSR cache provider. The component reference page is available at `/theme`.
* **State Management:** Redux Toolkit, React Redux, and `next-redux-wrapper` for store hydration.
* **Linting Strategy:** Biome handles formatting, linting, and import organization.

### Backend (`/apps/backend`)

* **Framework:** Strapi (v5+)
* **Database:** PostgreSQL
* **Linting Strategy:** Biome. The local configuration extends the root workspace configuration.

### Leadeer plugin (`/packages/leadeer`)

`@repo/leadeer` is a local Strapi plugin for sending leads. The backend loads it from the workspace path in `apps/backend/config/plugins.ts`.

* `pnpm --filter @repo/leadeer run build`: Builds the plugin's admin and server bundles.
* `pnpm --filter @repo/leadeer run watch`: Watches and rebuilds the plugin during plugin development.

Turbo builds workspace dependencies before starting development servers, so `pnpm dev` builds `@repo/leadeer` before Strapi starts.

### Shared types (`/apps/_shared`)

`@repo/shared` is a private, type-only workspace package. Strapi writes schema declarations to `apps/_shared/src/types/generated`; these files are committed so production builds and start commands consume existing types without running Strapi type generation.

Import generated schema interfaces with type-only imports:

```ts
import type { PluginUsersPermissionsUser } from "@repo/shared";
```

### Shared configuration (`/packages/typescript-config`)

The frontend and backend extend dedicated Next.js and Strapi TypeScript presets from the shared internal package. App-level `tsconfig.json` files contain only app-specific paths and file scopes.

## 🚀 Available Scripts

From the root of the repository, Turborepo orchestrates the following tasks across all workspaces:

* `pnpm dev`: Launches both the Next.js frontend and the Strapi backend development servers simultaneously.
* `pnpm types`: Regenerates the committed Strapi declarations in `@repo/shared`. It also runs automatically before `pnpm dev`.
* `pnpm build`: Builds the applications with Turborepo caching.
* `pnpm lint`: Executes Biome checks in both applications through Turborepo.
* `pnpm lint:fix`: Applies safe Biome lint, formatting, and import fixes in both applications.
* `pnpm format`: Formats the whole repository with Biome.
* `pnpm check-types`: Runs `tsc --noEmit` in both applications through Turborepo.

## 🐳 Docker Deployment

Docker Compose runs the Next.js frontend, Strapi backend, PostgreSQL database, and Nginx reverse proxy. Create the root deployment environment from the template and configure the Strapi secrets and `DATABASE_*` values in `apps/backend/.env`:

```sh
cp .env.example .env
docker compose up --build -d
```

The application is exposed at `http://localhost:8080`. Nginx routes `/` to the frontend and `/claustrum/` to Strapi. PostgreSQL data and Strapi uploads persist in `volumes/data` and `volumes/public`.

## 🛠️ Package Manager Overrides

To prevent binary conflicts and hoisting issues across the frontend and backend, the workspace enforces a strict unified version of `esbuild` through `pnpm-workspace.yaml`.

---

[Building a Full-Stack Monorepo](https://www.youtube.com/watch?v=bH87ZUYp1GU)

This video walkthrough on building a production-grade application provides great architectural insights into structuring a TypeScript monorepo with Turborepo and Next.js.