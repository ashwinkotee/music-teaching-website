import { Link } from "react-router-dom";

const workshops = [
  {
    title: "3-Day Piano Basics Workshop",
    slug: "piano-basics-workshop",
    date: "August 20–22, 2025",
    summary:
      "Perfect for absolute beginners. Learn finger placement, posture, and basic melodies.",
    image: "/Workshop.png", // Replace with your actual image path
  },
];

const WorkshopsPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Workshops & Events
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {workshops.map((event, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-400 mb-1">{event.date}</p>
            <p className="mb-4">{event.summary}</p>
            <Link
              to={`/workshops/${event.slug}`}
              className="text-indigo-400 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopsPage;
