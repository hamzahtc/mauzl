# Using a specific version of Node.js with Alpine Linux for a smaller image size
FROM node:20.11.1-alpine AS base
WORKDIR /app

# Build stage where the application is built
FROM base AS build
COPY package*.json ./
# Install all dependencies including devDependencies necessary for building the app
RUN npm install --frozen-lockfile
# Copy the source code of the application
COPY . .
# Build the application, assuming the use of Nest.js CLI
RUN npm run build
# Setting NODE_ENV to production to skip unnecessary hooks and optimize install
ENV NODE_ENV=production
# Reinstall only production dependencies to reduce image size
RUN npm install --frozen-lockfile --production

# Release stage that will be the final image
FROM base AS release
ENV NODE_ENV=production
WORKDIR /app
# Copy only necessary files from the build stage to the release stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
# Expose the port the application listens on
EXPOSE 3000
# Command to run the application
CMD ["node", "dist/main.js"]
