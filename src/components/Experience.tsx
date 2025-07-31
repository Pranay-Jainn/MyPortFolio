import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: "Computer Science Student",
      company: "Currently Studying",
      duration: "Present",
      location: "Jaipur, Rajasthan",
      description:
        "Focused on building strong foundations in computer science fundamentals while developing practical skills through personal projects and coding challenges.",
      technologies: ["Java", "Python", "C", "Data Structures", "Algorithms"],
      achievements: [
        "Built multiple full-stack web applications",
        "Actively solving problems on LeetCode and HackerRank",
        "Learning modern web development frameworks",
      ],
    },
    {
      id: 2,
      title: "Self-Taught Developer",
      company: "Personal Learning Journey",
      duration: "2023 - Present",
      location: "Jaipur, Rajasthan",
      description:
        "Embarked on a self-directed learning path to master web development technologies and programming languages through online courses, documentation, and hands-on projects.",
      technologies: ["React", "Next.js", "JavaScript", "Node.js", "MongoDB"],
      achievements: [
        "Completed multiple web development projects",
        "Mastered React and modern JavaScript",
        "Built responsive and interactive user interfaces",
      ],
    },
    {
      id: 3,
      title: "Problem Solving Enthusiast",
      company: "Coding Platforms",
      duration: "2023 - Present",
      location: "Online",
      description:
        "Actively participating in coding challenges and competitive programming to strengthen algorithmic thinking and problem-solving skills.",
      technologies: ["Java", "Python", "C", "Data Structures", "Algorithms"],
      achievements: [
        "Regular practice on LeetCode and HackerRank",
        "Solved 100+ coding problems",
        "Preparing for technical interviews and placements",
      ],
    },
    {
      id: 4,
      title: "Looking Forward",
      company: "Open to Opportunities",
      duration: "Future",
      location: "Anywhere – Remote or On-site",
      description:
        "Eager to contribute to real-world projects, collaborate with experienced developers, and grow as a software engineer. Looking for opportunities to apply my knowledge in a dynamic, innovative environment.",
      technologies: [
        "Web Development",
        "Teamwork",
        "Adaptability",
        "Continuous Learning",
      ],
      achievements: [
        "Ready to take on internships or junior developer roles",
        "Open to learning new tech stacks and industry tools",
        "Excited to make an impact and grow with a team",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-cyan-400 mb-2">
                          <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{exp.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-300 flex items-start"
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
