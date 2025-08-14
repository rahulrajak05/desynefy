import React from "react";

const teamMembers = [
  {
    name: "Ethan Carter",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Olivia Bennett",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Noah Thompson",
    role: "Head of Strategy",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Sophia Davis",
    role: "Head of Operations",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-3 font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
