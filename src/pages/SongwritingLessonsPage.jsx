import React from "react";
// import Image from 'next/image';
import BackArrow from "../components/BackArrow";

const SongwritingLessonsPage = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <BackArrow />
      <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Songwriting Lessons
            </h1>
            <p className="text-lg md:text-xl">
              Turn your thoughts into lyrics, melodies, and meaning — and bring
              your music to life.
            </p>
            <img
              src="/song-writting.jpg"
              alt="Songwriting session with piano and notebook"
              width={800}
              height={400}
              className="rounded-lg mx-auto mt-6 shadow-lg"
            />
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <p className="mb-4">
              Whether you're a complete beginner or a seasoned musician,
              songwriting is about discovering your voice — and giving it shape,
              structure, and emotion.
            </p>
            <p className="mb-4">
              In my songwriting lessons, you'll learn how to turn ideas into
              melodies, lyrics into stories, and emotions into harmonies. We’ll
              explore composition, structure, lyric writing, chord progressions,
              and even arrangement techniques tailored for piano and modern
              production.
            </p>
            <p className="mb-4">
              You'll also gain insight into how songs are created for albums,
              movies, and live performances — drawing from my real-world
              experience composing for film and releasing original tracks.
            </p>
            <p className="mb-4">
              Every lesson is hands-on, project-based, and designed to bring
              your creativity forward.
            </p>
          </div>

          {/* Details & Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Lesson Format & Pricing
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Format:</strong> 1-on-1 private coaching
              </li>
              <li>
                <strong>Duration:</strong> 60 minutes per session
              </li>
              <li>
                <strong>Frequency:</strong> 4 sessions per month
              </li>
              <li>
                <strong>Tuition:</strong> $200/month
              </li>
              <li>
                <strong>Location:</strong> In-person (Halifax, NS) or online
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="mb-4 text-lg">
              Let’s write your next song — together.
            </p>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Book a Free Intro Section
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SongwritingLessonsPage;
