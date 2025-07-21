import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaBook,
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { UseUser } from "../context/UserContext";
// import { FiHeart, FiCode } from "react-icons/fi";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logoutUser } = UseUser();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Nav items data for cleaner rendering
  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/notes", label: "Notes", icon: <FaBook /> },
    { path: "/about", label: "About Us", icon: <FaInfoCircle /> },
  ];

  const authItems = [
    { path: "/register", label: "Register", icon: <FaUserPlus /> },
    { path: "/login", label: "Login", icon: <FaSignInAlt /> },
  ];

  return (
    <header
      className={`bg-gradient-to-r from-violet-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand Name with animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="group relative"
        >
          <Link to="/" className="flex items-center space-x-2">
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
          </Link>

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-1 transition-colors font-medium px-3 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 hover:text-violet-200"
                }`}
              >
                <span className="text-violet-200">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Auth Buttons and Profile */}
        <div className="hidden md:flex items-center space-x-2">
          {user ? (
            <div className="relative group" ref={dropdownRef}>
              <motion.button
                onClick={toggleProfileDropdown}
                className="h-10 w-10 rounded-full overflow-hidden border-2 border-white cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                )}
              </motion.button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl py-1 z-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-violet-100 transition-colors flex items-center"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    <FaUser className="mr-2" /> View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-violet-100 transition-colors flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <>
              {authItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors shadow-md ${
                      item.path === "/register"
                        ? "bg-white text-violet-700 hover:bg-violet-100"
                        : "border-2 border-white hover:bg-white/10"
                    }`}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-violet-800 to-indigo-900 px-4 py-3 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col space-y-2">
              {/* Main navigation links */}
              {navItems.map((item) => (
                <motion.div key={item.path} variants={mobileItemVariants}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 transition-colors font-medium py-3 px-3 rounded-lg ${
                      location.pathname === item.path
                        ? "bg-white/20 text-white"
                        : "hover:bg-white/10 hover:text-violet-200"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Auth buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                {user ? (
                  <>
                    <motion.div variants={mobileItemVariants}>
                      <Link
                        to="/profile"
                        className="flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium border-2 border-white hover:bg-white/10 transition-colors shadow-md"
                        onClick={toggleMobileMenu}
                      >
                        <FaUser />
                        <span>Profile</span>
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants}>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium border-2 border-white hover:bg-white/10 transition-colors shadow-md"
                      >
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  </>
                ) : (
                  authItems.map((item) => (
                    <motion.div key={item.path} variants={mobileItemVariants}>
                      <Link
                        to={item.path}
                        className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors shadow-md ${
                          item.path === "/register"
                            ? "bg-white text-violet-700 hover:bg-violet-100"
                            : "border-2 border-white hover:bg-white/10"
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
