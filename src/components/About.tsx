import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Python", level: 80, color: "from-green-400 to-green-600" },
    { name: "Java", level: 75, color: "from-red-400 to-red-600" },
    { name: "Node.js", level: 70, color: "from-green-500 to-green-700" },
    {
      name: "Data Analytics",
      level: 75,
      color: "from-purple-400 to-purple-600",
    },
  ];

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "C",
    "Java",
    "Python",
    "R",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Figma",
    "Data Analytics",
    "Bootstrap",
    "DSA",
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Hi, I'm Pranay Jain
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate and self-driven developer with a growing
                expertise in modern web technologies and programming. I enjoy
                building clean, interactive, and performance-focused web
                experiences using React, TailwindCSS, and emerging frontend
                tools.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently, I'm diving deeper into the world of software
                development — exploring languages like Java, C, Python while
                sharpening my problem-solving skills with platforms like
                LeetCode to prepare for placements and future tech roles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether it's creating animated, futuristic UI designs or
                optimizing backend logic, I love combining creativity with code
                to bring meaningful digital ideas to life. I'm also an avid
                learner who isn't afraid to get hands-on with new frameworks,
                tools, or concepts that challenge me to grow.
              </p>
              <p className="text-cyan-400 font-medium mt-4">
                Let's build the future — one line of code at a time.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-6">
                Core Skills
              </h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  animate={inView ? { opacity: 1, width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <span className="text-sm text-gray-300 hover:text-white transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Built", value: "3+" },
                { label: "Technologies", value: "15+" },
                { label: "Problems Solved", value: "100+" },
                { label: "Coffee Cups", value: "∞" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
