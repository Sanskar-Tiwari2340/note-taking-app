import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Toast from "./components/Toast";
import NoteContext from "./context/NoteContext";
import Layout from "./components/Layout";

const App = () => {
  const { toast } = useContext(NoteContext);

  return (
    <div className="bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateNote />} />
        </Route>
      </Routes>
      {/* ✅ Global Toast */}
      <Toast message={toast.message} type={toast.type} />
    </div>
  );
};

export default App;