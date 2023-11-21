# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Environment variables for the database configuration
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=your-password
ENV DB_DATABASE=your-database

# Run the app when the container launches
CMD ["npm", "start"]
