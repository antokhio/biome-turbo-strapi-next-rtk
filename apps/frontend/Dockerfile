# ==========================================
# Stage 1: Builder
# ==========================================
FROM node:24.18.0-alpine AS builder

# Required for some Node native modules on Alpine
RUN apk add --no-cache libc6-compat

# Enable pnpm natively (replaces the global yarn turbo installation)
RUN corepack enable pnpm

WORKDIR /app

# Copy workspace and use pnpm dlx to run turbo without global installs
COPY . .
RUN pnpm dlx turbo prune frontend --docker

# ==========================================
# Stage 2: Installer
# ==========================================
FROM node:24.18.0-alpine AS installer

# Install build tools required for Sharp/Next.js image optimization native modules
RUN apk add --no-cache python3 make g++ libc6-compat

RUN corepack enable pnpm
WORKDIR /app

COPY .gitignore .gitignore

# Copy the pruned lockfile and package.json's
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Skip root lifecycle scripts because Git hooks are not needed in image builds.
RUN pnpm install --frozen-lockfile --ignore-scripts

# Run the native dependency script required by Next.js image optimization.
RUN pnpm rebuild sharp

# Copy the actual source code
COPY --from=builder /app/out/full/ .

# Build the Next.js frontend
RUN pnpm dlx turbo run build --filter=frontend

# ==========================================
# Stage 3: Runner
# ==========================================
FROM node:24.18.0-alpine AS runner

WORKDIR /app

# Create a secure, non-root user specifically for Next.js
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy built app from the installer stage, ensuring proper ownership
COPY --from=installer --chown=nextjs:nodejs /app ./

# Start the Next.js application
CMD cd apps/frontend && pnpm start