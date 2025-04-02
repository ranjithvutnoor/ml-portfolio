// Main entry file for ML Engineer Portfolio
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-blue-600">Ranjith Vutnoor</span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-2xl max-w-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Machine Learning Engineer specializing in customized chatbot development using LLMs, RAG pipelines, and GPU-accelerated systems.
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-md sm:text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a passionate Machine Learning Engineer with expertise in building intelligent chatbot systems using LLMs, LangChain, RAG pipelines, and vector databases. I enjoy crafting full-stack AI applications and optimizing models with CUDA for real-world deployment.
      </motion.p>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "LLM-based Customer Support Chatbot",
      description:
        "Built an intelligent chatbot using OpenAI + LangChain to handle 24/7 multilingual customer queries with context retention and fallback search.",
      tags: ["LLM", "LangChain", "RAG"],
      github: "https://github.com/ranjithvutnoor/chatbot-llm-support",
      demo: "#"
    },
    {
      title: "Industrial Anomaly Detection (Thesis)",
      description:
        "Developed ConvLSTM and MSCRED-based system to detect cobbles in steel manufacturing data. Optimized training with CUDA and GEMM achieving 45% performance boost.",
      tags: ["ConvLSTM", "MSCRED", "CUDA"],
      github: "https://github.com/ranjithvutnoor/anomaly-detection-thesis",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl border dark:border-gray-800 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-blue-600 font-medium mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a href={project.github} target="_blank" className="text-blue-600 hover:underline">
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" className="text-blue-600 hover:underline">
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "Python", "PyTorch", "TensorFlow", "CUDA", "React", "Vite", "TailwindCSS",
    "LangChain", "RAG", "LLMs", "FastAPI", "Git", "Docker", "Azure", "VectorDB"
  ];
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Tools
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience & Research
      </motion.h2>
      <div className="space-y-8 text-left">
        <div>
          <h3 className="text-xl font-bold">ML Engineer – HCL Technologies (Client: Teradyne)</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Oct 2023 – Present | Chennai</p>
          <p className="text-sm leading-relaxed">
            Built RAG-based customized chatbot systems using LLMs for semiconductor equipment support. Worked on data preprocessing, fine-tuning, and deployment. Integrated vector DB search and cloud deployment.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Research Intern – IIT Bhilai</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Jun 2022 – Jun 2023</p>
          <p className="text-sm leading-relaxed">
            Developed ConvLSTM-based anomaly detection system using industrial time-series data. Achieved 45% speed-up with CUDA GEMM-based convolution optimization. Focused on predictive maintenance in manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="space-y-8 text-left">
        <div>
          <h3 className="text-xl font-bold">M.Tech – Data Science and Artificial Intelligence</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Indian Institute of Technology, Bhilai (2021–2023)</p>
          <p className="text-sm">Focused on deep learning, signal processing, and time series modeling for industrial applications.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">B.E. – Computer Science</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Vasavi College of Engineering, Hyderabad</p>
          <p className="text-sm">Core training in software engineering, data structures, and competitive programming.</p>
        </div>
      </div>
    </section>
  );
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
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border dark:bg-gray-800" required />
        <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border dark:bg-gray-800" required />
        <textarea name="message" placeholder="Your Message" rows="5" className="px-4 py-2 rounded border dark:bg-gray-800" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <a href="/resume_ranjith_vutnoor.pdf" download className="inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">
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
        <a href="https://github.com/ranjithvutnoor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ranjithvutnoor/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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
  )
}