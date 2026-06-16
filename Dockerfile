# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from the build stage
# Note: Vite builds to 'dist' by default
COPY --from=build /app/dist /usr/share/nginx/html



# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
