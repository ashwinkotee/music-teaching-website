// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-4">🎹 Ready to Start Your Musical Journey?</h2>
      <a
        href="#contact"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Register Now
      </a>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ashwin Kumar | All rights reserved.
      </div>

      {/* Optional Socials */}
      {/* <div className="mt-4 space-x-4">
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">YouTube</a>
        <a href="#" className="hover:underline">Spotify</a>
      </div> */}
    </footer>
  );
};

export default Footer;
