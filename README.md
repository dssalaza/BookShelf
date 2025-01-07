# BOOKSHELF Project README

This project consists of two main components:
- **Frontend (FE):** `Book-list`
- **Backend (BE):** `Service`

Both components are designed to run locally using Docker Compose.

## Prerequisites

Ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup and Installation

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### File Structure
The project is organized as follows:
```
.
├── docker-compose.yml
├── docker-compose.debug.yml
├── frontend/  # Contains the Book-list frontend code
├── backend/   # Contains the Service backend code
```

### Environment Variables

Environment variables need to be set in individial projects. Check `README.md` file of each project.

## Running the Project

### Start the Services
Make sure you are running your docker daemon (docker desktop)

Run the following command in the project root directory:
```bash
docker-compose up
```

### Access the Application
- **Frontend (Book-list):** [http://localhost:3000](http://localhost:3000)
- **Backend (Service):** [http://localhost:5000](http://localhost:5000)

### Stopping the Services
To stop the services, press `Ctrl+C` or run:
```bash
docker-compose down
```
Note: If it is the first time running the project then it will take some time as the images need to be build

## Development Notes

### Frontend Development
Navigate to the `Book-list/` directory and install dependencies:
```bash
cd Book-list
npm install
```
Run the development server:
```bash
npm start
```

### Backend Development
Navigate to the `Service/` directory and install dependencies:
```bash
cd Service
npm install
```
Run the backend server:
```bash
npm run start
```

## Troubleshooting

- **Ports in use:** If ports `3000` or `5000` are already in use, stop the conflicting services or update the ports in `docker-compose.yml`.
- **Docker issues:** Ensure Docker and Docker Compose are running and up-to-date.
