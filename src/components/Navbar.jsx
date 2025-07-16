import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Centered Menu Items */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link to="/">Home</Link>
          <Link to="/kids-piano">Kids Piano</Link>
          <Link to="/piano-theory-course">Piano & Theory</Link>
          <Link to="/songwriting-class">Songwriting</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/about-me">About</Link>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA Button - Right Aligned */}
        <a
          href="#contact"
          className="hidden md:inline-block absolute right-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Book a Free Trial
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
