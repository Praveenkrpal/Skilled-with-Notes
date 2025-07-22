import React, { useState, useEffect } from 'react';
import { FaPython, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaCode, FaTable, FaList, FaLink, FaImage, FaFileAlt, FaCheck, FaGlobe, FaServer, FaLayerGroup, FaTags, FaRegSmile, FaMobileAlt, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { FiClock, FiCode as FiCodeIcon, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Python() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('python-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [basicsRef, basicsInView] = useInView({ threshold: 0.1 });
  const [dataTypesRef, dataTypesInView] = useInView({ threshold: 0.1 });
  const [controlFlowRef, controlFlowInView] = useInView({ threshold: 0.1 });
  const [functionsRef, functionsInView] = useInView({ threshold: 0.1 });
  const [collectionsRef, collectionsInView] = useInView({ threshold: 0.1 });
  const [oopRef, oopInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [fileIORef, fileIOInView] = useInView({ threshold: 0.1 });
  const [exceptionsRef, exceptionsInView] = useInView({ threshold: 0.1 });
  const [librariesRef, librariesInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'python-introduction', inView: introInView },
      { id: 'python-basics', inView: basicsInView },
      { id: 'data-types', inView: dataTypesInView },
      { id: 'control-flow', inView: controlFlowInView },
      { id: 'functions', inView: functionsInView },
      { id: 'collections', inView: collectionsInView },
      { id: 'oop', inView: oopInView },
      { id: 'modules', inView: modulesInView },
      { id: 'file-io', inView: fileIOInView },
      { id: 'exceptions', inView: exceptionsInView },
      { id: 'libraries', inView: librariesInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, basicsInView, dataTypesInView, controlFlowInView,
    functionsInView, collectionsInView, oopInView, modulesInView,
    fileIOInView, exceptionsInView, librariesInView
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
    { id: 'python-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'python-basics', label: 'Python Basics', icon: <FiCodeIcon className="mr-2" /> },
    { id: 'data-types', label: 'Data Types', icon: <FiLayout className="mr-2" /> },
    { id: 'control-flow', label: 'Control Flow', icon: <FiNavigation className="mr-2" /> },
    { id: 'functions', label: 'Functions', icon: <FiFeather className="mr-2" /> },
    { id: 'collections', label: 'Collections', icon: <FiGrid className="mr-2" /> },
    { id: 'oop', label: 'OOP', icon: <FiCpu className="mr-2" /> },
    { id: 'modules', label: 'Modules', icon: <FiPackage className="mr-2" /> },
    { id: 'file-io', label: 'File I/O', icon: <FaFileAlt className="mr-2" /> },
    { id: 'exceptions', label: 'Exceptions', icon: <FaExclamationTriangle className="mr-2" /> },
    { id: 'libraries', label: 'Libraries', icon: <FaServer className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "High-Level Language",
      description: "Python abstracts many complex details of programming",
      icon: <FiCodeIcon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Interpreted",
      description: "Code is executed line by line without compilation",
      icon: <FiCpu className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Dynamically Typed",
      description: "No need to declare variable types",
      icon: <FiLayout className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Multi-Paradigm",
      description: "Supports procedural, OOP, and functional programming",
      icon: <FaLayerGroup className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Extensive Libraries",
      description: "Rich standard library and third-party packages",
      icon: <FiPackage className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Cross-Platform",
      description: "Runs on Windows, Linux, macOS and more",
      icon: <FaGlobe className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Community Support",
      description: "Large active community for help and resources",
      icon: <FiUser className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Versatile",
      description: "Used in web, data science, AI, scripting and more",
      icon: <FiZap className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // Python Examples
  const pythonExamples = {
    helloWorld: `# Hello World in Python
print("Hello, World!")`,

    variables: `# Variables in Python
name = "Alice"          # String
age = 25               # Integer
height = 5.9           # Float
is_student = True      # Boolean`,

    dataTypes: `# Python Data Types
# Numbers
num_int = 10
num_float = 3.14
complex_num = 2 + 3j

# Strings
message = "Hello Python"

# Boolean
is_valid = True

# NoneType
nothing = None`,

    controlFlow: `# Control Flow in Python
# If-elif-else
age = 18
if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")

# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`,

    functions: `# Functions in Python
def greet(name):
    """This function greets the person passed in"""
    return f"Hello, {name}!"

# Function call
print(greet("Alice"))

# Function with default argument
def power(base, exponent=2):
    return base ** exponent

# Lambda function
square = lambda x: x * x`,

    collections: `# Python Collections
# List
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")

# Tuple (immutable)
colors = ("red", "green", "blue")

# Dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Set
unique_numbers = {1, 2, 3, 3, 2}`,

    oop: `# Object-Oriented Programming
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    # Initializer
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"
    
    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

# Create object
my_dog = Dog("Buddy", 5)
print(my_dog.description())
print(my_dog.speak("Woof"))`,

    modules: `# Python Modules
# Importing a module
import math

# Using module functions
print(math.sqrt(16))

# Import specific function
from random import randint

# Using the imported function
print(randint(1, 10))

# Creating your own module
# Save as mymodule.py
"""
def greeting(name):
    print("Hello, " + name)
"""`,

    fileIO: `# File I/O in Python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, Python!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Appending to a file
with open("example.txt", "a") as file:
    file.write("\\nAdding more text.")`,

    exceptions: `# Exception Handling
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No exceptions occurred")
finally:
    print("This always executes")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")`,

    libraries: `# Popular Python Libraries
# NumPy for numerical computing
import numpy as np
arr = np.array([1, 2, 3])

# Pandas for data analysis
import pandas as pd
data = pd.DataFrame({"A": [1, 2], "B": [3, 4]})

# Matplotlib for visualization
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()

# Requests for HTTP
import requests
response = requests.get("https://api.github.com")`
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
              <FaPython className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-white">
              Python Notes
            </span>
          </motion.h1>
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-blue-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-blue-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaPython className="text-sky-600" />
                    </motion.div>
                    Python Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-blue-700 text-xl transition-colors duration-200 transform hover:rotate-90"
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
                        className={`block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-blue-100 text-blue-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-sky-600 group-hover:text-blue-700 transition-colors ${activeSection === item.id ? 'text-blue-700' : ''}` })}
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
          <section id="python-introduction" className="mb-12" ref={introRef}>
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
                  Introduction to Python
                </h2>
              </div>

              <div className="p-6">
                {/* What is Python card */}
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is Python?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python is a high-level, interpreted, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.
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
                        <p className="text-yellow-700">Python was named after the British comedy group Monty Python, not the snake. Many tutorials and examples include references to Monty Python sketches.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Python Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic Python Structure
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.helloWorld}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.helloWorld)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.helloWorld ? 'Copied!' : 'Copy'}
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
                        <FiZap className="mr-2 text-sky-500" />
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

          {/* Python Basics Section */}
          <section id="python-basics" className="mb-12" ref={basicsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCodeIcon className="mr-3" /> Python Basics
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCodeIcon className="mr-2 text-sky-500" /> Basic Syntax
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python syntax is designed to be readable and straightforward. Unlike many other languages, it uses indentation to define code blocks rather than curly braces or keywords.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.variables}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.variables)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.variables ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Basic syntax elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Basic Syntax Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Indentation", description: "Uses whitespace (4 spaces) to define blocks" },
                      { icon: <FiCodeIcon />, title: "Comments", description: "Single-line with #, multi-line with \"\"\" or '''" },
                      { icon: <FiCodeIcon />, title: "Variables", description: "Dynamically typed, no declaration needed" },
                      { icon: <FiCodeIcon />, title: "Printing", description: "print() function outputs to console" }
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

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practice:</p>
                        <p className="text-blue-700">Always use 4 spaces for indentation (PEP 8 recommendation). Mixing tabs and spaces can cause errors.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Data Types Section */}
          <section id="data-types" className="mb-12" ref={dataTypesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Data Types
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiLayout className="mr-2 text-sky-500" /> Python Data Types
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python has several built-in data types that are used to store different kinds of data. The type of a variable is determined automatically when you assign a value to it.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.dataTypes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.dataTypes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.dataTypes ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Data types table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Built-in Data Types</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { type: 'int', description: 'Integer numbers', example: '42, -10' },
                          { type: 'float', description: 'Floating-point numbers', example: '3.14, -0.001' },
                          { type: 'complex', description: 'Complex numbers', example: '2+3j' },
                          { type: 'str', description: 'Text (strings)', example: '"hello", \'Python\'' },
                          { type: 'bool', description: 'Boolean values', example: 'True, False' },
                          { type: 'NoneType', description: 'Represents absence of value', example: 'None' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Control Flow Section */}
          <section id="control-flow" className="mb-12" ref={controlFlowRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiNavigation className="mr-3" /> Control Flow
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiNavigation className="mr-2 text-sky-500" /> Control Flow Statements
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Control flow statements determine the order in which the code is executed. Python supports the usual control flow statements found in other languages.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.controlFlow}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.controlFlow)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.controlFlow ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Control flow elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Control Flow Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "if-elif-else", description: "Conditional execution" },
                      { icon: <FiCodeIcon />, title: "for loops", description: "Iterate over sequences" },
                      { icon: <FiCodeIcon />, title: "while loops", description: "Execute while condition is true" },
                      { icon: <FiCodeIcon />, title: "break", description: "Exit loop immediately" },
                      { icon: <FiCodeIcon />, title: "continue", description: "Skip to next iteration" },
                      { icon: <FiCodeIcon />, title: "pass", description: "Do nothing (placeholder)" },
                      { icon: <FiCodeIcon />, title: "range()", description: "Generate sequence of numbers" },
                      { icon: <FiCodeIcon />, title: "match-case", description: "Pattern matching (Python 3.10+)" }
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

          {/* Functions Section */}
          <section id="functions" className="mb-12" ref={functionsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiFeather className="mr-3" /> Functions
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiFeather className="mr-2 text-sky-500" /> Python Functions
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Functions are reusable blocks of code that perform a specific task. They help organize code into logical chunks and avoid repetition.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.functions}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.functions)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.functions ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Function features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Function Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Parameters", description: "Input values passed to functions" },
                      { icon: <FiCodeIcon />, title: "Return values", description: "Output values from functions" },
                      { icon: <FiCodeIcon />, title: "Default arguments", description: "Parameters with default values" },
                      { icon: <FiCodeIcon />, title: "Keyword arguments", description: "Arguments passed by parameter name" },
                      { icon: <FiCodeIcon />, title: "Variable-length args", description: "*args and **kwargs" },
                      { icon: <FiCodeIcon />, title: "Lambda functions", description: "Small anonymous functions" },
                      { icon: <FiCodeIcon />, title: "Docstrings", description: "Documentation strings for functions" },
                      { icon: <FiCodeIcon />, title: "Scope", description: "Variable visibility (local, global)" }
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

          {/* Collections Section */}
          <section id="collections" className="mb-12" ref={collectionsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Collections
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiGrid className="mr-2 text-sky-500" /> Python Collections
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python has several built-in collection types that are used to store multiple items in a single variable. Each has different properties and methods.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.collections}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.collections)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.collections ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Collection types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Collection Types</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { type: 'list', description: 'Ordered, mutable sequence', example: '[1, 2, 3]' },
                          { type: 'tuple', description: 'Ordered, immutable sequence', example: '(1, 2, 3)' },
                          { type: 'dict', description: 'Key-value pairs, unordered', example: '{"name": "Alice", "age": 25}' },
                          { type: 'set', description: 'Unordered, unique elements', example: '{1, 2, 3}' },
                          { type: 'frozenset', description: 'Immutable version of set', example: 'frozenset({1, 2, 3})' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* OOP Section */}
          <section id="oop" className="mb-12" ref={oopRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> Object-Oriented Programming
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2 text-sky-500" /> OOP in Python
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python supports object-oriented programming (OOP) with classes and objects. OOP helps in creating reusable code and modeling real-world entities.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.oop}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.oop)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.oop ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* OOP concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">OOP Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Classes", description: "Blueprints for creating objects" },
                      { icon: <FiCodeIcon />, title: "Objects", description: "Instances of classes" },
                      { icon: <FiCodeIcon />, title: "Inheritance", description: "Creating child classes" },
                      { icon: <FiCodeIcon />, title: "Encapsulation", description: "Bundling data with methods" },
                      { icon: <FiCodeIcon />, title: "Polymorphism", description: "Same interface for different types" },
                      { icon: <FiCodeIcon />, title: "Abstraction", description: "Hiding complex implementation" },
                      { icon: <FiCodeIcon />, title: "Magic Methods", description: "__init__, __str__, etc." },
                      { icon: <FiCodeIcon />, title: "Properties", description: "Controlled attribute access" }
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

          {/* Modules Section */}
          <section id="modules" className="mb-12" ref={modulesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Modules
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiPackage className="mr-2 text-sky-500" /> Python Modules
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    A module is a file containing Python definitions and statements. Modules allow you to logically organize your Python code and reuse code across multiple files.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.modules}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.modules)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.modules ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Module concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Module Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "import", description: "Import entire module" },
                      { icon: <FiCodeIcon />, title: "from...import", description: "Import specific items" },
                      { icon: <FiCodeIcon />, title: "as keyword", description: "Create module alias" },
                      { icon: <FiCodeIcon />, title: "__name__", description: "Module's name (__main__ when run directly)" },
                      { icon: <FiCodeIcon />, title: "Standard Library", description: "Built-in modules like math, os, sys" },
                      { icon: <FiCodeIcon />, title: "Third-party", description: "External modules installed via pip" },
                      { icon: <FiCodeIcon />, title: "Packages", description: "Directories containing modules" },
                      { icon: <FiCodeIcon />, title: "__init__.py", description: "Makes directory a Python package" }
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

          {/* File I/O Section */}
          <section id="file-io" className="mb-12" ref={fileIORef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaFileAlt className="mr-3" /> File I/O
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaFileAlt className="mr-2 text-sky-500" /> File Handling
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python provides built-in functions for creating, reading, updating, and deleting files. The key function for working with files is the open() function.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.fileIO}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.fileIO)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.fileIO ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* File modes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">File Modes</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mode
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { mode: 'r', description: 'Read (default)' },
                          { mode: 'w', description: 'Write (creates new or truncates existing)' },
                          { mode: 'x', description: 'Exclusive creation (fails if file exists)' },
                          { mode: 'a', description: 'Append (creates if file doesn\'t exist)' },
                          { mode: 'b', description: 'Binary mode' },
                          { mode: 't', description: 'Text mode (default)' },
                          { mode: '+', description: 'Updating (read/write)' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.mode}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Exceptions Section */}
          <section id="exceptions" className="mb-12" ref={exceptionsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExclamationTriangle className="mr-3" /> Exceptions
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExclamationTriangle className="mr-2 text-sky-500" /> Exception Handling
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Exceptions are errors detected during execution. Python provides robust exception handling to deal with runtime errors gracefully.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.exceptions}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.exceptions)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.exceptions ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Exception concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Exception Handling</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "try-except", description: "Handle exceptions" },
                      { icon: <FiCodeIcon />, title: "else", description: "Run if no exceptions" },
                      { icon: <FiCodeIcon />, title: "finally", description: "Always execute" },
                      { icon: <FiCodeIcon />, title: "raise", description: "Raise an exception" },
                      { icon: <FiCodeIcon />, title: "Built-in exceptions", description: "ValueError, TypeError, etc." },
                      { icon: <FiCodeIcon />, title: "Custom exceptions", description: "Create your own exception classes" },
                      { icon: <FiCodeIcon />, title: "Exception hierarchy", description: "BaseException ← Exception" },
                      { icon: <FiCodeIcon />, title: "assert", description: "Debugging assertions" }
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

          {/* Libraries Section */}
          <section id="libraries" className="mb-12" ref={librariesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Libraries
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaServer className="mr-2 text-sky-500" /> Python Libraries
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Python has a vast ecosystem of libraries for various purposes. The standard library comes with Python, while third-party libraries can be installed using pip.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{pythonExamples.libraries}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(pythonExamples.libraries)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === pythonExamples.libraries ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Popular libraries */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Popular Python Libraries</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Library
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Purpose
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Installation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { library: 'NumPy', purpose: 'Numerical computing', installation: 'pip install numpy' },
                          { library: 'Pandas', purpose: 'Data analysis', installation: 'pip install pandas' },
                          { library: 'Matplotlib', purpose: 'Data visualization', installation: 'pip install matplotlib' },
                          { library: 'Requests', purpose: 'HTTP requests', installation: 'pip install requests' },
                          { library: 'Flask', purpose: 'Web framework', installation: 'pip install flask' },
                          { library: 'Django', purpose: 'Full-featured web framework', installation: 'pip install django' },
                          { library: 'TensorFlow', purpose: 'Machine learning', installation: 'pip install tensorflow' },
                          { library: 'PyTorch', purpose: 'Deep learning', installation: 'pip install torch' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.library}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.installation}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <p className="font-semibold text-yellow-800">Best Practice:</p>
                        <p className="text-yellow-700">Always use virtual environments (venv) to manage project dependencies and avoid conflicts between projects.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 rounded-xl shadow-lg mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-bold flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaPython className="text-yellow-400" />
                    </motion.div>
                    Python Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to Python programming</p>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              <div className="mt-8 border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-blue-200 text-sm">
                  &copy; {new Date().getFullYear()} Python Notes. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Terms of Service
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 text-sm transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}