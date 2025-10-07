import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteCard from "../components/NoteCard";

function Home() {
  const { notes, loading, error } = useContext(NoteContext);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full mt-20">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-full mt-20">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  // No notes
  if (notes.length === 0) {
    return (
      <div className="flex justify-center items-center h-full mt-20">
        <p className="text-gray-400 text-lg font-bold">No Notes Yet ✨</p>
      </div>
    );
  }

  // Render notes
  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 text-center">
        My Notes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Home;