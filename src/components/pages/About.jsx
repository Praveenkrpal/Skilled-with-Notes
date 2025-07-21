import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLightbulb,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Praveen Kumar",
      role: "Lead Frontend Developer",
      bio: "React specialist crafting beautiful interfaces with Tailwind CSS and modern web technologies. Passionate about creating seamless user experiences that delight and engage.",
      image: "./images/praveen image.jpg",
      social: {
        github: "https://github.com/Praveenkrpal",
        linkedin: "https://www.linkedin.com/in/praveen-kumar-b72195256/",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Lakshay Sawariya",
      role: "Frontend Developer",
      bio: "Creates intuitive user experiences with focus on accessibility and design systems. Believes in the power of clean code and thoughtful design.",
      image: "./images/Lakshay image.jpg",
      social: {
        github: "https://github.com/Lakshay-Sawariya",
        linkedin: "https://www.linkedin.com/in/lakshay-sawariya-541027355/",
        twitter: "#",
        email: "sawariya2585@gmail.com",
      },
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-violet-800 mb-3">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Skilled-with-Notes
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The modern note-taking platform built by developers, for learners
            who want to organize knowledge effortlessly.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                className="w-full h-full min-h-80 object-cover"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team collaborating on project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-800/30 to-transparent"></div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-violet-100 p-2 rounded-lg mr-3">
                  <FaBookOpen className="text-violet-600 text-xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Story
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Skilled-with-Notes was born in 2025 from a simple observation:
                  students everywhere were drowning in disorganized notes,
                  wasting precious time searching for information instead of
                  learning.
                </p>
                <p>
                  As developers who had been through the struggle ourselves, we
                  envisioned a platform that would combine the flexibility of
                  digital note-taking with intelligent organization and powerful
                  search capabilities.
                </p>
                <p>
                  What started as a side project quickly grew into a platform
                  serving thousands of users worldwide, with features shaped by
                  our amazing community of learners.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            Meet <span className="text-violet-600">The Team</span> Behind the
            Magic
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-5">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-16 h-16 rounded-full object-cover border-4 border-violet-100"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-violet-600 rounded-full p-1.5">
                      <FaLightbulb className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-violet-600 text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 transition-colors p-1.5 rounded-full hover:bg-gray-100"
                        aria-label="GitHub"
                      >
                        <FaGithub size={16} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors p-1.5 rounded-full hover:bg-blue-50"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={16} />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-colors p-1.5 rounded-full hover:bg-blue-50"
                        aria-label="Twitter"
                      >
                        <FaTwitter size={16} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-500 hover:text-violet-600 transition-colors p-1.5 rounded-full hover:bg-violet-50"
                        aria-label="Email"
                      >
                        <FaEnvelope size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          >
            Our <span className="text-violet-600">Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "User First",
                icon: <FaRocket className="text-violet-600 text-2xl" />,
                description:
                  "Every feature is designed with real user needs in mind, not just technical possibilities.",
              },
              {
                title: "Simplicity",
                icon: <FaLightbulb className="text-violet-600 text-2xl" />,
                description:
                  "We believe the best tools disappear in use, letting your ideas flow without friction.",
              },
              {
                title: "Continuous Learning",
                icon: <FaBookOpen className="text-violet-600 text-2xl" />,
                description:
                  "We're learners ourselves, constantly improving both our product and our skills.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-violet-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-90">
              To revolutionize the way people capture, organize, and retrieve
              knowledge by building the most intuitive, accessible note-taking
              platform that adapts to your thinking - not the other way around.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
