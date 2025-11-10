# syntax=docker/dockerfile:1.7

# ---- Base image with Bun (build deps) ----
FROM oven/bun:1.2.23 as base
WORKDIR /app

# ---- Dependencies layer (cacheable) ----
FROM base as deps
# Copy only manifest files for better caching
COPY package.json bun.lock ./
# If you use workspaces/monorepo, also copy the workspace files:
# COPY packages/*/package.json packages/*/bun.lockb ./

# Install production + dev deps for building
RUN bun install --frozen-lockfile

# ---- Builder ----
FROM base as builder
WORKDIR /app

# Copy installed deps from deps layer
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /usr/local/bin/bun /usr/local/bin/bun

# Copy source
COPY . .

# Ensure Next runs with Bun runtime
# NEXT_RUNTIME can help for Edge/Node decisions; we keep default Next server runtime.
# If you're using experimental Bun runtime flags in Next, set them here.
ENV NODE_ENV=production

# Build the Next.js app (standalone output)
# next build will emit .next/standalone for server and .next/static for assets
RUN bun x next build

# ---- Runner (minimal) ----
FROM oven/bun:1.2.23 as runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Copy standalone server and public assets
# .next/standalone contains the server output with minimal node_modules
COPY --from=builder /app/.next/standalone ./
# Static assets
COPY --from=builder /app/.next/static ./.next/static
# Public files
COPY --from=builder /app/public ./public
# Copy the migration script
COPY --from=builder /app/scripts ./scripts
# Copy the startup script
COPY start.sh ./start.sh
RUN chmod +x start.sh
# If using next.config.js at runtime (rare), copy it:
# COPY --from=builder /app/next.config.js ./

# Expose port
EXPOSE 3000

# Start with the startup script
CMD ["./start.sh"]
