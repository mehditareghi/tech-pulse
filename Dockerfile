# Base on official Node.js image
FROM node:16.14.2-alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install project dependencies
RUN npm ci --unsafe-perm=true

# Install necessary packages
RUN apk update && apk add --no-cache \
    build-base \
    libjpeg-turbo-dev \
    libpng-dev \
    pkgconf \
    zlib-dev \
    curl \
    glib-dev \
    gobject-introspection-dev

# Install libvips from precompiled binaries
RUN curl -sLO https://github.com/libvips/libvips/releases/download/v8.12.2/vips-8.12.2.tar.gz \
    && tar xf vips-8.12.2.tar.gz \
    && rm vips-8.12.2.tar.gz \
    && cd vips-8.12.2 \
    && ./configure --prefix=/usr \
    && make \
    && make install \
    && cd .. \
    && rm -rf vips-8.12.2

# Set environment variables for libvips
ENV LD_LIBRARY_PATH=/usr/lib

# Install specific version of sharp with --unsafe-perm flag
RUN npm install --global sharp@0.27.2 --unsafe-perm=true --allow-root

# Cleanup unnecessary dependencies
RUN apk del build-base curl

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js base image
USER node

# Run npm start script with PM2 when the container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
