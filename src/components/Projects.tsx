// src/components/Projects.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  category: string;
};

// Tabs/categories
const categories = [
  "Web Development",
  "Machine Learning",
  "Systems Programming",
  "Personal Projects",
];

// All projects (including your GitHub ones)
const projects: Project[] = [
  {
    title: "Protein Source Compliance",
    description: "Automated regulatory assessment UI built in React & Python.",
    tech: ["React", "Python", "Tailwind"],
    github: "https://github.com/rithikaAM/Protein-source",
    live: "#",
    category: "Web Development",
  },
  {
    title: "Automobile Price Analysis",
    description: "Web scraping & data parsing with Selenium and Java.",
    tech: ["Java", "Selenium", "JavaScript"],
    github: "https://github.com/rithikaAM/Automobile",
    live: "#",
    category: "Web Development",
  },
  {
    title: "Credit Card Fraud Detector",
    description:
      "Fraud detection for online transactions using RNN-LSTM with attention.",
    tech: ["Python", "TensorFlow", "LSTM", "Attention"],
    github:
      "https://github.com/rithikaAM/Credit-card-Fraud-detection-for-online-transactions-using-RNN-LSTM-with-Attention-mechanism",
    category: "Machine Learning",
  },
  {
    title: "OCR Stone Inscription Classifier",
    description:
      "Deep learning OCR & CNN pipeline for heritage artifact classification.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/rithikaAM/OCR-Classifier",
    category: "Machine Learning",
  },
  {
    title: "Custom TCP File Distributor",
    description:
      "Distributed file system using C socket programming across Smain, Spdf, and Stext servers.",
    tech: ["C", "Sockets", "Linux"],
    github:
      "https://github.com/rithikaAM/File-Distribution-system-with-Socket-Programming-in-Linux",
    category: "Systems Programming",
  },
  {
    title: "Smart Energy Alert System",
    description:
      "Real-time smart energy management & alert dashboard built with Flask and React.",
    tech: ["Flask", "React", "Socket.IO"],
    github: "https://github.com/rithikaAM/Smart-Energy-Alert",
    live: "#",
    category: "Personal Projects",
  },
  // …you can add more here
];

export default function Projects() {
  const [active, setActive] = useState(categories[0]);
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-indigo-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-700 mb-4">{p.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4 text-gray-700 text-xl">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600"
                >
                  <FaGithub />
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
