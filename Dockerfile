# Etapa 1: build + tests
FROM node:18-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ejecutar tests
RUN npm test

# Ejecutar build
RUN npm run build

# Etapa 2: runtime
FROM node:18-slim

WORKDIR /app

# Copiamos solo lo necesario desde la etapa de build
COPY --from=build /app/dist ./dist
COPY package*.json ./

# (Opcional) instalar solo dependencias de producción
RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/index.js"]
