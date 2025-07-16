import React from "react";
import BackArrow from "../../components/BackArrow";

const PianoWorkshop = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <BackArrow />

      <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              3-Day Piano Summer Workshop
            </h1>
            <p className="text-lg md:text-xl">
              Explore, express, and elevate your playing through hands-on
              sessions (Ages 5+)
            </p>
            <img
              src="/Workshop.png"
              alt="Piano Workshop Poster"
              width={800}
              height={400}
              className="rounded-lg mx-auto mt-6 shadow-lg"
            />

            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Enroll Now
            </button>
          </div>

          {/* Workshop Details */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Workshop Details</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Dates:</strong> July 25, 26 & 27, 2024
              </li>
              <li>
                <strong>Timings:</strong>
              </li>
              <ul className="list-disc pl-6">
                <li>July 25 (Friday): 4:00 PM – 5:00 PM</li>
                <li>July 26 & 27 (Sat & Sun): 10:00 AM – 11:00 AM</li>
              </ul>
              <li>
                <strong>Location:</strong> In-Person (Lower Sackville)
              </li>
              <li>
                <strong>Fee:</strong> $25 for all 3 days
              </li>
              <li>
                <strong>Capacity:</strong> Limited spots available
              </li>
            </ul>
          </section>

          {/* Syllabus */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Daily Syllabus</h2>
            <ul className="space-y-4">
              <li>
                <strong>Day 1 – Foundations of Piano</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>
                    Introduction to piano keys, finger placement, and posture
                  </li>
                  <li>Clapping exercises to understand rhythm</li>
                  <li>Simple hand coordination games</li>
                </ul>
              </li>
              <li>
                <strong>Day 2 – Melody and Practice</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>Playing basic tunes using 3-5 keys</li>
                  <li>Basic finger workouts and tempo building</li>
                  <li>Group playing & rhythm games</li>
                </ul>
              </li>
              <li>
                <strong>Day 3 – Creativity & Expression</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>Expression through dynamics (soft/loud)</li>
                  <li>Improvised mini-performances</li>
                  <li>Final group performance & fun quiz</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="mb-4 text-lg font-medium">
              Ready to make music this summer?
            </p>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Contact Us to Register
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PianoWorkshop;
