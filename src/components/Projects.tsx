import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: "Trend Visor",
      description:
        "A comprehensive stock visualizing and forecasting website that provides real-time market data, interactive charts, and predictive analytics to help users make informed investment decisions.",
      image: "/images/Trend-Visor.png",
      technologies: [
        "React",
        "Python",
        "Data Analytics",
        "Chart.js",
        "API Integration",
      ],
      github: "https://github.com/Pranay-Jainn/Trend-Visor",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Solitude Solver",
      description:
        "A fun and engaging games website designed to cure boredom with a collection of interactive games, puzzles, and entertainment options for users of all ages.",
      image: "/images/Solitude-Solver.png",
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      github: "https://github.com/Pranay-Jainn/Games",
      demo: "https://tpgamess.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my projects, skills, and experience with smooth animations and futuristic design elements.",
      image: "/images/Portfolio.png",
      technologies: [
        "React",
        "Framer Motion",
        "TailwindCSS",
        "Lucide React",
        "Responsive Design",
      ],
      // github: '#',
      demo: "#",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-md mx-auto hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Resume</h3>
            <p className="text-gray-300 mb-6">
              Download my resume to learn more about my background and
              experience.
            </p>
            <motion.a
              href="/PranayJain Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative group overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <span className="text-cyan-400 text-sm font-medium">
                    Featured Project
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 text-sm rounded-lg border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-lg border border-gray-600 hover:border-cyan-400 transition-all duration-300"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
