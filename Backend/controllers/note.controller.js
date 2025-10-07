import Note from '../models/note.model.js';

export const createNote = async(req, res) => {
  try {

    const { title, content } = req.body;

    // Validate request body
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newNote = new Note({ title, content });
    await newNote.save();

    res.status(201).json({ message: 'Note created successfully', note: newNote });

  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message });
  }
};

export const getNotes = async(req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

export const updateNote = async(req, res) => {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note updated successfully', note: updateNote });
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
};

export const deleteNote = async(req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};