# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Copy all project files into the container
COPY . .

# Install dependencies
RUN npm install

# Build the Vite app for production
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
