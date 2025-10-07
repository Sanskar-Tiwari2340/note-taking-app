import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const NoteCard = ({ note }) => {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = () => {
    updateNote(note._id, editData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all p-5 flex flex-col h-full">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border rounded-lg p-2 w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white placeholder-gray-400"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            className="border rounded-lg p-2 w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white placeholder-gray-400"
            rows="3"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-white mb-2">{note.title}</h2>
          <p className="text-gray-300 flex-1 mb-4">{note.content}</p>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>
              {note.createdAt
                ? new Date(note.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Just now"}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;