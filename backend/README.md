# Teamify Backend

This is the backend service for the Teamify application, built with NestJS, TypeScript, and MySQL.

## Prerequisites

- Docker and Docker Compose
- Node.js (v20 or later)
- npm

## Running with Docker

1. Build and start the services:
```bash
docker-compose up --build
```

This will start both the backend service and MySQL database.

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start:dev
```

The backend will be available at http://localhost:8000

## API Endpoints

### Health Check
- GET `/health`
  - Returns: `{ "message": "ok" }`

## Database

The application uses MySQL as its database. When running with Docker, the database is automatically configured with the following credentials:

- Host: localhost
- Port: 33033
- Username: root
- Password: root
- Database: teamify

## Development

- `npm run build` - Build the application
- `npm run start:dev` - Start the development server with hot-reload
- `npm run start:prod` - Start the production server 