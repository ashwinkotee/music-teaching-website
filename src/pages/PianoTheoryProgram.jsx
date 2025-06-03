import React from 'react';

const PianoTheoryProgram = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Piano & Theory Program </h1>
          <p className="text-lg md:text-xl">A comprehensive ongoing piano education program combining hands-on practice and structured music theory.</p>
          <img src="/piano-course.jpg" alt="Student learning piano and theory" width={800} height={400} className="rounded-lg mx-auto mt-6 shadow-lg" />
          <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Enroll Now
          </a>
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Program Structure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Age Group:</strong> 5 and above</li>
            <li><strong>Format:</strong> Combination of individual practical classes and group theory classes</li>
            <li><strong>Session Duration:</strong> 60 minutes</li>
            <li><strong>Frequency:</strong> 6 sessions per month — 4 private piano + 2 group theory</li>
            <li><strong>Tuition:</strong> $200/month </li>
            <li><strong>Delivery:</strong> In-person (Lower Sackville) or online</li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Curriculum Focus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Piano technique: finger strength, posture, scales</li>
            <li>Reading and interpreting sheet music</li>
            <li>Chords, harmonization, ear training</li>
            <li>Theory topics: time signatures, intervals, progressions</li>
            <li>Performance preparation and musical expression</li>
            <li>Optional ABRSM exam preparation</li>
          </ul>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Program Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Tailored lesson pacing for each age and skill level</li>
            <li>Group theory sessions for collaborative learning</li>
            <li>One-on-one coaching for personalized growth</li>
            <li>End-of-term recitals and regular progress reports</li>
          </ul>
        </div>

        {/* Visual
        <div className="mb-12">
          <img src="/piano-class-group.jpg" alt="Group piano theory class" width={800} height={400} className="rounded-lg shadow-md mx-auto" />
        </div> */}

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
