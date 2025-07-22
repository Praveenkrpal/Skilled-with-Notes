// Express.jsx
import React, { useState, useEffect } from 'react';
import {
  FaNodeJs, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaCode, FaServer,
  FaDatabase, FaNetworkWired, FaShieldAlt, FaCogs,
  FaExchangeAlt, FaGlobe, FaClock, FaLayerGroup
} from 'react-icons/fa';
import {
  FiPackage, FiUser, FiAward, FiZap, FiClock,
  FiCode as FiCodeIcon, FiLayout, FiNavigation
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Express() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('express-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [setupRef, setupInView] = useInView({ threshold: 0.1 });
  const [routingRef, routingInView] = useInView({ threshold: 0.1 });
  const [middlewareRef, middlewareInView] = useInView({ threshold: 0.1 });
  const [errorRef, errorInView] = useInView({ threshold: 0.1 });
  const [databaseRef, databaseInView] = useInView({ threshold: 0.1 });
  const [securityRef, securityInView] = useInView({ threshold: 0.1 });
  const [deploymentRef, deploymentInView] = useInView({ threshold: 0.1 });
  const [bestRef, bestInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'express-introduction', inView: introInView },
      { id: 'express-overview', inView: overviewInView },
      { id: 'express-setup', inView: setupInView },
      { id: 'express-routing', inView: routingInView },
      { id: 'express-middleware', inView: middlewareInView },
      { id: 'express-error', inView: errorInView },
      { id: 'express-database', inView: databaseInView },
      { id: 'express-security', inView: securityInView },
      { id: 'express-deployment', inView: deploymentInView },
      { id: 'express-best', inView: bestInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, overviewInView, setupInView, routingInView, middlewareInView,
    errorInView, databaseInView, securityInView, deploymentInView, bestInView]);

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
    { id: 'express-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'express-overview', label: 'Overview', icon: <FaServer className="mr-2" /> },
    { id: 'express-setup', label: 'Setup', icon: <FiPackage className="mr-2" /> },
    { id: 'express-routing', label: 'Routing', icon: <FaNetworkWired className="mr-2" /> },
    { id: 'express-middleware', label: 'Middleware', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'express-error', label: 'Error Handling', icon: <FaExclamationTriangle className="mr-2" /> },
    { id: 'express-database', label: 'Database Integration', icon: <FaDatabase className="mr-2" /> },
    { id: 'express-security', label: 'Security', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'express-deployment', label: 'Deployment', icon: <FaGlobe className="mr-2" /> },
    { id: 'express-best', label: 'Best Practices', icon: <FiAward className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Minimalist Framework",
      description: "Provides a thin layer of fundamental web application features",
      icon: <FiCodeIcon className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Routing",
      description: "Robust routing system for handling different HTTP methods and URLs",
      icon: <FaNetworkWired className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Middleware",
      description: "Extensible through middleware functions for request processing",
      icon: <FaLayerGroup className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Performance",
      description: "Fast and unopinionated, giving you control over your application",
      icon: <FiZap className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "HTTP Helpers",
      description: "Simplifies common HTTP tasks like redirection and caching",
      icon: <FaExchangeAlt className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Template Support",
      description: "Integration with template engines like Pug, EJS, and Handlebars",
      icon: <FiLayout className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Database Integration",
      description: "Works with all major databases through drivers or ORMs",
      icon: <FaDatabase className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    },
    {
      title: "REST API Ready",
      description: "Ideal for building RESTful APIs and microservices",
      icon: <FaCogs className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
    }
  ];

  // Express Examples
  const expressExamples = {
    basicServer: `const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
    routing: `// Route with parameters
app.get('/users/:userId', (req, res) => {
  res.send(\`User ID: \${req.params.userId}\`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  res.send(\`Search query: \${req.query.q}\`);
});

// Handling different HTTP methods
app.post('/users', (req, res) => {
  // Create new user
  res.status(201).send('User created');
});

app.put('/users/:id', (req, res) => {
  // Update user
  res.send(\`User \${req.params.id} updated\`);
});

app.delete('/users/:id', (req, res) => {
  // Delete user
  res.send(\`User \${req.params.id} deleted\`);
});`,
    middleware: `// Application-level middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

// Route-specific middleware
const checkAuth = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', checkAuth, (req, res) => {
  res.send('Protected content');
});

// Built-in middleware for JSON parsing
app.use(express.json());

// Built-in middleware for form data
app.use(express.urlencoded({ extended: true }));

// Third-party middleware (example: CORS)
const cors = require('cors');
app.use(cors());`,
    errorHandling: `// Handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Async error handling with try/catch
app.get('/async-route', async (req, res, next) => {
  try {
    const data = await someAsyncOperation();
    res.send(data);
  } catch (err) {
    next(err); // Pass errors to Express
  }
});`,
    staticFiles: `// Serve static files from 'public' directory
app.use(express.static('public'));

// Serve static files with virtual path prefix
app.use('/static', express.static('public'));

// Single file route
app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});`,
    templateEngines: `// Using Pug template engine
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/pug', (req, res) => {
  res.render('index', { title: 'Express', message: 'Hello Pug!' });
});

// Using EJS template engine
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  res.render('index', { title: 'Express', message: 'Hello EJS!' });
});`,
    database: `// MongoDB with Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');

const User = mongoose.model('User', { name: String });

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// PostgreSQL with Sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@localhost:5432/mydb');

class User extends Model {}
User.init({ name: DataTypes.STRING }, { sequelize, modelName: 'user' });

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});`,
    security: `// Helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CSRF protection
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

// Input sanitization
const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

// CORS configuration
const corsOptions = {
  origin: 'https://yourdomain.com',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));`,
    deployment: `// Environment configuration
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(\`Server running in \${NODE_ENV} mode on port \${PORT}\`);
});

// Production best practices
if (process.env.NODE_ENV === 'production') {
  // Enable trust proxy for secure cookies
  app.set('trust proxy', 1);
  
  // Compression middleware
  const compression = require('compression');
  app.use(compression());
  
  // Serve static files efficiently
  app.use(express.static('client/build', { maxAge: '1y' }));
}`,
    bestPractices: `// Project structure
/*
- app.js          # Main application entry point
- config/         # Configuration files
- controllers/    # Route controllers
- models/         # Database models
- routes/         # Route definitions
- middleware/     # Custom middleware
- public/         # Static files
- tests/          # Test files
*/

// Route separation example
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of users');
});

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Environment-based configuration
require('dotenv').config();

// Logging middleware
const morgan = require('morgan');
app.use(morgan('combined'));

// API documentation with Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Testing with Jest/Chai/Mocha
// Example test file
const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('responds with JSON', async () => {
    const response = await request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});`
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
              Express.js Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-gray-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaNodeJs className="text-gray-600" />
                    </motion.div>
                    Express Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200 transform hover:rotate-90"
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
                        className={`block px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-gray-100 text-gray-800 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-gray-600 group-hover:text-gray-800 transition-colors ${activeSection === item.id ? 'text-gray-800' : ''}` })}
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
        <main className="flex-1 w-50">
          {/* Introduction Section */}
          <section id="express-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to Express.js
                </h2>
              </div>

              <div className="p-6">
                {/* What is Express card */}
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaLightbulb className="mr-2 text-amber-400" /> What is Express.js?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications with Node.js by providing helpful utilities and middleware.
                  </p>

                  {/* Note box with animation */}
                  <motion.div
                    className="note bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-amber-800">Note:</p>
                        <p className="text-amber-700">Express was created by TJ Holowaychuk and is now maintained by the Node.js foundation. It's often referred to as the "de facto standard server framework" for Node.js.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Express Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic Express Server
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.basicServer}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.basicServer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.basicServer ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-gray-600" />
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
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
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

          {/* Overview Section */}
          <section id="express-overview" className="mb-12" ref={overviewRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Express Overview
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaServer className="mr-2 text-gray-600" /> Core Concepts
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Express builds on top of Node.js's HTTP module to provide a higher-level abstraction for web applications. It handles the low-level protocol details and provides a clean API for building web servers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FiCodeIcon className="mr-2" /> Request Object
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.params</code> - Route parameters</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.query</code> - Query string parameters</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.body</code> - Request payload (needs middleware)</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.headers</code> - HTTP headers</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.cookies</code> - Cookie values (needs middleware)</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">req.ip</code> - Client IP address</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FiCodeIcon className="mr-2" /> Response Object
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.send()</code> - Send response of various types</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.json()</code> - Send JSON response</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.status()</code> - Set HTTP status code</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.redirect()</code> - Redirect request</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.render()</code> - Render a view template</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">res.sendFile()</code> - Send a file as response</li>
                      </ul>
                    </motion.div>
                  </div>

                  {/* Application Object */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Application Object</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { method: 'app.set()', description: 'Set application settings' },
                          { method: 'app.get()', description: 'Get application setting value' },
                          { method: 'app.use()', description: 'Mount middleware function' },
                          { method: 'app.engine()', description: 'Register template engine' },
                          { method: 'app.listen()', description: 'Bind and listen for connections' },
                          { method: 'app.route()', description: 'Create chainable route handlers' },
                          { method: 'app.all()', description: 'Handle all HTTP methods for a route' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.method}</td>
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

          {/* Setup Section */}
          <section id="express-setup" className="mb-12" ref={setupRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Setup & Installation
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiPackage className="mr-2 text-gray-600" /> Getting Started with Express
                  </h3>

                  {/* Installation */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Installation</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code># Create a new directory and initialize a Node.js project
                          mkdir my-express-app
                          cd my-express-app
                          npm init -y

                          # Install Express
                          npm install express

                          # For development, install nodemon (optional)
                          npm install --save-dev nodemon</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard("npm install express")}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === "npm install express" ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Basic Setup */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Basic Application Structure</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                    </motion.div>

                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.basicServer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.basicServer ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Package.json Scripts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Package.json Configuration</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
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
                      onClick={() => copyToClipboard(`{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Running the App */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Running the Application</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code># Run in production mode
                          npm start

                          # Run in development mode (with nodemon)
                          npm run dev</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard("npm run dev")}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === "npm run dev" ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Routing Section */}
          <section id="express-routing" className="mb-12" ref={routingRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaNetworkWired className="mr-3" /> Routing in Express
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaNetworkWired className="mr-2 text-gray-600" /> Express Routing
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Routing refers to how an application's endpoints (URIs) respond to client requests. You define routing using methods of the Express app object that correspond to HTTP methods.
                  </p>

                  {/* Basic Routing */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Basic Routing</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.routing}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.routing)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.routing ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Route Methods */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Route Methods</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { method: 'app.get()', description: 'GET method route' },
                          { method: 'app.post()', description: 'POST method route' },
                          { method: 'app.put()', description: 'PUT method route' },
                          { method: 'app.delete()', description: 'DELETE method route' },
                          { method: 'app.all()', description: 'All HTTP methods route' },
                          { method: 'app.use()', description: 'Mounts middleware at a path' },
                          { method: 'app.route()', description: 'Creates chainable route handlers' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.method}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Route Paths */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Route Paths</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-gray-800 mb-2">String Patterns</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get('/about', ...)</code></li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get('/users/:id', ...)</code></li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get('/products/:category/:id', ...)</code></li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get('/flights/:from-:to', ...)</code></li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-gray-800 mb-2">Regular Expressions</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get(/.*fly$/, ...)</code> - Matches butterfly, dragonfly</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get(/user\/[0-9]+/, ...)</code> - Matches user/42</li>
                        <li><code className="font-mono bg-gray-100 px-1 rounded">app.get(/\/(users|products)\/([^\/]+)$/, ...)</code></li>
                      </ul>
                    </motion.div>
                  </div>

                  {/* Route Handlers */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Route Handlers</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    You can provide multiple callback functions that behave like middleware to handle a request. These can be a single function, an array of functions, or combinations of both.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// Single callback
app.get('/example', (req, res) => {
  res.send('Single callback');
});

// Multiple callbacks
app.get('/example', (req, res, next) => {
  console.log('First callback');
  next();
}, (req, res) => {
  res.send('Second callback');
});

// Array of callbacks
const cb1 = (req, res, next) => {
  console.log('CB1');
  next();
};
const cb2 = (req, res) => {
  res.send('CB2');
};
app.get('/example', [cb1, cb2]);

// Combination
app.get('/example', [cb1], (req, res) => {
  res.send('Combination');
});`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// Single callback
app.get('/example', (req, res) => {
  res.send('Single callback');
});

// Multiple callbacks
app.get('/example', (req, res, next) => {
  console.log('First callback');
  next();
}, (req, res) => {
  res.send('Second callback');
});

// Array of callbacks
const cb1 = (req, res, next) => {
  console.log('CB1');
  next();
};
const cb2 = (req, res) => {
  res.send('CB2');
};
app.get('/example', [cb1, cb2]);

// Combination
app.get('/example', [cb1], (req, res) => {
  res.send('Combination');
});`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Single callback
app.get('/example', (req, res) => {
  res.send('Single callback');
});

// Multiple callbacks
app.get('/example', (req, res, next) => {
  console.log('First callback');
  next();
}, (req, res) => {
  res.send('Second callback');
});

// Array of callbacks
const cb1 = (req, res, next) => {
  console.log('CB1');
  next();
};
const cb2 = (req, res) => {
  res.send('CB2');
};
app.get('/example', [cb1, cb2]);

// Combination
app.get('/example', [cb1], (req, res) => {
  res.send('Combination');
});` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Middleware Section */}
          <section id="express-middleware" className="mb-12" ref={middlewareRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Middleware
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaLayerGroup className="mr-2 text-gray-600" /> Express Middleware
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
                  </p>

                  {/* Middleware Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Middleware Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.middleware}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.middleware)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.middleware ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Middleware Types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Types of Middleware</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "Application-level",
                        description: "Bound to the app object using app.use() and app.METHOD()",
                        example: "app.use(express.json())"
                      },
                      {
                        title: "Router-level",
                        description: "Same as application-level but bound to an express.Router()",
                        example: "router.use(logger)"
                      },
                      {
                        title: "Error-handling",
                        description: "Defined with four arguments (err, req, res, next)",
                        example: "app.use((err, req, res, next) => {...})"
                      },
                      {
                        title: "Built-in",
                        description: "Express comes with middleware like express.static and express.json",
                        example: "app.use(express.static('public'))"
                      },
                      {
                        title: "Third-party",
                        description: "Middleware installed via npm like morgan, helmet, cors",
                        example: "app.use(require('cors')())"
                      },
                      {
                        title: "Custom",
                        description: "Middleware you create for your specific needs",
                        example: "function myMiddleware(req, res, next) {...}"
                      }
                    ].map((type, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2">{type.title}</h5>
                        <p className="text-sm text-gray-700 mb-2">{type.description}</p>
                        <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{type.example}</code>
                      </motion.div>
                    ))}
                  </div>

                  {/* Middleware Execution */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Middleware Execution Order</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The order of middleware loading is important: middleware functions that are loaded first are also executed first.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// This middleware will not allow the request to go beyond it
app.use((req, res, next) => {
  res.send('Hello from middleware');
});

// Requests will never reach this route
app.get('/', (req, res) => {
  res.send('Hello World');
});`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// This middleware will not allow the request to go beyond it
app.use((req, res, next) => {
  res.send('Hello from middleware');
});

// Requests will never reach this route
app.get('/', (req, res) => {
  res.send('Hello World');
});`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// This middleware will not allow the request to go beyond it
app.use((req, res, next) => {
  res.send('Hello from middleware');
});

// Requests will never reach this route
app.get('/', (req, res) => {
  res.send('Hello World');
});` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Error Handling Section */}
          <section id="express-error" className="mb-12" ref={errorRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExclamationTriangle className="mr-3" /> Error Handling
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaExclamationTriangle className="mr-2 text-gray-600" /> Error Handling in Express
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Express comes with a default error handler that catches errors that occur in your application. You can also write your own error-handling middleware functions.
                  </p>

                  {/* Error Handling Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Error Handling Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.errorHandling}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.errorHandling)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.errorHandling ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Error Handling Patterns */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Error Handling Patterns</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "Catch synchronous errors",
                        description: "Express automatically catches synchronous errors in route handlers",
                        example: "app.get('/', () => { throw new Error('BROKEN') })"
                      },
                      {
                        title: "Catch async errors",
                        description: "Use try/catch or pass to next() in async functions",
                        example: "app.get('/', async (req, res, next) => { try {...} catch(err) { next(err) } })"
                      },
                      {
                        title: "Custom error class",
                        description: "Extend Error class for custom error types",
                        example: "class NotFoundError extends Error {...}"
                      },
                      {
                        title: "Error wrapper",
                        description: "Wrap async functions to avoid try/catch blocks",
                        example: "const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)"
                      }
                    ].map((pattern, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2">{pattern.title}</h5>
                        <p className="text-sm text-gray-700 mb-2">{pattern.description}</p>
                        <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{pattern.example}</code>
                      </motion.div>
                    ))}
                  </div>

                  {/* Error Handling Middleware */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Error Handling Middleware</h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function.
                  </p>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// More sophisticated error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// More sophisticated error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// More sophisticated error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Database Integration Section */}
          <section id="express-database" className="mb-12" ref={databaseRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> Database Integration
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaDatabase className="mr-2 text-gray-600" /> Working with Databases
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Express itself is database agnostic, meaning you can use any database mechanism supported by Node.js. Popular choices include MongoDB (with Mongoose), PostgreSQL (with Sequelize or pg), MySQL, SQLite, and more.
                  </p>

                  {/* Database Examples */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Database Integration Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.database}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.database)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.database ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Database Options */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Database Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "MongoDB",
                        description: "NoSQL database with Mongoose ODM",
                        packages: "mongoose, mongodb",
                        pros: "Flexible schema, JSON-like documents, horizontal scaling"
                      },
                      {
                        title: "PostgreSQL",
                        description: "Relational database with Sequelize ORM",
                        packages: "sequelize, pg",
                        pros: "ACID compliant, powerful SQL features, JSON support"
                      },
                      {
                        title: "MySQL",
                        description: "Relational database with Sequelize or Knex",
                        packages: "sequelize, mysql2, knex",
                        pros: "Mature, widely used, good performance"
                      },
                      {
                        title: "SQLite",
                        description: "Lightweight disk-based database",
                        packages: "sqlite3, sequelize",
                        pros: "Zero-configuration, serverless, good for development"
                      },
                      {
                        title: "Redis",
                        description: "In-memory data structure store",
                        packages: "redis, ioredis",
                        pros: "Blazing fast, great for caching and sessions"
                      },
                      {
                        title: "Firebase",
                        description: "NoSQL cloud database",
                        packages: "firebase-admin",
                        pros: "Real-time updates, serverless, built-in auth"
                      }
                    ].map((db, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-1">{db.title}</h5>
                        <p className="text-sm text-gray-700 mb-1">{db.description}</p>
                        <p className="text-xs text-gray-600 mb-1"><strong>Packages:</strong> {db.packages}</p>
                        <p className="text-xs text-gray-600"><strong>Pros:</strong> {db.pros}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Patterns */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Connection Patterns</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// Connection setup in a separate module (db.js)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...')
    // Connection setup in a separate module (db.js)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// In your main app file (app.js)
require('dotenv').config();
const connectDB = require('./db');

// Connect to database
connectDB();

// Express app setup
const express = require('express');
const app = express();

// ... rest of your app configuration`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// Connection setup in a separate module (db.js)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// In your main app file (app.js)
require('dotenv').config();
const connectDB = require('./db');

// Connect to database
connectDB();

// Express app setup
const express = require('express');
const app = express();

// ... rest of your app configuration`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Connection setup in a separate module (db.js)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// In your main app file (app.js)
require('dotenv').config();
const connectDB = require('./db');

// Connect to database
connectDB();

// Express app setup
const express = require('express');
const app = express();

// ... rest of your app configuration` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Security Section */}
          <section id="express-security" className="mb-12" ref={securityRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaShieldAlt className="mr-3" /> Security
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaShieldAlt className="mr-2 text-gray-600" /> Express Security Practices
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Security is crucial for any web application. Express provides some built-in security features, but you need to implement additional measures to properly secure your application.
                  </p>

                  {/* Security Examples */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.security}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.security)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.security ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Security Best Practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Best Practices</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "Helmet",
                        description: "Sets various HTTP headers for security",
                        implementation: "app.use(helmet())",
                        protects: "XSS, clickjacking, MIME sniffing"
                      },
                      {
                        title: "Rate Limiting",
                        description: "Prevent brute-force attacks",
                        implementation: "app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }))",
                        protects: "DDoS, brute force"
                      },
                      {
                        title: "CORS",
                        description: "Control which domains can access your API",
                        implementation: "app.use(cors({ origin: 'https://yourdomain.com' }))",
                        protects: "CSRF, unauthorized API access"
                      },
                      {
                        title: "Input Sanitization",
                        description: "Clean user input to prevent injection",
                        implementation: "app.use(expressSanitizer())",
                        protects: "XSS, SQL injection"
                      },
                      {
                        title: "CSRF Protection",
                        description: "Prevent cross-site request forgery",
                        implementation: "app.use(csrf({ cookie: true }))",
                        protects: "CSRF attacks"
                      },
                      {
                        title: "Secure Cookies",
                        description: "Configure cookies securely",
                        implementation: "app.use(session({ cookie: { secure: true, httpOnly: true } }))",
                        protects: "Session hijacking"
                      }
                    ].map((practice, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-1">{practice.title}</h5>
                        <p className="text-sm text-gray-700 mb-1">{practice.description}</p>
                        <p className="text-xs text-gray-600 mb-1"><strong>Implementation:</strong> <code className="font-mono bg-gray-100 px-1 rounded">{practice.implementation}</code></p>
                        <p className="text-xs text-gray-600"><strong>Protects against:</strong> {practice.protects}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Security Checklist */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Checklist</h4>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <ul className="space-y-3">
                      {[
                        "Use Helmet.js to set secure HTTP headers",
                        "Implement rate limiting to prevent brute force attacks",
                        "Use CORS middleware to restrict API access",
                        "Validate and sanitize all user input",
                        "Use parameterized queries or ORMs to prevent SQL injection",
                        "Implement CSRF protection for state-changing requests",
                        "Use secure cookies with HttpOnly and Secure flags",
                        "Store passwords securely using bcrypt or similar",
                        "Keep dependencies updated to avoid known vulnerabilities",
                        "Use HTTPS for all communications",
                        "Implement proper session management",
                        "Use environment variables for sensitive configuration",
                        "Disable X-Powered-By header (Express does this by default)",
                        "Implement proper error handling without stack traces in production",
                        "Use Content Security Policy (CSP) headers"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-800 mr-2 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Deployment Section */}
          <section id="express-deployment" className="mb-12" ref={deploymentRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaGlobe className="mr-3" /> Deployment
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaGlobe className="mr-2 text-gray-600" /> Deploying Express Applications
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Deploying an Express application involves preparing your app for production, choosing a hosting platform, and configuring the production environment.
                  </p>

                  {/* Deployment Examples */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Deployment Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.deployment}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.deployment)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.deployment ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Deployment Options */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Deployment Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "Traditional Hosting",
                        description: "VPS or dedicated server",
                        examples: "DigitalOcean, Linode, AWS EC2",
                        process: "Node.js installed on server, PM2 for process management"
                      },
                      {
                        title: "PaaS",
                        description: "Platform as a Service",
                        examples: "Heroku, Render, Railway",
                        process: "Git push deployment, automatic scaling"
                      },
                      {
                        title: "Serverless",
                        description: "Function as a Service",
                        examples: "AWS Lambda, Vercel, Netlify Functions",
                        process: "Deploy individual functions, scales automatically"
                      },
                      {
                        title: "Containers",
                        description: "Docker-based deployment",
                        examples: "AWS ECS, Google Cloud Run, Kubernetes",
                        process: "Containerize app, deploy to container platform"
                      }
                    ].map((option, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-1">{option.title}</h5>
                        <p className="text-sm text-gray-700 mb-1">{option.description}</p>
                        <p className="text-xs text-gray-600 mb-1"><strong>Examples:</strong> {option.examples}</p>
                        <p className="text-xs text-gray-600"><strong>Process:</strong> {option.process}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Production Best Practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Production Best Practices</h4>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <ul className="space-y-3">
                      {[
                        "Use environment variables for configuration (dotenv for development)",
                        "Set NODE_ENV to 'production'",
                        "Use a process manager (PM2, Forever, Systemd)",
                        "Enable compression with compression middleware",
                        "Use a reverse proxy (Nginx, Apache)",
                        "Implement proper logging (Morgan, Winston)",
                        "Set up monitoring and alerting",
                        "Use a load balancer for high traffic apps",
                        "Implement proper error tracking (Sentry, Rollbar)",
                        "Set up CI/CD pipeline",
                        "Use HTTPS everywhere",
                        "Implement proper caching strategies",
                        "Set up database connection pooling",
                        "Use connection timeouts",
                        "Implement health check endpoints"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-800 mr-2 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* PM2 Configuration */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">PM2 Configuration Example</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: 'app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }]
};

// Commands:
// Start in production: pm2 start ecosystem.config.js --env production
// Monitor: pm2 monit
// List: pm2 list
// Logs: pm2 logs
// Restart: pm2 restart all
// Stop: pm2 stop all`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: 'app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }]
};

// Commands:
// Start in production: pm2 start ecosystem.config.js --env production
// Monitor: pm2 monit
// List: pm2 list
// Logs: pm2 logs
// Restart: pm2 restart all
// Stop: pm2 stop all`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: 'app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }]
};

// Commands:
// Start in production: pm2 start ecosystem.config.js --env production
// Monitor: pm2 monit
// List: pm2 list
// Logs: pm2 logs
// Restart: pm2 restart all
// Stop: pm2 stop all` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Best Practices Section */}
          <section id="express-best" className="mb-12" ref={bestRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiAward className="mr-3" /> Best Practices
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiAward className="mr-2 text-gray-600" /> Express Best Practices
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Following best practices in your Express applications will make them more maintainable, scalable, and secure. Here are some key recommendations.
                  </p>

                  {/* Best Practices Examples */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Best Practices Examples</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{expressExamples.bestPractices}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(expressExamples.bestPractices)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === expressExamples.bestPractices ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Project Structure */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Project Structure</h4>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <div className="font-mono text-sm">
                      <div className="text-gray-800 mb-2">Recommended structure for medium/large Express apps:</div>
                      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                        <code>{`my-express-app/
├── app.js                # Main application entry point
├── bin/                  # Startup scripts
│   └── www               # Server startup script
├── config/               # Configuration files
│   ├── db.js             # Database configuration
│   └── passport.js       # Auth configuration
├── controllers/          # Route controllers
│   ├── user.controller.js
│   └── product.controller.js
├── models/               # Database models
│   ├── user.model.js
│   └── product.model.js
├── routes/               # Route definitions
│   ├── index.js
│   ├── user.routes.js
│   └── product.routes.js
├── middleware/           # Custom middleware
│   ├── auth.js
│   └── errorHandler.js
├── public/               # Static files
│   ├── images/
│   ├── css/
│   └── js/
├── views/                # Templates (if using server-side rendering)
│   ├── layouts/
│   └── partials/
├── services/             # Business logic
│   ├── user.service.js
│   └── product.service.js
├── tests/                # Test files
│   ├── unit/
│   └── integration/
├── .env                  # Environment variables (ignored in git)
└── package.json`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Coding Standards */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Coding Standards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "Consistent Style",
                        description: "Use ESLint with Airbnb or Standard style guide",
                        implementation: "npm install --save-dev eslint eslint-config-airbnb-base"
                      },
                      {
                        title: "Error Handling",
                        description: "Centralize error handling with middleware",
                        implementation: "app.use((err, req, res, next) => {...})"
                      },
                      {
                        title: "Async/Await",
                        description: "Use async/await with try/catch or wrappers",
                        implementation: "const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)"
                      },
                      {
                        title: "Environment Config",
                        description: "Use environment variables for configuration",
                        implementation: "require('dotenv').config()"
                      },
                      {
                        title: "Logging",
                        description: "Implement structured logging",
                        implementation: "const morgan = require('morgan'); app.use(morgan('combined'))"
                      },
                      {
                        title: "Validation",
                        description: "Validate input with Joi or express-validator",
                        implementation: "const { body, validationResult } = require('express-validator')"
                      }
                    ].map((standard, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-1">{standard.title}</h5>
                        <p className="text-sm text-gray-700 mb-1">{standard.description}</p>
                        <p className="text-xs text-gray-600"><strong>Implementation:</strong> <code className="font-mono bg-gray-100 px-1 rounded">{standard.implementation}</code></p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Performance Tips */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Performance Tips</h4>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <ul className="space-y-3">
                      {[
                        "Use gzip compression (compression middleware)",
                        "Avoid synchronous functions in production",
                        "Do logging asynchronously (winston, bunyan)",
                        "Use reverse proxy caching (Nginx, Varnish)",
                        "Optimize database queries (indexes, projections)",
                        "Implement caching (Redis, Memcached)",
                        "Use connection pooling for databases",
                        "Enable cluster mode for multi-core servers",
                        "Minimize middleware in the request chain",
                        "Use efficient template engines (precompile templates)",
                        "Serve static files with proper caching headers",
                        "Use CDN for static assets",
                        "Implement rate limiting to prevent abuse",
                        "Use streaming for large responses",
                        "Monitor performance (New Relic, Datadog)"
                      ].map((tip, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-100 text-purple-800 mr-2 mt-0.5 flex-shrink-0">
                            ⚡
                          </span>
                          <span className="text-gray-700">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}