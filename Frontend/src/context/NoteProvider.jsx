import React, { useState, useEffect, useCallback } from "react";
import BACKEND_URL from "../api/url";
import NoteContext from "./NoteContext";

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Toast State
  const [toast, setToast] = useState({ message: "", type: "" });

  // ✅ Toast Helper
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2000);
  };

  // ✅ GET Notes (memoized for useEffect dependency)
  const getNotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await BACKEND_URL.get("get-notes");
      setNotes(response.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to fetch notes");
      showToast("Failed to fetch notes ❌", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  // ✅ CREATE Note
  const createNote = async (note) => {
    try {
      await BACKEND_URL.post("create-note", note);
      await getNotes(); // refresh notes immediately
      showToast("Note Added ✅", "success");
    } catch (err) {
      console.error("Error adding note:", err);
      showToast("Failed to add note ❌", "error");
    }
  };

  // ✅ UPDATE Note
  const updateNote = async (id, updatedNote) => {
    try {
      await BACKEND_URL.put(`update-note/${id}`, updatedNote);
      await getNotes(); // refresh notes immediately
      showToast("Note Updated ✍️", "warning");
    } catch (err) {
      console.error("Error updating note:", err);
      showToast("Failed to update note ❌", "error");
    }
  };

  // ✅ DELETE Note
  const deleteNote = async (id) => {
    try {
      await BACKEND_URL.delete(`delete-note/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      showToast("Note Deleted 🗑️", "error");
    } catch (err) {
      console.error("Error deleting note:", err);
      showToast("Failed to delete note ❌", "error");
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        loading,
        error,
        toast,
        getNotes,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};