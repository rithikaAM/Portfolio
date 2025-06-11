// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Docker",
  "Kubernetes",
];

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 bg-white text-gray-800">
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Avatar (object-cover format) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-indigo-500"
        >
          <img
            src="/profile.jpg"
            alt="Rithika Murali"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed">
            I’m a Microsoft Azure–certified Software Engineer passionate about
            building scalable web applications. My toolkit includes React,
            Next.js, Node.js, and Python, and I thrive on crafting intuitive UIs
            with solid UX principles.
          </p>
          <p className="text-lg leading-relaxed">
            I hold a Master’s in Applied Computing from University of Windsor
            and have delivered projects ranging from deep-learning OCR systems
            to full-stack web platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
