import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaBook, FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  // Nav items data for cleaner rendering
  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/notes", label: "Notes", icon: <FaBook /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> }
  ];

  const authItems = [
    { path: "/register", label: "Register", icon: <FaUserPlus /> },
    { path: "/login", label: "Login", icon: <FaSignInAlt /> }
  ];

  const profileItems = [
    { path: "/profile", label: "My Profile" },
    { path: "/settings", label: "Settings" },
    { path: "/logout", label: "Logout" }
  ];

  return (
    <header className={`bg-gradient-to-r from-violet-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-violet-700"
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
          </div>

          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">
              Skilled-with-Notes
            </span>
          </Link>
        </div>

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
          
          {/* Profile dropdown */}
          <div className="relative group ml-2">
            <Link
              to="/profile"
              className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center cursor-pointer shadow-md"
            >
              <FaUser className="text-white" />
            </Link>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
              {profileItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-800 hover:bg-violet-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
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
                <motion.div 
                  key={item.path}
                  variants={mobileItemVariants}
                >
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
                {authItems.map((item) => (
                  <motion.div 
                    key={item.path}
                    variants={mobileItemVariants}
                  >
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
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// --------------after redux use ------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const user = useSelector((state) => state.user);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left side - Logo and Name */}
//         <div className="flex items-center space-x-2">
//           <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-violet-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>

//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-xl font-bold hover:text-violet-200 transition-colors">
//               Skilled-with-Notes
//             </span>
//           </Link>
//         </div>

//         {/* Middle - Navigation Links (hidden on mobile) */}
//         <nav className="hidden md:flex space-x-8">
//           <Link
//             to="/"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/notes"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Notes
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             About Us
//           </Link>
//         </nav>

//         {/* Right side - Auth Buttons and Profile */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <Link
//               to="/profile"
//               className="flex items-center space-x-2"
//             >
//               <img 
//                 src={user.avatar} 
//                 alt="Profile" 
//                 className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
//               />
//               <span className="font-medium">{user.name}</span>
//             </Link>
//           ) : (
//             <>
//               <Link
//                 to="/register"
//                 className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors"
//               >
//                 Register
//               </Link>
//               <Link
//                 to="/login"
//                 className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile menu button (visible on small screens) */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu (shown when toggled) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-violet-800 px-4 py-2">
//           <div className="flex flex-col space-y-3">
//             <Link
//               to="/"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/notes"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Notes
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               About Us
//             </Link>
//             {user ? (
//               <Link
//                 to="/profile"
//                 className="flex items-center space-x-2 py-2"
//                 onClick={toggleMobileMenu}
//               >
//                 <img 
//                   src={user.avatar} 
//                   alt="Profile" 
//                   className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
//                 />
//                 <span className="font-medium">My Profile</span>
//               </Link>
//             ) : (
//               <div className="flex flex-col space-y-2 pt-2">
//                 <Link
//                   to="/register"
//                   className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors w-full text-center"
//                   onClick={toggleMobileMenu}
//                 >
//                   Register
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors w-full text-center"
//                   onClick={toggleMobileMenu}
//                 >
//                   Login
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


