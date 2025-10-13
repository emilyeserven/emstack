# Stage 1: The `base` stage sets up the environment and installs pnpm
# We use a slim Node.js image to keep the overall image size small.
FROM node:22-bookworm-slim AS base

# Set environment variables for pnpm to ensure it's on the PATH.
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Install pnpm globally and enable it with Corepack.
# This ensures consistency with the lockfile.
RUN npm install -g corepack
RUN corepack enable

FROM base AS devbuild

# Set the working directory for the application inside the container.
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first.
# This leverages Docker's build cache, so if these files don't change,
# the dependencies won't be reinstalled on every build.
COPY . .

# Mount the pnpm store as a cache. This dramatically speeds up builds
# by preventing re-downloads of packages.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENV FASTIFY_ADDRESS=0.0.0.0

RUN pnpm run -r build

RUN pnpm deploy --filter=@emstack/client --prod appout

# Stage 3: The `final` stage creates a small, clean production image.
# It only includes the necessary files to run the app, not the build tools.
FROM gcr.io/distroless/nodejs22

USER nonroot

WORKDIR /app

ENV NODE_ENV=production

# Copy the built assets from the 'build' stage into the final image.
# The 'dist' directory is the default output for Vite.
COPY --from=devbuild /app/appout/ .

# Define the command to start the application.
# This command assumes you have a `pnpm start` script in your `package.json`
# to serve the static files from the 'dist' directory.
CMD ["server.js"]

# Expose the port the application will run on. Vite's dev server defaults to 5173,
# but your application might serve the static assets on a different port.
# If you are using a separate server like Nginx, you would expose that port instead.
EXPOSE 3000