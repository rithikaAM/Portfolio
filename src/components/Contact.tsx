// src/components/Contact.tsx
"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Let’s Stay in Touch
        </h2>
        <p className="text-gray-700 mb-12">
          If you want to know more about me, feel free to email me or connect
          with me on LinkedIn.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-md transition flex flex-col items-center"
          >
            <FaEnvelope className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Email Me
            </h3>
            <p className="text-gray-600 mb-6">
              I’m available for any queries or collaboration ideas. Let’s
              connect!
            </p>
            <a
              href="mailto:rithikamurali2001@gmail.com"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Send an Email
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-md transition flex flex-col items-center"
          >
            <FaLinkedin className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Connect on LinkedIn
            </h3>
            <p className="text-gray-600 mb-6">
              Let’s network professionally and stay connected for future
              opportunities.
            </p>
            <a
              href="https://linkedin.com/in/rithika-a-m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
