# Node + React + MongoDB template

This template contains:
* a backend (folder 'server') running on Node.js
* a frontend (folder 'client') based on the React library, started with Vite
* a MongoDB database hosted in the MongoDB Atlas cloud service

The package.json is shared by both backend and frontend.

Dependencies installed for server: `express`, `express-async-errors`, `cors`, `mongoose` and `dotenv`

Dependencies installed for client: `axios`

Development dependencies: `nodemon`

## Commands

* `npm run dev:server`: run the server in development mode, using nodemon
* `npm run dev:client`: run the client in development mode
* `npm run start`: run the server in production mode (will also serve the frontend)

## Requirements

A .env file is required in the root folder, containing the following variables:
* `PORT`: the port on which the server will run
* `MONGODB_URI`: the URI of the MongoDB database