import React from 'react';

const InfoSection = () => {
  return (
    <section className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between bg-gray-50">
  <div className="md:w-1/2 h-full">
    <img
      src="/piano.jpg"
      alt="Studio"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="md:w-1/2 md:pl-12">
    <h2 className="text-3xl font-bold mb-4">From Studio Nights to Concert Lights</h2>

    <div className="space-y-4 mb-6">
      <p>
        Music has been my language since childhood. Whether it's scoring a film, producing a song,
        or teaching a beginner to play their first note — I believe in using music to create meaningful stories.
      </p>
      <p>
        Over the years, I’ve had the honor of composing background scores for films, releasing my own music,
        and collaborating with top composers. These experiences have shaped not just my sound,
        but my approach to teaching and sharing music with others.
      </p>
      <p>
        Today, I bring that same passion into every session — whether it’s a one-on-one lesson,
        a composition project, or a live performance. Let’s create something beautiful together.
      </p>
    </div>

    <button className="px-5 py-2 bg-white text-black border rounded hover:bg-gray-100 transition">
      See More
    </button>
  </div>
</section>
  );
};

export default InfoSection;
