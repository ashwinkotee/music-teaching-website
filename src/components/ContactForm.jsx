import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xkgbgjnk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Address Section */}
        <div className="md:w-1/4 space-y-4">
          <h3 className="text-xl font-semibold">Ashwin Kumar</h3>
          <p>27 Langevin Drive,<br />Lower Sackville,<br />B4C 1P5, Nova Scotia, Canada</p>
          <p><strong>Email:</strong> ashwinkumar7496@gmail.com</p>
          <p><strong>Phone:</strong> +1 (782) 409-5797</p>
        </div>

        {/* Right Section */}
        <div className="md:w-3/4">
          {submitted ? (
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center space-y-6">
              <p className="text-xl text-black-600 dark:text-green-400">Thanks for reaching out! I'll be in touch soon.</p>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border rounded dark:bg-gray-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 border rounded dark:bg-gray-800"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="w-full p-3 border rounded dark:bg-gray-800"
              />
              <textarea
                name="message"
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
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
