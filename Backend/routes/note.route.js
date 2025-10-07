import express from 'express';
import { createNote, getNotes, updateNote, deleteNote } from '../controllers/note.controller.js';

const router = express.Router();

router.post('/create-note', createNote); // Create a new note
router.get('/get-notes', getNotes); // Get all notes
router.put('/update-note/:id', updateNote); // Update a note by ID
router.delete('/delete-note/:id', deleteNote); // Delete a note by ID

export default router;