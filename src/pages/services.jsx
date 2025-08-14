import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const services = [
  {
    title: "IT Consulting",
    description: "Expert guidance to help your business navigate the digital landscape.",
    icon: "💡"
  },
  {
    title: "Custom Software Development",
    description: "Tailored applications built to meet your unique business requirements.",
    icon: "🛠️"
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable, and efficient cloud infrastructure for modern businesses.",
    icon: "☁️"
  },
  {
    title: "Cybersecurity",
    description: "Protect your systems and data from ever-evolving cyber threats.",
    icon: "🔒"
  }
];

const ServicesPage = () => {
  return (
    <div>
      {/* Navigation */}
      <NavBar />

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
