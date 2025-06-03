// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook to backend/email service (e.g., EmailJS, Formspree)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded dark:bg-gray-800"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone (optional)"
          className="w-full p-3 border rounded dark:bg-gray-800"
        />
        <textarea
          placeholder="Message"
          required
          className="w-full p-3 border rounded dark:bg-gray-800"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
        {submitted && <p className="text-green-600 dark:text-green-400 mt-4 text-center">Thanks! I'll be in touch soon.</p>}
      </form>
    </section>
  );
};

export default ContactForm;
