import React, { useState } from 'react';

const packages = [
  {
    title: "Early Childhood Music (Ages 0–5)",
    price: "$99/month + $90 one-time materials fee",
    description: "Introduce your little ones to the joy of music through engaging, play-based group classes.",
    features: [
      "Group sessions with parent participation",
      "45 minutes",
      "Focus on movement, rhythm, and foundational musical concepts"
    ],
  },
  {
    title: "Introductory Piano (Ages 5–6)",
    price: "$99/month + $90 one-time materials fee",
    description: "Build foundational piano skills in a fun, social environment.",
    features: [
      "Small group classes",
      "70-minute weekly sessions",
      "Introduction to musical notation, rhythm, and basic instrument skills"
    ],
  },
  {
    title: "Music Theory Classes",
    price: "$620/year",
    description: "Enhance your musical understanding with structured theory lessons.",
    features: [
      "Group classes",
      "Comprehensive coverage of music theory concepts",
      "Suitable for various skill levels"
    ],
  }
];

const accordionSections = {
  youth: [
    {
      label: "Individual Lessons",
      isOpen: true,
      features: [
        "60 mins - $281.81/month",
        "Personalized curriculum tailored to the student's pace and interests"
      ]
    },
    {
      label: "Group Lessons",
      features: [
        "45 minutes - $126/month per student",
        "Ensemble playing",
        "Sight-reading",
        "Diverse musical styles"
      ]
    },
    {
      label: "Buddy Lessons",
      features: [
        "60 mins - $255.33/month per student",
        "Combines individualized attention with collaborative learning"
      ]
    }
  ],
  adult: [
    {
      label: "Individual Lessons",
      isOpen: true,
      features: [
        "60 mins: $281.81/month",
        "Flexible scheduling",
        "Class Pass available upon request"
      ]
    },
    {
      label: "Group Classes",
      features: [
        "8-week sessions designed for adult learners",
        "Focus on foundational skills and ensemble playing"
      ]
    },
    {
      label: "Buddy Lessons",
      features: [
        "60 mins - $255.33/month per student",
        "Flexible scheduling",
        "Class Pass available upon request"
      ]
    }
  ]
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(
    items.findIndex(item => item.isOpen) !== -1 ? items.findIndex(item => item.isOpen) : null
  );

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => toggle(idx)}
            className="w-full text-left bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium"
          >
            {item.label}
          </button>
          {openIndex === idx && (
            <div className="bg-gray-700 p-4 rounded text-sm mt-1 space-y-3">
              <ul className="list-disc list-inside space-y-1">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow">
                Enroll Now
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const PackagesSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Piano & Music Theory Lessons in Halifax, NS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-indigo-400 font-bold mb-2">{pkg.price}</p>
            <p className="mb-4">{pkg.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-6">
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
              Enroll Now
            </button>
          </div>
        ))}

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Youth Piano Lessons (Ages 7–17)</h3>
          <Accordion items={accordionSections.youth} />
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Adult Piano Lessons (Ages 18+)</h3>
          <Accordion items={accordionSections.adult} />
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;
