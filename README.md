# NOTES
Notes CRUD

# Project Overview
Notes Api enables users to save important notes.

# Features
- Users can create an account.
- Users can log in.
- Users can create a note.
- Users can modify a note.
- Users can get all personal notes.
- Users can get a note.

# Built with
- JavaScript
- Node.js
- Express framework

# Api Endpoints
- GET `/api/v1/notes` - Gets all user notes
- GET `/api/v1/notes/:id` - Gets a note by id
- POST `/api/v1/notes` - Creates a note
- PUT `/api/v1/notes/:id` - Updates a note
- DELETE `/api/v1/notes/:id` - Deletes a note
- POST `/api/v1/auth/signup` - Signs up a new user
- POST `/api/v1/auth/signin` - Logs a user in

# Installation
- $ git clone 'https://github.com/adaezeodurukwe/notes'
- $ cd notes
- $ npm i , to install dependencies
- $ npm run createtable - to create required tables
- $ npm start, to start the server Once the server starts-up, you can query the api at 'http://localhost:8000/api/v1' using the end points stated above.

# Env Variables
- PORT 
- DATABASE_URL
- SECRET
