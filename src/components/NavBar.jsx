import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50">
      <div className="font-bold text-4xl">Tech Solutions</div>
      <div className="flex items-center space-x-8">
        <a
          href="#services"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Services
        </a>
        <a
          href="#industries"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Industries
        </a>
        <a
          href="#insights"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Insights
        </a>
        <a
          href="#about"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          About Us
        </a>
        <a
          href="#careers"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Careers
        </a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
