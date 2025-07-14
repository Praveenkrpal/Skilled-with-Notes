import React, { useState, useEffect } from 'react';
import { FaNodeJs, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaCode, FaServer, FaDatabase, FaNetworkWired, FaLock, FaGlobe, FaClock, FaCogs, FaShieldAlt, FaTerminal } from 'react-icons/fa';
import { FiPackage, FiCpu, FiZap, FiGitBranch, FiCloud } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Node() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('node-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [npmRef, npmInView] = useInView({ threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.1 });
  const [fsRef, fsInView] = useInView({ threshold: 0.1 });
  const [httpRef, httpInView] = useInView({ threshold: 0.1 });
  const [expressRef, expressInView] = useInView({ threshold: 0.1 });
  const [asyncRef, asyncInView] = useInView({ threshold: 0.1 });
  const [securityRef, securityInView] = useInView({ threshold: 0.1 });
  const [deploymentRef, deploymentInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'node-introduction', inView: introInView },
      { id: 'key-features', inView: featuresInView },
      { id: 'modules', inView: modulesInView },
      { id: 'npm', inView: npmInView },
      { id: 'event-loop', inView: eventsInView },
      { id: 'file-system', inView: fsInView },
      { id: 'http-module', inView: httpInView },
      { id: 'express-js', inView: expressInView },
      { id: 'async-programming', inView: asyncInView },
      { id: 'security', inView: securityInView },
      { id: 'deployment', inView: deploymentInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, featuresInView, modulesInView, npmInView, eventsInView, fsInView, httpInView, expressInView, asyncInView, securityInView, deploymentInView]);

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
    { id: 'node-introduction', label: 'Introduction', icon: <FaNodeJs className="mr-2" /> },
    { id: 'key-features', label: 'Key Features', icon: <FiZap className="mr-2" /> },
    { id: 'modules', label: 'Modules', icon: <FiPackage className="mr-2" /> },
    { id: 'npm', label: 'NPM', icon: <FiPackage className="mr-2" /> },
    { id: 'event-loop', label: 'Event Loop', icon: <FaClock className="mr-2" /> },
    { id: 'file-system', label: 'File System', icon: <FaDatabase className="mr-2" /> },
    { id: 'http-module', label: 'HTTP Module', icon: <FaNetworkWired className="mr-2" /> },
    { id: 'express-js', label: 'Express.js', icon: <FaServer className="mr-2" /> },
    { id: 'async-programming', label: 'Async Programming', icon: <FiCpu className="mr-2" /> },
    { id: 'security', label: 'Security', icon: <FaLock className="mr-2" /> },
    { id: 'deployment', label: 'Deployment', icon: <FiCloud className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "JavaScript Runtime",
      description: "Allows JavaScript to run on the server side",
      icon: <FaCode className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Non-blocking I/O",
      description: "Asynchronous, event-driven architecture",
      icon: <FaNetworkWired className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Cross-platform",
      description: "Runs on Windows, Linux, Unix, macOS",
      icon: <FaGlobe className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "NPM Ecosystem",
      description: "Largest ecosystem of open source libraries",
      icon: <FiPackage className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Single-threaded",
      description: "Uses event loop for concurrency",
      icon: <FaClock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "High Performance",
      description: "Built on Chrome's V8 JavaScript engine",
      icon: <FiZap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Scalable",
      description: "Ideal for data-intensive real-time apps",
      icon: <FaServer className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Microservices",
      description: "Great for microservices architecture",
      icon: <FiGitBranch className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // Node.js Examples
  const nodeExamples = {
    basicServer: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`,
    modules: `// math.js - Module file
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// app.js - Using the module
const math = require('./math');
console.log(math.add(2, 3)); // 5`,

    fileSystem: `const fs = require('fs');

// Read file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file synchronously
try {
  fs.writeFileSync('newfile.txt', 'Hello Node.js');
  console.log('File written successfully');
} catch (err) {
  console.error(err);
}`,

    eventEmitter: `const EventEmitter = require('events');

// Create custom event emitter
class MyEmitter extends EventEmitter {}

// Initialize emitter
const myEmitter = new MyEmitter();

// Create event listener
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Emit the event
myEmitter.emit('event');`,

    expressServer: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.post('/api/data', (req, res) => {
  res.json({ received: req.body });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,

    asyncAwait: `const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log(data1, data2);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

readFiles();`,

    security: `const helmet = require('helmet');
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Disable X-Powered-By header
app.disable('x-powered-by');

// Routes
app.get('/', (req, res) => {
  res.send('Secure Node.js App');
});

app.listen(3000);`
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
              <FaNodeJs className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white">
              Node.js Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
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
              <motion.nav
                className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-green-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-green-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaNodeJs className="text-green-600" />
                    </motion.div>
                    Node.js Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-green-700 text-xl transition-colors duration-200 transform hover:rotate-90"
                  >
                    <FaTimes />
                  </button>
                </div>
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={slideInFromLeft}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.1 * menuItems.indexOf(item) }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-green-100 text-green-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-green-600 group-hover:text-green-700 transition-colors ${activeSection === item.id ? 'text-green-700' : ''}` })}
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="node-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaNodeJs className="mr-3" />
                  </motion.div>
                  Introduction to Node.js
                </h2>
              </div>

              <div className="p-6">
                {/* What is Node.js card */}
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is Node.js?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js allows developers to use JavaScript for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
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
                        <p className="text-yellow-700">Node.js was created by Ryan Dahl in 2009 and has since become one of the most popular tools for building server-side and networking applications.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Basic Server Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic Node.js Server
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.basicServer}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.basicServer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.basicServer ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-green-500" />
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
                          className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg transition-all duration-200 hover:bg-green-100 hover:shadow-md"
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

          {/* Key Features Section */}
          <section id="key-features" className="mb-12" ref={featuresRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiZap className="mr-3" /> Key Features
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiZap className="mr-2 text-green-500" /> Node.js Architecture
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Node.js uses a single-threaded event loop architecture that enables it to handle multiple concurrent connections efficiently. This non-blocking I/O model makes Node.js lightweight and efficient.
                  </p>

                  {/* Architecture diagram explanation */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Event Loop Architecture</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCpu />, title: "Single Thread", description: "Uses a single main thread for JavaScript execution" },
                      { icon: <FaClock />, title: "Event Loop", description: "Handles asynchronous callbacks and I/O operations" },
                      { icon: <FaNetworkWired />, title: "Worker Pool", description: "Thread pool for offloading heavy operations" },
                      { icon: <FaServer />, title: "Non-blocking I/O", description: "Doesn't wait for I/O operations to complete" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Comparison table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Traditional vs Node.js Server</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Traditional Server
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Node.js Server
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { aspect: 'Threading Model', traditional: 'Multi-threaded', nodejs: 'Single-threaded with event loop' },
                          { aspect: 'Concurrency', traditional: 'Thread-based', nodejs: 'Event-driven' },
                          { aspect: 'I/O Operations', traditional: 'Blocking', nodejs: 'Non-blocking' },
                          { aspect: 'Scalability', traditional: 'Vertical scaling', nodejs: 'Horizontal scaling' },
                          { aspect: 'Best For', traditional: 'CPU-intensive tasks', nodejs: 'I/O-intensive tasks' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.traditional}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.nodejs}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-green-800">Best Practice:</p>
                        <p className="text-green-700">Node.js excels at I/O-bound operations but isn't ideal for CPU-intensive tasks. For CPU-heavy operations, consider using worker threads or offloading to microservices.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Modules Section */}
          <section id="modules" className="mb-12" ref={modulesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Modules
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiPackage className="mr-2 text-green-500" /> Node.js Modules
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Node.js has a simple module loading system that allows you to organize your code into reusable pieces. Each file in Node.js is treated as a separate module.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.modules}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.modules)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.modules ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Module types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Module Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiPackage />, title: "Core Modules", description: "Built-in modules (fs, http, path, etc.)" },
                      { icon: <FiPackage />, title: "Local Modules", description: "User-created modules in separate files" },
                      { icon: <FiPackage />, title: "Third-party Modules", description: "Installed via npm (Express, Mongoose, etc.)" },
                      { icon: <FiPackage />, title: "ES Modules", description: "Modern JavaScript modules (import/export syntax)" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Common core modules */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Core Modules</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Module
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { module: 'fs', description: 'File system operations' },
                          { module: 'http', description: 'HTTP server and client' },
                          { module: 'path', description: 'File path utilities' },
                          { module: 'os', description: 'Operating system utilities' },
                          { module: 'events', description: 'Event emitter class' },
                          { module: 'stream', description: 'Streaming data interface' },
                          { module: 'util', description: 'Utility functions' },
                          { module: 'crypto', description: 'Cryptographic functions' },
                          { module: 'child_process', description: 'Spawn child processes' },
                          { module: 'cluster', description: 'Create child processes to share server ports' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.module}</td>
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

          {/* NPM Section */}
          <section id="npm" className="mb-12" ref={npmRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> NPM (Node Package Manager)
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiPackage className="mr-2 text-green-500" /> NPM Basics
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    NPM is the default package manager for Node.js and the world's largest software registry. It allows you to install and manage dependencies for your Node.js applications.
                  </p>

                  {/* Common NPM commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Essential NPM Commands</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { command: "npm init", description: "Initialize a new package" },
                      { command: "npm install <package>", description: "Install a package" },
                      { command: "npm install --save-dev <package>", description: "Install as dev dependency" },
                      { command: "npm update <package>", description: "Update a package" },
                      { command: "npm uninstall <package>", description: "Remove a package" },
                      { command: "npm list", description: "List installed packages" },
                      { command: "npm run <script>", description: "Run a script from package.json" },
                      { command: "npm audit", description: "Check for vulnerabilities" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-mono font-semibold text-green-700 mb-2">{item.command}</h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* package.json explanation */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">package.json</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The package.json file is the heart of any Node.js project. It contains metadata about your project and defines scripts and dependencies.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.modules)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.modules ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Dependency types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Dependency Types</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Field
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { field: 'dependencies', description: 'Packages required for production' },
                          { field: 'devDependencies', description: 'Packages only needed for development' },
                          { field: 'peerDependencies', description: 'Packages your package is compatible with' },
                          { field: 'optionalDependencies', description: 'Optional packages that enhance functionality' },
                          { field: 'bundledDependencies', description: 'Packages to include when publishing' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.field}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Versioning */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Semantic Versioning</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { version: "^4.17.1", description: "Compatible with 4.x.x (caret)" },
                      { version: "~4.17.1", description: "Compatible with 4.17.x (tilde)" },
                      { version: "4.17.1", description: "Exact version" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-mono font-semibold text-green-700 mb-2">{item.version}</h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Event Loop Section */}
          <section id="event-loop" className="mb-12" ref={eventsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaClock className="mr-3" /> Event Loop
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaClock className="mr-2 text-green-500" /> Understanding the Event Loop
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The event loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded. It offloads operations to the system kernel whenever possible.
                  </p>

                  {/* Event loop phases */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Event Loop Phases</h4>
                  <motion.ol
                    className="list-decimal pl-5 space-y-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Timers: Executes setTimeout and setInterval callbacks",
                      "Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration",
                      "Idle, Prepare: Used internally",
                      "Poll: Retrieve new I/O events and execute their callbacks",
                      "Check: Execute setImmediate() callbacks",
                      "Close Callbacks: Execute socket.on('close', ...) callbacks"
                    ].map((phase, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="text-gray-700"
                      >
                        {phase}
                      </motion.li>
                    ))}
                  </motion.ol>

                  {/* Event loop diagram */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                    <h5 className="font-semibold text-green-700 mb-3">Event Loop Flow</h5>
                    <div className="flex justify-center">
                      <motion.div
                        className="relative w-full max-w-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="border-2 border-green-300 rounded-full p-8 text-center">
                          <div className="font-bold text-green-700 mb-4">Event Loop</div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-xs bg-green-100 p-2 rounded">Timers</div>
                            <div className="text-xs bg-green-100 p-2 rounded">Pending</div>
                            <div className="text-xs bg-green-100 p-2 rounded">Poll</div>
                            <div className="text-xs bg-green-100 p-2 rounded">Check</div>
                            <div className="col-span-3 text-xs bg-green-100 p-2 rounded">Close</div>
                          </div>
                        </div>
                        <motion.div
                          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Event emitter example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Event Emitter Example</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.eventEmitter}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.eventEmitter)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.eventEmitter ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Event loop tips */}
                  <motion.div
                    className="tip bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800">Performance Tip:</p>
                        <p className="text-green-700">Avoid blocking the event loop with CPU-intensive tasks. For heavy computations, use worker threads or break tasks into smaller chunks using setImmediate().</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* File System Section */}
          <section id="file-system" className="mb-12" ref={fsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> File System
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaDatabase className="mr-2 text-green-500" /> fs Module
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
                  </p>

                  {/* File system example */}
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.fileSystem}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.fileSystem)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.fileSystem ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Common fs methods */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common File System Methods</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { method: "fs.readFile()", description: "Asynchronously reads file contents" },
                      { method: "fs.readFileSync()", description: "Synchronous file reading" },
                      { method: "fs.writeFile()", description: "Asynchronously writes data to a file" },
                      { method: "fs.writeFileSync()", description: "Synchronous file writing" },
                      { method: "fs.appendFile()", description: "Appends data to a file" },
                      { method: "fs.unlink()", description: "Deletes a file" },
                      { method: "fs.mkdir()", description: "Creates a directory" },
                      { method: "fs.readdir()", description: "Reads directory contents" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-mono font-semibold text-green-700 mb-2">{item.method}</h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Streams */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Working with Streams</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    For large files, it's more efficient to use streams to process data in chunks rather than loading entire files into memory.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`const fs = require('fs');

// Create readable stream
const readStream = fs.createReadStream('largefile.txt', 'utf8');

// Create writable stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe the read stream to write stream
readStream.pipe(writeStream);

// Event handlers
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

writeStream.on('finish', () => {
  console.log('Finished writing file');
});`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.fileSystem)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      Copy
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* HTTP Module Section */}
          <section id="http-module" className="mb-12" ref={httpRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaNetworkWired className="mr-3" /> HTTP Module
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaNetworkWired className="mr-2 text-green-500" /> Creating HTTP Servers
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The http module allows Node.js to transfer data over HTTP. It can create both HTTP servers and clients.
                  </p>

                  {/* HTTP server example */}
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.basicServer}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.basicServer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.basicServer ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* HTTP methods */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">HTTP Methods</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { method: "GET", description: "Retrieve a resource" },
                      { method: "POST", description: "Create a new resource" },
                      { method: "PUT", description: "Update an existing resource" },
                      { method: "DELETE", description: "Remove a resource" },
                      { method: "PATCH", description: "Partially update a resource" },
                      { method: "HEAD", description: "Same as GET but without response body" },
                      { method: "OPTIONS", description: "Describe communication options" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-mono font-semibold text-green-700 mb-2">{item.method}</h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* HTTP status codes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common HTTP Status Codes</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Code
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { code: 200, name: "OK", description: "Request succeeded" },
                          { code: 201, name: "Created", description: "Resource created successfully" },
                          { code: 204, name: "No Content", description: "Request succeeded but no content to return" },
                          { code: 301, name: "Moved Permanently", description: "Resource has been moved permanently" },
                          { code: 400, name: "Bad Request", description: "Server cannot process the request" },
                          { code: 401, name: "Unauthorized", description: "Authentication is required" },
                          { code: 403, name: "Forbidden", description: "Client doesn't have permission" },
                          { code: 404, name: "Not Found", description: "Resource not found" },
                          { code: 500, name: "Internal Server Error", description: "Generic server error" },
                          { code: 503, name: "Service Unavailable", description: "Server cannot handle the request" }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.code}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.name}</td>
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

          {/* Express.js Section */}
          <section id="express-js" className="mb-12" ref={expressRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Express.js
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaServer className="mr-2 text-green-500" /> Express Framework
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                  </p>

                  {/* Express example */}
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{nodeExamples.expressServer}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.expressServer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === nodeExamples.expressServer ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Express concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Express Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { concept: "Middleware", description: "Functions that have access to request/response objects" },
                      { concept: "Routing", description: "Determines how an app responds to client requests" },
                      { concept: "Template Engines", description: "Render dynamic content (EJS, Pug, etc.)" },
                      { concept: "Error Handling", description: "Special middleware for handling errors" },
                      { concept: "Static Files", description: "Serving static assets like images/CSS" },
                      { concept: "RESTful APIs", description: "Building RESTful services with Express" },
                      { concept: "Request Object", description: "Contains properties about the HTTP request" },
                      { concept: "Response Object", description: "Used to send data back to the client" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-green-700 mb-2">{item.concept}</h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Express middleware */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Middleware</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Middleware
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { middleware: "express.json()", description: "Parses incoming JSON requests" },
                          { middleware: "express.urlencoded()", description: "Parses URL-encoded bodies" },
                          { middleware: "express.static()", description: "Serves static files" },
                          { middleware: "cookie-parser", description: "Parses Cookie header" },
                          { middleware: "morgan", description: "HTTP request logger" },
                          { middleware: "cors", description: "Enables CORS with various options" },
                          { middleware: "helmet", description: "Sets security HTTP headers" },
                          { middleware: "compression", description: "Compresses response bodies" }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.middleware}</td>
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

          {/* Async Programming Section */}
          <section id="async-programming" className="mb-12" ref={asyncRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> Async Programming
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiCpu className="mr-2 text-green-500" /> Asynchronous Patterns in Node.js
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Node.js uses non-blocking I/O operations, making asynchronous programming fundamental. Here are the main patterns for handling async operations.
                  </p>

                  {/* Callbacks */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">1. Callbacks</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The traditional approach where functions receive a callback as their last argument.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`const fs = require('fs');

// Callback example
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File content:', data);
});`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.callback)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      Copy
                    </motion.button>
                  </div>

                  {/* Promises */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">2. Promises</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Promises represent the eventual completion (or failure) of an async operation.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`const fs = require('fs').promises;

// Promise example
fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.promise)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      Copy
                    </motion.button>
                  </div>

                  {/* Async/Await */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">3. Async/Await</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Modern syntax that makes asynchronous code look synchronous.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`const fs = require('fs').promises;

// Async/await example
async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

readFile();`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(nodeExamples.asyncAwait)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      Copy
                    </motion.button>
                  </div>

                  {/* Comparison Table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Comparison of Async Patterns</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pattern
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pros
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cons
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { 
                            pattern: "Callbacks", 
                            pros: "Simple for basic cases, universal support", 
                            cons: "Callback hell, hard to maintain" 
                          },
                          { 
                            pattern: "Promises", 
                            pros: "Better error handling, chainable", 
                            cons: "Still requires .then() chains" 
                          },
                          { 
                            pattern: "Async/Await", 
                            pros: "Clean syntax, synchronous-looking code", 
                            cons: "Requires understanding of promises" 
                          }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.pattern}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.pros}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.cons}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Error Handling */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Error Handling Patterns</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        title: "Callback Pattern", 
                        code: `function callbackExample(callback) {
  doAsyncTask((err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}` 
                      },
                      { 
                        title: "Promise Pattern", 
                        code: `function promiseExample() {
  return doAsyncTask()
    .then(result => {
      return processedResult;
    })
    .catch(err => {
      throw new Error('Failed:', err);
    });
}` 
                      },
                      { 
                        title: "Async/Await Pattern", 
                        code: `async function asyncAwaitExample() {
  try {
    const result = await doAsyncTask();
    return processedResult;
  } catch (err) {
    throw new Error('Failed:', err);
  }
}` 
                      },
                      { 
                        title: "Error-First Callbacks", 
                        code: `fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});` 
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-green-700 mb-2">{item.title}</h5>
                        <pre className="font-mono text-xs bg-gray-800 text-gray-100 p-2 rounded overflow-x-auto">
                          <code>{item.code}</code>
                        </pre>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Best Practices */}
                  <motion.div
                    className="tip bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800">Best Practices:</p>
                        <ul className="list-disc pl-5 text-green-700 space-y-1">
                          <li>Prefer async/await for readability</li>
                          <li>Always handle errors in promises with .catch() or try/catch</li>
                          <li>Avoid callback hell by modularizing code</li>
                          <li>Use Promise.all() for parallel operations</li>
                          <li>Consider util.promisify for callback-based APIs</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>    
  )
};             
