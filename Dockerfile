# Base on offical Node.js Alpine image
FROM node:16.14.2

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./


# Install Husky
RUN npm install husky -g

# Install dependencies
RUN npm install

# Install additional dependencies required for build
RUN npm install --save-dev eslint @svgr/webpack

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
