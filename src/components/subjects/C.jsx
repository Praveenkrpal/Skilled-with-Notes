// C.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaCode, FaBars, FaArrowLeft, FaTimes, FaLightbulb, 
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp, 
  FaCogs, FaMicrochip, FaMemory, FaFileCode, FaTerminal, 
  FaShieldAlt, FaGlobe 
} from 'react-icons/fa';
import { 
  FiClock, FiCode, FiCpu, FiDatabase, FiLayers, 
  FiPackage, FiUser, FiAward, FiZap 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function CNotes() {
  // State management for UI interactions
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('c-introduction');

  // Intersection observers for each section to track which is currently in view
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [historyRef, historyInView] = useInView({ threshold: 0.1 });
  const [structureRef, structureInView] = useInView({ threshold: 0.1 });
  const [dataTypesRef, dataTypesInView] = useInView({ threshold: 0.1 });
  const [variablesRef, variablesInView] = useInView({ threshold: 0.1 });
  const [operatorsRef, operatorsInView] = useInView({ threshold: 0.1 });
  const [controlRef, controlInView] = useInView({ threshold: 0.1 });
  const [functionsRef, functionsInView] = useInView({ threshold: 0.1 });
  const [arraysRef, arraysInView] = useInView({ threshold: 0.1 });
  const [pointersRef, pointersInView] = useInView({ threshold: 0.1 });
  const [stringsRef, stringsInView] = useInView({ threshold: 0.1 });
  const [structsRef, structsInView] = useInView({ threshold: 0.1 });
  const [filesRef, filesInView] = useInView({ threshold: 0.1 });
  const [memoryRef, memoryInView] = useInView({ threshold: 0.1 });
  const [preprocessorRef, preprocessorInView] = useInView({ threshold: 0.1 });

  // Effect to update active section based on which section is in view
  useEffect(() => {
    const sections = [
      { id: 'c-introduction', inView: introInView },
      { id: 'c-history', inView: historyInView },
      { id: 'c-structure', inView: structureInView },
      { id: 'c-data-types', inView: dataTypesInView },
      { id: 'c-variables', inView: variablesInView },
      { id: 'c-operators', inView: operatorsInView },
      { id: 'c-control', inView: controlInView },
      { id: 'c-functions', inView: functionsInView },
      { id: 'c-arrays', inView: arraysInView },
      { id: 'c-pointers', inView: pointersInView },
      { id: 'c-strings', inView: stringsInView },
      { id: 'c-structs', inView: structsInView },
      { id: 'c-files', inView: filesInView },
      { id: 'c-memory', inView: memoryInView },
      { id: 'c-preprocessor', inView: preprocessorInView }
    ];

    // Find the first section that's currently in view
    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, historyInView, structureInView, dataTypesInView,
    variablesInView, operatorsInView, controlInView, functionsInView,
    arraysInView, pointersInView, stringsInView, structsInView,
    filesInView, memoryInView, preprocessorInView
  ]);

  // Toggle submenu expansion
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? '' : menu);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Copy code to clipboard with feedback
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Menu items data for sidebar navigation
  const menuItems = [
    { id: 'c-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'c-history', label: 'History', icon: <FiClock className="mr-2" /> },
    { id: 'c-structure', label: 'Basic Structure', icon: <FiCode className="mr-2" /> },
    { id: 'c-data-types', label: 'Data Types', icon: <FiDatabase className="mr-2" /> },
    { id: 'c-variables', label: 'Variables', icon: <FiCode className="mr-2" /> },
    { id: 'c-operators', label: 'Operators', icon: <FiCpu className="mr-2" /> },
    { id: 'c-control', label: 'Control Flow', icon: <FiLayers className="mr-2" /> },
    { id: 'c-functions', label: 'Functions', icon: <FiPackage className="mr-2" /> },
    { id: 'c-arrays', label: 'Arrays', icon: <FiDatabase className="mr-2" /> },
    { id: 'c-pointers', label: 'Pointers', icon: <FaMemory className="mr-2" /> },
    { id: 'c-strings', label: 'Strings', icon: <FaFileCode className="mr-2" /> },
    { id: 'c-structs', label: 'Structures', icon: <FiDatabase className="mr-2" /> },
    { id: 'c-files', label: 'File I/O', icon: <FaFileCode className="mr-2" /> },
    { id: 'c-memory', label: 'Memory Management', icon: <FaMemory className="mr-2" /> },
    { id: 'c-preprocessor', label: 'Preprocessor', icon: <FaTerminal className="mr-2" /> }
  ];

  // Feature cards data for introduction section
  const features = [
    {
      title: "Procedural Language",
      description: "C follows a procedural programming paradigm with functions and procedures",
      icon: <FiCode className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Low-level Access",
      description: "Provides direct access to memory and hardware through pointers",
      icon: <FaMicrochip className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Portable",
      description: "C code can be compiled for various platforms with minimal changes",
      icon: <FaGlobe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Efficient",
      description: "Produces highly optimized machine code",
      icon: <FiZap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Structured",
      description: "Supports structured programming with functions and blocks",
      icon: <FiLayers className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Standard Library",
      description: "Rich set of built-in functions for common operations",
      icon: <FiPackage className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Extensible",
      description: "Can be extended with custom libraries and functions",
      icon: <FiCpu className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Foundational",
      description: "Basis for many other programming languages",
      icon: <FiAward className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // C programming examples organized by topic
  const cExamples = {
    basicStructure: `#include <stdio.h>

int main() {
    // Your code here
    printf("Hello, World!\\n");
    return 0;
}`,
    // ... (other examples remain the same)
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 w-full">
      {/* Header section with animated elements */}
      <motion.header
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Sidebar toggle button */}
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </motion.button>

          {/* Main title with animation */}
          <motion.h1
            className="text-2xl md:text-3xl font-bold flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <FaCode className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              C Programming Notes
            </span>
          </motion.h1>

          {/* Back button */}
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
              whileHover={{ x: -5 }}
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline-block">Back</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main content area with sidebar and notes */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Animated sidebar that can be toggled */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-blue-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-blue-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaCode className="text-blue-600" />
                    </motion.div>
                    C Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-blue-700 text-xl transition-colors duration-200 transform hover:rotate-90"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                {/* Navigation menu items */}
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-blue-100 text-blue-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-blue-600 group-hover:text-blue-700 transition-colors ${activeSection === item.id ? 'text-blue-700' : ''}` })}
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area for notes */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="c-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to C Programming
                </h2>
              </div>

              <div className="p-6">
                {/* What is C card */}
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is C?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was originally developed to write the UNIX operating system and has since become one of the most widely used programming languages.
                  </p>

                  {/* Note box with animation */}
                  <motion.div
                    className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-yellow-800">Did You Know?</p>
                        <p className="text-yellow-700">C is often called the "mother of all languages" because many modern programming languages like C++, Java, and Python are based on C.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* C Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic C Structure
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cExamples.basicStructure}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cExamples.basicStructure ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-blue-500" />
                      </motion.div>
                      Key Features
                    </h3>
                    <motion.ul
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:shadow-md"
                          whileHover={{ y: -3 }}
                        >
                          {feature.icon}
                          <div>
                            <strong className="font-semibold text-gray-800">{feature.title}:</strong>
                            <span className="text-gray-700"> {feature.description}</span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* History Section */}
          <section id="c-history" className="mb-12" ref={historyRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiClock className="mr-3" /> History of C
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiClock className="mr-2 text-blue-500" /> Development Timeline
                  </h3>

                  <motion.div
                    className="relative border-l-4 border-blue-400 pl-8 space-y-8 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { year: "1969", event: "Development begins at Bell Labs by Dennis Ritchie", detail: "Created to rewrite UNIX operating system" },
                      { year: "1972", event: "First C compiler released", detail: "Initially ran on PDP-11 computers" },
                      { year: "1978", event: "K&R C published", detail: "The C Programming Language book by Kernighan & Ritchie" },
                      { year: "1989", event: "ANSI C standardized (C89)", detail: "First official standard for the language" },
                      { year: "1990", event: "ISO C (C90)", detail: "International standardization of C89" },
                      { year: "1999", event: "C99 standard released", detail: "Added new features like variable-length arrays" },
                      { year: "2011", event: "C11 standard released", detail: "Added multi-threading support" },
                      { year: "2018", event: "C18 standard released", detail: "Minor revision fixing defects in C11" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative"
                      >
                        <div className="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full text-white font-bold">
                          {index + 1}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">{item.year}: {item.event}</h4>
                        <p className="text-gray-700 ml-2">{item.detail}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Influence */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Influence on Other Languages</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "C++", description: "Extension of C with object-oriented features" },
                      { icon: <FiCode />, title: "Java", description: "Syntax heavily based on C" },
                      { icon: <FiCode />, title: "C#", description: "Microsoft's language derived from C/C++" },
                      { icon: <FiCode />, title: "Python", description: "Core interpreter written in C" },
                      { icon: <FiCode />, title: "JavaScript", description: "Syntax inspired by C" },
                      { icon: <FiCode />, title: "Go", description: "Modern language with C-like syntax" },
                      { icon: <FiCode />, title: "Rust", description: "Systems language with C influences" },
                      { icon: <FiCode />, title: "Swift", description: "Apple's language with C roots" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Basic Structure Section */}
          <section id="c-structure" className="mb-12" ref={structureRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCode className="mr-3" /> Basic Structure
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCode className="mr-2 text-blue-500" /> C Program Structure
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every C program follows a specific structure that includes several essential components. These components provide functionality and define the program flow.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }} >
                      <pre className="font-mono text-sm">
                        <code>{cExamples.basicStructure}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}>
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cExamples.basicStructure ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Program Structure Explanation */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Preprocessor Directives",
                    icon: <FaTerminal className="text-blue-500" />,
                    description: "Lines starting with # that instruct the preprocessor to include header files or define constants/macros before compilation.",
                    example: "#include <stdio.h>"
                  },
                  {
                    title: "Main Function",
                    icon: <FaCode className="text-blue-500" />,
                    description: "The entry point of every C program where execution begins. Must return an integer value.",
                    example: "int main() { ... }"
                  },
                  {
                    title: "Variable Declarations",
                    icon: <FiDatabase className="text-blue-500" />,
                    description: "Memory locations that store data values used in the program.",
                    example: "int count; float price;"
                  },
                  {
                    title: "Statements & Expressions",
                    icon: <FiCpu className="text-blue-500" />,
                    description: "Instructions that perform operations and make decisions in the program.",
                    example: "sum = a + b; if (x > 0) {...}"
                  },
                  {
                    title: "Comments",
                    icon: <FaFileCode className="text-blue-500" />,
                    description: "Text ignored by the compiler used to document code. Single-line (//) or multi-line (/* */).",
                    example: "// This is a comment"
                  },
                  {
                    title: "Functions",
                    icon: <FiPackage className="text-blue-500" />,
                    description: "Reusable blocks of code that perform specific tasks. Can be user-defined or from libraries.",
                    example: "printf(), scanf(), custom_func()"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono text-gray-800">
                      {item.example}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Compilation Process */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <FaCogs className="mr-2 text-gray-600" /> Compilation Process
              </h4>
              <motion.div
                className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6"
                whileHover={{ y: -3 }}
              >
                <p className="mb-3 text-gray-700">
                  C is a compiled language, meaning source code must be translated into machine code before execution:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                    <strong>Preprocessing:</strong> Handles # directives and macros
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                    <strong>Compilation:</strong> Translates code to assembly language
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                    <strong>Assembly:</strong> Converts to machine code (object files)
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                    <strong>Linking:</strong> Combines object files and libraries into executable
                  </motion.li>
                </ol>
              </motion.div>
            </motion.div>
          </section>
        

      {/* Data Types Section */}
      <section id="c-data-types" className="mb-12" ref={dataTypesRef}>
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FiDatabase className="mr-3" /> Data Types
            </h2>
          </div>

          <div className="p-6">
            <motion.div
              className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <FiDatabase className="mr-2 text-blue-500" /> Fundamental Data Types
              </h3>

              <div className="relative group mb-6">
                <motion.div
                  className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                  whileHover={{ scale: 1.01 }}
                >
                  <pre className="font-mono text-sm">
                    <code>{cExamples.dataTypes}</code>
                  </pre>
                </motion.div>
                <motion.button
                  onClick={() => copyToClipboard(cExamples.dataTypes)}
                  className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCopy className="w-4 h-4 mr-1" />
                  {copiedCode === cExamples.dataTypes ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              {/* Data Types Table */}
              <motion.div
                className="overflow-x-auto mb-6"
                whileHover={{ scale: 1.005 }}
              >
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Size (bytes)</th>
                      <th className="py-3 px-4 text-left">Range</th>
                      <th className="py-3 px-4 text-left">Format Specifier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { type: "char", size: "1", range: "-128 to 127", format: "%c" },
                      { type: "unsigned char", size: "1", range: "0 to 255", format: "%c" },
                      { type: "short", size: "2", range: "-32,768 to 32,767", format: "%hd" },
                      { type: "unsigned short", size: "2", range: "0 to 65,535", format: "%hu" },
                      { type: "int", size: "4", range: "-2,147,483,648 to 2,147,483,647", format: "%d" },
                      { type: "unsigned int", size: "4", range: "0 to 4,294,967,295", format: "%u" },
                      { type: "long", size: "4/8", range: "Large range", format: "%ld" },
                      { type: "unsigned long", size: "4/8", range: "0 to very large", format: "%lu" },
                      { type: "float", size: "4", range: "1.2E-38 to 3.4E+38", format: "%f" },
                      { type: "double", size: "8", range: "2.3E-308 to 1.7E+308", format: "%lf" }
                    ].map((row, index) => (
                      <motion.tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        whileHover={{ backgroundColor: "#f0f9ff" }}
                      >
                        <td className="py-3 px-4 font-mono font-medium">{row.type}</td>
                        <td className="py-3 px-4">{row.size}</td>
                        <td className="py-3 px-4">{row.range}</td>
                        <td className="py-3 px-4 font-mono">{row.format}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              {/* Type Modifiers */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Type Modifiers</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "signed/unsigned",
                    description: "Controls whether a type can represent negative numbers",
                    example: "unsigned int positive_only = 42;"
                  },
                  {
                    title: "short/long",
                    description: "Modifies the size and range of integer types",
                    example: "long big_number = 1000000L;"
                  },
                  {
                    title: "const",
                    description: "Makes a variable read-only (unmodifiable)",
                    example: "const double PI = 3.14159;"
                  },
                  {
                    title: "volatile",
                    description: "Indicates a variable may change unexpectedly (used in embedded systems)",
                    example: "volatile int hardware_register;"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h5 className="font-semibold text-blue-700 mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono text-gray-800">
                      {item.example}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Variables Section */}
      <section id="c-variables" className="mb-12" ref={variablesRef}>
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FiCode className="mr-3" /> Variables
            </h2>
          </div>

          <div className="p-6">
            <motion.div
              className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <FiCode className="mr-2 text-blue-500" /> Variables in C
              </h3>

              <div className="relative group mb-6">
                <motion.div
                  className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                  whileHover={{ scale: 1.01 }}
                >
                  <pre className="font-mono text-sm">
                    <code>{cExamples.variables}</code>
                  </pre>
                </motion.div>
                <motion.button
                  onClick={() => copyToClipboard(cExamples.variables)}
                  className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCopy className="w-4 h-4 mr-1" />
                  {copiedCode === cExamples.variables ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              {/* Variable Concepts */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Declaration",
                    description: "Introduces a variable to the program with its type",
                    example: "int age;"
                  },
                  {
                    title: "Initialization",
                    description: "Assigning an initial value to a variable",
                    example: "int score = 100;"
                  },
                  {
                    title: "Assignment",
                    description: "Giving a variable a new value after declaration",
                    example: "age = 25;"
                  },
                  {
                    title: "Scope",
                    description: "Where a variable is accessible (global, local, block)",
                    example: "Global: outside functions\nLocal: inside functions"
                  },
                  {
                    title: "Lifetime",
                    description: "How long a variable exists in memory",
                    example: "Automatic (default), Static, Dynamic"
                  },
                  {
                    title: "Constants",
                    description: "Variables that cannot be modified after definition",
                    example: "const double PI = 3.14159;"
                  },
                  {
                    title: "Storage Classes",
                    description: "Controls scope, lifetime, and linkage of variables",
                    example: "auto, register, static, extern"
                  },
                  {
                    title: "Variable Naming",
                    description: "Rules and conventions for naming variables",
                    example: "Must start with letter/underscore\nNo keywords"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h5 className="font-semibold text-blue-700 mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                    <div className="bg-gray-100 p-2 rounded text-xs font-mono text-gray-800 whitespace-pre-wrap">
                      {item.example}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Operators Section */}
      <section id="c-operators" className="mb-12" ref={operatorsRef}>
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FiCpu className="mr-3" /> Operators
            </h2>
          </div>

          <div className="p-6">
            <motion.div
              className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <FiCpu className="mr-2 text-blue-500" /> C Operators
              </h3>

              <div className="relative group mb-6">
                <motion.div
                  className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                  whileHover={{ scale: 1.01 }}
                >
                  <pre className="font-mono text-sm">
                    <code>{cExamples.operators}</code>
                  </pre>
                </motion.div>
                <motion.button
                  onClick={() => copyToClipboard(cExamples.operators)}
                  className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCopy className="w-4 h-4 mr-1" />
                  {copiedCode === cExamples.operators ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              {/* Operator Categories */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Arithmetic Operators",
                    icon: <FiCpu className="text-blue-500" />,
                    operators: [
                      { symbol: "+", name: "Addition", example: "a + b" },
                      { symbol: "-", name: "Subtraction", example: "a - b" },
                      { symbol: "*", name: "Multiplication", example: "a * b" },
                      { symbol: "/", name: "Division", example: "a / b" },
                      { symbol: "%", name: "Modulus", example: "a % b" },
                      { symbol: "++", name: "Increment", example: "a++ or ++a" },
                      { symbol: "--", name: "Decrement", example: "a-- or --a" }
                    ]
                  },
                  // ... (other operator categories remain the same)
                ].map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    variants={itemVariants}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h4 className="text-lg font-semibold mb-3 text-blue-700 flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {category.operators.map((op, opIndex) => (
                        <motion.div
                          key={opIndex}
                          className="bg-white p-3 rounded border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex justify-between items-baseline">
                            <span className="font-mono font-bold text-lg">{op.symbol}</span>
                            <span className="text-sm text-gray-600">{op.name}</span>
                          </div>
                          <div className="mt-1 bg-gray-100 p-1 rounded text-xs font-mono">
                            {op.example}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      </main>
      </div>
    </div>
  );
}