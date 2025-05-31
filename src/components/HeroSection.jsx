import React from 'react';

const HeroSection = () => {
  return (
    <section className=" bg-blend-lighten bg-blend-overlayflex items-start justify-start bg-cover bg-center px-6 pt-20 pb-60 text-left bg-[url(\piano.jpg)]" >
        
      <div className="max-w-2xl">
        <h1 className="text-white text-2xl md:text-6xl font-bold mb-4 ">Learn music with Ashwin</h1>
        <p className="text-white text-lg md:text-xl mb-4">Online & In-Person ( Lower Sackville , NS)</p>
        {/* <p className="text-sm mb-6">Online - In Person</p> */}
        <div className="bottom left-8">
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Register Now
        </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;