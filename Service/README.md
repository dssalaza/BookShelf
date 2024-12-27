Final-BE

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

## Check that books are being retrieved

`http://localhost:5000/api/v1/book/`
