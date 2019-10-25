import express from 'express';
import notesController from '../controllers/notesController';
import middleware from '../middleware';
import userController from '../controllers/usersController';
import Auth from '../middleware/auth';

const routes = express.Router();

// Create route
routes.post('/notes', Auth, middleware.validateCreateInput, notesController.createNote);

// Get all notes
routes.get('/notes', Auth, notesController.getAllNotes);

// Get one note
routes.get('/notes/:id', Auth, notesController.getOneNote);

// Update note
routes.put('/notes/:id', Auth, middleware.validateUpdateInput, middleware.getNote, notesController.updateNote);

// Delete note 
routes.delete('/notes/:id', Auth, middleware.getNote, notesController.deleteNote);

// Create user
routes.post('/auth/signup', middleware.validateCreateUserInput, userController.signUp);

// Login
routes.post('/auth/signin', userController.signIn)

export default routes
