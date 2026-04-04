# Build stage
FROM node:22-alpine AS build
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Runtime stage
FROM node:22-alpine
WORKDIR /app

RUN npm install -g http-server

# Copiar solo la carpeta dist del build
COPY --from=build /app/dist ./dist

EXPOSE 5173
CMD ["http-server", "dist"]