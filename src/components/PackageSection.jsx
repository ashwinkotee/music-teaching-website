import { Link } from "react-router-dom";
import React from "react";

const packages = [
  {
    title: "Kids Music Class",
    price: "",
    description:
      "A playful and interactive introduction to music for young children.",
    features: [
      "Ages 3 – 5",
      "45-minute group classes",
      "4 sessions per month",
      "Small groups (3 – 5 kids)",
      "Foundational skills through fun and movement",
    ],
    more: "/kids-piano",
  },
  {
    title: "Piano & Theory Program",
    price: "",
    description:
      "A balanced mix of practical and theory lessons tailored to individual learning needs.",
    features: [
      "Ages 5+",
      "4 private practical lessons",
      "2 group theory sessions per month",
      "60-minute classes",
      "Customized learning with progress tracking",
    ],
    more: "/piano-theory-course",
  },
  {
    title: "Songwriting & Composition Program",
    price: "",
    description:
      "A creative journey into songwriting, melody building, and musical storytelling.",
    features: [
      "Ages 10+",
      "4 private songwriting coaching sessions",
      "60-minute classes",
      "Developing a song from scratch including lyric writing, harmony, and arrangement",
    ],
    more: "/songwriting-class",
  },
];

const PackagesSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Piano & Music Theory Lessons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
              {pkg.price && (
                <p className="text-indigo-400 font-bold mb-2">{pkg.price}</p>
              )}
              <p className="mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={pkg.more}>
                <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
