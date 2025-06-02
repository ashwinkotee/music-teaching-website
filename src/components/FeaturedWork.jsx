// src/components/FeaturedWork.jsx
import React from 'react';

const releasedSongs = [
  {
    title: "Unnil Ennai",
    artwork: "/unnilEnnai.jpeg",
    youtube: "https://youtu.be/Y48Jb62tE34?si=QR1m3UvNIOg5_Iyz",
    spotify: "https://open.spotify.com/track/0oZmUWs9dkZTQK303eQGMh?si=3VbctZUAT2ShNda4OGMQmQ",
    story: "A cinematic piano-driven journey through past memories and future dreams.",
  },
  {
    title: "Siragai",
    artwork: "/siragai.jpeg",
    youtube: "https://www.youtube.com/watch?v=YYYYYYYY",
    spotify: "https://open.spotify.com/track/YYYYYYYY",
    story: "Inspired by the city lights and late-night studio sessions.",
  },
];

const backgroundScores = [
  {
    film: "Whispers of the Wind (2023)",
    description: "Composed the complete background score. A spiritual tale of love and longing.",
    video: "https://www.youtube.com/watch?v=ZZZZZZZZ",
    testimonial: "Ashwin's score elevated the entire emotional depth of the film. — Director, WOTW",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-12 text-center"> Featured Work </h2>

      {/* Released Songs */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Released Songs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {releasedSongs.map((song, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
              <img src={song.artwork} alt={song.title} className="rounded mb-4 w-full h-56 object-cover" />
              <h4 className="text-xl font-bold mb-2">{song.title}</h4>
              <p className="text-sm mb-4">{song.story}</p>
              <div className="flex space-x-4">
                <a href={song.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube</a>
                <a href={song.spotify} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Spotify</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Scores
<div className="mb-16">
  <h3 className="text-2xl font-semibold mb-6">Background Scores</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="score-1"
        src="https://on.soundcloud.com/HJ64KtMRGfV6kQsL7"
      ></iframe>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="score-2"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID_2&color=%23212121&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
      ></iframe>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="score-3"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID_3&color=%23212121&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
      ></iframe>
    </div>
  </div>
</div> */}

    </section>
  );
};

export default FeaturedWork;
