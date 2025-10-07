import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

function Noteform() {
  const { createNote } = useContext(NoteContext)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  // Button state
  const [btnText, setBtnText] = useState("Add Note")
  const [btnColor, setBtnColor] = useState("bg-blue-600 hover:bg-blue-700")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!note.title || !note.content) return

    // Show adding state
    setBtnText("Adding...")
    setBtnColor("bg-blue-500 cursor-not-allowed")

    // Create note
    await createNote(note)

    // Reset form
    setNote({ title: "", content: "" })

    // Show success
    setBtnText("Note Added")
    setBtnColor("bg-green-500 hover:bg-green-600")

    // Reset button after 2s
    setTimeout(() => {
      setBtnText("Add Note")
      setBtnColor("bg-blue-600 hover:bg-blue-700")
    }, 2000)
  }

  return (
    <div className="max-w-xl mx-auto mt-8 sm:mt-12 md:mt-20 bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-400 mb-6">Create a New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter title..."
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Write your note here..."
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="5"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <button
          type="submit"
          className={`w-full transition text-white font-semibold py-2 rounded-lg shadow-md ${btnColor}`}
        >
          {btnText}
        </button>
      </form>
    </div>
  )
}

export default Noteform