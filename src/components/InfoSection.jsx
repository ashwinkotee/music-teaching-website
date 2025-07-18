import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/kmmc.jpg" alt="Conference" className="shadow-md rounded" />
          <p className="mt-3 text-sm text-gray-600 italic text-center">
            That’s me on the right end — with my batchmates at A.R. Rahman's KM
            Music Conservatory.
          </p>
        </div>

        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">
            From Studio Nights to Concert Lights
          </h2>

          <div className="space-y-4 mb-6">
            <p>
              Music has been my language since childhood. Whether it's scoring a
              film, producing a song, or teaching a beginner to play their first
              note — I believe in using music to create meaningful stories.
            </p>
            <p>
              Over the years, I’ve had the honor of composing background scores
              for films, releasing my own music, and collaborating with top
              composers. These experiences have shaped not just my sound, but my
              approach to teaching and sharing music with others.
            </p>
            <p>
              Today, I bring that same passion into every session — whether it’s
              a one-on-one lesson, a composition project, or a live performance.
              Let’s create something beautiful together.
            </p>
          </div>

          <Link to="/about-me">
            <button className="px-5 py-2 bg-white text-black border rounded hover:bg-gray-100 transition">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
