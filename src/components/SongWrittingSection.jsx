import React from 'react';

const people = [
  { name: "SHAWN GARCIA, PHD", desc: "Professor Garcia will be sharing his work on mobile education platforms for indigent students." },
  { name: "TRISCA LAGHARI, PHD", desc: "A researcher and BSU faculty member since 2010, Dr. Laghari will speak about new horizons for education." },
  { name: "YANIS PETROS, PHD", desc: "Dr. Petros has been working on immersive learning platforms. He will share his latest findings and best practices." }
];

const SongWritingSection = () => {
  return (
    <section className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
      
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">Song Writting Lessons </h2>
        <p className="mb-4">The BSU Academic Summit is an annual conference where educators under the BSU umbrella can share their knowledge, learn, and empower each other.</p>
        <p className="mb-6">This year, we're focusing on future-readiness. Education is evolving, and we need to elevate our platforms, methods and resources to rise to the challenges of the future.</p>
        <a href="#contact" className="px-5 py-2 bg-white text-black rounded border hover:bg-gray-100 transition">
          See More
        </a>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="https://via.placeholder.com/500x300" alt="Conference" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default SongWritingSection;
