import { Link } from "react-router-dom";

// Workshop list with status
const workshops = [
  {
    title: "2-Day Piano Basics Workshop - August 8 & 9",
    slug: "Aug8and9",
    date: "August 8 & 9, 2025",
    summary:
      "Perfect for absolute beginners. Learn finger placement, posture, and basic melodies.",
    image: "/aug8&9.png",
    status: "completed",
  },
  {
    title: "2-Day Piano Basics Workshop",
    slug: "piano-basics-workshop-august",
    date: "August 2 & 3, 2025",
    summary:
      "Perfect for absolute beginners. Learn finger placement, posture, and basic melodies.",
    image: "/Workshop.png",
    status: "completed",
  },
  {
    title: "July 27, 28 & 28 (3-Day Piano Basics Workshop)",
    slug: "piano-basics-workshop-july",
    date: "July 27, 28 & 28, 2025",
    summary:
      "Perfect for absolute beginners. Learn finger placement, posture, and basic melodies.",
    image: "/Workshop.png",
    status: "completed",
  },
];

const WorkshopsPage = () => {
  const activeWorkshops = workshops.filter((w) => w.status === "active");
  const completedWorkshops = workshops.filter((w) => w.status === "completed");

  const renderWorkshops = (list) =>
    list.map((event, index) => (
      <Link
        key={index}
        to={`/workshops/${event.slug}`}
        className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-400 mb-1">{event.date}</p>
        <p className="mb-2">{event.summary}</p>
        <span className="text-indigo-400 underline">View Details →</span>
      </Link>
    ));

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Workshops & Events
      </h2>

      {activeWorkshops.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            Ongoing & Upcoming Workshops
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {renderWorkshops(activeWorkshops)}
          </div>
        </>
      )}

      {completedWorkshops.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">Completed Workshops</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {renderWorkshops(completedWorkshops)}
          </div>
        </>
      )}
    </section>
  );
};

export default WorkshopsPage;
