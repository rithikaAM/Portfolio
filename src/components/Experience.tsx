// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";

type Role = {
  title: string;
  company: string;
  date: string;
  description: string;
  tech: string[];
};

const roles: Role[] = [
  {
    title: "Software Engineer",
    company: "Agri Foods Canada",
    date: "Nov 2024 – Apr 2025",
    description:
      "Developed a user-friendly interface for an apple variety recommendation system using React.js, ensuring a responsive and intuitive design, and implemented design patterns to reduce bugs and improve code quality.",
    tech: ["React", "Node.js", "MongoDB", "Python"],
  },
  {
    title: "Full Stack Developer",
    company: "Kone Elevators",
    date: "Dec 2022 – Apr 2023",
    description:
      "Created over 370 ReactJS components with 97% test coverage using React Testing Library, and collaborated on REST API design to enhance data exchange and system interoperability.",
    tech: ["React", "Testing Library", "Node.js", "JavaScript"],
  },
  {
    title: "Software Engineer",
    company: "Rajalakshmi Institute of Technology",
    date: "Jul 2022 – Dec 2022",
    description:
      "Applied OCR and CNN-based deep learning techniques to classify ancient stone inscriptions, improving image processing accuracy via segmentation, feature extraction, and Unicode mapping.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Experience
        </h2>

        {/* Role Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {r.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {r.company} • {r.date}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {r.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
