// CC.jsx
import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp, FaFileAlt, FaList, FaLink, FaTable, FaCheck, FaGlobe, FaServer, FaLayerGroup, FaRegSmile, FaMobileAlt, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { FiClock, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Advanced_C() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('cc-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [basicsRef, basicsInView] = useInView({ threshold: 0.1 });
  const [oopRef, oopInView] = useInView({ threshold: 0.1 });
  const [stlRef, stlInView] = useInView({ threshold: 0.1 });
  const [memoryRef, memoryInView] = useInView({ threshold: 0.1 });
  const [templatesRef, templatesInView] = useInView({ threshold: 0.1 });
  const [advancedRef, advancedInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'cc-introduction', inView: introInView },
      { id: 'basics', inView: basicsInView },
      { id: 'oop', inView: oopInView },
      { id: 'stl', inView: stlInView },
      { id: 'memory', inView: memoryInView },
      { id: 'templates', inView: templatesInView },
      { id: 'advanced', inView: advancedInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, basicsInView, oopInView, stlInView, memoryInView, templatesInView, advancedInView]);

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
    { id: 'cc-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'basics', label: 'Basics', icon: <FaCode className="mr-2" /> },
    { id: 'oop', label: 'OOP', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'stl', label: 'STL', icon: <FaList className="mr-2" /> },
    { id: 'memory', label: 'Memory', icon: <FiCpu className="mr-2" /> },
    { id: 'templates', label: 'Templates', icon: <FiLayout className="mr-2" /> },
    { id: 'advanced', label: 'Advanced', icon: <FiAward className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "General Purpose",
      description: "C++ can be used for system/application software, drivers, client-server applications, and embedded firmware",
      icon: <FaCode className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Object-Oriented",
      description: "Supports encapsulation, inheritance, polymorphism, and abstraction",
      icon: <FaLayerGroup className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Low-level Access",
      description: "Provides direct access to memory and hardware",
      icon: <FiCpu className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "High Performance",
      description: "Compiles directly to machine code for efficient execution",
      icon: <FiZap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Standard Library",
      description: "Rich set of libraries for common tasks and data structures",
      icon: <FaList className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Portable",
      description: "Can be compiled to run on many different platforms",
      icon: <FaGlobe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Multi-paradigm",
      description: "Supports procedural, object-oriented, and generic programming",
      icon: <FiLayout className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Backward Compatible",
      description: "Maintains compatibility with C while adding new features",
      icon: <FaShieldAlt className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // C++ Examples
  const cppExamples = {
    helloWorld: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    basicSyntax: `// Variables and data types
int age = 25;
double price = 19.99;
char grade = 'A';
bool isActive = true;

// Constants
const float PI = 3.14159;

// Arrays
int numbers[5] = {1, 2, 3, 4, 5};

// Conditional statements
if (age >= 18) {
    std::cout << "Adult" << std::endl;
} else {
    std::cout << "Minor" << std::endl;
}

// Loops
for (int i = 0; i < 5; i++) {
    std::cout << numbers[i] << " ";
}`,
    functions: `// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Function with default parameters
void printMessage(std::string msg = "Hello") {
    std::cout << msg << std::endl;
}

// Function call
int result = add(5, 3);
printMessage("Welcome");`,
    oop: `// Class definition
class Rectangle {
private:
    double width, height;
    
public:
    // Constructor
    Rectangle(double w, double h) : width(w), height(h) {}
    
    // Method
    double area() const {
        return width * height;
    }
    
    // Getter
    double getWidth() const { return width; }
    
    // Setter
    void setWidth(double w) { width = w; }
};

// Inheritance
class Square : public Rectangle {
public:
    Square(double side) : Rectangle(side, side) {}
};

// Polymorphism
void printArea(const Rectangle& r) {
    std::cout << "Area: " << r.area() << std::endl;
}`,
    stl: `// Vector (dynamic array)
#include <vector>
std::vector<int> numbers = {1, 2, 3};
numbers.push_back(4);

// Map (associative array)
#include <map>
std::map<std::string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

// Algorithm
#include <algorithm>
std::sort(numbers.begin(), numbers.end());
auto it = std::find(numbers.begin(), numbers.end(), 3);`,
    memory: `// Pointers
int x = 10;
int* ptr = &x;
std::cout << *ptr; // 10

// Dynamic memory allocation
int* arr = new int[5];
delete[] arr;

// Smart pointers (C++11)
#include <memory>
std::unique_ptr<int> smartPtr(new int(42));
std::shared_ptr<int> sharedPtr = std::make_shared<int>(100);`,
    templates: `// Function template
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template <class T>
class Stack {
private:
    std::vector<T> elements;
public:
    void push(T const& elem) {
        elements.push_back(elem);
    }
    T pop() {
        if (elements.empty()) {
            throw std::out_of_range("Stack<>::pop(): empty stack");
        }
        T elem = elements.back();
        elements.pop_back();
        return elem;
    }
};

// Template specialization
template <>
class Stack<std::string> {
    // Special implementation for strings
};`,
    advanced: `// Lambda expressions
auto sum = [](int a, int b) { return a + b; };
std::cout << sum(5, 3); // 8

// Move semantics
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1); // v1 is now empty

// Threading
#include <thread>
void hello() {
    std::cout << "Hello from thread!" << std::endl;
}
std::thread t(hello);
t.join();

// Exception handling
try {
    throw std::runtime_error("Error occurred");
} catch (const std::exception& e) {
    std::cerr << e.what() << std::endl;
}`
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg w-auto"
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
              <FaCode className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
              C++ Notes
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
              <nav className="bg-blue-900 rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-blue-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-blue-200 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaCode className="text-blue-400" />
                    </motion.div>
                    C++ Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-blue-300 hover:text-blue-100 text-xl transition-colors duration-200 transform hover:rotate-90"
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
                        className={`block px-3 py-2 rounded-lg hover:bg-blue-800 hover:text-blue-100 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-blue-800 text-blue-100 font-medium' : 'text-blue-300'}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-blue-400 group-hover:text-blue-200 transition-colors ${activeSection === item.id ? 'text-blue-200' : ''}` })}
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
          <section id="cc-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to C++
                </h2>
              </div>

              <div className="p-6">
                {/* What is C++ card */}
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is C++?
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It features object-oriented programming, generic programming, and low-level memory manipulation capabilities.
                  </p>

                  {/* Note box with animation */}
                  <motion.div
                    className="note bg-blue-800 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
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
                        <p className="font-semibold text-yellow-300">Note:</p>
                        <p className="text-yellow-200">C++ was created in 1979 and has evolved through C++98, C++03, C++11, C++14, C++17, and C++20 standards, with C++23 in development.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* C++ Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200 flex items-center">
                    <FaCode className="mr-2 text-blue-300" /> Basic C++ Structure
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.helloWorld}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.helloWorld)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.helloWorld ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-blue-400" />
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
                          className="flex items-start space-x-3 p-3 bg-blue-800 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
                          whileHover={{ y: -3 }}
                        >
                          {feature.icon}
                          <div>
                            <strong className="font-semibold text-blue-100">{feature.title}:</strong>
                            <span className="text-blue-200"> {feature.description}</span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Basics Section */}
          <section id="basics" className="mb-12" ref={basicsRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Basics
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FaCode className="mr-2 text-blue-400" /> C++ Basics
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    C++ basics include variables, data types, operators, control structures, functions, and arrays. These are the building blocks of any C++ program.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.basicSyntax}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.basicSyntax)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.basicSyntax ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Data types */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Data Types</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-blue-700">
                      <thead className="bg-blue-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Size (bytes)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-blue-900 divide-y divide-blue-800">
                        {[
                          { type: 'int', size: '4', description: 'Integer numbers' },
                          { type: 'float', size: '4', description: 'Single-precision floating point' },
                          { type: 'double', size: '8', description: 'Double-precision floating point' },
                          { type: 'char', size: '1', description: 'Single character' },
                          { type: 'bool', size: '1', description: 'Boolean (true/false)' },
                          { type: 'void', size: 'N/A', description: 'No type' },
                          { type: 'wchar_t', size: '2-4', description: 'Wide character' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-800' : 'bg-blue-800 hover:bg-blue-700'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-100">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">{row.size}</td>
                            <td className="px-6 py-4 text-sm text-blue-200">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Operators */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Operators</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Arithmetic", description: "+ - * / % ++ --" },
                      { icon: <FaCode />, title: "Relational", description: "== != > < >= <=" },
                      { icon: <FaCode />, title: "Logical", description: "&& || !" },
                      { icon: <FaCode />, title: "Bitwise", description: "& | ^ ~ << >>" },
                      { icon: <FaCode />, title: "Assignment", description: "= += -= *= /=" },
                      { icon: <FaCode />, title: "Misc", description: "sizeof ?: . ->" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300 font-mono">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-blue-800 border-l-4 border-blue-500 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-200">Best Practice:</p>
                        <p className="text-blue-300">Always initialize variables when declaring them to avoid undefined behavior. Use descriptive names for variables and functions.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* OOP Section */}
          <section id="oop" className="mb-12" ref={oopRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Object-Oriented Programming
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-400" /> OOP in C++
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    C++ supports object-oriented programming with classes and objects. The four main OOP concepts are encapsulation, inheritance, polymorphism, and abstraction.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.oop}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.oop)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.oop ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* OOP Concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">OOP Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Encapsulation", description: "Bundling data with methods that operate on that data" },
                      { icon: <FaCode />, title: "Inheritance", description: "Creating new classes from existing ones" },
                      { icon: <FaCode />, title: "Polymorphism", description: "Ability to process objects differently based on their type" },
                      { icon: <FaCode />, title: "Abstraction", description: "Hiding complex implementation details" },
                      { icon: <FaCode />, title: "Constructors", description: "Special methods for object initialization" },
                      { icon: <FaCode />, title: "Destructors", description: "Special methods for object cleanup" },
                      { icon: <FaCode />, title: "Access Specifiers", description: "public, private, protected" },
                      { icon: <FaCode />, title: "Friend Functions", description: "Functions that can access private members" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Inheritance types */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Inheritance Types</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-blue-700">
                      <thead className="bg-blue-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Syntax
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-blue-900 divide-y divide-blue-800">
                        {[
                          { type: 'Single', description: 'Derived from one base class', syntax: 'class Derived : public Base' },
                          { type: 'Multiple', description: 'Derived from multiple base classes', syntax: 'class Derived : public Base1, public Base2' },
                          { type: 'Multilevel', description: 'Derived from another derived class', syntax: 'class Derived2 : public Derived1' },
                          { type: 'Hierarchical', description: 'Multiple classes derived from single base', syntax: 'class D1 : public Base, class D2 : public Base' },
                          { type: 'Hybrid', description: 'Combination of multiple and multilevel', syntax: 'Complex inheritance structure' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-800' : 'bg-blue-800 hover:bg-blue-700'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-100">{row.type}</td>
                            <td className="px-6 py-4 text-sm text-blue-200">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-100">{row.syntax}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* STL Section */}
          <section id="stl" className="mb-12" ref={stlRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Standard Template Library (STL)
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FaList className="mr-2 text-blue-400" /> STL Components
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    The Standard Template Library (STL) is a powerful set of C++ template classes to provide general-purpose classes and functions with templates that implement many popular and commonly used algorithms and data structures.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.stl}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.stl)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.stl ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* STL Components */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">STL Components</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Containers", description: "Data structures like vector, list, map, set" },
                      { icon: <FaCode />, title: "Algorithms", description: "Functions like sort, find, copy" },
                      { icon: <FaCode />, title: "Iterators", description: "Pointer-like objects for container traversal" },
                      { icon: <FaCode />, title: "Functors", description: "Function objects that can be used as predicates" },
                      { icon: <FaCode />, title: "Adaptors", description: "Stack, queue, priority_queue" },
                      { icon: <FaCode />, title: "Allocators", description: "Memory management for containers" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Common Containers */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Common Containers</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-blue-700">
                      <thead className="bg-blue-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Container
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Header
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-blue-900 divide-y divide-blue-800">
                        {[
                          { container: 'vector', header: '<vector>', description: 'Dynamic array with fast random access' },
                          { container: 'list', header: '<list>', description: 'Doubly-linked list' },
                          { container: 'deque', header: '<deque>', description: 'Double-ended queue' },
                          { container: 'set', header: '<set>', description: 'Sorted unique elements' },
                          { container: 'map', header: '<map>', description: 'Key-value pairs sorted by keys' },
                          { container: 'unordered_set', header: '<unordered_set>', description: 'Hash table implementation of set' },
                          { container: 'unordered_map', header: '<unordered_map>', description: 'Hash table implementation of map' },
                          { container: 'stack', header: '<stack>', description: 'LIFO structure (adapter)' },
                          { container: 'queue', header: '<queue>', description: 'FIFO structure (adapter)' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-800' : 'bg-blue-800 hover:bg-blue-700'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-100">{row.container}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-100">{row.header}</td>
                            <td className="px-6 py-4 text-sm text-blue-200">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Memory Management Section */}
          <section id="memory" className="mb-12" ref={memoryRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> Memory Management
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FiCpu className="mr-2 text-blue-400" /> Memory in C++
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    C++ gives programmers fine-grained control over memory management through pointers, references, and dynamic memory allocation. Proper memory management is crucial to avoid leaks and undefined behavior.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.memory}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.memory)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.memory ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Memory Concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Memory Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Stack", description: "Automatic storage for local variables" },
                      { icon: <FaCode />, title: "Heap", description: "Dynamic memory allocated with new/delete" },
                      { icon: <FaCode />, title: "Pointers", description: "Variables that store memory addresses" },
                      { icon: <FaCode />, title: "References", description: "Aliases to existing variables" },
                      { icon: <FaCode />, title: "Smart Pointers", description: "unique_ptr, shared_ptr, weak_ptr (C++11)" },
                      { icon: <FaCode />, title: "Memory Leaks", description: "Allocated memory that is never freed" },
                      { icon: <FaCode />, title: "Dangling Pointers", description: "Pointers to deallocated memory" },
                      { icon: <FaCode />, title: "RAII", description: "Resource Acquisition Is Initialization" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-blue-800 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
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
                        <p className="font-semibold text-yellow-300">Important:</p>
                        <p className="text-yellow-200">Always match new with delete and new[] with delete[] to avoid memory leaks. Prefer smart pointers over raw pointers in modern C++.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Templates Section */}
          <section id="templates" className="mb-12" ref={templatesRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Templates
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FiLayout className="mr-2 text-blue-400" /> C++ Templates
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    Templates are the foundation of generic programming in C++, which involves writing code in a way that is independent of any particular type. They allow functions and classes to operate with generic types.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.templates}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.templates)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.templates ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Template Features */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Template Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Function Templates", description: "Generic functions that work with multiple types" },
                      { icon: <FaCode />, title: "Class Templates", description: "Generic classes that can work with different data types" },
                      { icon: <FaCode />, title: "Template Specialization", description: "Custom implementation for specific types" },
                      { icon: <FaCode />, title: "Variadic Templates", description: "Templates that accept variable number of arguments" },
                      { icon: <FaCode />, title: "Type Traits", description: "Compile-time type information and transformations" },
                      { icon: <FaCode />, title: "Concepts (C++20)", description: "Named requirements that constrain template parameters" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-blue-800 border-l-4 border-blue-500 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-200">Best Practice:</p>
                        <p className="text-blue-300">Place template definitions in header files since templates are compiled when instantiated, not when defined.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Advanced Features Section */}
          <section id="advanced" className="mb-12" ref={advancedRef}>
            <motion.div
              className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-700 hover:border-blue-500"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiAward className="mr-3" /> Advanced Features
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-blue-900 rounded-lg border border-blue-700 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-200 flex items-center">
                    <FiAward className="mr-2 text-blue-400" /> Advanced C++
                  </h3>
                  <p className="mb-4 text-blue-100 leading-relaxed">
                    Modern C++ (C++11 and later) introduced many powerful features that make the language more expressive, safer, and more efficient. These include lambda expressions, move semantics, threading, and more.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-blue-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{cppExamples.advanced}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(cppExamples.advanced)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === cppExamples.advanced ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Modern C++ Features */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">Modern C++ Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Lambda Expressions", description: "Anonymous function objects" },
                      { icon: <FaCode />, title: "Move Semantics", description: "Efficient transfer of resources" },
                      { icon: <FaCode />, title: "auto Keyword", description: "Type inference for variables" },
                      { icon: <FaCode />, title: "Range-based for", description: "Simplified iteration over containers" },
                      { icon: <FaCode />, title: "constexpr", description: "Compile-time evaluation" },
                      { icon: <FaCode />, title: "Thread Support", description: "Standard library threading" },
                      { icon: <FaCode />, title: "Smart Pointers", description: "Automatic memory management" },
                      { icon: <FaCode />, title: "Initializer Lists", description: "Uniform initialization syntax" },
                      { icon: <FaCode />, title: "Type Inference", description: "auto and decltype" },
                      { icon: <FaCode />, title: "Variadic Templates", description: "Templates with variable arguments" },
                      { icon: <FaCode />, title: "Concepts (C++20)", description: "Named template requirements" },
                      { icon: <FaCode />, title: "Modules (C++20)", description: "New code organization mechanism" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-800 p-4 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-blue-200 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-blue-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* C++ Standards */}
                  <h4 className="text-lg font-semibold mb-3 text-blue-200">C++ Standards</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-blue-700">
                      <thead className="bg-blue-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Standard
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Year
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Key Features
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-blue-900 divide-y divide-blue-800">
                        {[
                          { standard: 'C++98', year: '1998', features: 'First standardized version, STL' },
                          { standard: 'C++03', year: '2003', features: 'Bug fixes, value initialization' },
                          { standard: 'C++11', year: '2011', features: 'auto, lambdas, smart pointers, move semantics' },
                          { standard: 'C++14', year: '2014', features: 'Generic lambdas, return type deduction' },
                          { standard: 'C++17', year: '2017', features: 'Structured bindings, std::optional, filesystem' },
                          { standard: 'C++20', year: '2020', features: 'Concepts, ranges, coroutines, modules' },
                          { standard: 'C++23', year: '2023', features: 'std::expected, std::mdspan, stacktrace' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-800' : 'bg-blue-800 hover:bg-blue-700'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-100">{row.standard}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">{row.year}</td>
                            <td className="px-6 py-4 text-sm text-blue-200">{row.features}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer
            className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 rounded-xl shadow-lg mt-12"
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
                      <FaCode />
                    </motion.div>
                    C++ Notes
                  </h2>
                  <p className="text-blue-300 mt-1">A comprehensive guide to C++ programming</p>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-300 transition-colors duration-200"
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
                    className="text-white hover:text-blue-300 transition-colors duration-200"
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
              <div className="mt-8 border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-blue-300 text-sm">
                  &copy; {new Date().getFullYear()} C++ Notes. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-300 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-300 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Terms of Service
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-300 text-sm transition-colors duration-200"
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