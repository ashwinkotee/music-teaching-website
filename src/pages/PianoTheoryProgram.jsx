import React from 'react';

const PianoTheoryProgram = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Piano & Theory Program</h1>
          <p className="text-lg md:text-xl">A comprehensive ongoing piano education program combining hands-on practice and structured music theory.</p>
          <img src="/piano-course.jpg" alt="Student learning piano and theory" width={800} height={400} className="rounded-lg mx-auto mt-6 shadow-lg" />
          <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Enroll Now
          </a>
        </div>

        {/* Overview */}
        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Class Overview</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Age Group:</strong> 5 and above</li>
          <li><strong>Format:</strong> Individual practical + group theory classes</li>
          <li><strong>Session Duration:</strong> 60 minutes</li>
          <li><strong>Frequency:</strong> 6 sessions per month (4 private piano + 2 group theory)</li>
          <li><strong>Tuition:</strong> $200/month</li>
          <li><strong>Delivery:</strong> In-person (Lower Sackville) or Online</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What Students Will Learn</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Piano technique: finger strength, posture, and scales</li>
          <li>Reading and interpreting sheet music</li>
          <li>Understanding chords and harmonization</li>
          <li>Developing ear training and rhythmic precision</li>
          <li>Music theory: time signatures, intervals, chord progressions</li>
          <li>Preparation for performance and expressive interpretation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Class Syllabus Overview</h2>
        <p>
          The Piano & Theory Program offers a well-rounded musical education that builds both technical skill and theoretical understanding. Students begin by learning proper hand posture, finger strength techniques, and simple scales. Through one-on-one sessions, they gradually progress into sight-reading and learning beginner to intermediate-level pieces.
        </p>
        <p className="mt-2">
          Group theory classes complement these practical lessons by introducing students to core musical concepts including rhythm reading, time signatures, intervals, and basic chord construction. As students advance, they explore harmonization, ear training, and more sophisticated sheet music interpretation.
        </p>
        <p className="mt-2">
          The curriculum also incorporates creative expression and prepares students for performance scenarios. Optional support for ABRSM exam preparation is available for those interested in a formal assessment path.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why This Course?</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Balanced focus on practical skills and music theory</li>
          <li>Encourages consistent musical progress and performance readiness</li>
          <li>Supports personalized learning with tailored lesson pacing</li>
          <li>Includes collaborative group sessions for interactive theory learning</li>
          <li>Ideal preparation for formal music exams and recitals</li>
        </ul>
      </section>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-4 text-lg">Take the next step in your musical journey today.</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Register Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default PianoTheoryProgram;
