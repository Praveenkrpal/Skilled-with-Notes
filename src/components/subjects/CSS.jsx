import React, { useState } from 'react';
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

export default function CSSNotes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

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
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg animate-gradient-x">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </button>

          <h1 className="text-2xl md:text-3xl font-bold flex items-center space-x-3">
            <FaCss3Alt className="w-8 h-8 animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
              CSS Notes
            </span>
          </h1>

          <button className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1">
            <FaArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline-block">Back</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar with animation */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 transition-all duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-purple-200 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-purple-800 flex items-center">
                <FaCss3Alt className="mr-2 text-purple-600 animate-spin-slow" /> CSS Topics
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
                <li key={item.id}>
                  {item.subItems ? (
                    <>
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
                      <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${activeSubmenu === item.id ? 'max-h-96' : 'max-h-0'}`}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={`#${subItem.id}`}
                              className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 text-sm flex items-center transform hover:translate-x-2"
                            >
                              <span className="w-2 h-2 rounded-full bg-purple-300 mr-2 transition-all duration-200 group-hover:bg-purple-500"></span>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 flex items-center group transform hover:translate-x-1"
                    >
                      {React.cloneElement(item.icon, { className: "mr-2 text-purple-600 group-hover:text-purple-700 transition-colors" })}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 w-100">
          {/* Introduction Section */}
          <section id="css-introduction" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiClock className="mr-3 animate-pulse" /> Introduction to CSS
                </h2>
              </div>

              <div className="p-6">
                {/* What is CSS card */}
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400 animate-pulse" /> What is CSS?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. 
                    CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                  </p>

                  {/* Note box with animation */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 animate-bounce" />
                      <div>
                        <p className="font-semibold text-yellow-800">Note:</p>
                        <p className="text-yellow-700">CSS was first proposed in 1994 and has evolved through CSS1, CSS2, CSS3, and modular CSS4 specifications.</p>
                      </div>
                    </div>
                  </div>

                  {/* CSS Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic CSS Syntax
                  </h4>
                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.basicSyntax}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.basicSyntax)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.basicSyntax ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Key Features card */}
                  <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <FiZap className="mr-2 text-purple-500 animate-pulse" /> Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg transition-all duration-200 hover:bg-purple-100 hover:shadow-md transform hover:-translate-y-1"
                        >
                          {feature.icon}
                          <div>
                            <strong className="font-semibold text-gray-800">{feature.title}:</strong>
                            <span className="text-gray-700"> {feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CSS Methodologies card */}
                  <div className="card bg-white rounded-lg border border-purple-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <FiPackage className="mr-2 text-purple-500" /> CSS Methodologies
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {methodologies.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-purple-400"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 group-hover:bg-purple-200 animate-pulse">
                              {item.icon}
                            </div>
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          </div>
                          <p className="text-sm text-purple-600 mb-2">{item.category}</p>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selectors Section */}
          <section id="selectors" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Selectors
                </h2>
              </div>

              <div className="p-6">
                {/* Selectors card */}
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaCode className="mr-2 text-purple-500" /> CSS Selectors
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS selectors define the elements to which a set of CSS rules apply. There are several types of selectors with different specificity levels.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.selectors}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.selectors)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.selectors ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Specificity table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Selector Specificity</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.specificity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Best Practice:</p>
                        <p className="text-purple-700">Use classes for styling and avoid using IDs for CSS to keep specificity low and make styles easier to override when needed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Box Model Section */}
          <section id="box-model" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaBox className="mr-3" /> Box Model
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaBox className="mr-2 text-purple-500" /> Understanding the Box Model
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every element in CSS is a rectangular box. The box model describes how these boxes are sized and spaced.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.boxModel}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.boxModel)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.boxModel ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Box model diagram */}
                  <div className="bg-purple-50 p-6 rounded-lg mb-6 border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:scale-101">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-64 h-48 border-2 border-purple-300 animate-pulse">
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
                      <div className="bg-white p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <p className="font-semibold text-purple-700">Content</p>
                        <p className="text-sm text-gray-700">The actual content of the box</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-green-200 hover:border-green-400 transition-all duration-200 transform hover:-translate-y-1">
                        <p className="font-semibold text-green-700">Padding</p>
                        <p className="text-sm text-gray-700">Clears an area around the content</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-red-200 hover:border-red-400 transition-all duration-200 transform hover:-translate-y-1">
                        <p className="font-semibold text-red-700">Border</p>
                        <p className="text-sm text-gray-700">A border around the padding</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <p className="font-semibold text-purple-700">Margin</p>
                        <p className="text-sm text-gray-700">Clears an area outside the border</p>
                      </div>
                    </div>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 animate-bounce" />
                      <div>
                        <p className="font-semibold text-yellow-800">box-sizing:</p>
                        <p className="text-yellow-700">The default box model (content-box) adds padding and border to the width/height. Use border-box to include them in the width/height.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Layout Section */}
          <section id="layout" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Layout
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiGrid className="mr-2 text-purple-500" /> CSS Layout Techniques
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS provides several layout techniques for positioning elements on a page. Each has its own use cases and benefits.
                  </p>

                  {/* Layout techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Layout Techniques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaBox className="mr-2" /> Normal Flow
                      </h5>
                      <p className="text-sm text-gray-700">Default layout where elements are placed according to their order in the HTML.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaAlignLeft className="mr-2" /> Floats
                      </h5>
                      <p className="text-sm text-gray-700">Originally for text wrapping around images, used for layouts before Flexbox/Grid.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaTable className="mr-2" /> Positioning
                      </h5>
                      <p className="text-sm text-gray-700">Relative, absolute, fixed, and sticky positioning for precise element placement.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaLayerGroup className="mr-2" /> Flexbox
                      </h5>
                      <p className="text-sm text-gray-700">One-dimensional layout model for flexible layouts in a single row or column.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiGrid className="mr-2" /> Grid
                      </h5>
                      <p className="text-sm text-gray-700">Two-dimensional layout system for rows and columns.</p>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Modern Layouts:</p>
                        <p className="text-purple-700">For new projects, prefer Flexbox for one-dimensional layouts and Grid for two-dimensional layouts. They're designed for modern web applications.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flexbox Section */}
          <section id="flexbox" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flexbox
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-purple-500" /> CSS Flexbox
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space or shrink to fit into smaller spaces.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.flexbox}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.flexbox)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.flexbox ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Flexbox properties */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Flexbox demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Flexbox Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
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
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Flexbox Best Practices:</p>
                        <p className="text-purple-700">Use flexbox for components and small-scale layouts. For page-level layouts, consider CSS Grid which works well alongside flexbox.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flex Container Subsection */}
          <section id="flex-container" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flex Container
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Flex container demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Flex Direction Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flex Items Subsection */}
          <section id="flex-items" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Flex Items
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Flex items demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Flex Items Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 flex-grow">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Middle item has flex-grow: 1</p>
                      </div>
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex bg-purple-100 p-2 rounded mb-2">
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 order-2">1</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 order-1">2</div>
                          <div className="w-10 h-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 order-3">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Items reordered with order property</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] bg-white p-4 rounded border border-purple-300">
                        <div className="flex items-stretch bg-purple-100 p-2 rounded mb-2 h-24">
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1">1</div>
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 self-center">2</div>
                          <div className="w-10 bg-purple-400 rounded flex items-center justify-center text-white font-bold m-1 self-end">3</div>
                        </div>
                        <p className="text-sm text-gray-700">Individual alignment with align-self</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Section */}
          <section id="grid" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Grid
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiGrid className="mr-2 text-purple-500" /> CSS Grid
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.grid}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.grid)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.grid ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Grid properties */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Grid demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
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
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Grid Best Practices:</p>
                        <p className="text-purple-700">Use grid for page-level layouts and flexbox for components. They work great together - grid for the outer layout, flexbox for inner alignment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Container Subsection */}
          <section id="grid-container" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Grid Container
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Grid container demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Template Areas Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4 mb-4" style={{ 
                      gridTemplateAreas: `"header header header" "sidebar main main" "footer footer footer"` 
                    }}>
                      <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'header' }}>Header</div>
                      <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'sidebar' }}>Sidebar</div>
                      <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'main' }}>Main</div>
                      <div className="bg-purple-400 rounded-lg p-4 text-white font-bold flex items-center justify-center" style={{ gridArea: 'footer' }}>Footer</div>
                    </div>
                    <p className="text-sm text-gray-700 text-center">Layout using grid-template-areas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Items Subsection */}
          <section id="grid-items" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Grid Items
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
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
                          <li key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200">
                            <p className="font-mono font-semibold text-purple-700">{prop.property}:</p>
                            <p className="text-sm font-mono text-gray-600 mb-1">{prop.value}</p>
                            <p className="text-sm text-gray-700">{prop.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Grid items demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Grid Item Placement Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Design Section */}
          <section id="responsive" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaMobile className="mr-3" /> Responsive Design
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaMobile className="mr-2 text-purple-500" /> Responsive Web Design
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Responsive web design makes your web pages look good on all devices by using flexible layouts, flexible images, and CSS media queries.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.responsive}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.responsive)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.responsive ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Responsive techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Responsive Techniques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaMobile className="mr-2" /> Mobile-First
                      </h5>
                      <p className="text-sm text-gray-700">Design for mobile first, then enhance for larger screens with media queries.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaDesktop className="mr-2" /> Fluid Layouts
                      </h5>
                      <p className="text-sm text-gray-700">Use percentages or viewport units for widths instead of fixed pixels.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaTable className="mr-2" /> Flexible Images
                      </h5>
                      <p className="text-sm text-gray-700">Set max-width: 100% to prevent images from overflowing containers.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FaCog className="mr-2" /> Media Queries
                      </h5>
                      <p className="text-sm text-gray-700">Apply different styles based on device characteristics like width, height, or orientation.</p>
                    </div>
                  </div>

                  {/* Breakpoints */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Breakpoints</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.device}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.width}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Responsive Units:</p>
                        <p className="text-purple-700">Use relative units like em, rem, and % for typography and spacing to ensure proper scaling across devices.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transforms Section */}
          <section id="transforms" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExchangeAlt className="mr-3" /> Transforms
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-purple-500" /> CSS Transforms
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.transforms}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.transforms)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.transforms ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Transform functions */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Transform Functions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
                      <div key={index} className="bg-purple-50 p-3 rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <p className="font-mono font-semibold text-purple-700">{func.name}</p>
                        <p className="text-sm text-gray-700">{func.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Demo area */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Transform Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 transform hover:rotate-45 hover:scale-125 hover:translate-x-10">
                        Hover Me
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Performance Tip:</p>
                        <p className="text-purple-700">Transforms are GPU-accelerated and generally perform better than properties like top/left for animations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transitions Section */}
          <section id="transitions" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiNavigation className="mr-3" /> Transitions
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiNavigation className="mr-2 text-purple-500" /> CSS Transitions
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS transitions allow you to change property values smoothly (over a given duration) when a CSS property changes.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.transitions}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.transitions)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.transitions ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Transition properties */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Transition Properties</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiSettings className="mr-2" /> transition-property
                      </h5>
                      <p className="text-sm text-gray-700">Specifies the name of the CSS property to which the transition is applied.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiClock className="mr-2" /> transition-duration
                      </h5>
                      <p className="text-sm text-gray-700">Specifies how long the transition should take (e.g., 0.3s).</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiFeather className="mr-2" /> transition-timing-function
                      </h5>
                      <p className="text-sm text-gray-700">Defines the speed curve of the transition (e.g., ease, linear, ease-in-out).</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiClock className="mr-2" /> transition-delay
                      </h5>
                      <p className="text-sm text-gray-700">Specifies a delay before the transition starts.</p>
                    </div>
                  </div>

                  {/* Transition demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Transition Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:scale-110 hover:rotate-12 cursor-pointer">
                        Hover Me
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Transition Shorthand:</p>
                        <p className="text-purple-700">Use the transition shorthand: transition: property duration timing-function delay; Order matters for duration and delay.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Animations Section */}
          <section id="animations" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaMagic className="mr-3" /> Animations
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaMagic className="mr-2 text-purple-500" /> CSS Animations
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: a style describing the animation and a set of keyframes that indicate the start and end states.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.animations}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.animations)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.animations ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Animation properties */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Animation Properties</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiClock className="mr-2" /> animation-name
                      </h5>
                      <p className="text-sm text-gray-700">Specifies the name of the @keyframes animation.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiClock className="mr-2" /> animation-duration
                      </h5>
                      <p className="text-sm text-gray-700">How long the animation should take to complete.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiFeather className="mr-2" /> animation-timing-function
                      </h5>
                      <p className="text-sm text-gray-700">Speed curve of the animation (ease, linear, etc.).</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiClock className="mr-2" /> animation-delay
                      </h5>
                      <p className="text-sm text-gray-700">Delay before the animation starts.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiSettings className="mr-2" /> animation-iteration-count
                      </h5>
                      <p className="text-sm text-gray-700">How many times the animation should play.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiNavigation className="mr-2" /> animation-direction
                      </h5>
                      <p className="text-sm text-gray-700">Normal, reverse, alternate, or alternate-reverse.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiSettings className="mr-2" /> animation-fill-mode
                      </h5>
                      <p className="text-sm text-gray-700">Styles applied before/after animation.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiSettings className="mr-2" /> animation-play-state
                      </h5>
                      <p className="text-sm text-gray-700">Paused or running.</p>
                    </div>
                  </div>

                  {/* Animation demo */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Animation Demo</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200">
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
                        Bounce!
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Animation Shorthand:</p>
                        <p className="text-purple-700">Use the animation shorthand: animation: name duration timing-function delay iteration-count direction fill-mode play-state;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CSS Variables Section */}
          <section id="variables" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiDatabase className="mr-3" /> CSS Variables
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiDatabase className="mr-2 text-purple-500" /> CSS Custom Properties
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS variables (custom properties) allow you to store values that you want to reuse throughout your stylesheet. They follow the cascade and can be modified with JavaScript.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.variables}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.variables)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.variables ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Variable properties */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">CSS Variable Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiDatabase className="mr-2" /> Scoping
                      </h5>
                      <p className="text-sm text-gray-700">Variables can be scoped to specific elements using the cascade.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiCpu className="mr-2" /> Dynamic Updates
                      </h5>
                      <p className="text-sm text-gray-700">Variables can be updated with JavaScript for dynamic theming.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiShield className="mr-2" /> Fallbacks
                      </h5>
                      <p className="text-sm text-gray-700">Provide fallback values when using variables.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiGlobe className="mr-2" /> Global Scope
                      </h5>
                      <p className="text-sm text-gray-700">Define variables on :root for global availability.</p>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Naming Convention:</p>
                        <p className="text-purple-700">Use meaningful names prefixed with your theme or component name (e.g., --button-primary-color) to avoid conflicts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Preprocessors Section */}
          <section id="preprocessors" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCog className="mr-3" /> Preprocessors
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaCog className="mr-2 text-purple-500" /> CSS Preprocessors
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSS preprocessors extend CSS with features like variables, nesting, mixins, functions, and more, making CSS more maintainable and powerful.
                  </p>

                  {/* Preprocessor features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiDatabase className="mr-2" /> Variables
                      </h5>
                      <p className="text-sm text-gray-700">Store values for reuse throughout stylesheets.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiLayers className="mr-2" /> Nesting
                      </h5>
                      <p className="text-sm text-gray-700">Nest selectors to mirror HTML structure.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiPackage className="mr-2" /> Mixins
                      </h5>
                      <p className="text-sm text-gray-700">Reusable chunks of style declarations.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiCpu className="mr-2" /> Functions
                      </h5>
                      <p className="text-sm text-gray-700">Perform operations and return values.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiSettings className="mr-2" /> Modules
                      </h5>
                      <p className="text-sm text-gray-700">Split code into multiple files and import them.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                        <FiZap className="mr-2" /> Operators
                      </h5>
                      <p className="text-sm text-gray-700">Math operations directly in CSS.</p>
                    </div>
                  </div>

                  {/* Preprocessor comparison */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Popular Preprocessors</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Preprocessor
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Language
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Features
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { name: 'Sass/SCSS', language: 'Ruby (originally)', features: 'Variables, nesting, mixins, inheritance, functions, logic' },
                          { name: 'Less', language: 'JavaScript', features: 'Variables, nesting, mixins, functions, but no logic' },
                          { name: 'Stylus', language: 'JavaScript', features: 'Flexible syntax, variables, nesting, mixins, functions' },
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.language}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.features}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Modern CSS:</p>
                        <p className="text-purple-700">With CSS variables and other modern features, consider whether you still need a preprocessor or can use native CSS with PostCSS for enhancements.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specificity Section */}
          <section id="specificity" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaSearch className="mr-3" /> Specificity
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaSearch className="mr-2 text-purple-500" /> CSS Specificity
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and will be applied.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.specificity}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.specificity)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.specificity ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Specificity hierarchy */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Specificity Hierarchy</h4>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6 hover:border-purple-400 transition-all duration-200 transform hover:scale-101">
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-white rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 text-red-600 font-bold">1</div>
                        <div>
                          <p className="font-semibold text-gray-800">Inline styles</p>
                          <p className="text-sm text-gray-600">Highest specificity (1,0,0,0)</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 text-orange-600 font-bold">2</div>
                        <div>
                          <p className="font-semibold text-gray-800">IDs</p>
                          <p className="text-sm text-gray-600">Second highest (0,1,0,0)</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 text-yellow-600 font-bold">3</div>
                        <div>
                          <p className="font-semibold text-gray-800">Classes, attributes, pseudo-classes</p>
                          <p className="text-sm text-gray-600">Medium specificity (0,0,1,0)</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded border border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 text-green-600 font-bold">4</div>
                        <div>
                          <p className="font-semibold text-gray-800">Elements and pseudo-elements</p>
                          <p className="text-sm text-gray-600">Lowest specificity (0,0,0,1)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Important Rule:</p>
                        <p className="text-purple-700">The !important rule overrides all other declarations but should be used sparingly as it breaks the natural cascading in your stylesheets.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pseudo Classes Section */}
          <section id="pseudo-classes" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Pseudo Classes
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaCode className="mr-2 text-purple-500" /> CSS Pseudo Classes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.pseudoClasses}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.pseudoClasses)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.pseudoClasses ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Pseudo-classes table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Pseudo Classes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pseudo-class
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Example
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { class: ':hover', example: 'a:hover', description: 'When user hovers over element' },
                          { class: ':active', example: 'button:active', description: 'When element is being activated' },
                          { class: ':focus', example: 'input:focus', description: 'When element has focus' },
                          { class: ':first-child', example: 'li:first-child', description: 'First child of its parent' },
                          { class: ':last-child', example: 'li:last-child', description: 'Last child of its parent' },
                          { class: ':nth-child()', example: 'tr:nth-child(2n)', description: 'Elements matching the pattern' },
                          { class: ':not()', example: 'div:not(.special)', description: 'Elements that don\'t match selector' },
                          { class: ':checked', example: 'input[type="checkbox"]:checked', description: 'Checked radio/checkbox' },
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.class}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Link Order:</p>
                        <p className="text-purple-700">For link pseudo-classes, maintain this order: :link, :visited, :hover, :active (LoVe HAte).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pseudo Elements Section */}
          <section id="pseudo-elements" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Pseudo Elements
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaCode className="mr-2 text-purple-500" /> CSS Pseudo Elements
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Pseudo-elements create abstractions about the document tree beyond those specified by the document language.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                      <pre className="font-mono text-sm">
                        <code>{cssExamples.pseudoElements}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cssExamples.pseudoElements)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cssExamples.pseudoElements ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Pseudo-elements table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Pseudo Elements</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pseudo-element
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Example
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { element: '::before', example: 'p::before', description: 'Insert content before element' },
                          { element: '::after', example: 'p::after', description: 'Insert content after element' },
                          { element: '::first-letter', example: 'p::first-letter', description: 'Style first letter of text' },
                          { element: '::first-line', example: 'p::first-line', description: 'Style first line of text' },
                          { element: '::selection', example: '::selection', description: 'Style highlighted text' },
                          { element: '::placeholder', example: 'input::placeholder', description: 'Style placeholder text' },
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-purple-800">Content Property:</p>
                        <p className="text-purple-700">The content property is required for ::before and ::after pseudo-elements to render.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}