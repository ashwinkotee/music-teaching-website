import BackArrow from "../components/BackArrow";

const AboutMePage = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <BackArrow />
      <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-16 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Musical Journey
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From village rhythms to global stages — how music shaped my life
              and continues to guide my path.
            </p>
          </div>

          <div className="mb-8">
            <img
              src="/kmmc.jpg"
              alt="Ashwin at piano studio"
              width={1000}
              height={600}
              className="rounded-lg shadow-lg mb-6"
            />

            <p className="mb-4">
              I grew up in a small village in India where music was a quiet hum
              in the background of everyday life. At age 7, that hum became a
              calling. A church near my home became the unlikely stage for my
              first lessons, where I passed my Trinity Grade 1 piano exam and
              discovered a passion I couldn't ignore.
            </p>
            <p className="mb-4">
              From school assemblies to inter-school competitions, I found every
              excuse to play and perform. My move to Chennai opened up new
              stages and new challenges — joining my school’s music band, I
              began to understand what it meant to play not just for myself, but
              with others, for others.
            </p>
            <p className="mb-4">
              The turning point came when I joined the KM Music Conservatory,
              founded by A.R. Rahman. Under the guidance of Santosh, a gifted
              piano teacher, I immersed myself in the world of classical music.
              It was a year that shaped my identity not just as a player, but as
              an artist.
            </p>
            <p className="mb-4">
              Seeking mastery, I then trained under the Russian Piano School
              with Surojith Chatterjee — a rigorous, expressive approach to
              performance. My dedication led to a once-in-a-lifetime
              opportunity: performing at the prestigious Moscow Conservatory as
              one of only ten selected students.
            </p>
            <p className="mb-4">
              But my creativity didn’t stop at the piano. In Budapest, I
              explored the world of music production, learning how to shape
              sound from behind the scenes. My debut track was released under
              Trend Music, followed by two more original singles and a feature
              film score — each one a new expression of who I was becoming.
            </p>
            <p className="mb-4">
              Today, I blend classical piano performance with contemporary
              production, composing original music and teaching the next
              generation of musicians. Whether it’s a child’s first note or a
              studio’s final mix, I believe music is a conversation — and I’m
              here to help you find your voice.
            </p>
          </div>

          <div className="text-center">
            <a
              href="/discography"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
