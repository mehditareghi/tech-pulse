# Base on offical Node.js Alpine image
FROM node:16.14.2

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Check if the 'node' group exists, if not, create it
RUN getent group node || groupadd -r node

# Check if the 'node' user exists, if not, create it
RUN getent passwd node || useradd -r -g node node

# Set ownership to the node user
RUN chown -R node:node /usr/app

# Switch to the node user
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
