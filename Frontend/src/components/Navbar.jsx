import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-blue-400" />
          <span className=" text-2xl text-blue-400 tracking-wide">
            NoteKeeper
          </span>
        </Link>

        {/* Links */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:space-x-6">
          <Link
            to="/"
            className={`hover:text-blue-400 transition ${
              location.pathname === "/" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`hover:text-blue-400 transition ${
              location.pathname === "/create" ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            Create Note
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;