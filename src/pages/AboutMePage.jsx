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
              From a small village in India to international performances and
              music productions — here's my story.
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
              I was born in a small village in India, where my journey with
              music began at the age of 7. I started learning music at a nearby
              church, where my teacher guided me through my first Trinity Grade
              1 exam. Passing that exam at a young age sparked a deep motivation
              to pursue music seriously.
            </p>
            <p className="mb-4">
              Throughout my school years, I participated in every music event
              and inter-school competition — winning first prizes consistently.
              After moving to Chennai, India, I joined my school music band,
              continuing to perform and grow as a musician.
            </p>
            <p className="mb-4">
              My formal training took a major leap when I enrolled at the KM
              Music Conservatory (KMMC) founded by A.R. Rahman. There, I studied
              piano for a year under the guidance of Santosh, a highly respected
              piano teacher. This period of study was transformative, giving me
              exposure to inspiring mentors and a strong network of musicians.
            </p>
            <p className="mb-4">
              Wanting to specialize in performance piano, I then pursued the
              Russian Piano School curriculum under Surojith Chatterjee for two
              years. During this time, I was honored to be selected as one of
              only ten students invited to perform at the Moscow Conservatory in
              Russia — an unforgettable milestone.
            </p>
            <p className="mb-4">
              My journey then took me to Budapest, Hungary, where I studied
              music production for two years. I had the privilege of releasing
              an original song through the label Trend Music, and went on to
              release two more independent tracks. Along the way, I was also
              invited to score the background music for a feature film.
            </p>
            <p className="mb-4">
              Today, I blend my love for classical performance with modern music
              production and teaching. I'm passionate about nurturing talent and
              helping students find their own voice through music.
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
