import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <div className="text-xl font-bold">
            <Link to="/">Junyong & Jaewon</Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl hover:text-gray-300 sm:hidden"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 items-center w-full sm:w-auto`}
        >
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/guest-book" className="hover:text-gray-300">
            Guest Book
          </Link>
          <Link to="/rsvp" className="hover:text-gray-300">
            RSVP
          </Link>
        </nav>
      </div>
    </header>
  );
}
