import {
  Cloud,
  Code,
  Shield,
  Settings,
  Database,
  Smartphone,
  LineChart,
  Cpu
} from "lucide-react";

const expertise = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Computing",
    description:
      "Scalable and secure cloud solutions tailored to your business."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Development",
    description:
      "Custom software development to meet your specific requirements."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity",
    description:
      "Protecting your business from cyber threats with robust security measures."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "IT Infrastructure",
    description:
      "Reliable and efficient IT infrastructure to support your operations."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Management",
    description:
      "Organizing, storing, and analyzing your data for maximum business impact."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description:
      "High-performance mobile applications for iOS and Android platforms."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Business Analytics",
    description:
      "Transforming raw data into actionable insights for smarter decisions."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI & Machine Learning",
    description:
      "Leveraging AI to automate processes and improve business efficiency."
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 hover:shadow-lg transition duration-300"
            >
              <div className="text-gray-800">{item.icon}</div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
