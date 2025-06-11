// src/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  // Typewriter words
  const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Machine Learning Enthusiast",
    "UI/UX Designer",
  ];

  // Typewriter state
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const period = 2000;

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);
    return () => clearTimeout(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % titles.length;
    const fullText = titles[i];
    const updated = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updated);
    if (isDeleting) setDelta(100);

    if (!isDeleting && updated === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // Skill highlights (DevOps removed)
  const highlights = [
    { title: "Frontend Craftsmanship", subtitle: "React & Next.js" },
    { title: "Robust Backends", subtitle: "Node.js & Express" },
    { title: "Cloud Expertise", subtitle: "Azure & AWS" },
    { title: "Data Science", subtitle: "Python & RNN/LSTM" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        Hi, I’m <span className="text-indigo-500">Rithika Murali</span>
      </motion.h1>

      {/* Typewriter subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 max-w-2xl text-lg md:text-2xl text-gray-300 flex items-center justify-center"
      >
        <span>{text}</span>
        <span className="ml-1 animate-pulse">|</span>
      </motion.h2>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex gap-6 mt-8 text-2xl"
      >
        <a
          href="https://github.com/rithikaAM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rithika-a-m"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Skill Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-12 mt-12"
      >
        {highlights.map((h) => (
          <div key={h.title} className="flex flex-col items-center">
            <span className="text-2xl font-semibold">{h.title}</span>
            <span className="text-gray-300">{h.subtitle}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
