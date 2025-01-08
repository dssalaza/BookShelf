# Service

This is the backend part of the BOOKSHELF project, built with Node.js, Express, and MongoDB.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Environment Variables
Create a .env file in the root directory of this folder and add the following environment variables:

```bash
MONGO_URI=your-mongodb-uri-from-atlas
PORT=port-where-you-want-to-run-your-app

# By default Frontend expects the backend to run on port 5000
# PORT=5000
```

## Run Locally

Install dependencies

`npm install`

Start the project

`npm start`

## Run with Docker
Build image

`docker build -t your-image-name .`

Run container

`docker run -d -p 5000:5000 --name your-container-name your-image-name`

## Check the health endpoint

`http://localhost:5000/api/v1/book/health`
