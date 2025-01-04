# Stage 1: Builder
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy only package files to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (replace with your actual build command)
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app . 

# Expose the application port
EXPOSE 5000

# Start the application
CMD [ "npm", "run", "dev" ]
