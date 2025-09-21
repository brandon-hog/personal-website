"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Brandon Hoggatt</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-md border flex items-center gap-2"
        >
          {dark ? "Light" : "Dark"} Mode
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Hi, I'm Brandon — a CS Student & Software Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl max-w-xl mb-6"
        >
          I build web apps and solve problems with C++, Java, TypeScript, and Python.
        </motion.p>
        <motion.div className="flex gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Resume
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="dark:bg-gray-900 dark:text-white bg-white text-gray-900  px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="dark:bg-gray-900 dark:text-white bg-white text-gray-900  rounded-2xl shadow-xl overflow-hidden transition"
            >
              <Image
                src="/project-placeholder.png"
                alt="Project screenshot"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Project {id}</h4>
                <p className={dark ? "text-gray-300" : "text-gray-600"}>
                  Short description of what this project does and why it's cool.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900  px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["C++", "Java", "JavaScript", "Python", "Next.js", "Tailwind"].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="dark:bg-blue-700 dark:text-white bg-blue-100 text-blue-800  px-5 py-2 rounded-full font-medium transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900  px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="dark:bg-gray-700 dark:text-gray-300 bg-white text-gray-600  p-6 border rounded-xl shadow-lg hover:shadow-2xl transition">
            <h4 className="text-xl font-semibold">University of Your School</h4>
            <p>B.S. in Computer Science — Expected May 2026</p>
            <p>GPA: 3.8/4.0</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="dark:bg-gray-900 dark:text-white bg-white text-gray-900  px-8 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
        <p className="mb-6">I'm open to opportunities and collaborations.</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:your.email@example.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Email Me
        </motion.a>
      </section>

      <footer className="dark:bg-gray-800 dark:text-white bg-gray-50 text-gray-900  py-6 text-center border-t">
        <p>© {new Date().getFullYear()} Brandon Hoggatt. All rights reserved.</p>
      </footer>
    </div>
  );
}
