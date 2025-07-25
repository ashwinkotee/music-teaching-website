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
                window.location.href =
                  "https://form.jotform.com/252015856408255";
              }}
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Register
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
                <strong>Age:</strong> 5+
              </li>
              <li>
                <strong>Timings:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold text-red-400">
                      Batch 1 (CLOSED)
                    </span>{" "}
                    <br />
                    July 25 (Friday): 4:00 PM – 5:00 PM <br />
                    July 26 & 27 (Sat & Sun): 10:00 AM – 11:00 AM
                  </li>
                </ul>
              </li>
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
                <strong>Day 1 – Foundations & Exploration</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>
                    Discovering the piano: keys, finger numbers, and posture
                  </li>
                  <li>
                    Listening and movement activities to explore high/low,
                    loud/soft sounds
                  </li>
                  <li>
                    Fun rhythm games, clapping, and basic hand coordination
                  </li>
                  <li>
                    Black key discovery and first sound play (age-appropriate
                    per group)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Day 2 – Melody, Rhythm & Play</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>Learning simple tunes using 2–5 keys</li>
                  <li>Age-appropriate finger exercises and tempo games</li>
                  <li>
                    Group playing, echo activities, and interactive rhythm
                    circles
                  </li>
                  <li>
                    Intro to music patterns, note names, or chords (for older
                    groups)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Day 3 – Creativity & Performance</strong>
                <ul className="list-disc pl-6 text-sm">
                  <li>
                    Musical storytelling, expression through dynamics and tempo
                  </li>
                  <li>
                    Compose or create a simple musical idea (melody, rhythm, or
                    chords)
                  </li>
                  <li>Mini solo or group performances with encouragement</li>
                  <li>Fun wrap-up activity</li>
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
                window.location.href =
                  "https://form.jotform.com/252015856408255";
              }}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PianoWorkshop;
