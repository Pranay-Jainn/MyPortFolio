import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // To display success/error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/a16e35312522734a8611602692dcb01e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        alert("Message sent successfully!");
      } else {
        setFormStatus("error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "pranayjain1503@gmail.com",
      link: "mailto:pranayjain1503@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+(91) 9571046699",
      link: "tel:+919571046699",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Jaipur, Rajasthan",
      link: "https://maps.app.goo.gl/BJqd87RiSYxaPg8S7",
    },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/pranay-jainn", icon: faGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranayjain1503/",
      icon: faLinkedin,
    },
    {
      name: "Hackerrank",
      url: "https://www.hackerrank.com/profile/pranayjain1503",
      icon: faHackerrank,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_pranayjainnn/",
      icon: faInstagram,
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, need consultation, or just
                want to say hello, I'd love to hear from you. Drop me a message
                and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === "Location" ? "_blank" : undefined}
                    rel={
                      info.title === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <info.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
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
                      <FontAwesomeIcon icon={social.icon} className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {formStatus === "success" && (
                  <p className="text-green-400 text-center">
                    Message sent successfully!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
