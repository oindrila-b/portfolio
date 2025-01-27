"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; // Install react-icons

interface Project {
  name: string;
  githubLink: string;
  liveLink?: string; // Optional live link
}

const projects: Project[] = [
  { 
    name: " JS Game", 
    githubLink: "https://github.com/oindrila-b/2048_JS",
    liveLink: "https://two048-js.onrender.com/", // No live link for this one
  },
  { 
    name: "Portfolio Website", 
    githubLink: "https://github.com/oindrila-b/portfolio",
    liveLink: "https://oindrilabanerjee.vercel.app/",
  },
  { 
    name: "The Corporate Dictionary", 
    githubLink: "https://github.com/oindrila-b/TheCorporateDictionary",
    liveLink: "",
  },
  { 
    name: "Affirmation-extension", 
    githubLink: "https://github.com/oindrila-b/affirmation-ext",
    liveLink: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const WorkSection: React.FC = () => {
  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center">
      <div className="container mx-auto px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-12">
          My Work
        </h2>
        <div
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            projects.length % 3 !== 0 ? "lg:justify-center" : ""
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // Trigger animation every time it's in viewport
            >
              <h3 className="text-sm sm:text-sm md:text-[17px]/10 font-semibold text-white mb-4 tracking-widest text-center">
                {project.name}
              </h3>
              <div className="flex items-center justify-between">
                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline text-[10px]/8 sm:text-[12px]/8"
                >
                  View Code on GitHub
                </a>
                
                {/* Conditionally Render Live Link Icon */}
                {project.liveLink && project.liveLink !== "" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center"
                  >
                    <FiExternalLink className="w-5 h-5 ml-2 sm:w-6 sm:h-6" aria-label="Live link" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
