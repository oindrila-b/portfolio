"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPage: React.FC = () => {
  const textLines = [
    "Hi \u0021 My name is Oindrila Banerjee and I am a Software Developer passionate about my craft·",
    "I love solving complex problems and learning cutting-edge technologies",
    "I have worked in the industry for two yearș exploring different technologies and working on them·  ",
    "Outside work̦ I enjoy reading̦ painting̦ drinking coffee̦ and aim to make an impact through technology·",
    "Scroll down to explore my work !",
  ];

  // Animation controls
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has completed

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start("visible"); // Trigger animation when section is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, [controls, hasAnimated]);

  // Animation variants for each line
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Add a delay for each line
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center rounded-lg"
    >
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 px-8 py-12 rounded-2xl shadow-lg hover:shadow-indigo-500/50 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Who I Am
        </h2>
        <div className="space-y-4 text-center">
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              className="text-sm/8 md:text-xl/20 text-white tracking-widest"
              variants={lineVariants}
              initial="hidden"
              animate={controls} // Use animation controls for triggering
              custom={index} // Pass index to the variants for staggered effect
              onAnimationComplete={() => setHasAnimated(true)} // Mark animation as complete
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
