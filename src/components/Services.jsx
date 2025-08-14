import React from "react";
import {
  FaClipboardList,
  FaShieldAlt,
  FaChartBar,
  FaUserTie,
  FaCloud,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaNetworkWired,
  FaTools
} from "react-icons/fa";

const services = [
  {
    icon: <FaClipboardList className="text-2xl text-gray-700" />,
    title: "IT Strategy & Consulting",
    desc: "Align your IT investments with your business objectives."
  },
  {
    icon: <FaShieldAlt className="text-2xl text-gray-700" />,
    title: "Cybersecurity Solutions",
    desc: "Protect your business from cyber threats with our robust security solutions."
  },
  {
    icon: <FaChartBar className="text-2xl text-gray-700" />,
    title: "Data Analytics & BI",
    desc: "Gain valuable insights from your data to drive better decision-making."
  },
  {
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    title: "Managed IT Services",
    desc: "Outsource your IT management for seamless business operations."
  },
  {
    icon: <FaCloud className="text-2xl text-gray-700" />,
    title: "Cloud Computing",
    desc: "Migrate to the cloud for scalability and efficiency."
  },
  {
    icon: <FaCode className="text-2xl text-gray-700" />,
    title: "Custom Software Development",
    desc: "Tailor-made applications to suit your unique business needs."
  },
  {
    icon: <FaMobileAlt className="text-2xl text-gray-700" />,
    title: "Mobile App Development",
    desc: "Build engaging and high-performing mobile applications."
  },
  {
    icon: <FaServer className="text-2xl text-gray-700" />,
    title: "Server Management",
    desc: "Ensure optimal performance and security of your server infrastructure."
  },
  {
    icon: <FaNetworkWired className="text-2xl text-gray-700" />,
    title: "Network Solutions",
    desc: "Design and implement secure, high-speed networks for your business."
  },
  {
    icon: <FaTools className="text-2xl text-gray-700" />,
    title: "IT Support & Maintenance",
    desc: "24/7 technical support and proactive maintenance."
  }
];

const Services = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Our Key Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="border rounded-lg p-5 hover:shadow-md transition bg-white"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold text-base">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
