import React from "react";
// import Image from 'next/image';
import BackArrow from "../components/BackArrow";
import { Link } from "react-router-dom";

const KidsPiano = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <BackArrow />

      <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kids Music Class
            </h1>
            <p className="text-lg md:text-xl">
              A joyful introduction to music for little learners (ages 0–5)
            </p>
            <img
              src="/kids-piano.jpg"
              alt="Kids playing piano"
              width={800}
              height={400}
              className="rounded-lg mx-auto mt-6 shadow-lg"
            />
            {/* <Link to={"/#contact"}>
              <a className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
                Enroll Now
              </a>
            </Link> */}

            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Enroll Now
            </button>
          </div>

          {/* Course Details */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Class Overview</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Age Group:</strong> 0 to 5 years
              </li>
              <li>
                <strong>Format:</strong> Group Class (3–5 kids per group)
              </li>
              <li>
                <strong>Duration:</strong> 45 minutes per class
              </li>
              <li>
                <strong>Frequency:</strong> 4 classes per month
              </li>
              <li>
                <strong>Cost:</strong> $100/month
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              What Kids Will Learn
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Rhythm and Movement: Activities that help children internalize
                beats and tempos
              </li>
              <li>Pitch Exploration: High vs low, loud vs soft sound play</li>
              <li>
                Instrument Discovery: Hands-on time with mini pianos, drums,
                shakers, and bells
              </li>
              <li>
                Listening Skills: Musical storytelling and guided listening
                games
              </li>
              <li>
                Motor Skills: Clapping, tapping, and dancing to build
                coordination
              </li>
              <li>
                Group Participation: Social learning through music play and
                cooperation
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Class Syllabus Overview
            </h2>
            <p>
              In our Kids Music Class, children are gently introduced to the
              world of music through a variety of playful and engaging
              activities. We begin by helping them explore the difference
              between high and low sounds using fun vocal and instrumental
              games. As the sessions progress, kids develop a sense of rhythm
              and movement through guided activities involving hand-held
              percussion instruments.
            </p>
            <p className="mt-2">
              They will learn to sing along to simple melodies and familiar
              nursery rhymes, building confidence in pitch and vocal expression.
              Musical storytelling is introduced to spark imagination and
              enhance listening skills, as children begin to associate sounds
              with characters, actions, and emotions.
            </p>
            <p className="mt-2">
              As they grow comfortable, children engage in group play with
              drums, shakers, and beginner-friendly piano keys. They begin
              recognizing changes in pitch and dynamics (loud/soft) while
              participating in interactive music games designed to nurture
              coordination, memory, and group cooperation.
            </p>
            <p className="mt-2">
              Each class blends movement, sound, and fun to build a lifelong
              love of music, all in a supportive and social setting.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Parent Involvement</h2>
            <p>
              We encourage light parent participation during class to enhance
              bonding and support the child’s learning process. No musical
              experience is needed for parents!
            </p>
          </section>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why This Course?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Supports cognitive development and listening skills</li>
              <li>Encourages emotional expression through sound</li>
              <li>Improves fine motor coordination with early keyboard play</li>
              <li>Boosts social interaction through group activities</li>
            </ul>
          </div>

          {/* Visual */}
          {/* <div className="mb-12">
          <Image src="/early-childhood-music.jpg" alt="Children exploring music together" width={800} height={400} className="rounded-lg shadow-md mx-auto" />
        </div> */}

          {/* Call to Action */}
          <div className="text-center">
            <p className="mb-4 text-lg">
              Start your child’s musical journey today!
            </p>

            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Contact Us to Register
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsPiano;
