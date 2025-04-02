// Main entry file for ML Engineer Portfolio
import React from "react";
import { motion } from "framer-motion";

// Sections: Hero, About, Projects, Skills, Experience, Education, Contact, Footer

function HeroSection() {
  // [Same as before, not repeated here for brevity]
}

function AboutSection() {
  // [Same as before, not repeated here for brevity]
}

function ProjectsSection() {
  // [Same as before, not repeated here for brevity]
}

function SkillsSection() {
  // [Same as before, not repeated here for brevity]
}

function ExperienceSection() {
  // [Same as before, not repeated here for brevity]
}

function EducationSection() {
  // [Same as before, not repeated here for brevity]
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with actual form handler
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded border dark:bg-gray-800"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded border dark:bg-gray-800"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="px-4 py-2 rounded border dark:bg-gray-800"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <a
          href="/resume_ranjith_vutnoor.pdf"
          download
          className="inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Ranjith Vutnoor</p>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/ranjithvutnoor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ranjithvutnoor/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
