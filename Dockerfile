# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets and public files
COPY --from=build /app/.next/static /usr/share/nginx/html/.next/static
COPY --from=build /app/public /usr/share/nginx/html/public

CMD ["nginx", "-g", "daemon off;"]