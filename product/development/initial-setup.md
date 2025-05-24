# Initial Setup

## 1. Backend Boilerplate

- Create a backend application that listens on port **8000**.
- The backend must be fully **dockerized** and use a **MySQL** database (also running in Docker).
- Implement a single controller with a route at `/health` that returns a JSON response:  
  `{ "message": "ok" }`
- Provide clear instructions in the `README.md` on how to:
  - Build and run the backend using Docker
  - Set up and connect to the MySQL database
- The database connection must be set using the port 33033

## 1.1 Create .gitignore file for generated files or dependencies

## 2. Frontend Boilerplate

- Create a frontend application with a **home page**.
- The home page should make a request to the backend's `/health` endpoint and display the returned message.
- Ensure the frontend is set up with all necessary boilerplate code to run independently.