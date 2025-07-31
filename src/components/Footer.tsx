import React from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/pranay-jainn" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pranayjain1503/" },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/pranayjain1503",
    },
    { name: "LeetCode", url: "https://leetcode.com/u/Pranay-Jainn/" },
    { name: "Instagram", url: "https://www.instagram.com/_pranayjainnn/" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 relative">
      {/* Floating back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Pranay Jain
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate developer building clean, interactive web experiences
                with modern technologies. Always learning, always coding.
              </p>
            </motion.div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.name === "GitHub" && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    )}
                    {social.name === "LinkedIn" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {social.name === "HackerRank" && (
                      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12C21.75 19.114 13.287 24 12 24s-9.75-4.886-10.392-6C1.002 16.885 1.002 7.115 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.799c0-.141-.115-.258-.258-.258H8.684c-.141 0-.258.115-.258.258v10.402c0 .141.115.258.258.258h1.021c.141 0 .258-.115.258-.258v-4.725h4.074v4.725c0 .141.115.258.258.258h1.021c.141 0 .258-.115.258-.258V6.799c0-.141-.115-.258-.258-.258h-1.021z" />
                    )}
                    {social.name === "LeetCode" && (
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    )}
                    {social.name === "Instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919 -1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07 -3.26-.149-4.771-1.699-4.919-4.92 -.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849 .149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163 c-3.259 0-3.667.014-4.947.072 -4.358.2-6.78 2.618-6.98 6.98 -.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948 .2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98 .059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947 -.196-4.354-2.617-6.78-6.979-6.98 -1.281-.059-1.69-.073-4.949-.073zm0 5.838 c-3.403 0-6.162 2.759-6.162 6.162 s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163 c0-3.403-2.759-6.162-6.162-6.162zm0 10.162 c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 s4 1.791 4 4 c0 2.21-1.791 4-4 4zm6.406-11.845 c-.796 0-1.441.645-1.441 1.44 s.645 1.44 1.441 1.44 c.795 0 1.439-.645 1.439-1.44 s-.644-1.44-1.439-1.44z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>Jaipur, Rajasthan</p>
                <p>pranayjain1503@gmail.com</p>
                <p>+(91) 9571046699</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Pranay Jain. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <HeartIcon className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>

            <div className="text-sm text-gray-500">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
