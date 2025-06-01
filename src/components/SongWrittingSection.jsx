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
        <p className="mb-4">Whether you're a complete beginner or a seasoned musician, songwriting is about discovering your voice — and giving it shape, structure, and emotion.</p>
        <p className="mb-6">In my songwriting lessons, you'll learn how to turn ideas into melodies, lyrics into stories,
          and emotions into harmonies. We’ll explore composition, structure, lyric writing, chord progressions,
          and even arrangement techniques tailored for piano and modern production.</p>
        <p className="mb-4" >You'll also get insight into how songs are created for albums, movies, and live performances —
        drawing from my real-world experience composing for film and releasing original tracks.</p>
        <p className="mb-4">Every lesson is hands-on, project-based, and designed to bring your creativity forward.</p>
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
