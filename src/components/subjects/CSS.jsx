import React, { useState, useEffect } from 'react';
import {
  FaCss3Alt, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaCode, FaTable, FaPalette, FaAlignLeft, FaBox, FaLayerGroup,
  FaCheck, FaCog, FaLink, FaExchangeAlt, FaFilter, FaServer,
  FaChartLine, FaStore, FaMobile, FaDesktop, FaMagic, FaSearch
} from 'react-icons/fa';
import {
  FiClock, FiZap, FiShield, FiLayers, FiSmartphone,
  FiGlobe, FiDatabase, FiNavigation, FiFeather, FiGrid,
  FiCpu, FiPackage, FiUser, FiAward, FiBarChart2, FiSettings
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function CSSNotes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('css-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [selectorsRef, selectorsInView] = useInView({ threshold: 0.1 });
  const [boxModelRef, boxModelInView] = useInView({ threshold: 0.1 });
  const [layoutRef, layoutInView] = useInView({ threshold: 0.1 });
  const [flexboxRef, flexboxInView] = useInView({ threshold: 0.1 });
  const [flexContainerRef, flexContainerInView] = useInView({ threshold: 0.1 });
  const [flexItemsRef, flexItemsInView] = useInView({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [gridContainerRef, gridContainerInView] = useInView({ threshold: 0.1 });
  const [gridItemsRef, gridItemsInView] = useInView({ threshold: 0.1 });
  const [responsiveRef, responsiveInView] = useInView({ threshold: 0.1 });
  const [transformsRef, transformsInView] = useInView({ threshold: 0.1 });
  const [transitionsRef, transitionsInView] = useInView({ threshold: 0.1 });
  const [animationsRef, animationsInView] = useInView({ threshold: 0.1 });
  const [variablesRef, variablesInView] = useInView({ threshold: 0.1 });
  const [preprocessorsRef, preprocessorsInView] = useInView({ threshold: 0.1 });
  const [specificityRef, specificityInView] = useInView({ threshold: 0.1 });
  const [pseudoClassesRef, pseudoClassesInView] = useInView({ threshold: 0.1 });
  const [pseudoElementsRef, pseudoElementsInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'css-introduction', inView: introInView },
      { id: 'selectors', inView: selectorsInView },
      { id: 'box-model', inView: boxModelInView },
      { id: 'layout', inView: layoutInView },
      { id: 'flexbox', inView: flexboxInView },
      { id: 'flex-container', inView: flexContainerInView },
      { id: 'flex-items', inView: flexItemsInView },
      { id: 'grid', inView: gridInView },
      { id: 'grid-container', inView: gridContainerInView },
      { id: 'grid-items', inView: gridItemsInView },
      { id: 'responsive', inView: responsiveInView },
      { id: 'transforms', inView: transformsInView },
      { id: 'transitions', inView: transitionsInView },
      { id: 'animations', inView: animationsInView },
      { id: 'variables', inView: variablesInView },
      { id: 'preprocessors', inView: preprocessorsInView },
      { id: 'specificity', inView: specificityInView },
      { id: 'pseudo-classes', inView: pseudoClassesInView },
      { id: 'pseudo-elements', inView: pseudoElementsInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, selectorsInView, boxModelInView, layoutInView,
    flexboxInView, flexContainerInView, flexItemsInView,
    gridInView, gridContainerInView, gridItemsInView,
    responsiveInView, transformsInView, transitionsInView,
    animationsInView, variablesInView, preprocessorsInView,
    specificityInView, pseudoClassesInView, pseudoElementsInView
  ]);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? '' : menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Animation variants
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

  // Menu items data
  const menuItems = [
    { id: 'css-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'selectors', label: 'Selectors', icon: <FaCode className="mr-2" /> },
    { id: 'box-model', label: 'Box Model', icon: <FaBox className="mr-2" /> },
    { id: 'layout', label: 'Layout', icon: <FiGrid className="mr-2" /> },
    {
      id: 'flexbox',
      label: 'Flexbox',
      icon: <FaLayerGroup className="mr-2" />,
      subItems: [
        { id: 'flex-container', label: 'Flex Container' },
        { id: 'flex-items', label: 'Flex Items' }
      ]
    },
    {
      id: 'grid',
      label: 'Grid',
      icon: <FiGrid className="mr-2" />,
      subItems: [
        { id: 'grid-container', label: 'Grid Container' },
        { id: 'grid-items', label: 'Grid Items' }
      ]
    },
    { id: 'responsive', label: 'Responsive Design', icon: <FaMobile className="mr-2" /> },
    { id: 'transforms', label: 'Transforms', icon: <FaExchangeAlt className="mr-2" /> },
    { id: 'transitions', label: 'Transitions', icon: <FiNavigation className="mr-2" /> },
    { id: 'animations', label: 'Animations', icon: <FaMagic className="mr-2" /> },
    { id: 'variables', label: 'CSS Variables', icon: <FiDatabase className="mr-2" /> },
    { id: 'preprocessors', label: 'Preprocessors', icon: <FaCog className="mr-2" /> },
    { id: 'specificity', label: 'Specificity', icon: <FaSearch className="mr-2" /> },
    { id: 'pseudo-classes', label: 'Pseudo Classes', icon: <FaCode className="mr-2" /> },
    { id: 'pseudo-elements', label: 'Pseudo Elements', icon: <FaCode className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Cascading Nature",
      description: "Styles cascade from parent to child elements, with more specific rules taking precedence",
      icon: <FiNavigation className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Responsive Design",
      description: "Create layouts that adapt to different screen sizes using media queries",
      icon: <FaMobile className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Modular",
      description: "Styles can be scoped to components in React for better maintainability",
      icon: <FiPackage className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Powerful Layouts",
      description: "Flexbox and Grid provide robust layout systems",
      icon: <FiGrid className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Variables",
      description: "CSS custom properties allow for reusable values",
      icon: <FiDatabase className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Animations",
      description: "Create smooth transitions and animations without JavaScript",
      icon: <FaMagic className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Browser Support",
      description: "Widely supported across all modern browsers",
      icon: <FiGlobe className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // CSS Methodologies
  const methodologies = [
    {
      name: "BEM",
      description: "Block Element Modifier methodology for naming CSS classes",
      category: "Naming convention",
      icon: <FaBox className="w-5 h-5 text-purple-600" />
    },
    {
      name: "SMACSS",
      description: "Scalable and Modular Architecture for CSS",
      category: "Style organization",
      icon: <FiLayers className="w-5 h-5 text-purple-600" />
    },
    {
      name: "OOCSS",
      description: "Object-Oriented CSS for reusable components",
      category: "Reusability",
      icon: <FiPackage className="w-5 h-5 text-purple-600" />
    },
    {
      name: "CSS-in-JS",
      description: "Write CSS directly in JavaScript files (styled-components, Emotion)",
      category: "Modern approach",
      icon: <FaCode className="w-5 h-5 text-purple-600" />
    },
    {
      name: "Utility-First",
      description: "Tailwind CSS approach with utility classes",
      category: "Rapid development",
      icon: <FiZap className="w-5 h-5 text-purple-600" />
    }
  ];

  // CSS Examples
  const cssExamples = {
    basicSyntax: `/* Selector */
selector {
  property: value; /* Declaration */
  another-property: value;
}

/* Example */
.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}`,
    selectors: `/* Element selector */
div {
  color: blue;
}

/* Class selector */
.class-name {
  font-size: 16px;
}

/* ID selector */
#unique-element {
  border: 1px solid black;
}

/* Attribute selector */
input[type="text"] {
  background-color: #f8f8f8;
}

/* Pseudo-class */
a:hover {
  color: red;
}

/* Pseudo-element */
p::first-line {
  font-weight: bold;
}`,
    boxModel: `div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
  box-sizing: border-box; /* Includes padding and border in width/height */
}`,
    flexbox: `.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  flex-wrap: wrap;
}

.item {
  flex: 1; /* grow/shrink basis */
  order: 2; /* visual order */
  align-self: flex-start; /* individual alignment */
}`,
    grid: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px auto;
  gap: 20px;
  grid-template-areas:
    "header header header"
    "sidebar main main";
}

.item-a {
  grid-area: header;
}
.item-b {
  grid-area: sidebar;
}
.item-c {
  grid-area: main;
}`,
    responsive: `/* Mobile-first approach */
.container {
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
  }
}`,
    transforms: `/* 2D Transform */
.element {
  transform: translate(50px, 100px) rotate(20deg) scale(1.5);
}

/* 3D Transform */
.element-3d {
  transform: perspective(500px) rotateY(45deg);
}`,
    transitions: `.button {
  background-color: blue;
  transition: background-color 0.3s ease, transform 0.2s ease-out;
}

.button:hover {
  background-color: darkblue;
  transform: scale(1.05);
}`,
    animations: `@keyframes slidein {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slidein 0.5s ease-in-out forwards;
}`,
    variables: `:root {
  --primary-color: #4CAF50;
  --secondary-color: #2196F3;
  --spacing: 16px;
}

.element {
  color: var(--primary-color);
  margin: var(--spacing);
}`,
    bemExample: `/* Block */
.card {}

/* Element */
.card__image {}

/* Modifier */
.card--large {}`,
    specificity: `/* Specificity calculation */
/* Inline style: 1,0,0,0 */
/* ID: 0,1,0,0 */
/* Class/attribute/pseudo-class: 0,0,1,0 */
/* Element/pseudo-element: 0,0,0,1 */

/* Example */
#nav .list li a:hover {
  /* Specificity: 0,1,2,2 */
}`,
    pseudoClasses: `/* Link-related */
a:link {}
a:visited {}
a:hover {}
a:active {}

/* Form-related */
input:focus {}
input:disabled {}
input:checked {}

/* Structural */
li:first-child {}
li:last-child {}
li:nth-child(2n) {}`,
    pseudoElements: `/* Insert content */
p::before {
  content: "→ ";
}

/* Style first line */
p::first-line {
  font-weight: bold;
}

/* Style selection */
::selection {
  background: yellow;
}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </motion.button>

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
              <FaCss3Alt className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
              CSS Notes
            </span>
          </motion.h1>

          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
              whileHover={{ x: -5 }}
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline-block">Back</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar with animation */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-purple-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-purple-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaCss3Alt className="text-purple-600" />
                    </motion.div>
                    CSS Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-purple-700 text-xl transition-colors duration-200 transform hover:rotate-90"
                  >
                    <FaTimes />
                  </button>
                </div>

                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <React.Fragment key={item.id}>
                      {item.subItems ? (
                        <>
                          <motion.li variants={itemVariants}>
                            <button
                              onClick={() => toggleSubmenu(item.id)}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 flex justify-between items-center group transform hover:translate-x-1"
                            >
                              <div className="flex items-center">
                                {React.cloneElement(item.icon, { className: "mr-2 text-purple-600 group-hover:text-purple-700 transition-colors" })}
                                {item.label}
                              </div>
                              {activeSubmenu === item.id ? (
                                <FaChevronUp className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-purple-700" />
                              ) : (
                                <FaChevronDown className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-purple-700" />
                              )}
                            </button>
                          </motion.li>

                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: activeSubmenu === item.id ? 'auto' : 0,
                              opacity: activeSubmenu === item.id ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <motion.li
                                key={subItem.id}
                                variants={itemVariants}
                              >
                                <a
                                  href={`#${subItem.id}`}
                                  className={`block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 text-sm flex items-center transform hover:translate-x-2 ${activeSection === subItem.id ? 'bg-purple-100 text-purple-700 font-medium' : ''}`}
                                >
                                  <span className="w-2 h-2 rounded-full bg-purple-300 mr-2 transition-all duration-200 group-hover:bg-purple-500"></span>
                                  {subItem.label}
                                </a>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </>
                      ) : (
                        <motion.li variants={itemVariants}>
                          <a
                            href={`#${item.id}`}
                            className={`block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-purple-100 text-purple-700 font-medium' : ''}`}
                          >
                            {React.cloneElement(item.icon, { className: `mr-2 text-purple-600 group-hover:text-purple-700 transition-colors ${activeSection === item.id ? 'text-purple-700' : ''}` })}
                            {item.label}
                          </a>
                        </motion.li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="css-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to CSS
                </h2>
              </div>

              <div className="p-6">
                {/* What is CSS card */}
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is CSS?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.
                    CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
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
                        <p className="font-semibold text-yellow-800">Note:</p>
                        <p className="text-yellow-700">CSS was first proposed in 1994 and has evolved through CSS1, CSS2, CSS3, and modular CSS4 specifications.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CSS Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic CSS Syntax
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.basicSyntax}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cssExamples.basicSyntax)}
                      className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.basicSyntax ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-purple-500" />
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
                          className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg transition-all duration-200 hover:bg-purple-100 hover:shadow-md"
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

                  {/* CSS Methodologies card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-purple-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <FiPackage className="mr-2 text-purple-500" /> CSS Methodologies
                    </h3>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {methodologies.map((method, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-purple-400"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 group-hover:bg-purple-200">
                              {method.icon}
                            </div>
                            <h4 className="font-semibold text-gray-800">{method.name}</h4>
                          </div>
                          <p className="text-sm text-purple-600 mb-2">{method.category}</p>
                          <p className="text-sm text-gray-700">{method.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Selectors Section */}
          <section id="selectors" className="mb-12" ref={selectorsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Selectors
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaCode className="mr-2 text-purple-500" /> CSS Selectors
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS selectors define the elements to which a set of CSS rules apply. There are several types of selectors with different specificity levels.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.selectors}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cssExamples.selectors)}
                      className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.selectors ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Specificity table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Selector Specificity</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Selector Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Example
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Specificity Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { type: 'Inline styles', example: 'style="color: red;"', specificity: '1,0,0,0' },
                          { type: 'ID', example: '#main-content', specificity: '0,1,0,0' },
                          { type: 'Class/Attribute/Pseudo-class', example: '.button, [type="text"], :hover', specificity: '0,0,1,0' },
                          { type: 'Element/Pseudo-element', example: 'div, ::before', specificity: '0,0,0,1' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.specificity}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-purple-800">Best Practice:</p>
                        <p className="text-purple-700">Use classes for styling and avoid using IDs for CSS to keep specificity low and make styles easier to override when needed.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Box Model Section */}
          <section id="box-model" className="mb-12" ref={boxModelRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaBox className="mr-3" /> Box Model
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaBox className="mr-2 text-purple-500" /> Understanding the Box Model
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every element in CSS is a rectangular box. The box model describes how these boxes are sized and spaced.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.boxModel}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cssExamples.boxModel)}
                      className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.boxModel ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Box model diagram */}
                  <motion.div
                    className="bg-purple-50 p-6 rounded-lg mb-6 border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:scale-101"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="relative w-64 h-48 border-2 border-purple-300">
                        <div className="absolute inset-0 border-2 border-green-300 m-4">
                          <div className="absolute inset-0 border-2 border-red-300 m-4">
                            <div className="absolute inset-0 bg-white m-4 flex items-center justify-center">
                              Content
                            </div>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-red-500">
                              Padding
                            </div>
                          </div>
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-green-500">
                            Border
                          </div>
                        </div>
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-purple-500">
                          Margin
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                      <motion.div
                        className="bg-white p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <p className="font-semibold text-purple-700">Content</p>
                        <p className="text-sm text-gray-700">The actual content of the box</p>
                      </motion.div>
                      <motion.div
                        className="bg-white p-3 rounded border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <p className="font-semibold text-green-700">Padding</p>
                        <p className="text-sm text-gray-700">Clears an area around the content</p>
                      </motion.div>
                      <motion.div
                        className="bg-white p-3 rounded border border-red-200 hover:border-red-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <p className="font-semibold text-red-700">Border</p>
                        <p className="text-sm text-gray-700">A border around the padding</p>
                      </motion.div>
                      <motion.div
                        className="bg-white p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <p className="font-semibold text-purple-700">Margin</p>
                        <p className="text-sm text-gray-700">Clears an area outside the border</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
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
                        <p className="font-semibold text-yellow-800">box-sizing:</p>
                        <p className="text-yellow-700">The default box model (content-box) adds padding and border to the width/height. Use border-box to include them in the width/height.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Layout Section */}
          <section id="layout" className="mb-12" ref={layoutRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Layout
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiGrid className="mr-2 text-purple-500" /> CSS Layout Techniques
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS provides several layout techniques for positioning elements on a page. Each has its own use cases and benefits.
                  </p>

                  {/* Layout techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Layout Techniques</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaBox className="mr-2" /> Normal Flow
                      </h5>
                      <p className="text-sm text-gray-700">Default layout where elements are placed according to their order in the HTML.</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaAlignLeft className="mr-2" /> Floats
                      </h5>
                      <p className="text-sm text-gray-700">Originally for text wrapping around images, used for layouts before Flexbox/Grid.</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaTable className="mr-2" /> Positioning
                      </h5>
                      <p className="text-sm text-gray-700">Relative, absolute, fixed, and sticky positioning for precise element placement.</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaLayerGroup className="mr-2" /> Flexbox
                      </h5>
                      <p className="text-sm text-gray-700">One-dimensional layout model for flexible layouts in a single row or column.</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiGrid className="mr-2" /> Grid
                      </h5>
                      <p className="text-sm text-gray-700">Two-dimensional layout system for rows and columns.</p>
                    </motion.div>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-purple-800">Modern Layouts:</p>
                        <p className="text-purple-700">For new projects, prefer Flexbox for one-dimensional layouts and Grid for two-dimensional layouts. They're designed for modern web applications.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Flexbox Section */}
          <section id="flexbox" className="mb-12" ref={flexboxRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flexbox
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-purple-500" /> CSS Flexbox
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space or shrink to fit into smaller spaces.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.flexbox}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cssExamples.flexbox)}
                      className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.flexbox ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Flexbox properties */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Container Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'display', value: 'flex | inline-flex', desc: 'Defines a flex container' },
                          { property: 'flex-direction', value: 'row | column | row-reverse | column-reverse', desc: 'Main axis direction' },
                          { property: 'flex-wrap', value: 'nowrap | wrap | wrap-reverse', desc: 'Single or multiple lines' },
                          { property: 'justify-content', value: 'flex-start | flex-end | center | space-between | space-around | space-evenly', desc: 'Main axis alignment' },
                          { property: 'align-items', value: 'flex-start | flex-end | center | baseline | stretch', desc: 'Cross axis alignment' },
                          { property: 'align-content', value: 'flex-start | flex-end | center | space-between | space-around | stretch', desc: 'Alignment when extra space' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Item Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'order', value: '<integer>', desc: 'Visual order of items' },
                          { property: 'flex-grow', value: '<number>', desc: 'Ability to grow if needed' },
                          { property: 'flex-shrink', value: '<number>', desc: 'Ability to shrink if needed' },
                          { property: 'flex-basis', value: '<length> | auto', desc: 'Default size before remaining space' },
                          { property: 'flex', value: 'flex-grow flex-shrink flex-basis', desc: 'Shorthand for above three' },
                          { property: 'align-self', value: 'auto | flex-start | flex-end | center | baseline | stretch', desc: 'Override align-items for single item' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>

                  {/* Flexbox demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Flexbox Demo</h4>
                  <motion.div
                    className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Default flex row</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex flex-col bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Flex column</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex justify-center bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Justify center</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex items-stretch bg-purple-100 p-2 rounded mb-2 h-24">
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Align stretch</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-purple-800">Flexbox Best Practices:</p>
                        <p className="text-purple-700">Use flexbox for components and small-scale layouts. For page-level layouts, consider CSS Grid which works well alongside flexbox.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Flex Container Subsection */}
          <section id="flex-container" className="mb-12" ref={flexContainerRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flex Container
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-purple-500" /> Flex Container Properties
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The flex container is the parent element that holds flex items. It controls the layout of its children.
                  </p>

                  {/* Flex container properties */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Main Axis Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'flex-direction', value: 'row | column | row-reverse | column-reverse', desc: 'Defines the main axis direction' },
                          { property: 'justify-content', value: 'flex-start | flex-end | center | space-between | space-around | space-evenly', desc: 'Aligns items along the main axis' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Cross Axis Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'align-items', value: 'flex-start | flex-end | center | baseline | stretch', desc: 'Aligns items along the cross axis' },
                          { property: 'align-content', value: 'flex-start | flex-end | center | space-between | space-around | stretch', desc: 'Aligns lines when extra space' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Flex container demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Flex Direction Demo</h4>
                  <motion.div
                    className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex flex-row bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">flex-direction: row</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex flex-row-reverse bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">flex-direction: row-reverse</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex flex-col bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">flex-direction: column</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex flex-col-reverse bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">flex-direction: column-reverse</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Flex Items Subsection */}
          <section id="flex-items" className="mb-12" ref={flexItemsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flex Items
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-purple-500" /> Flex Item Properties
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Flex items are the direct children of a flex container. These properties control how individual items behave within the flex container.
                  </p>

                  {/* Flex item properties */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Sizing Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'flex-grow', value: '<number>', desc: 'Ability to grow relative to siblings' },
                          { property: 'flex-shrink', value: '<number>', desc: 'Ability to shrink relative to siblings' },
                          { property: 'flex-basis', value: '<length> | auto', desc: 'Default size before remaining space' },
                          { property: 'flex', value: 'flex-grow flex-shrink flex-basis', desc: 'Shorthand for above three' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Alignment Properties</h4>
                      <ul className="space-y-2">
                        {[
                          { property: 'align-self', value: 'auto | flex-start | flex-end | center | baseline | stretch', desc: 'Override container align-items' },
                          { property: 'order', value: '<integer>', desc: 'Visual order (not source order)' },
                        ].map((prop, index) => (
                          <motion.li
                            key={index}
                            className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -2 }}
                          >
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Grid Section */}
                  <section id="grid" className="mb-12" ref={gridRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FiGrid className="mr-3" /> Grid
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FiGrid className="mr-2 text-purple-500" /> CSS Grid
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.grid}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.grid)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.grid ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Grid properties */}
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <motion.div variants={itemVariants}>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Container Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'display', value: 'grid | inline-grid', desc: 'Defines a grid container' },
                                  { property: 'grid-template-columns', value: '<track-size> ... | <line-name> <track-size> ...', desc: 'Defines columns and their sizes' },
                                  { property: 'grid-template-rows', value: '<track-size> ... | <line-name> <track-size> ...', desc: 'Defines rows and their sizes' },
                                  { property: 'grid-template-areas', value: '<grid-area-name> | . | none', desc: 'Defines template using area names' },
                                  { property: 'gap (grid-gap)', value: '<grid-row-gap> <grid-column-gap>', desc: 'Gaps between rows and columns' },
                                  { property: 'justify-items', value: 'start | end | center | stretch', desc: 'Aligns items along row axis' },
                                  { property: 'align-items', value: 'start | end | center | stretch', desc: 'Aligns items along column axis' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Item Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'grid-column-start', value: '<number> | <name> | span <number> | span <name> | auto', desc: 'Start position in grid' },
                                  { property: 'grid-column-end', value: '<number> | <name> | span <number> | span <name> | auto', desc: 'End position in grid' },
                                  { property: 'grid-row-start', value: '<number> | <name> | span <number> | span <name> | auto', desc: 'Start position in grid' },
                                  { property: 'grid-row-end', value: '<number> | <name> | span <number> | span <name> | auto', desc: 'End position in grid' },
                                  { property: 'grid-area', value: '<name> | <row-start> / <column-start> / <row-end> / <column-end>', desc: 'Shorthand for above' },
                                  { property: 'justify-self', value: 'start | end | center | stretch', desc: 'Aligns item along row axis' },
                                  { property: 'align-self', value: 'start | end | center | stretch', desc: 'Aligns item along column axis' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>

                          {/* Grid demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">1</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">2</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">3</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20 col-span-2">4 (col-span-2)</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">5</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">6</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">7</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">8</div>
                            </div>
                            <p className="text-sm text-gray-700 text-center">Basic 3-column grid with one spanning item</p>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Grid Best Practices:</p>
                                <p className="text-purple-700">Use grid for page-level layouts and flexbox for components. They work great together - grid for the outer layout, flexbox for inner alignment.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Grid Container Subsection */}
                  <section id="grid-container" className="mb-12" ref={gridContainerRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FiGrid className="mr-3" /> Grid Container
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FiGrid className="mr-2 text-purple-500" /> Grid Container Properties
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            The grid container is the parent element that holds grid items. It defines the grid structure and controls the layout of its children.
                          </p>

                          {/* Grid container properties */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Explicit Grid Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'grid-template-columns', value: '<track-size> ...', desc: 'Defines column tracks and sizes' },
                                  { property: 'grid-template-rows', value: '<track-size> ...', desc: 'Defines row tracks and sizes' },
                                  { property: 'grid-template-areas', value: '<grid-area-name> | . | none', desc: 'Defines template using area names' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Implicit Grid Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'grid-auto-columns', value: '<track-size>', desc: 'Size of implicitly created columns' },
                                  { property: 'grid-auto-rows', value: '<track-size>', desc: 'Size of implicitly created rows' },
                                  { property: 'grid-auto-flow', value: 'row | column | dense', desc: 'How auto-placed items flow' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Grid container demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Template Areas Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="grid grid-cols-3 grid-rows-3 gap-4 mb-4" style={{
                              gridTemplateAreas: `"header header header" "sidebar main main" "footer footer footer"`
                            }}>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'header' }}>Header</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'sidebar' }}>Sidebar</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'main' }}>Main</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'footer' }}>Footer</div>
                            </div>
                            <p className="text-sm text-gray-700 text-center">Layout using grid-template-areas</p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Grid Items Subsection */}
                  <section id="grid-items" className="mb-12" ref={gridItemsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FiGrid className="mr-3" /> Grid Items
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FiGrid className="mr-2 text-purple-500" /> Grid Item Properties
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            Grid items are the direct children of a grid container. These properties control how individual items are placed and aligned within the grid.
                          </p>

                          {/* Grid item properties */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Placement Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'grid-column-start', value: '<number> | <name> | span <number>', desc: 'Start column line' },
                                  { property: 'grid-column-end', value: '<number> | <name> | span <number>', desc: 'End column line' },
                                  { property: 'grid-row-start', value: '<number> | <name> | span <number>', desc: 'Start row line' },
                                  { property: 'grid-row-end', value: '<number> | <name> | span <number>', desc: 'End row line' },
                                  { property: 'grid-area', value: '<name> | <row-start> / <column-start> / <row-end> / <column-end>', desc: 'Shorthand for placement' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Alignment Properties</h4>
                              <ul className="space-y-2">
                                {[
                                  { property: 'justify-self', value: 'start | end | center | stretch', desc: 'Aligns item along row axis' },
                                  { property: 'align-self', value: 'start | end | center | stretch', desc: 'Aligns item along column axis' },
                                  { property: 'place-self', value: '<align-self> <justify-self>', desc: 'Shorthand for both' },
                                ].map((prop, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                    <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                    <p className="text-sm text-gray-700">{prop.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Grid items demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Item Placement Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">1</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20 col-span-2">2 (col-span-2)</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20 row-span-2">3 (row-span-2)</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">4</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">5</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">6</div>
                              <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center h-20">7</div>
                            </div>
                            <p className="text-sm text-gray-700 text-center">Items spanning multiple tracks</p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Responsive Design Section */}
                  <section id="responsive" className="mb-12" ref={responsiveRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaMobile className="mr-3" /> Responsive Design
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaMobile className="mr-2 text-purple-500" /> Responsive Web Design
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            Responsive web design makes your web pages look good on all devices by using flexible layouts, flexible images, and CSS media queries.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.responsive}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.responsive)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.responsive ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Responsive techniques */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Responsive Techniques</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                                <FaMobile className="mr-2" /> Mobile-First
                              </h5>
                              <p className="text-sm text-gray-700">Design for mobile first, then enhance for larger screens with media queries.</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                                <FaDesktop className="mr-2" /> Fluid Layouts
                              </h5>
                              <p className="text-sm text-gray-700">Use percentages or viewport units for widths instead of fixed pixels.</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                                <FaTable className="mr-2" /> Flexible Images
                              </h5>
                              <p className="text-sm text-gray-700">Set max-width: 100% to prevent images from overflowing containers.</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                                <FaCog className="mr-2" /> Media Queries
                              </h5>
                              <p className="text-sm text-gray-700">Apply different styles based on device characteristics like width, height, or orientation.</p>
                            </motion.div>
                          </motion.div>

                          {/* Breakpoints */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Breakpoints</h4>
                          <motion.div
                            className="overflow-x-auto shadow-md rounded-lg mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-purple-50">
                                <tr>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Device Type
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Min-Width
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                  { device: 'Mobile (small)', width: '320px', desc: 'Small smartphones' },
                                  { device: 'Mobile (medium)', width: '375px', desc: 'Average smartphones' },
                                  { device: 'Mobile (large)', width: '425px', desc: 'Large smartphones' },
                                  { device: 'Tablet', width: '768px', desc: 'Small tablets' },
                                  { device: 'Laptop', width: '1024px', desc: 'Small laptops' },
                                  { device: 'Desktop', width: '1440px', desc: 'Large laptops and desktops' },
                                ].map((row, index) => (
                                  <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.device}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.width}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.desc}</td>
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Responsive Units:</p>
                                <p className="text-purple-700">Use relative units like em, rem, and % for typography and spacing to ensure proper scaling across devices.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Transforms Section */}
                  <section id="transforms" className="mb-12" ref={transformsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaExchangeAlt className="mr-3" /> Transforms
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaExchangeAlt className="mr-2 text-purple-500" /> CSS Transforms
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.transforms}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.transforms)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.transforms ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Transform functions */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Transform Functions</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[
                              { name: 'translate()', desc: 'Moves element along X and Y axes' },
                              { name: 'rotate()', desc: 'Rotates element by specified angle' },
                              { name: 'scale()', desc: 'Scales element by specified factor' },
                              { name: 'skew()', desc: 'Skews element along X and Y axes' },
                              { name: 'matrix()', desc: 'Combines all 2D transforms' },
                              { name: 'perspective()', desc: 'Sets perspective for 3D transforms' },
                              { name: 'rotateX()/rotateY()', desc: '3D rotation around X or Y axis' },
                              { name: 'translateZ()', desc: '3D translation along Z axis' },
                              { name: 'scale3d()', desc: '3D scaling transformation' },
                            ].map((func, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                whileHover={{ y: -3 }}
                              >
                                <p className="font-mono font-semibold text-purple-700">{func.name}</p>
                                <p className="text-sm text-gray-700">{func.desc}</p>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Demo area */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Transform Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex justify-center">
                              <motion.div
                                className="w-32 h-32 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
                                whileHover={{ rotate: 45, scale: 1.25, x: 40 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                Hover Me
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Performance Tip:</p>
                                <p className="text-purple-700">For better performance, use transform and opacity changes for animations as they can be hardware-accelerated by the browser.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Transitions Section */}
                  <section id="transitions" className="mb-12" ref={transitionsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FiNavigation className="mr-3" /> Transitions
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FiNavigation className="mr-2 text-purple-500" /> CSS Transitions
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            CSS transitions allow you to change property values smoothly over a given duration. They provide a way to control animation speed when changing CSS properties.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.transitions}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.transitions)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.transitions ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Transition properties */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Transition Properties</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[
                              { property: 'transition-property', value: 'none | all | <property>', desc: 'Specifies which properties to transition' },
                              { property: 'transition-duration', value: '<time>', desc: 'How long the transition takes' },
                              { property: 'transition-timing-function', value: 'ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()', desc: 'Speed curve of the transition' },
                              { property: 'transition-delay', value: '<time>', desc: 'Delay before transition starts' },
                              { property: 'transition', value: '<property> <duration> <timing-function> <delay>', desc: 'Shorthand for all properties' },
                            ].map((prop, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                whileHover={{ y: -3 }}
                              >
                                <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                <p className="text-sm text-gray-700">{prop.desc}</p>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Transition demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Transition Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex justify-center space-x-4">
                              <div className="w-24 h-24 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:scale-125">
                                Hover
                              </div>
                              <div className="w-24 h-24 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-600 hover:rotate-45">
                                Ease
                              </div>
                              <div className="w-24 h-24 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 delay-300 hover:bg-purple-600 hover:translate-y-4">
                                Delay
                              </div>
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Transition Best Practices:</p>
                                <p className="text-purple-700">Use transitions for simple animations between two states. For more complex animations, consider using CSS keyframe animations.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Animations Section */}
                  <section id="animations" className="mb-12" ref={animationsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaMagic className="mr-3" /> Animations
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaMagic className="mr-2 text-purple-500" /> CSS Animations
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: keyframes and animation properties.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.animations}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.animations)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.animations ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Animation properties */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Animation Properties</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[
                              { property: 'animation-name', value: '<keyframes-name>', desc: 'Specifies the name of the keyframes' },
                              { property: 'animation-duration', value: '<time>', desc: 'How long one cycle should take' },
                              { property: 'animation-timing-function', value: 'ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()', desc: 'Speed curve of the animation' },
                              { property: 'animation-delay', value: '<time>', desc: 'Delay before animation starts' },
                              { property: 'animation-iteration-count', value: '<number> | infinite', desc: 'How many times to play the animation' },
                              { property: 'animation-direction', value: 'normal | reverse | alternate | alternate-reverse', desc: 'Direction of the animation' },
                              { property: 'animation-fill-mode', value: 'none | forwards | backwards | both', desc: 'How styles are applied before/after animation' },
                              { property: 'animation-play-state', value: 'running | paused', desc: 'Whether animation is running or paused' },
                              { property: 'animation', value: '<name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state>', desc: 'Shorthand for all properties' },
                            ].map((prop, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                whileHover={{ y: -3 }}
                              >
                                <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                                <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                                <p className="text-sm text-gray-700">{prop.desc}</p>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Animation demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Animation Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex justify-center">
                              <div className="w-32 h-32 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
                                Bounce
                              </div>
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Animation Performance:</p>
                                <p className="text-purple-700">For smooth animations, stick to properties like transform and opacity that can be hardware-accelerated. Avoid animating properties that trigger layout reflows.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* CSS Variables Section */}
                  <section id="variables" className="mb-12" ref={variablesRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FiDatabase className="mr-3" /> CSS Variables
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FiDatabase className="mr-2 text-purple-500" /> CSS Custom Properties (Variables)
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            CSS variables (officially called CSS Custom Properties) allow you to store values that you want to reuse throughout your stylesheet. They follow the same cascade rules as other CSS properties.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.variables}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.variables)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.variables ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Variable properties */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Variable Features</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[
                              { feature: 'Declaration', desc: 'Declared with -- prefix (e.g., --main-color: black;)' },
                              { feature: 'Usage', desc: 'Accessed with var() function (e.g., color: var(--main-color);)' },
                              { feature: 'Scope', desc: 'Can be defined globally (:root) or scoped to specific elements' },
                              { feature: 'Fallback', desc: 'Can provide fallback values (e.g., var(--main-color, red))' },
                              { feature: 'Dynamic', desc: 'Can be modified with JavaScript for runtime changes' },
                              { feature: 'Cascade', desc: 'Follow normal CSS cascade and inheritance rules' },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                whileHover={{ y: -3 }}
                              >
                                <p className="font-semibold text-purple-700">{item.feature}:</p>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Variable demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Variable Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-4 rounded bg-white" style={{ backgroundColor: 'var(--primary-color, #4CAF50)', color: 'white' }}>
                                Primary Color
                              </div>
                              <div className="p-4 rounded bg-white" style={{ backgroundColor: 'var(--secondary-color, #2196F3)', color: 'white' }}>
                                Secondary Color
                              </div>
                              <div className="p-4 rounded bg-white" style={{ padding: 'var(--spacing, 16px)' }}>
                                Spacing
                              </div>
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Variable Best Practices:</p>
                                <p className="text-purple-700">Use variables for design tokens like colors, spacing, and typography. This makes theme switching and maintenance much easier.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Preprocessors Section */}
                  <section id="preprocessors" className="mb-12" ref={preprocessorsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaCog className="mr-3" /> Preprocessors
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaCog className="mr-2 text-purple-500" /> CSS Preprocessors
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable you to use variables, nested rules, mixins, functions, and more, all with a CSS-compatible syntax.
                          </p>

                          {/* Preprocessor comparison */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Popular CSS Preprocessors</h4>
                          <motion.div
                            className="overflow-x-auto shadow-md rounded-lg mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-purple-50">
                                <tr>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Preprocessor
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Key Features
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                  {
                                    name: 'Sass/SCSS',
                                    desc: 'Most mature and widely used preprocessor',
                                    features: 'Variables, nesting, mixins, inheritance, functions, logic'
                                  },
                                  {
                                    name: 'Less',
                                    desc: 'Similar to Sass but with JavaScript-based compilation',
                                    features: 'Variables, mixins, nesting, operations, functions'
                                  },
                                  {
                                    name: 'Stylus',
                                    desc: 'Flexible syntax with optional braces and semicolons',
                                    features: 'Variables, mixins, functions, iteration, conditionals'
                                  },
                                  {
                                    name: 'PostCSS',
                                    desc: 'Not a preprocessor but a tool for transforming CSS with plugins',
                                    features: 'Autoprefixer, future CSS syntax, custom plugins'
                                  },
                                ].map((row, index) => (
                                  <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.desc}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{row.features}</td>
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                          </motion.div>

                          {/* Sass example */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Sass Example</h4>
                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{`// Variables
$primary-color: #4CAF50;
$secondary-color: #2196F3;

// Mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

// Nesting
.button {
  @include border-radius(4px);
  background-color: $primary-color;
  color: white;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(`// Variables
$primary-color: #4CAF50;
$secondary-color: #2196F3;

// Mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

// Nesting
.button {
  @include border-radius(4px);
  background-color: $primary-color;
  color: white;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              Copy
                            </motion.button>
                          </div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Modern CSS vs Preprocessors:</p>
                                <p className="text-purple-700">With modern CSS features like variables and functions, preprocessors are less essential than before. However, they still offer useful features like mixins and nesting.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Specificity Section */}
                  <section id="specificity" className="mb-12" ref={specificityRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaSearch className="mr-3" /> Specificity
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaSearch className="mr-2 text-purple-500" /> CSS Specificity
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.specificity}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.specificity)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.specificity ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Specificity hierarchy */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Specificity Hierarchy</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2">Inline Styles</h5>
                              <p className="text-sm text-gray-700">Highest specificity (1,0,0,0). Styles applied directly to the element via style attribute.</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2">IDs</h5>
                              <p className="text-sm text-gray-700">Medium specificity (0,1,0,0). Selectors with ID (#example).</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2">Classes/Attributes</h5>
                              <p className="text-sm text-gray-700">Lower specificity (0,0,1,0). Includes classes, attributes, and pseudo-classes.</p>
                            </motion.div>
                            <motion.div
                              variants={itemVariants}
                              className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                              whileHover={{ y: -3 }}
                            >
                              <h5 className="font-semibold text-purple-700 mb-2">Elements</h5>
                              <p className="text-sm text-gray-700">Lowest specificity (0,0,0,1). Includes elements and pseudo-elements.</p>
                            </motion.div>
                          </motion.div>

                          {/* Specificity calculation */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Calculating Specificity</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-semibold text-purple-700 mb-2">Selector Example:</p>
                                <p className="font-mono text-sm bg-gray-800 text-gray-100 p-2 rounded mb-2">#nav .list li a:hover</p>
                                <p className="text-sm text-gray-700">Breakdown:</p>
                                <ul className="text-sm text-gray-700 list-disc pl-5">
                                  <li>1 ID (#nav)</li>
                                  <li>1 class (.list)</li>
                                  <li>2 elements (li, a)</li>
                                  <li>1 pseudo-class (:hover)</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-purple-700 mb-2">Specificity Calculation:</p>
                                <p className="font-mono text-sm bg-gray-800 text-gray-100 p-2 rounded mb-2">0,1,2,2</p>
                                <p className="text-sm text-gray-700">Explanation:</p>
                                <ul className="text-sm text-gray-700 list-disc pl-5">
                                  <li>0 inline styles</li>
                                  <li>1 ID selector</li>
                                  <li>2 class/attribute/pseudo-class selectors</li>
                                  <li>2 element/pseudo-element selectors</li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Managing Specificity:</p>
                                <p className="text-purple-700">Keep specificity low by using classes instead of IDs for styling. Use !important sparingly as it breaks the natural cascade.</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Pseudo Classes Section */}
                  <section id="pseudo-classes" className="mb-12" ref={pseudoClassesRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaCode className="mr-3" /> Pseudo Classes
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaCode className="mr-2 text-purple-500" /> CSS Pseudo Classes
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.pseudoClasses}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.pseudoClasses)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.pseudoClasses ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Pseudo classes categories */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Pseudo Classes</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <motion.div variants={itemVariants}>
                              <h5 className="font-semibold text-purple-700 mb-2">Link-related</h5>
                              <ul className="space-y-2">
                                {[
                                  { class: ':link', desc: 'Selects unvisited links' },
                                  { class: ':visited', desc: 'Selects visited links' },
                                  { class: ':hover', desc: 'Selects elements on mouse hover' },
                                  { class: ':active', desc: 'Selects the active link' },
                                  { class: ':focus', desc: 'Selects element that has focus' },
                                ].map((item, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{item.class}</p>
                                    <p className="text-sm text-gray-700">{item.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <h5 className="font-semibold text-purple-700 mb-2">Form-related</h5>
                              <ul className="space-y-2">
                                {[
                                  { class: ':checked', desc: 'Selects checked inputs' },
                                  { class: ':disabled', desc: 'Selects disabled elements' },
                                  { class: ':enabled', desc: 'Selects enabled elements' },
                                  { class: ':valid', desc: 'Selects inputs with valid content' },
                                  { class: ':invalid', desc: 'Selects inputs with invalid content' },
                                  { class: ':required', desc: 'Selects required inputs' },
                                ].map((item, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{item.class}</p>
                                    <p className="text-sm text-gray-700">{item.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <h5 className="font-semibold text-purple-700 mb-2">Structural</h5>
                              <ul className="space-y-2">
                                {[
                                  { class: ':first-child', desc: 'Selects first child element' },
                                  { class: ':last-child', desc: 'Selects last child element' },
                                  { class: ':nth-child(n)', desc: 'Selects nth child element' },
                                  { class: ':nth-last-child(n)', desc: 'Selects nth child from end' },
                                  { class: ':only-child', desc: 'Selects only child elements' },
                                ].map((item, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{item.class}</p>
                                    <p className="text-sm text-gray-700">{item.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <h5 className="font-semibold text-purple-700 mb-2">Other</h5>
                              <ul className="space-y-2">
                                {[
                                  { class: ':not(selector)', desc: 'Selects elements not matching selector' },
                                  { class: ':empty', desc: 'Selects elements with no children' },
                                  { class: ':target', desc: 'Selects current active anchor' },
                                  { class: ':root', desc: 'Selects document root element' },
                                ].map((item, index) => (
                                  <motion.li
                                    key={index}
                                    className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                    whileHover={{ y: -2 }}
                                  >
                                    <p className="font-mono font-semibold text-purple-700">{item.class}</p>
                                    <p className="text-sm text-gray-700">{item.desc}</p>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>

                          {/* Demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Pseudo Class Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex flex-wrap gap-4">
                              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition-colors duration-200">
                                Hover Me
                              </button>
                              <input
                                type="text"
                                placeholder="Focus me"
                                className="px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                              />
                              <div className="flex space-x-2">
                                <div className="w-8 h-8 bg-purple-400 rounded first:bg-purple-600 last:bg-purple-800"></div>
                                <div className="w-8 h-8 bg-purple-400 rounded first:bg-purple-600 last:bg-purple-800"></div>
                                <div className="w-8 h-8 bg-purple-400 rounded first:bg-purple-600 last:bg-purple-800"></div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Pseudo Elements Section */}
                  <section id="pseudo-elements" className="mb-12" ref={pseudoElementsRef}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                          <FaCode className="mr-3" /> Pseudo Elements
                        </h2>
                      </div>

                      <div className="p-6">
                        <motion.div
                          className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                          whileHover={{ y: -5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                            <FaCode className="mr-2 text-purple-500" /> CSS Pseudo Elements
                          </h3>
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph.
                          </p>

                          <div className="relative group mb-6">
                            <motion.div
                              className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                              whileHover={{ scale: 1.01 }}
                            >
                              <pre className="font-mono text-sm">
                                <code>{cssExamples.pseudoElements}</code>
                              </pre>
                            </motion.div>
                            <motion.button
                              onClick={() => copyToClipboard(cssExamples.pseudoElements)}
                              className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-4 h-4 mr-1" />
                              {copiedCode === cssExamples.pseudoElements ? 'Copied!' : 'Copy'}
                            </motion.button>
                          </div>

                          {/* Pseudo elements list */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Pseudo Elements</h4>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {[
                              { element: '::after', desc: 'Inserts content after element' },
                              { element: '::before', desc: 'Inserts content before element' },
                              { element: '::first-letter', desc: 'Styles first letter of text' },
                              { element: '::first-line', desc: 'Styles first line of text' },
                              { element: '::selection', desc: 'Styles selected text' },
                              { element: '::placeholder', desc: 'Styles input placeholder text' },
                              { element: '::marker', desc: 'Styles list item markers' },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200"
                                whileHover={{ y: -3 }}
                              >
                                <p className="font-mono font-semibold text-purple-700">{item.element}</p>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Demo */}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Pseudo Element Demo</h4>
                          <motion.div
                            className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200"
                            whileHover={{ y: -3 }}
                          >
                            <div className="space-y-4">
                              <p className="first-line:font-bold first-line:text-purple-600">
                                This paragraph has a bold and purple first line. The rest of the text remains normal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                              <div className="relative p-4 bg-white rounded border border-purple-300 before:content-['→'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-purple-500 before:font-bold before:mr-2">
                                This box has a pseudo-element arrow before it
                              </div>
                              <input
                                type="text"
                                placeholder="Styled placeholder"
                                className="w-full px-4 py-2 border border-purple-300 rounded placeholder-purple-400"
                              />
                            </div>
                          </motion.div>

                          {/* Tip box */}
                          <motion.div
                            className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-start">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <div>
                                <p className="font-semibold text-purple-800">Pseudo Elements vs Pseudo Classes:</p>
                                <p className="text-purple-700">Pseudo-classes select elements that exist in a specific state (single colon), while pseudo-elements style specific parts of an element (double colon).</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Footer */}
                  <footer className="mt-12 py-6 border-t border-purple-200">
                    <motion.div
                      className="container mx-auto px-4 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <FaCss3Alt className="w-10 h-10 text-purple-600" />
                        </motion.div>
                      </div>
                      <p className="text-gray-700 mb-2">Comprehensive CSS Notes and Reference</p>
                      <p className="text-gray-500 text-sm">Created with React, Framer Motion, and Tailwind CSS</p>
                    </motion.div>
                  </footer>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}