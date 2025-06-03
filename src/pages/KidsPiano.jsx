import React from 'react';
// import Image from 'next/image';

const KidsPiano = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kids Music Class</h1>
          <p className="text-lg md:text-xl">A joyful introduction to music for little learners (ages 0–5)</p>
          <img src="/kids-piano.jpg" alt="Kids playing piano" width={800} height={400} className="rounded-lg mx-auto mt-6 shadow-lg" />
          <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Enroll Now
          </a>
        </div>

        {/* Course Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Overview</h2>
          <p className="mb-4">
            Our Kids Piano Course is an engaging and nurturing experience tailored to children ages 0–5. It introduces them to the magical world of music through singing, movement, rhythm, and guided listening.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Age Group:</strong> 0–5 years</li>
            <li><strong>Format:</strong> Group class (3–5 kids per session)</li>
            <li><strong>Class Duration:</strong> 45 minutes</li>
            <li><strong>Frequency:</strong> 4 sessions per month</li>
            <li><strong>Tuition:</strong> $100/month</li>
            <li><strong>Location:</strong> In-person (Halifax, NS) or Online</li>
            <li><strong>Parental Involvement:</strong> Parents are encouraged to participate</li>
          </ul>
        </div>

        {/* Sample Curriculum */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Sample Syllabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Week 1: Introduction to High and Low Sounds</li>
            <li>Week 2: Movement and Rhythm with Instruments</li>
            <li>Week 3: Singing Simple Melodies and Nursery Rhymes</li>
            <li>Week 4: Storytelling with Musical Sounds</li>
            <li>Week 5–8: Group Play with Percussion, Piano Key Discovery</li>
            <li>Month 3–6: Pitch and Dynamics Recognition, Music Games</li>
          </ul>
        </div>

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
          <p className="mb-4 text-lg">Start your child’s musical journey today!</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
            Contact Us to Register
          </a>
        </div>

      </div>
    </section>
  );
};

export default KidsPiano;
