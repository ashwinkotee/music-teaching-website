import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-black/50 bg-blend-overlay bg-cover bg-center bg-[url('/pianoHero.jpg')]">
      <div className="w-full px-6 pt-20 pb-60 flex justify-start">
        <div className="max-w-7xl w-full mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Learn music with Ashwin
          </h1>
          <p className="text-white text-xl md:text-2xl mb-4">
            Online & In-Person
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Book a Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
