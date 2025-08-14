import React from "react";
import {
  FaShieldAlt,
  FaUserFriends,
  FaLightbulb,
  FaSyncAlt,
  FaHandsHelping,
  FaAward,
  FaGlobe,
  FaLeaf
} from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt className="text-gray-700 text-xl" />,
    title: "Integrity",
    desc: "We uphold the highest ethical standards in all our interactions."
  },
  {
    icon: <FaUserFriends className="text-gray-700 text-xl" />,
    title: "Collaboration",
    desc: "We work closely with our clients to achieve shared success."
  },
  {
    icon: <FaLightbulb className="text-gray-700 text-xl" />,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to stay ahead of the curve."
  },
  {
    icon: <FaSyncAlt className="text-gray-700 text-xl" />,
    title: "Agility",
    desc: "We adapt quickly to changing business needs and market dynamics."
  },
  {
    icon: <FaHandsHelping className="text-gray-700 text-xl" />,
    title: "Customer Commitment",
    desc: "We build strong relationships and deliver value that lasts."
  },
  {
    icon: <FaAward className="text-gray-700 text-xl" />,
    title: "Excellence",
    desc: "We strive for outstanding quality in everything we do."
  },
  {
    icon: <FaGlobe className="text-gray-700 text-xl" />,
    title: "Global Perspective",
    desc: "We bring worldwide insights to local challenges."
  },
  {
    icon: <FaLeaf className="text-gray-700 text-xl" />,
    title: "Sustainability",
    desc: "We prioritize environmentally responsible solutions."
  }
];

const Values = () => {
  return (
    <section id="values" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Our Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 hover:shadow-md transition bg-white"
          >
            {value.icon}
            <h3 className="mt-3 font-semibold">{value.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
