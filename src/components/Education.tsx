"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type EducationItem = {
  title: string;
  institution: string;
  date: string;
  details: string;
};

const educationData: EducationItem[] = [
  {
    title: "Master of Applied Computing (Co-Op)",
    institution: "University of Windsor, Windsor, ON",
    date: "Sep 2023 – Dec 2024",
    details:
      "Relevant coursework: Machine Learning, Cloud Computing, Advanced Algorithms.",
  },
  {
    title: "Bachelor of Applied Computing",
    institution: "Rajalakshmi Institute of Technology, Chennai, India",
    date: "Sept 2019 – Apr 2023",
    details:
      "Focused on software engineering, algorithms, database systems, and UX design.",
  },
];

export default function Education() {
  const [active, setActive] = useState<number>(0);
  const current = educationData[active];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          {/* Left: List of programs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {educationData.map((edu, idx) => (
              <button
                key={edu.title}
                onClick={() => setActive(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg transition
                  ${
                    idx === active
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-indigo-50"
                  }`}
              >
                <span className="font-medium">{edu.title}</span>
                <div className="text-sm">{edu.date}</div>
              </button>
            ))}
          </motion.div>

          {/* Right: Detail card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {current.title}
            </h3>
            <p className="text-indigo-600 mb-2">{current.institution}</p>
            <p className="text-gray-500 mb-4">{current.date}</p>
            <p className="text-gray-700 leading-relaxed">{current.details}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
