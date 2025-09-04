import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Centered Nav Items for Desktop */}
        <div className="hidden md:flex justify-center space-x-6 text-gray-800 font-medium flex-1">
          <Link to="/">Home</Link>
          <Link to="/kids-piano">Kids Piano</Link>
          <Link to="/piano-theory-course">Piano & Theory</Link>
          <Link to="/songwriting-class">Songwriting</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/about-me">About</Link>
          <a href="#contact">Contact</a>
        </div>

        {/* CTAs (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://portal.ashwinmusic.com/login"
            className="inline-block border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition font-medium"
          >
            Login
          </a>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition font-medium"
          >
            Book a Free Trial
          </a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow">
          <div className="flex flex-col space-y-3 text-gray-800 font-medium">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/kids-piano" onClick={toggleMenu}>
              Kids Piano
            </Link>
            <Link to="/piano-theory-course" onClick={toggleMenu}>
              Piano & Theory
            </Link>
            <Link to="/songwriting-class" onClick={toggleMenu}>
              Songwriting
            </Link>
            <Link to="/workshops" onClick={toggleMenu}>
              Workshops
            </Link>
            <Link to="/about-me" onClick={toggleMenu}>
              About
            </Link>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
            <a
              href="https://portal.ashwinmusic.com/login"
              className="mt-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition"
              onClick={toggleMenu}
            >
              Login
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              onClick={toggleMenu}
            >
              Book a Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
