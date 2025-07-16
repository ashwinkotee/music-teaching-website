import React from "react";

const releasedSongs = [
  {
    title: "Unnil Ennai",
    artwork: "/unnilEnnai.jpeg",
    youtube: "https://youtu.be/Y48Jb62tE34?si=QR1m3UvNIOg5_Iyz",
    spotify:
      "https://open.spotify.com/track/0oZmUWs9dkZTQK303eQGMh?si=3VbctZUAT2ShNda4OGMQmQ",
    story:
      "A heartfelt love song capturing the quiet emotions of being completely lost in someone you love — delicate, sincere, and intimate.",
  },
  {
    title: "Siragai",
    artwork: "/siragai.jpeg",
    youtube: "https://youtu.be/Fa3m6mXVYhw?si=gl-pH7qKNEEn8gBn",
    spotify:
      "https://open.spotify.com/track/64LpgHmtGzKhU1CI3BShT1?si=7d902bc56854438d",
    story:
      "A poetic expression of love and admiration for a woman who feels like wings to the heart — light, uplifting, and emotional.",
  },
];

const backgroundScores = [
  {
    film: "Whispers of the Wind (2023)",
    description:
      "Composed the complete background score. A spiritual tale of love and longing.",
    audio: "/sample1.mp3",
    testimonial:
      "Ashwin's score elevated the entire emotional depth of the film. — Director, WOTW",
  },
  {
    film: "Dreamscapes",
    description:
      "An emotional journey through layered piano textures and ambient moods.",
    audio: "/sample2.mp3",
    testimonial: "It perfectly captured the tone we needed for our short film.",
  },
  {
    film: "The Journey Within",
    description:
      "Blending minimalistic piano with atmospheric harmonies for a meditative narrative.",
    audio: "/sample3.mp3",
    testimonial: "Evocative and cinematic — beautifully composed.",
  },
];

const FeaturedWork = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {" "}
          Featured Work{" "}
        </h2>

        {/* Released Songs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Released Songs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {releasedSongs.map((song, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
              >
                <img
                  src={song.artwork}
                  alt={song.title}
                  className="rounded mb-4 w-full h-56 object-cover"
                />
                <h4 className="text-xl font-bold mb-2">{song.title}</h4>
                <p className="text-sm mb-4">{song.story}</p>
                <div className="flex space-x-4">
                  <a
                    href={song.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    YouTube
                  </a>
                  <a
                    href={song.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Scores - Uncomment if needed */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Background Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backgroundScores.map((score, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-2">{score.film}</h4>
                <p className="mb-2">{score.description}</p>
                <audio controls className="w-full mb-2">
                  <source src={score.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="italic text-sm text-gray-600 dark:text-gray-300">
                  "{score.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedWork;
