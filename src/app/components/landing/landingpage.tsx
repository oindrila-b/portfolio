"use client";

import { motion } from "framer-motion";
import { style } from "framer-motion/client";
import Image from "next/image";
import  Typewriter  from "typewriter-effect";
export default function LandingPage() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-4 sm:p-16 tracking-widest overflow-auto">
      <motion.div
        className="h-10 w-10 text-base"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Oindrila_
      </motion.div>

      {/* Intro */}
      <div className="grid custom:grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 h-auto sm:h-72 md:h-80 flex flex-col justify-center items-start space-y-4 pt-24"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl pb-24">OINDRILA</p>
          <motion.p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl pb-24"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ duration: 1.3 }}
          >BANERJEE</motion.p>
        </motion.div>

        <motion.div
          className="w-80 h-80 bg-white rounded-xl overflow-hidden flex justify-center items-center lg:ml-96 sm:justify-items-center sm:m-auto"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/asset/mee.png" alt="profile" width={600} height={600} className="pt-16 pl-8" />
        </motion.div>

      </div>
      <motion.div className="text-lg lg:text-3xl justify-items-center">
        <Typewriter
          options={{
            strings: ['SDE', 'BACKEND', 'FRONTEND', 'JAVA', 'AWS', 'TYPESCRIPT', 'DOCKER', 'REACT', 'NEXT'],
            autoStart: true,
            loop: true,
            cursor: '_',            
          }}
        />
      </motion.div>
    </div>
  );
}
