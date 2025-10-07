import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { NoteProvider } from './context/NoteProvider.jsx' // ✅ correct import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NoteProvider>
      <App />
    </NoteProvider>
  </BrowserRouter>
)