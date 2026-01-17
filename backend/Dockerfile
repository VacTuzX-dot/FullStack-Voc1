# ===================================
# Backend Dockerfile (Node.js + pnpm)
# ===================================
FROM node:22-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
FROM base AS deps
RUN pnpm install --frozen-lockfile || pnpm install

# Production build
FROM base AS runner

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
