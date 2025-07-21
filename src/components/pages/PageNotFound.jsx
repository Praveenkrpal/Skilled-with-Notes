import { Link } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaHome,
  FaArrowLeft,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Floating Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-20 sm:opacity-30">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
              rotate: [0, Math.random() * 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {i % 5 === 0
              ? "🚀"
              : i % 5 === 1
              ? "🌌"
              : i % 5 === 2
              ? "🔭"
              : i % 5 === 3
              ? "😕"
              : "✨"}
          </motion.div>
        ))}
      </div>

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400/10"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Card - Responsive sizing */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden border border-white/20 relative z-10 mx-2"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-blue-500/10 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl"></div>

        {/* Header - Responsive padding */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 sm:p-8 text-center relative overflow-hidden">
          {/* Animated Background Elements - Smaller on mobile */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-blue-500/20"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-30 h-30 sm:w-60 sm:h-60 rounded-full bg-purple-500/20"
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="relative z-10"
          >
            <div className="flex justify-center items-center gap-2">
              <FaExclamationTriangle className="text-4xl sm:text-5xl md:text-6xl text-white mx-auto mb-4 sm:mb-6 drop-shadow-lg" />
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                😲
              </motion.span>
            </div>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 relative z-10">
            Oops! 404 - Page Not Found
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg relative z-10">
            Lost in the digital cosmos? 😵‍💫
          </p>
        </div>

        {/* Content - Responsive padding */}
        <div className="p-5 sm:p-8 md:p-10 text-center relative">
          {/* Floating Rocket - Smaller on mobile */}
          <motion.div
            className="absolute -top-8 right-4 sm:-top-12 sm:right-6 text-2xl sm:text-3xl md:text-4xl text-purple-500"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaRocket />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            The page you're looking for has either been moved to another galaxy
            or never existed in this dimension. 😕
          </motion.p>

          {/* Buttons - Stacked on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/"
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl text-sm sm:text-base md:text-lg font-medium w-full"
              >
                <FaHome className="text-lg sm:text-xl" />
                <span>Beam Me Home 🏠</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/notes"
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-100 to-white text-gray-800 rounded-lg sm:rounded-xl hover:from-purple-200 hover:to-white transition-all shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl text-sm sm:text-base md:text-lg font-medium border border-gray-200 w-full"
              >
                <FaArrowLeft className="text-lg sm:text-xl" />
                <span>Back to Notes 📝</span>
              </Link>
            </motion.div>
          </div>

          {/* Help Section - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200/50"
          >
            <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
              Still can't find what you're looking for? 🤔
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors text-sm sm:text-base"
            >
              Contact our support team 💬
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Contact Button - Responsive sizing */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs sm:text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="xs:inline">Need Help? 🆘</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
