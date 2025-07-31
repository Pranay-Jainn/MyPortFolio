import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/04/18/36503-427607440_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pranay Jain
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-Stack Developer & Problem Solver
          </motion.p>

          <motion.p
            className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building clean, interactive web experiences with modern
            technologies. Passionate about solving complex problems and creating
            meaningful digital solutions.
          </motion.p>

          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            View My Work
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
        />

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-xl"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
