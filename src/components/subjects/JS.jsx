import React, { useState, useEffect } from 'react';
import {
  FaJs, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaCode, FaTable, FaList, FaLink, FaImage, FaFileAlt,
  FaCheck, FaGlobe, FaServer, FaLayerGroup, FaTags,
  FaRegSmile, FaMobileAlt, FaSearch, FaShieldAlt
} from 'react-icons/fa';
import {
  FiClock, FiCode as FiCodeAlt, FiLayout, FiNavigation,
  FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function JS() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('js-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [syntaxRef, syntaxInView] = useInView({ threshold: 0.1 });
  const [variablesRef, variablesInView] = useInView({ threshold: 0.1 });
  const [operatorsRef, operatorsInView] = useInView({ threshold: 0.1 });
  const [functionsRef, functionsInView] = useInView({ threshold: 0.1 });
  const [objectsRef, objectsInView] = useInView({ threshold: 0.1 });
  const [arraysRef, arraysInView] = useInView({ threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.1 });
  const [domRef, domInView] = useInView({ threshold: 0.1 });
  const [es6Ref, es6InView] = useInView({ threshold: 0.1 });
  const [asyncRef, asyncInView] = useInView({ threshold: 0.1 });
  const [oopRef, oopInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [errorRef, errorInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'js-introduction', inView: introInView },
      { id: 'syntax', inView: syntaxInView },
      { id: 'variables', inView: variablesInView },
      { id: 'operators', inView: operatorsInView },
      { id: 'functions', inView: functionsInView },
      { id: 'objects', inView: objectsInView },
      { id: 'arrays', inView: arraysInView },
      { id: 'events', inView: eventsInView },
      { id: 'dom-manipulation', inView: domInView },
      { id: 'es6-features', inView: es6InView },
      { id: 'async-js', inView: asyncInView },
      { id: 'oop', inView: oopInView },
      { id: 'modules', inView: modulesInView },
      { id: 'error-handling', inView: errorInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, syntaxInView, variablesInView, operatorsInView,
    functionsInView, objectsInView, arraysInView, eventsInView,
    domInView, es6InView, asyncInView, oopInView, modulesInView, errorInView
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

  // Menu items data
  const menuItems = [
    { id: 'js-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'syntax', label: 'Syntax', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'variables', label: 'Variables', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'operators', label: 'Operators', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'functions', label: 'Functions', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'objects', label: 'Objects', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'arrays', label: 'Arrays', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'events', label: 'Events', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'dom-manipulation', label: 'DOM Manipulation', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'es6-features', label: 'ES6 Features', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'async-js', label: 'Async JS', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'oop', label: 'OOP', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'modules', label: 'Modules', icon: <FiCodeAlt className="mr-2" /> },
    { id: 'error-handling', label: 'Error Handling', icon: <FiCodeAlt className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "High-level Language",
      description: "JavaScript provides abstraction from machine details",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Dynamic Typing",
      description: "Variables don't need type declarations",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Multi-paradigm",
      description: "Supports OOP, functional, and imperative programming",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Prototype-based",
      description: "Uses prototypes instead of classes for inheritance",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "First-class Functions",
      description: "Functions are treated as objects",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Event-driven",
      description: "Responds to user interactions and events",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Single-threaded",
      description: "Uses event loop for concurrency",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Cross-platform",
      description: "Runs in browsers and servers (Node.js)",
      icon: <FiCodeAlt className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
    }
  ];

  // JavaScript Examples
  const jsExamples = {
    introduction: `// JavaScript is a high-level, interpreted programming language
console.log("Hello, World!");

// It's multi-paradigm: supports OOP, functional, and imperative styles
function greet(name) {
  return "Hello, " + name;
}

// Event-driven and non-blocking
document.addEventListener('click', function() {
  console.log('Document clicked!');
});`,
    syntax: `// Statements end with semicolons (optional but recommended)
let x = 5;

// Comments
// Single line comment
/* Multi-line 
   comment */

// Code blocks
if (true) {
  console.log('This is a block');
}

// Case sensitive
let myVar = 'hello';
let myvar = 'world'; // Different variable`,
    variables: `// Variable declarations
var oldWay = 'deprecated'; // Function scope
let modernWay = 'block scope'; // Can be reassigned
const constantWay = 'block scope'; // Cannot be reassigned

// Variable naming
let camelCase = 'standard JS convention';
let $special = 'can start with $';
let _private = 'sometimes used for private vars';

// Dynamic typing
let dynamic = 'string';
dynamic = 42; // Now it's a number
dynamic = true; // Now it's a boolean`,
    operators: `// Arithmetic operators
let sum = 10 + 5; // 15
let power = 2 ** 3; // 8 (exponentiation)

// Comparison operators
'5' == 5; // true (loose equality)
'5' === 5; // false (strict equality)

// Logical operators
true && false; // AND - false
true || false; // OR - true
!true; // NOT - false

// Ternary operator
let age = 18;
let status = age >= 18 ? 'adult' : 'minor';

// Nullish coalescing
let value = null ?? 'default'; // 'default'`,
    functions: `// Function declaration
function greet(name) {
  return 'Hello ' + name;
}

// Function expression
const greet = function(name) {
  return 'Hello ' + name;
};

// Arrow function (ES6+)
const greet = (name) => {
  return 'Hello ' + name;
};

// Shorthand arrow function
const greet = name => 'Hello ' + name;

// Default parameters
function greet(name = 'Guest') {
  return 'Hello ' + name;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}`,
    objects: `// Object literal
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    return 'Hello, ' + this.name;
  }
};

// Accessing properties
person.name; // dot notation
person['age']; // bracket notation

// Adding properties
person.job = 'Developer';

// Object methods
Object.keys(person); // ['name', 'age', 'greet', 'job']
Object.values(person); // ['John', 30, function, 'Developer']

// Destructuring
const { name, age } = person;`,
    arrays: `// Array creation
const fruits = ['apple', 'banana', 'orange'];

// Accessing elements
fruits[0]; // 'apple'

// Array methods
fruits.push('grape'); // Add to end
fruits.pop(); // Remove from end
fruits.unshift('kiwi'); // Add to start
fruits.shift(); // Remove from start

// Iteration
fruits.forEach(fruit => console.log(fruit));

// Map
const lengths = fruits.map(fruit => fruit.length);

// Filter
const longFruits = fruits.filter(fruit => fruit.length > 5);

// Reduce
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);`,
    events: `// Event listeners
document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked!');
});

// Event object
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});

// Event propagation
document.querySelector('.outer').addEventListener('click', function() {
  console.log('Outer element clicked');
}, true); // Capturing phase

document.querySelector('.inner').addEventListener('click', function(event) {
  console.log('Inner element clicked');
  event.stopPropagation(); // Prevent bubbling
});`,
    domManipulation: `// Selecting elements
const element = document.getElementById('id');
const elements = document.querySelectorAll('.class');

// Modifying content
element.textContent = 'New text';
element.innerHTML = '<strong>HTML</strong> content';

// Styling
element.style.color = 'blue';
element.classList.add('highlight');

// Creating elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New element';
document.body.appendChild(newDiv);

// Event delegation
document.querySelector('ul').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});`,
    es6Features: `// Let and const
let variable = 'can change';
const constant = 'cannot change';

// Arrow functions
const square = x => x * x;

// Template literals
const greeting = \`Hello \${name}!\`;

// Destructuring
const { prop1, prop2 } = obj;
const [first, second] = arr;

// Spread operator
const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, ...obj2 };

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello \${this.name}\`;
  }
}`,
    asyncJS: `// Callbacks
function fetchData(callback) {
  setTimeout(() => callback('Data'), 1000);
}

// Promises
fetch('url')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await
async function getData() {
  try {
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Promise.all
Promise.all([fetch(url1), fetch(url2)])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => console.log(data));`,
    oop: `// Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};

// ES6 Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello \${this.name}\`;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  study() {
    return \`\${this.name} is studying\`;
  }
}

// Encapsulation
class Counter {
  #count = 0; // Private field
  
  increment() {
    this.#count++;
  }
  
  get count() {
    return this.#count;
  }
}`,
    modules: `// Exporting module (math.js)
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export default function subtract(a, b) {
  return a - b;
}

// Importing module
import subtract, { PI, add } from './math.js';

// Dynamic imports
const module = await import('./math.js');
console.log(module.add(2, 3));`,
    errorHandling: `// Try-catch
try {
  // Code that might throw an error
  riskyOperation();
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Always runs');
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Throwing errors
function validate(input) {
  if (!input) throw new ValidationError('Input required');
}

// Error types
// - Error
// - SyntaxError
// - ReferenceError
// - TypeError
// - RangeError
// - URIError`
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
              <FaJs className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              JavaScript Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-yellow-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-yellow-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaJs className="text-yellow-600" />
                    </motion.div>
                    JS Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-yellow-700 text-xl transition-colors duration-200 transform hover:rotate-90"
                  >
                    <FaTimes />
                  </button>
                </div>
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-yellow-100 text-yellow-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-yellow-600 group-hover:text-yellow-700 transition-colors ${activeSection === item.id ? 'text-yellow-700' : ''}` })}
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="js-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-yellow-200 hover:border-yellow-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to JavaScript
                </h2>
              </div>

              <div className="p-6">
                {/* What is JavaScript card */}
                <motion.div
                  className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is JavaScript?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
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
                        <p className="text-yellow-700">JavaScript was created in 10 days in May 1995 by Brendan Eich while he was working at Netscape. It was originally named Mocha, then LiveScript, and finally JavaScript.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* JavaScript Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic JavaScript Syntax
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-yellow-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{jsExamples.introduction}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(jsExamples.introduction)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === jsExamples.introduction ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-yellow-500" />
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
                          className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg transition-all duration-200 hover:bg-yellow-100 hover:shadow-md"
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

          {/* Syntax Section */}
          <section id="syntax" className="mb-12" ref={syntaxRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-yellow-200 hover:border-yellow-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCodeAlt className="mr-3" /> Syntax
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                    <FiCodeAlt className="mr-2 text-yellow-500" /> JavaScript Syntax Basics
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    JavaScript syntax is the set of rules that define a correctly structured JavaScript program. Understanding the basic syntax is essential for writing valid JavaScript code.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-yellow-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{jsExamples.syntax}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(jsExamples.syntax)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === jsExamples.syntax ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Syntax elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Syntax Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeAlt />, title: "Statements", description: "End with semicolons (optional but recommended)" },
                      { icon: <FiCodeAlt />, title: "Comments", description: "Single-line (//) and multi-line (/* */)" },
                      { icon: <FiCodeAlt />, title: "Code Blocks", description: "Enclosed in curly braces {}" },
                      { icon: <FiCodeAlt />, title: "Case Sensitivity", description: "JavaScript is case-sensitive" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-yellow-800">Best Practice:</p>
                        <p className="text-yellow-700">Use consistent indentation (2 or 4 spaces) and semicolons to make your code more readable and avoid potential issues.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Variables Section */}
          <section id="variables" className="mb-12" ref={variablesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-yellow-200 hover:border-yellow-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCodeAlt className="mr-3" /> Variables
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                    <FiCodeAlt className="mr-2 text-yellow-500" /> JavaScript Variables
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Variables are containers for storing data values. JavaScript has three ways to declare variables: var, let, and const.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-yellow-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{jsExamples.variables}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(jsExamples.variables)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === jsExamples.variables ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Variable types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Variable Declarations</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-yellow-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scope</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reassignable</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hoisted</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-yellow-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">var</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Function</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes (undefined)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Legacy code</td>
                        </tr>
                        <tr className="hover:bg-yellow-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">let</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Block</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes (not initialized)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Variables that change</td>
                        </tr>
                        <tr className="hover:bg-yellow-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">const</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Block</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes (not initialized)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Constants</td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
   {/* Dynamic typing */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Dynamic Typing</h4>
              <p className="mb-4 text-gray-700 leading-relaxed">
                JavaScript is dynamically typed, which means variables can hold values of any type without requiring explicit type declarations.
              </p>

              <motion.div
                className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Important:</p>
                    <p className="text-yellow-700">
                      While dynamic typing provides flexibility, it can lead to unexpected behavior. Use TypeScript or proper type checking for large applications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Operators Section */}
      <section id="operators" className="mb-12" ref={operatorsRef}>
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-yellow-200 hover:border-yellow-400"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FiCodeAlt className="mr-3" /> Operators
            </h2>
          </div>

          <div className="p-6">
            <motion.div
              className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                <FiCodeAlt className="mr-2 text-yellow-500" /> JavaScript Operators
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Operators are used to perform operations on variables and values. JavaScript includes various types of operators for different purposes.
              </p>

              <div className="relative group mb-6">
                <motion.div
                  className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-yellow-500"
                  whileHover={{ scale: 1.01 }}
                >
                  <pre className="font-mono text-sm">
                    <code>{jsExamples.operators}</code>
                  </pre>
                </motion.div>
                <motion.button
                  onClick={() => copyToClipboard(jsExamples.operators)}
                  className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCopy className="w-4 h-4 mr-1" />
                  {copiedCode === jsExamples.operators ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              {/* Operator types */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Operator Types</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <FiCodeAlt />, title: "Arithmetic", description: "+ - * / % ** (addition, subtraction, etc.)" },
                  { icon: <FiCodeAlt />, title: "Assignment", description: "= += -= *= /= (assign values)" },
                  { icon: <FiCodeAlt />, title: "Comparison", description: "== === != !== > < >= <=" },
                  { icon: <FiCodeAlt />, title: "Logical", description: "&& || ! (and, or, not)" },
                  { icon: <FiCodeAlt />, title: "Ternary", description: "condition ? expr1 : expr2" },
                  { icon: <FiCodeAlt />, title: "Nullish Coalescing", description: "?? (returns right operand if left is null/undefined)" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </h5>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Equality comparison */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Equality Comparisons</h4>
              <motion.div
                className="overflow-x-auto shadow-md rounded-lg mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">==</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Loose equality</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Converts types before comparison</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'5' == 5 → true</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">===</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Strict equality</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No type conversion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'5' === 5 → false</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Object.is()</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Same-value equality</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Handles special cases like NaN</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Object.is(NaN, NaN) → true</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Tip box */}
              <motion.div
                className="tip bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Best Practice:</p>
                    <p className="text-yellow-700">
                      Always use strict equality (===) instead of loose equality (==) to avoid unexpected type coercion. The same applies for inequality (!== vs !=).
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Continue with the remaining sections following the same pattern */}
      {/* Each section would have a similar structure but with content specific to that topic */}
      {/* For brevity, I'll show one more section and you can follow the pattern for the rest */}

      {/* Functions Section */}
      <section id="functions" className="mb-12" ref={functionsRef}>
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-yellow-200 hover:border-yellow-400"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FiCodeAlt className="mr-3" /> Functions
            </h2>
          </div>

          <div className="p-6">
            <motion.div
              className="card bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-700 flex items-center">
                <FiCodeAlt className="mr-2 text-yellow-500" /> JavaScript Functions
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements that performs a task or calculates a value.
              </p>

              <div className="relative group mb-6">
                <motion.div
                  className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-yellow-500"
                  whileHover={{ scale: 1.01 }}
                >
                  <pre className="font-mono text-sm">
                    <code>{jsExamples.functions}</code>
                  </pre>
                </motion.div>
                <motion.button
                  onClick={() => copyToClipboard(jsExamples.functions)}
                  className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCopy className="w-4 h-4 mr-1" />
                  {copiedCode === jsExamples.functions ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              {/* Function types */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Function Types</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <FiCodeAlt />, title: "Function Declaration", description: "function name() {...}" },
                  { icon: <FiCodeAlt />, title: "Function Expression", description: "const name = function() {...}" },
                  { icon: <FiCodeAlt />, title: "Arrow Function", description: "const name = () => {...}" },
                  { icon: <FiCodeAlt />, title: "IIFE", description: "(function() {...})()" },
                  { icon: <FiCodeAlt />, title: "Generator Function", description: "function* name() {...}" },
                  { icon: <FiCodeAlt />, title: "Async Function", description: "async function name() {...}" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </h5>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Function features */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Function Features</h4>
              <motion.ul
                className="space-y-3 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "First-class functions: Can be assigned to variables, passed as arguments, returned from other functions",
                  "Closures: Functions remember their lexical scope even when executed outside it",
                  "Hoisting: Function declarations are hoisted (can be called before declaration)",
                  "this keyword: Refers to the execution context (differs between function types)",
                  "Arguments object: Array-like object containing passed arguments",
                  "Rest parameters: Capture multiple arguments as an array (...args)"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-2 bg-yellow-50 p-3 rounded-lg border border-yellow-200 hover:border-yellow-400 transition-all duration-200"
                    whileHover={{ y: -3 }}
                  >
                    <FaCheck className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Arrow functions */}
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Arrow Functions vs Regular Functions</h4>
              <motion.div
                className="overflow-x-auto shadow-md rounded-lg mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrow Functions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regular Functions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">this binding</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lexical (inherited from parent scope)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dynamic (depends on how called)</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">arguments object</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Constructor</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cannot be used as constructors</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Can be used as constructors</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Implicit return</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">When no curly braces</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Requires explicit return</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Tip box */}
              <motion.div
                className="tip bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">When to Use Arrow Functions:</p>
                    <p className="text-yellow-700">
                      Use arrow functions for short callbacks and when you want to preserve the lexical 'this'. Use regular functions for methods, constructors, and when you need access to the arguments object.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Continue with the remaining sections (Objects, Arrays, Events, DOM, ES6, Async, OOP, Modules, Error Handling) */}
      {/* Each would follow the same pattern with appropriate content */}

    </main>
  </div>

</div>
);
}