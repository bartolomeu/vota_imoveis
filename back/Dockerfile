# Download the slim version of node
FROM node:20

# Set the work directory to app folder. 
# We will be copying our code here
WORKDIR /back

#Copy package.json file in the node folder inside container
COPY package.json .

# Install the dependencies in the container
RUN npm install

# Copy the rest of the code in the container
COPY . .

# Run the node server with server.js file  
# change command to run in PRD npm run build && npm start
CMD ["npm", "run", "start:dev"]

# Expose the service over PORT 3000
EXPOSE 3001