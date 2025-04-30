import React from "react";
import { Code2, Sparkles, ShieldCheck, Truck, Wrench, Leaf } from "lucide-react";

const skills = [
  {
    id: 1,
    title: "Product Design",
    description: "Creating intuitive, beautiful designs with user experience at the core.",
    icon: <Sparkles size={32} className="text-indigo-600" />,
  },
  {
    id: 2,
    title: "Front-end Development",
    description: "Building fast, responsive web experiences with modern technologies.",
    icon: <Code2 size={32} className="text-indigo-600" />,
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Ensuring every product meets high standards of durability and function.",
    icon: <ShieldCheck size={32} className="text-indigo-600" />,
  },
  {
    id: 4,
    title: "Sustainable Materials",
    description: "We use eco-friendly, sustainable materials in every product we create.",
    icon: <Leaf size={32} className="text-indigo-600" />,
  },
  {
    id: 5,
    title: "Worldwide Shipping",
    description: "We deliver to over 50+ countries with reliable international partners.",
    icon: <Truck size={32} className="text-indigo-600" />,
  },
  {
    id: 6,
    title: "Custom Support",
    description: "We stand behind our products and help customers every step of the way.",
    icon: <Wrench size={32} className="text-indigo-600" />,
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold uppercase text-center mb-12">Our Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h2 className="text-lg font-semibold mb-2">{skill.title}</h2>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
