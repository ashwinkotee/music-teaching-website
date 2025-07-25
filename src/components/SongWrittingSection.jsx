import { Link } from "react-router-dom";

const SongWritingSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-2xl mx-auto p-8 md:p-16 flex flex-col md:flex-row items-start justify-between">
        {/* Left Side Text */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">Song Writing</h2>

          <p className="mb-4">
            Whether you're a complete beginner or a seasoned musician,
            songwriting is about discovering your voice — and giving it shape,
            structure, and emotion.
          </p>

          {/* Mobile Image */}
          <div className="block md:hidden w-full mb-4">
            <img
              src="/myStudioNew.png"
              alt="Studio"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              My home studio setup where I teach, compose, and produce music.
            </p>
          </div>

          <p className="mb-6">
            In my songwriting lessons, you'll learn how to turn ideas into
            melodies, lyrics into stories, and emotions into harmonies. We’ll
            explore composition, structure, lyric writing, chord progressions,
            and even arrangement techniques tailored for piano and modern
            production.
          </p>

          <p className="mb-6">
            You'll also get insight into how songs are created for albums,
            movies, and live performance — drawing from my real-world experience
            composing for film and releasing original tracks.
          </p>

          <p className="mb-6">
            Every lesson is hands-on, project-based, and designed to bring your
            creativity forward.
          </p>

          <Link to="/songwriting-class">
            <button className="px-5 py-2 bg-white text-black rounded border hover:bg-gray-200 transition">
              See More
            </button>
          </Link>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/myStudioNew.png"
            alt="Studio"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-600 italic mt-2 text-center">
            My home studio setup where I teach, compose, and produce music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SongWritingSection;
