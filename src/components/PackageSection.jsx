import { Link } from 'react-router-dom';

// import React from 'react';

// const packages = [
//   {
//     title: "Kids Music Class (Ages 0–5)",
//     price: "$100/month",
//     description: "Engaging and playful early music introduction for young children.",
//     features: [
//       "45 mins per class",
//       "4 classes per month",
//       "Group of 3–5 kids max",
//       "Fun-focused foundational music experience"
//     ],
//   },
//   // {
//   //   title: "Music Theory Classes",
//   //   price: "$620/year",
//   //   description: "Enhance your musical understanding with structured theory lessons.",
//   //   features: [
//   //     "Group classes",
//   //     "Comprehensive coverage of music theory concepts",
//   //     "Suitable for various skill levels"
//   //   ],
//   // },
//   {
//     title: "Youth Piano Lessons (Ages 5–18)",
//     price: "$185/month",
//     description: "4 one-on-one practical classes and 2 group theory classes.",
//     features: [
//       "60 mins per class",
//       "6 classes per month",
//       "Hybrid learning: individual + group theory",
//       "Tailored for developing young musicians"
//     ],
//   },
//   {
//     title: "Adult Piano Lessons (Ages 18+)",
//     price: "$200/month",
//     description: "4 one-on-one practical classes and 2 group theory classes.",
//     features: [
//       "75 mins per class",
//       "6 classes per month",
//       "Flexible scheduling options",
//       "Class Pass available upon request"
//     ],
//   }
// ];

// const PackagesSection = () => {
//   return (
//     <section className="bg-gray-900 py-16 px-6">
//       <h2 className="text-3xl font-bold text-center text-white mb-12">Piano & Music Theory Lessons in Halifax, NS</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {packages.map((pkg, idx) => (
//           <div key={idx} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
//             <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
//             <p className="text-indigo-400 font-bold mb-2">{pkg.price}</p>
//             <p className="mb-4">{pkg.description}</p>
//             <ul className="list-disc list-inside space-y-1 text-sm mb-6">
//               {pkg.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
//               Enroll Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PackagesSection;
import React from 'react';

const packages = [
  
  // {
  //   title: "Introductory Piano Course (36 Weeks)",
  //   price: "$185/month",
  //   description: "A structured 36-week course that lays the foundation for confident piano learning.",
  //   features: [
  //     "Ages 5+",
  //     "Weekly sessions with progressive curriculum",
  //     "Focus on rhythm, finger placement, ear training",
  //     "Ideal for students preparing for long-term piano learning"
  //   ],
  //   more:"/Introductory-piano-course"
  // },
  {
  title: "Kids Music Class",
  price: "$100/month",
  description: "A playful and interactive introduction to music for young children.",
  features: [
    "Ages 0–5",
    "45-minute group classes",
    "4 sessions per month",
    "Small groups (3–5 kids)",
    "Foundational skills through fun and movement"
  ],
  more: "/kids-piano"
},
{
  title: "Piano & Theory Program",
  price: "Youth: $200/month",
  description: "A balanced mix of practical and theory lessons tailored to individual learning needs.",
  features: [
    "Ages 5–Adult",
    "4 private practical lessons",
    "2 group theory sessions per month",
    "60-minute classes",
    "Customized learning with progress tracking"
  ],
  more: "/piano-theory-course"
},
{
  title: "Songwriting & Composition Program",
  price: "All Ages: $200/month",
  description: "A creative journey into songwriting, melody building, and musical storytelling.",
  features: [
    "Ages 10–Adult",
    "4 private songwriting coaching sessions",
    "60-minute classes",
    "Includes lyric writing, harmony, and arrangement"
  ],
  more: "/songwriting-class"
}

  // {
  //   title: "Music Theory Classes",
  //   price: "$620/year",
  //   description: "Enhance your musical understanding with structured theory lessons.",
  //   features: [
  //     "Group classes",
  //     "Comprehensive coverage of music theory concepts",
  //     "Suitable for various skill levels"
  //   ],
  // }
];

const PackagesSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Piano & Music Theory Lessons</h2>
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
            <Link to={pkg.more}>
              <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow transition">
                Enroll Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
