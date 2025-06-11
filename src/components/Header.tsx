"use client";

import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const sections = [
    "home",
    "about",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Name */}
        <div className="text-white text-2xl font-bold">Rithika Murali</div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-6 text-gray-300">
            {sections.map((sec) => (
              <li key={sec}>
                <ScrollLink
                  to={sec}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-white capitalize"
                >
                  {sec}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl text-gray-300">
          <a
            href="https://github.com/rithikaAM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rithika-a-m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
