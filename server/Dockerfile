# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app


RUN apk update
RUN apk add pandoc 

# Copy package.json and package-lock.json to the working directory




# Copy the rest of the application code
COPY . .

RUN npm install

WORKDIR /usr/src/app/database

#RUN npx prisma db push
RUN npm install
RUN npm install nodemon 
RUN npm install zod 
RUN npm install -g typescript
RUN npx prisma generate


#RUN cd server
WORKDIR /usr/src/app

# Install dependencies

#RUN rm -r ./uploads
#RUN rm -r ./books
RUN mkdir ./uploads
RUN mkdir ./books

# Expose the port Express.js is running on
EXPOSE 3030

# Start the Express.js app
CMD ["npm","run", "dev"]
