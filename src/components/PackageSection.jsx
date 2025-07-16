import { Link } from "react-router-dom";
import React, { useState } from "react";

const PackagesSection = () => {
  const [showGroup, setShowGroup] = useState(false);

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Piano & Music Theory Lessons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kids Music Class */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Kids Music Class</h3>
            <p className="mb-4">
              A playful and interactive introduction to music for young
              children.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-6">
              <li>Ages 3 – 5</li>
              <li>45-minute group classes</li>
              <li>4 sessions per month</li>
              <li>Small groups (3 – 5 kids)</li>
              <li>Foundational skills through fun and movement</li>
            </ul>
            <Link to="/kids-piano">
              <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Piano & Theory Accordion Card */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Piano & Theory Program
            </h3>

            {/* Toggle */}
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setShowGroup(false)}
                className={`px-3 py-1 rounded ${
                  !showGroup
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                One-on-One
              </button>
              <button
                onClick={() => setShowGroup(true)}
                className={`px-3 py-1 rounded ${
                  showGroup
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Group Class
              </button>
            </div>

            <p className="mb-4">
              A balanced mix of practical and theory lessons tailored to
              individual learning needs.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-6">
              {showGroup ? (
                <>
                  <li>Ages 5+</li>
                  <li>4 group classes per month</li>
                  <li>1-hour sessions</li>
                  <li>4–5 students per group</li>
                  <li>Interactive practical + theory sessions</li>
                </>
              ) : (
                <>
                  <li>Ages 5+</li>
                  <li>4 one-on-one lessons per month</li>
                  <li>1-hour sessions</li>
                  <li>Personalized curriculum & feedback</li>
                  <li>Includes theory and practical components</li>
                </>
              )}
            </ul>
            <Link to="/piano-theory-course">
              <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Songwriting */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Songwriting & Composition Program
            </h3>
            <p className="mb-4">
              A creative journey into songwriting, melody building, and musical
              storytelling.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-6">
              <li>Ages 10+</li>
              <li>4 private songwriting coaching sessions</li>
              <li>60-minute classes</li>
              <li>
                Develop a song from scratch including lyrics, harmony, and
                arrangement
              </li>
            </ul>
            <Link to="/songwriting-class">
              <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
