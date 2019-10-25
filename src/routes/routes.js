import express from 'express';
import notesController from '../controllers/notesController';

const routes = express.Router();

// Create route
routes.post('/notes', notesController.createNote);

// Get all notes
routes.get('/notes', notesController.getAllNotes);

// Get one note
routes.get('/notes/:id', notesController.getOneNote);

// Update Note
routes.put('/notes/:id', notesController.updateNote);

// delete Note 
routes.delete('/notes/:id', notesController.deleteNote);

export default routes
