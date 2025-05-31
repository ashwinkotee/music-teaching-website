// src/components/PackagesSection.jsx
import React from 'react';

const packages = [
  {
    title: "Kids Piano ( Group Class )",
    price: "$20 / class",
    description: "Fun and engaging piano lessons designed specifically for children.",
    features: [
      "30-minute lessons",
      "Interactive games and activities",
      "Beginner-friendly pace",
      "Parent feedback after each class"
    ],
  },
  {
    title: "Monthly Package",
    price: "$100 / month",
    description: "Ideal for students who want consistent, structured learning.",
    features: [
      "4 one-hour classes ( Ideally Weekly one hour )",
      "Flexible scheduling",
      "Practice routines provided",
      "Progress reports every month"
    ],
  },
  {
    title: "Pay As You Go",
    price: "$30 / class",
    description: "Great for casual learners or those testing the waters.",
    features: [
      "1-hour personalized session",
      "Flexible booking",
      "No long-term commitment",
      "Choose your own pace"
    ],
  }
];

const PackagesSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 dark:bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-12">Piano Lesson Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-white text-gray-800 dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
            <p className="text-indigo-600 font-semibold mb-2">{pkg.price}</p>
            <p className="mb-4">{pkg.description}</p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-6">
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
