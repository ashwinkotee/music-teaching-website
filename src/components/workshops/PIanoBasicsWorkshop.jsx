const PianoBasicsWorkshop = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">3-Day Piano Basics Workshop</h1>
      <p className="text-gray-600 mb-2">August 20–22, 2025 | Lower Sackville</p>
      <p className="mb-6">
        A fun and interactive beginner workshop where students will learn the
        fundamentals of piano: finger placement, posture, basic notation, and a
        song or two!
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Dates: August 20–22, 2025</li>
        <li>Time: 10:00 AM – 11:30 AM each day</li>
        <li>Location: In-Person (Lower Sackville)</li>
        <li>Price: $20 for all 3 days</li>
        <li>Limited seats available (max 5 per batch)</li>
      </ul>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        Register Now
      </button>
    </section>
  );
};

export default PianoBasicsWorkshop;
