FROM node:20.9.0 AS node
WORKDIR /app

# Add build argument
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_CLARITY_PROJECT_ID

FROM node AS composer
COPY package*.json ./
RUN npm install
ADD . ./

# Set environment variable inside the build process
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_CLARITY_PROJECT_ID=${NEXT_PUBLIC_CLARITY_PROJECT_ID}

RUN npm run build

FROM node AS runner
ENV NODE_ENV production

COPY --from=composer /app/node_modules ./node_modules
COPY --from=composer /app/.next ./.next
COPY --from=composer /app/public ./public
COPY --from=composer /app/package.json ./package.json
COPY --from=composer /app/next.config.mjs ./

EXPOSE 3000
CMD ["npm", "start"]
