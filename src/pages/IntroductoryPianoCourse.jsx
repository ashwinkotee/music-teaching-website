import React from 'react';

const IntroductoryPianoCourse = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Introductory Piano Course (36 Weeks)</h1>
          <p className="text-lg md:text-xl">A complete beginner’s journey through piano fundamentals and music theory.</p>
          <img src="/introductoryPiano.jpg" alt="Introductory piano student" width={800} height={400} className="rounded-lg mx-auto mt-6 shadow-lg" />
          <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Enroll Now
          </a>
        </div>

        {/* Course Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Overview</h2>
          <p className="mb-4">
            This 36-week structured program is perfect for students of all ages (5+) with no prior piano experience. It builds the essential foundation required for long-term musical success and prepares students for further advanced study.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Age Group:</strong> 5+ years</li>
            <li><strong>Duration:</strong> 36 weeks</li>
            <li><strong>Format:</strong> Weekly 1-hour individual classes</li>
            <li><strong>Includes:</strong> Theory + Practical Piano Training</li>
            <li><strong>Tuition:</strong> $200/month</li>
          </ul>
        </div>

        {/* Curriculum Breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Syllabus Overview</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Weeks 1–4: Posture, Finger Numbers, Musical Alphabet, Black/White Keys</li>
            <li>Weeks 5–8: Rhythm Patterns, Note Values, Hand Coordination</li>
            <li>Weeks 9–16: Reading Sheet Music (Treble & Bass Clef), Sight Reading</li>
            <li>Weeks 17–24: Chords, Intervals, Scales (Major/Minor)</li>
            <li>Weeks 25–32: Improvisation, Ear Training, Simple Composition</li>
            <li>Weeks 33–36: Recital Preparation + Performance Techniques</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Program Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Structured learning with progress tracking</li>
            <li>Balance of creativity and discipline</li>
            <li>Mentorship on musical goals and practice habits</li>
            <li>Opportunities for student showcases and performance feedback</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-4 text-lg">Want to build a strong piano foundation?</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Register for the 36-Week Course
          </a>
        </div>

      </div>
    </section>
  );
};

export default IntroductoryPianoCourse;
