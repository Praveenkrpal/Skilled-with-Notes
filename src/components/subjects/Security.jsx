import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaGlobe, FaServer, FaCode, FaExclamationTriangle, FaLightbulb, FaCopy, FaBars, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { FiClock, FiKey, FiAlertTriangle, FiEye, FiEyeOff, FiDatabase, FiAward } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Security() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('security-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [threatsRef, threatsInView] = useInView({ threshold: 0.1 });
  const [httpsRef, httpsInView] = useInView({ threshold: 0.1 });
  const [authRef, authInView] = useInView({ threshold: 0.1 });
  const [corsRef, corsInView] = useInView({ threshold: 0.1 });
  const [cspRef, cspInView] = useInView({ threshold: 0.1 });
  const [xssRef, xssInView] = useInView({ threshold: 0.1 });
  const [csrfRef, csrfInView] = useInView({ threshold: 0.1 });
  const [sqlRef, sqlInView] = useInView({ threshold: 0.1 });
  const [bestPracticesRef, bestPracticesInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'security-introduction', inView: introInView },
      { id: 'common-threats', inView: threatsInView },
      { id: 'https-ssl', inView: httpsInView },
      { id: 'authentication', inView: authInView },
      { id: 'cors', inView: corsInView },
      { id: 'content-security-policy', inView: cspInView },
      { id: 'xss', inView: xssInView },
      { id: 'csrf', inView: csrfInView },
      { id: 'sql-injection', inView: sqlInView },
      { id: 'best-practices', inView: bestPracticesInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, threatsInView, httpsInView, authInView, corsInView, cspInView, xssInView, csrfInView, sqlInView, bestPracticesInView]);

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
    { id: 'security-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'common-threats', label: 'Common Threats', icon: <FiAlertTriangle className="mr-2" /> },
    { id: 'https-ssl', label: 'HTTPS & SSL', icon: <FaLock className="mr-2" /> },
    { id: 'authentication', label: 'Authentication', icon: <FiKey className="mr-2" /> },
    { id: 'cors', label: 'CORS', icon: <FaGlobe className="mr-2" /> },
    { id: 'content-security-policy', label: 'CSP', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'xss', label: 'XSS', icon: <FiEye className="mr-2" /> },
    { id: 'csrf', label: 'CSRF', icon: <FiEyeOff className="mr-2" /> },
    { id: 'sql-injection', label: 'SQL Injection', icon: <FiDatabase className="mr-2" /> },
    { id: 'best-practices', label: 'Best Practices', icon: <FiAward className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Confidentiality",
      description: "Ensuring that information is accessible only to those authorized to have access",
      icon: <FaLock className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Integrity",
      description: "Safeguarding the accuracy and completeness of information",
      icon: <FaShieldAlt className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Availability",
      description: "Ensuring that authorized users have access to information when needed",
      icon: <FaServer className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Authentication",
      description: "Verifying the identity of users and systems",
      icon: <FaUserShield className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Authorization",
      description: "Determining what resources users can access",
      icon: <FiKey className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Non-repudiation",
      description: "Preventing users from denying actions they performed",
      icon: <FaCode className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Encryption",
      description: "Protecting data by transforming it into unreadable format",
      icon: <FaLock className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Auditing",
      description: "Tracking security-related events for analysis",
      icon: <FiEye className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // Security Examples
  const securityExamples = {
    https: `<!-- Force HTTPS in production -->
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>`,

    cors: `// Express CORS configuration
const express = require('express');
const cors = require('cors');

const app = express();

// Basic CORS for all routes
app.use(cors());

// Custom CORS configuration
const corsOptions = {
  origin: 'https://yourdomain.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.get('/api/data', cors(corsOptions), (req, res) => {
  res.json({ message: 'This route has custom CORS policy' });
});`,

    csp: `<!-- Content Security Policy Header -->
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://trusted.cdn.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://images.example.com;
  font-src 'self' https://fonts.example.com;
  connect-src 'self' https://api.example.com;
  frame-src 'none';
  object-src 'none';`,

    xssProtection: `// Sanitizing user input to prevent XSS
const sanitizeInput = (input) => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Using DOMPurify library
const clean = DOMPurify.sanitize(dirty);`,

    csrfProtection: `<!-- CSRF Token in Form -->
<form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <!-- form fields -->
</form>

// Express CSRF middleware
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/process', csrfProtection, (req, res) => {
  // process the form
});`,

    sqlInjection: `// Using parameterized queries to prevent SQL injection
// UNSAFE - vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;
db.query(query, (err, result) => { ... });

// SAFE - using parameterized queries
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username], (err, result) => { ... });

// Using ORM with parameterization
const user = await User.findOne({
  where: {
    username: username
  }
});`,

    authExample: `// JWT Authentication Example
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// User login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // 1. Find user
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send('Invalid credentials');
  
  // 2. Validate password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).send('Invalid credentials');
  
  // 3. Generate JWT token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  // 4. Set cookie or return token
  res.cookie('token', token, { httpOnly: true, secure: true });
  res.json({ token });
});`,

    secureHeaders: `# Secure HTTP Headers
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(self "https://maps.example.com")`
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-pink-600 to-pink-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
              <FaShieldAlt className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-white">
              Security Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-pink-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-pink-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaShieldAlt className="text-pink-600" />
                    </motion.div>
                    Security Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-pink-700 text-xl transition-colors duration-200 transform hover:rotate-90"
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
                        className={`block px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-pink-100 text-pink-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-pink-600 group-hover:text-pink-700 transition-colors ${activeSection === item.id ? 'text-pink-700' : ''}` })}
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
          <section id="security-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to Web Security
                </h2>
              </div>

              <div className="p-6">
                {/* What is Web Security card */}
                <motion.div
                  className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is Web Security?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Web security refers to the protective measures and protocols that protect websites and web applications from cyber threats and attacks. It involves securing data, preventing unauthorized access, and ensuring the integrity of web services.
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
                        <p className="text-yellow-700">Web security is not just about protecting servers - it's about protecting users, their data, and their privacy.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Security Principles */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaShieldAlt className="mr-2 text-gray-500" /> Security Principles
                  </h4>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiAward className="mr-2 text-pink-500" />
                      </motion.div>
                      Key Security Principles
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
                          className="flex items-start space-x-3 p-3 bg-pink-50 rounded-lg transition-all duration-200 hover:bg-pink-100 hover:shadow-md"
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



          {/* Common Threats Section - continued */}
          <div className="p-6">
            <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
              <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                <FiAlertTriangle className="mr-2 text-yellow-500" />
                Common Web Security Threats
              </h3>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Modern web applications face numerous security threats that can compromise data, user privacy, and system integrity.
                Understanding these threats is the first step in building effective defenses.
              </p>

              {/* Threat Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* XSS Threat */}
                <motion.div
                  variants={itemVariants}
                  className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-red-700 flex items-center mb-2">
                    <FiAlertTriangle className="mr-2" /> Cross-Site Scripting (XSS)
                  </h4>
                  <p className="text-gray-700">
                    Malicious scripts injected into web pages viewed by other users, allowing attackers to bypass access controls.
                  </p>
                </motion.div>

                {/* CSRF Threat */}
                <motion.div
                  variants={itemVariants}
                  className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-orange-700 flex items-center mb-2">
                    <FiEyeOff className="mr-2" /> Cross-Site Request Forgery (CSRF)
                  </h4>
                  <p className="text-gray-700">
                    Forces an end user to execute unwanted actions on a web application in which they're authenticated.
                  </p>
                </motion.div>

                {/* SQL Injection */}
                <motion.div
                  variants={itemVariants}
                  className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-purple-700 flex items-center mb-2">
                    <FiDatabase className="mr-2" /> SQL Injection
                  </h4>
                  <p className="text-gray-700">
                    Insertion of malicious SQL statements into input fields for execution by the backend database.
                  </p>
                </motion.div>

                {/* Man-in-the-Middle */}
                <motion.div
                  variants={itemVariants}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-blue-700 flex items-center mb-2">
                    <FaUserShield className="mr-2" /> Man-in-the-Middle Attacks
                  </h4>
                  <p className="text-gray-700">
                    Attackers secretly intercept and relay communications between two parties who believe they're communicating directly.
                  </p>
                </motion.div>
              </motion.div>

              {/* Threat Prevention Overview */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <h4 className="font-bold text-green-700 flex items-center mb-2">
                  <FaShieldAlt className="mr-2" /> General Prevention Strategies
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Validate and sanitize all user inputs</li>
                  <li>Implement proper authentication and authorization</li>
                  <li>Use HTTPS for all communications</li>
                  <li>Keep software and dependencies updated</li>
                  <li>Follow the principle of least privilege</li>
                  <li>Implement proper error handling</li>
                </ul>
              </div>
            </div>
          </div>
          {/* </motion.div> */}
          {/* </section> */}

          {/* HTTPS & SSL Section */}
          <section id="https-ssl" className="mb-12" ref={httpsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLock className="mr-3" />
                  HTTPS & SSL/TLS
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FaLock className="mr-2 text-pink-500" />
                    Secure Communication
                  </h3>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, using SSL/TLS to encrypt communications
                    between the browser and web server.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FaLightbulb className="mr-2 text-yellow-500" /> Key Benefits:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Data encryption in transit</li>
                        <li>Data integrity protection</li>
                        <li>Authentication of the website</li>
                        <li>SEO benefits (ranking boost)</li>
                        <li>Required for many modern web features</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FiAlertTriangle className="mr-2 text-red-500" /> Risks Without HTTPS:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Data interception (eavesdropping)</li>
                        <li>Man-in-the-middle attacks</li>
                        <li>Content injection/modification</li>
                        <li>Session hijacking</li>
                        <li>Warning messages in browsers</li>
                      </ul>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="relative">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> Example: Force HTTPS in Apache
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.https}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.https)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.https ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-bold text-blue-700 flex items-center mb-2">
                      <FaLightbulb className="mr-2" /> Best Practices
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Use TLS 1.2 or higher (1.3 recommended)</li>
                      <li>Implement HTTP Strict Transport Security (HSTS)</li>
                      <li>Obtain certificates from trusted CAs</li>
                      <li>Set up proper certificate rotation</li>
                      <li>Use secure cipher suites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Authentication Section */}
          <section id="authentication" className="mb-12" ref={authRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiKey className="mr-3" />
                  Authentication & Authorization
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FaUserShield className="mr-2 text-pink-500" />
                    User Identity Management
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLock className="mr-2" /> Authentication
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Verifying who a user is, typically through:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Username/password</li>
                        <li>Multi-factor authentication (MFA)</li>
                        <li>Biometric authentication</li>
                        <li>Social login (OAuth)</li>
                        <li>Certificate-based auth</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FiKey className="mr-2" /> Authorization
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Determining what an authenticated user can do:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Role-Based Access Control (RBAC)</li>
                        <li>Attribute-Based Access Control (ABAC)</li>
                        <li>Permission levels</li>
                        <li>Resource ownership</li>
                        <li>Time-based restrictions</li>
                      </ul>
                    </div>
                  </div>

                  {/* JWT Example */}
                  <div className="relative mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> JWT Authentication Example
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.authExample}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.authExample)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.authExample ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-yellow-700 flex items-center mb-2">
                        <FiAlertTriangle className="mr-2" /> Common Vulnerabilities
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Weak password policies</li>
                        <li>Insecure credential storage</li>
                        <li>Session fixation</li>
                        <li>Insecure JWT handling</li>
                        <li>Broken access control</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-green-700 flex items-center mb-2">
                        <FaShieldAlt className="mr-2" /> Best Practices
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Use strong password hashing (bcrypt, Argon2)</li>
                        <li>Implement rate limiting</li>
                        <li>Use secure, HttpOnly cookies</li>
                        <li>Short-lived access tokens with refresh tokens</li>
                        <li>Regularly audit permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CORS Section */}
          <section id="cors" className="mb-12" ref={corsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaGlobe className="mr-3" />
                  Cross-Origin Resource Sharing (CORS)
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FaGlobe className="mr-2 text-pink-500" />
                    Managing Cross-Origin Requests
                  </h3>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CORS is a security mechanism that allows restricted resources on a web page to be requested from another domain
                    outside the domain from which the first resource was served.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FaLightbulb className="mr-2 text-blue-500" /> How CORS Works
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Browser sends OPTIONS request (preflight)</li>
                        <li>Server responds with allowed methods/headers</li>
                        <li>Browser checks if actual request is allowed</li>
                        <li>If allowed, sends actual request</li>
                        <li>Server responds with appropriate CORS headers</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FiAlertTriangle className="mr-2 text-red-500" /> Common Issues
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Missing CORS headers</li>
                        <li>Overly permissive CORS policies</li>
                        <li>Preflight request failures</li>
                        <li>Credentials with wildcard origins</li>
                        <li>Caching of preflight responses</li>
                      </ul>
                    </div>
                  </div>

                  {/* CORS Example */}
                  <div className="relative mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> Express CORS Configuration
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.cors}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.cors)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.cors ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-bold text-green-700 flex items-center mb-2">
                      <FaShieldAlt className="mr-2" /> Best Practices
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Be specific with allowed origins (avoid *)</li>
                      <li>Limit allowed HTTP methods</li>
                      <li>Set appropriate max-age for preflight caching</li>
                      <li>Handle credentials carefully</li>
                      <li>Consider environment-specific configurations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Content Security Policy Section */}
          <section id="content-security-policy" className="mb-12" ref={cspRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaShieldAlt className="mr-3" />
                  Content Security Policy (CSP)
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FaShieldAlt className="mr-2 text-pink-500" />
                    Mitigating Content Injection Risks
                  </h3>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CSP is an added layer of security that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS)
                    and data injection attacks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FaLightbulb className="mr-2 text-blue-500" /> Key Directives
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li><strong>default-src</strong>: Fallback for other directives</li>
                        <li><strong>script-src</strong>: Valid sources for JavaScript</li>
                        <li><strong>style-src</strong>: Valid sources for stylesheets</li>
                        <li><strong>img-src</strong>: Valid sources for images</li>
                        <li><strong>connect-src</strong>: Valid targets for XHR, WebSockets</li>
                        <li><strong>frame-src</strong>: Valid sources for frames</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FiAlertTriangle className="mr-2 text-red-500" /> Common Pitfalls
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Overly permissive policies</li>
                        <li>Missing directives fall back to default-src</li>
                        <li>'unsafe-inline' or 'unsafe-eval' usage</li>
                        <li>Not testing in report-only mode first</li>
                        <li>Forgetting about third-party dependencies</li>
                      </ul>
                    </div>
                  </div>

                  {/* CSP Example */}
                  <div className="relative mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> Example CSP Header
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.csp}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.csp)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.csp ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-bold text-blue-700 flex items-center mb-2">
                      <FaLightbulb className="mr-2" /> Implementation Strategy
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Start with Content-Security-Policy-Report-Only</li>
                      <li>Monitor reports and adjust policy</li>
                      <li>Begin with restrictive policy (default-src 'none')</li>
                      <li>Add exceptions as needed</li>
                      <li>Gradually move to enforced policy</li>
                      <li>Use nonces or hashes instead of 'unsafe-inline'</li>
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* XSS Section */}
          <section id="xss" className="mb-12" ref={xssRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiEye className="mr-3" />
                  Cross-Site Scripting (XSS)
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FiAlertTriangle className="mr-2 text-pink-500" />
                    Preventing Script Injection
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types of XSS:</h4>
                      <ul className="space-y-3">
                        <li className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                          <strong className="text-red-700">Stored XSS</strong>
                          <p className="text-gray-700 text-sm">Malicious script permanently stored on target server</p>
                        </li>
                        <li className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                          <strong className="text-orange-700">Reflected XSS</strong>
                          <p className="text-gray-700 text-sm">Script reflected off web server in response</p>
                        </li>
                        <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                          <strong className="text-blue-700">DOM-based XSS</strong>
                          <p className="text-gray-700 text-sm">Vulnerability exists in client-side code</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Potential Impacts:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Session hijacking</li>
                        <li>Account takeover</li>
                        <li>Defacement of websites</li>
                        <li>Malware distribution</li>
                        <li>Keylogging</li>
                        <li>Identity theft</li>
                      </ul>

                      <h4 className="font-semibold text-gray-800 mt-4 mb-2">Common Attack Vectors:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Input fields (forms, search boxes)</li>
                        <li>URL parameters</li>
                        <li>HTTP headers</li>
                        <li>File uploads</li>
                        <li>Third-party widgets</li>
                      </ul>
                    </div>
                  </div>

                  {/* XSS Protection Example */}
                  <div className="relative mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> XSS Protection Examples
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.xssProtection}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.xssProtection)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.xssProtection ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-yellow-700 flex items-center mb-2">
                        <FiAlertTriangle className="mr-2" /> Testing for XSS
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Try basic script payloads: <code className="bg-gray-200 px-1 rounded">&lt;script&gt;alert(1)&lt;/script&gt;</code></li>
                        <li>Test different contexts (HTML, attributes, JavaScript)</li>
                        <li>Check DOM-based sinks (eval, innerHTML, document.write)</li>
                        <li>Use automated scanners (OWASP ZAP, Burp Suite)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-green-700 flex items-center mb-2">
                        <FaShieldAlt className="mr-2" /> Prevention Techniques
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Input validation and output encoding</li>
                        <li>Implement Content Security Policy (CSP)</li>
                        <li>Use modern frameworks with built-in protection</li>
                        <li>Sanitize HTML with libraries like DOMPurify</li>
                        <li>Set HttpOnly flag for cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CSRF Section */}
          <section id="csrf" className="mb-12" ref={csrfRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-pink-200 hover:border-pink-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiEyeOff className="mr-3" />
                  Cross-Site Request Forgery (CSRF)
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-pink-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                    <FiEyeOff className="mr-2 text-pink-500" />
                    Preventing Forged Requests
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">How CSRF Works:</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>User logs into a vulnerable site (e.g., bank.com)</li>
                        <li>Session cookie is stored in browser</li>
                        <li>User visits malicious site while still authenticated</li>
                        <li>Malicious site sends request to bank.com</li>
                        <li>Browser automatically includes session cookie</li>
                        <li>Request appears legitimate to bank.com</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Potential Impacts:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Unauthorized fund transfers</li>
                        <li>Password changes</li>
                        <li>Data theft or modification</li>
                        <li>Account takeover</li>
                        <li>Spreading malware</li>
                      </ul>
                    </div>
                  </div>

                  {/* CSRF Protection Example */}
                  <div className="relative mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaCode className="mr-2 text-blue-500" /> CSRF Protection Examples
                    </h4>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{securityExamples.csrfProtection}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(securityExamples.csrfProtection)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="mr-1" /> {copiedCode === securityExamples.csrfProtection ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-yellow-700 flex items-center mb-2">
                        <FiAlertTriangle className="mr-2" /> Testing for CSRF
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Check for CSRF tokens in forms</li>
                        <li>Verify SameSite cookie attribute</li>
                        <li>Test if state-changing requests are protected</li>
                        <li>Check CORS policy for sensitive endpoints</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-green-700 flex items-center mb-2">
                        <FaShieldAlt className="mr-2" /> Prevention Techniques
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Implement CSRF tokens (synchronizer token pattern)</li>
                        <li>Use SameSite cookie attribute (Strict or Lax)</li>
                        <li>Check Origin/Referer headers for API requests</li>
                        <li>Require re-authentication for sensitive actions</li>
                        <li>Use framework-provided CSRF protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div >
    </div >
  )
};