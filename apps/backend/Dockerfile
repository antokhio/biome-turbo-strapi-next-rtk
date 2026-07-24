# ==========================================
# Stage 1: Builder
# ==========================================
FROM node:24.18.0-alpine AS builder

# Required for some Node native modules on Alpine
RUN apk add --no-cache libc6-compat

# Enable pnpm natively
RUN corepack enable pnpm

WORKDIR /app

# Copy workspace and use pnpm dlx to run turbo without global installs
COPY . .
RUN pnpm dlx turbo prune backend --docker

# ==========================================
# Stage 2: Installer
# ==========================================
FROM node:24.18.0-alpine AS installer

# Install build tools often required by Strapi/SQLite/Sharp native modules
RUN apk add --no-cache python3 make g++ 

RUN corepack enable pnpm
WORKDIR /app

COPY .gitignore .gitignore

# Copy the pruned lockfile and package.json's
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Skip root lifecycle scripts because Git hooks are not needed in image builds.
RUN pnpm install --frozen-lockfile --ignore-scripts

# Run pending dependency scripts required by native packages such as Sharp.
RUN pnpm rebuild --pending

# Copy the actual source code
COPY --from=builder /app/out/full/ .

# Build the Strapi backend
RUN pnpm dlx turbo run build --filter=backend

# ==========================================
# Stage 3: Runner
# ==========================================
FROM node:24.18.0-alpine AS runner

# Install vips-dev runtime dependency for Strapi's image optimization (Sharp)
RUN apk add --no-cache vips-dev

WORKDIR /app

# Create a secure, non-root user specifically for Strapi
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 strapi
USER strapi

# Copy built app from the installer stage, ensuring proper ownership
COPY --from=installer --chown=strapi:nodejs /app ./

# Start the Strapi application
CMD cd apps/backend && pnpm start