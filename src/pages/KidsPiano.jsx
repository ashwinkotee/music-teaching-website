import React from 'react';

const KidsPiano = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <h1 className="text-4xl font-bold mb-6">🎹 Kids Piano Lessons</h1>
      <p className="mb-4">
        Fun and engaging piano classes tailored for kids. Our lessons focus on rhythm, hand coordination,
        and a love for music through games and playful learning.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>30-minute sessions</li>
        <li>Interactive activities and challenges</li>
        <li>Basic music theory for kids</li>
        <li>Monthly progress reports</li>
      </ul>
      <a href="/#contact" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
        Enroll Now
      </a>
    </div>
  );
};

export default KidsPiano;
