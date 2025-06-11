// src/app/page.tsx

import Header from "@/components/Header";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed top navigation */}
      <Header />

      {/* Hero + Particle Background */}
      <main className="relative min-h-screen overflow-hidden">
        <ParticlesBackground />
        <Hero />
      </main>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
