import React from 'react';


const SongWritingSection = () => {
  return (
    <section className=" p-8 md:p-16 flex flex-col md:flex-row items-center justify-between bg-gray-100">
      
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-3xl font-bold mb-4">Song Writting Lessons </h2>
        <p className="mb-4">Whether you're a complete beginner or a seasoned musician, songwriting is about discovering your voice — and giving it shape, structure, and emotion.</p>
<<<<<<< HEAD
        <p className="mb-6">In my songwriting lessons, you'll learn how to turn ideas into melodies, lyrics into stories,
          and emotions into harmonies. We’ll explore composition, structure, lyric writing, chord progressions,
          and even arrangement techniques tailored for piano and modern production.</p>
        <p className="mb-4" >You'll also get insight into how songs are created for albums, movies, and live performances —
        drawing from my real-world experience composing for film and releasing original tracks.</p>
        <p className="mb-4">Every lesson is hands-on, project-based, and designed to bring your creativity forward.</p>
=======
        <p className="mb-6">In my songwriting lessons, you'll learn how to turn ideas into melodies, lyrics into stories, and emotions into harmonies. We’ll explore composition, structure, lyric writing, chord progressions, and even arrangement techniques tailored for piano and modern production.</p>
        <p className="mb-6">You'll also get insight into how songs are created for albums, movies, and live performance — drawing from my real-world experience composing for film and releasing original tracks.</p>
        <p className='mb-6'>Every lesson is hands-on, project-based, and designed to bring your creativity forward.</p>
>>>>>>> 54e1235091e4a4645946888858ec4801b614cf69
        <a href="#contact" className="px-5 py-2 bg-white text-black rounded border hover:bg-gray-100 transition">
          See More
        </a>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/studio.jpeg" alt="Conference" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default SongWritingSection;
