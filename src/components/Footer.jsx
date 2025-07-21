import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiCode } from "react-icons/fi";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  // const techStack = [
  //   { icon: <FaReact className="text-blue-400" size={14} />, name: "React" },
  //   {
  //     icon: <SiNextdotjs className="text-black dark:text-white" size={14} />,
  //     name: "Next.js",
  //   },
  //   {
  //     icon: <SiTailwindcss className="text-cyan-400" size={14} />,
  //     name: "Tailwind",
  //   },
  //   {
  //     icon: <FaNodeJs className="text-green-500" size={14} />,
  //     name: "Node.js",
  //   },
  // ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Notes", path: "/notes" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-violet-700 to-indigo-800 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized floating bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              opacity: 0,
            }}
            animate={{
              y: [0, -Math.random() * 50 - 30],
              x: [0, Math.random() * 20 - 10],
              opacity: [0.2, 0],
              transition: {
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 8,
              },
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo with refined animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-6 group relative"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-md"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-violet-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200 tracking-tight">
                Skilled-with-Notes
              </span>
            </div>

            {/* Tech stack badge */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {/* <div className="flex bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs space-x-2 items-center border border-white/10">
                <FiCode className="text-violet-200" size={12} />
                {techStack.map((tech, i) => (
                  <span
                    key={`${tech.name}-${i}`}
                    className="flex items-center space-x-1"
                  >
                    {tech.icon}
                    <span className="text-xs">{tech.name}</span>
                    {i < techStack.length - 1 && (
                      <span className="mx-1 text-white/30">•</span>
                    )}
                  </span>
                ))}
              </div> */}
            </motion.div>
          </motion.div>

          {/* Navigation with improved wave effect */}
          <motion.nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {navLinks.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative ${
                    isActive ? "text-white" : "text-violet-200"
                  } hover:text-white transition-colors group px-1`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    className="block"
                    whileHover={{
                      y: [0, -2, 0],
                      transition: { duration: 0.6, repeat: Infinity },
                    }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: i * 0.07,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 ${
                        isActive ? "w-full" : "w-0"
                      } h-px bg-white transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </motion.span>
                )}
              </NavLink>
            ))}
          </motion.nav>

          {/* Copyright with refined layout */}
          <motion.div
            className="flex flex-col items-center text-center text-xs text-violet-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-2">
              <span>Made</span>
              <motion.span
                className="mx-1.5"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <FiHeart className="text-pink-400" size={14} />
              </motion.span>
              <span>by Duo Team</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mb-2">
              <span>© {new Date().getFullYear()} Skilled-with-Notes</span>
              <span className="w-1 h-1 rounded-full bg-violet-400/50"></span>
              <Link
                to="/privacy"
                className="hover:text-white hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-violet-400/50"></span>
              <Link
                to="/terms"
                className="hover:text-white hover:underline transition-colors"
              >
                Terms
              </Link>
              <span className="w-1 h-1 rounded-full bg-violet-400/50"></span>
              <Link
                to="/cookies"
                className="hover:text-white hover:underline transition-colors"
              >
                Cookies
              </Link>
            </div>

            <motion.div
              className="mt-1 text-[0.65rem] opacity-70 hover:opacity-100 transition-opacity flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <span>v1.2.4</span>
              <span className="mx-1.5 w-1 h-1 rounded-full bg-violet-400/50"></span>
              <span>
                Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
