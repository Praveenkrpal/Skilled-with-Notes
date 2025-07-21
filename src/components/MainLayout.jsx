import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialMediaIcons = ({ isMobile = false }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const socialLinks = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "GitHub",
      url: "/",
      description: "Check out our projects",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      name: "LinkedIn",
      url: "/",
      description: "Connect with our network",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      name: "Facebook",
      url: "/",
      description: "Join our community discussions",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      name: "Twitter",
      url: "/",
      description: "Follow our latest updates",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      ),
      name: "Instagram",
      url: "/",
      description: "See our visual stories",
    },
  ];

  return (
    <div
      ref={ref}
      className={`${isMobile ? "flex lg:hidden" : "hidden lg:flex"} ${
        isMobile ? "justify-center" : "fixed left-0 top-0 h-full w-24"
      } flex-col items-center ${
        isMobile ? "mt-6" : "justify-center"
      } space-y-8 z-10`}
    >
      {!isMobile && (
        <motion.div
          className="h-32 w-px bg-gradient-to-b from-violet-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={controls}
          variants={{ visible: { scaleY: 1 } }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      )}

      <div
        className={`flex ${
          isMobile ? "flex-row gap-4" : "flex-col"
        } items-center ${isMobile ? "" : "space-y-6"}`}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-700 hover:text-violet-500 transition-colors relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{
              delay: index * 0.15 + (isMobile ? 0 : 0.5),
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <div
              className={`${
                isMobile ? "w-10 h-10" : "w-12 h-12"
              } p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-violet-100 group-hover:bg-violet-50`}
            >
              {link.icon}
            </div>
            {!isMobile && (
              <div className="absolute left-full ml-4 px-3 py-2 bg-violet-700 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg w-48">
                <div className="font-bold">{link.description}</div>
                <span className="absolute left-0 -ml-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-violet-700 rotate-45"></span>
              </div>
            )}
          </motion.a>
        ))}
      </div>

      {!isMobile && (
        <motion.div
          className="h-32 w-px bg-gradient-to-t from-violet-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={controls}
          variants={{ visible: { scaleY: 1 } }}
          transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
        />
      )}
    </div>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-100/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/10 to-indigo-50/10"></div>
      </div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-violet-200/40 to-indigo-300/40 blur-xl md:blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -40, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-200/40 to-purple-300/40 blur-xl md:blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple-200/30 to-pink-200/30 blur-lg md:blur-2xl"
        animate={{
          x: [0, 15, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            className="text-violet-300"
          />
        </svg>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => {
          const size = Math.random() * 20 + 8;
          const delay = Math.random() * 5;
          const duration = Math.random() * 20 + 15;
          return (
            <motion.div
              key={i}
              className="absolute text-violet-400/30"
              style={{
                fontSize: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 60 - 30}deg`,
              }}
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 60 - 30],
                rotate: [0, Math.random() * 120 - 60],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {i % 5 === 0
                ? "📝"
                : i % 5 === 1
                ? "📘"
                : i % 5 === 2
                ? "📖"
                : i % 5 === 3
                ? "✏️"
                : "📚"}
            </motion.div>
          );
        })}
      </div>

      {/* Floating Circles */}
      {[...Array(12)].map((_, i) => {
        const size = Math.random() * 20 + 10;
        const delay = Math.random() * 3;
        return (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-violet-200/50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              delay,
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Social Media Sidebar */}
      <SocialMediaIcons />

      {/* Main Content - Adjusted spacing */}
      <div className="flex-1 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-10 text-center z-10 lg:ml-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl w-full px-4 sm:px-6 relative"
        >
          {/* Illustration */}
          <motion.div
            className="mb-4 sm:mb-6 md:mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              },
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full opacity-30 blur-lg sm:blur-xl"></div>
              <img
                src="./images/Notes-logo.png"
                alt="Professional Note Taking"
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-xl sm:drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Headline with positioned icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{ visible: { opacity: 1 } }}
            transition={{ delay: 0.3 }}
            className="mb-4 sm:mb-6 relative"
          >
            {/* Book Icon above "Level" */}
            <motion.div
              className="absolute -top-6 left-1/4 sm:-top-8 sm:left-1/3 md:-top-10 lg:-top-12"
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full flex items-center justify-center text-indigo-600 text-base sm:text-lg shadow-md">
                📚
              </div>
            </motion.div>

            {/* Pen Icon above "Notes" */}
            <motion.div
              className="absolute -top-6 right-1/4 sm:-top-8 sm:right-1/3 md:-top-10 lg:-top-12"
              animate={{ rotate: 45 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full flex items-center justify-center text-violet-600 text-lg sm:text-xl shadow-md">
                ✍️
              </div>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                  Level Up With
                </span>
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Our Organized Notes
                </span>
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{ visible: { opacity: 1 } }}
              transition={{ delay: 0.7 }}
            >
              Master skills for life with notes that work for you. Turn messy
              ideas into clear knowledge instantly. Spend less time organizing,
              more time learning deeply and growing smarter.
            </motion.p>
          </motion.div>

          {/* CTA Button - Reduced bottom margin */}
          <motion.div
            className="flex justify-center mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1 } }}
            transition={{ delay: 1.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.4 }}
            >
              <Link
                to="/notes"
                className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium sm:font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Start Reading Notes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{ visible: { opacity: 1 } }}
            transition={{ delay: 1.6 }}
          >
            <SocialMediaIcons isMobile />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden sm:inline">Help</span>
        </Link>
      </motion.div>

      {/* Overlay Gradients - Adjusted bottom gradient height */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-violet-100/70 via-white/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-violet-100/40 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 h-full w-16 sm:w-32 bg-gradient-to-r from-violet-100/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-16 sm:w-32 bg-gradient-to-l from-indigo-100/30 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
