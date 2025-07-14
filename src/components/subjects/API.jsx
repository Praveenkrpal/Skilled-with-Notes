import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaServer, FaGlobe, FaLock, FaDatabase, FaExchangeAlt, FaCloud, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import { FiClock, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function API() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('api-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [typesRef, typesInView] = useInView({ threshold: 0.1 });
  const [restRef, restInView] = useInView({ threshold: 0.1 });
  const [graphqlRef, graphqlInView] = useInView({ threshold: 0.1 });
  const [soapRef, soapInView] = useInView({ threshold: 0.1 });
  const [authenticationRef, authenticationInView] = useInView({ threshold: 0.1 });
  const [bestPracticesRef, bestPracticesInView] = useInView({ threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'api-introduction', inView: introInView },
      { id: 'api-types', inView: typesInView },
      { id: 'rest-api', inView: restInView },
      { id: 'graphql-api', inView: graphqlInView },
      { id: 'soap-api', inView: soapInView },
      { id: 'authentication', inView: authenticationInView },
      { id: 'best-practices', inView: bestPracticesInView },
      { id: 'api-tools', inView: toolsInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, typesInView, restInView, graphqlInView, soapInView, authenticationInView, bestPracticesInView, toolsInView]);

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
    { id: 'api-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'api-types', label: 'API Types', icon: <FaExchangeAlt className="mr-2" /> },
    { id: 'rest-api', label: 'REST API', icon: <FaGlobe className="mr-2" /> },
    { id: 'graphql-api', label: 'GraphQL API', icon: <FaDatabase className="mr-2" /> },
    { id: 'soap-api', label: 'SOAP API', icon: <FaServer className="mr-2" /> },
    { id: 'authentication', label: 'Authentication', icon: <FaLock className="mr-2" /> },
    { id: 'best-practices', label: 'Best Practices', icon: <FiAward className="mr-2" /> },
    { id: 'api-tools', label: 'API Tools', icon: <FiCpu className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Application Integration",
      description: "APIs enable different software systems to communicate and share data",
      icon: <FaExchangeAlt className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Platform Independence",
      description: "APIs work across different programming languages and platforms",
      icon: <FaGlobe className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Modular Development",
      description: "Allows teams to work on different components independently",
      icon: <FiPackage className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Data Access",
      description: "Provides controlled access to databases and services",
      icon: <FaDatabase className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Security",
      description: "Enables secure data exchange with authentication and authorization",
      icon: <FaLock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Scalability",
      description: "Allows systems to scale by separating frontend and backend",
      icon: <FaCloud className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Innovation",
      description: "Enables developers to build on existing platforms",
      icon: <FaLightbulb className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Efficiency",
      description: "Reduces development time by reusing existing functionality",
      icon: <FiZap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // API Examples
  const apiExamples = {
    restExample: `// Example REST API Endpoint
GET /api/users/123
Accept: application/json

// Response
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2023-01-15T10:30:00Z"
}`,

    graphqlExample: `# Example GraphQL Query
query {
  user(id: "123") {
    id
    name
    email
    posts {
      title
      content
    }
  }
}

# Response
{
  "data": {
    "user": {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "First Post",
          "content": "Hello world!"
        }
      ]
    }
  }
}`,

    soapExample: `<!-- Example SOAP Request -->
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
    <auth:Authentication xmlns:auth="http://example.com/auth">
      <auth:Username>user</auth:Username>
      <auth:Password>pass</auth:Password>
    </auth:Authentication>
  </soap:Header>
  <soap:Body>
    <getUser xmlns="http://example.com/user">
      <userId>123</userId>
    </getUser>
  </soap:Body>
</soap:Envelope>`,

    authExample: `// Example JWT Authentication
// Request Header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,

    restMethods: `// REST API Methods
GET /api/users        - Retrieve all users
GET /api/users/123    - Retrieve user with ID 123
POST /api/users       - Create a new user
PUT /api/users/123    - Update user with ID 123
DELETE /api/users/123 - Delete user with ID 123`,

    errorCodes: `// Common HTTP Status Codes
200 OK - Request succeeded
201 Created - Resource created
204 No Content - Success but no content to return
400 Bad Request - Invalid request
401 Unauthorized - Authentication required
403 Forbidden - Authenticated but not authorized
404 Not Found - Resource doesn't exist
500 Internal Server Error - Server error`,

    curlExample: `# Example cURL request
curl -X GET https://api.example.com/users/123 \\
  -H "Authorization: Bearer token123" \\
  -H "Content-Type: application/json"`,

    postmanExample: `// Example Postman request
{
  "url": "https://api.example.com/users",
  "method": "POST",
  "header": {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  "body": {
    "mode": "raw",
    "raw": "{\\"name\\":\\"John Doe\\",\\"email\\":\\"john@example.com\\"}"
  }
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
              <FaCode className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white">
              API Notes
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-green-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-green-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaCode className="text-green-600" />
                    </motion.div>
                    API Topics
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
                      variants={itemVariants}
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
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="api-introduction" className="mb-12" ref={introRef}>
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
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to APIs
                </h2>
              </div>

              <div className="p-6">
                {/* What is API card */}
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What are APIs?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    APIs (Application Programming Interfaces) are sets of protocols and tools that allow different software applications to communicate with each other. They define the methods and data formats that applications can use to request and exchange information.
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
                        <p className="text-yellow-700">APIs are the building blocks of modern software development, enabling the creation of complex applications by combining multiple services.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* API Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic API Structure
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.restExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.restExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.restExample ? 'Copied!' : 'Copy'}
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

          {/* API Types Section */}
          <section id="api-types" className="mb-12" ref={typesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExchangeAlt className="mr-3" /> API Types
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-green-500" /> Different Types of APIs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    APIs come in various forms, each with its own architecture, protocols, and use cases. The main types include REST, GraphQL, SOAP, and more.
                  </p>

                  {/* API types comparison */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">API Type Comparison</h4>
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
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Protocol
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Data Format
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Best For
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { type: 'REST', protocol: 'HTTP', dataFormat: 'JSON, XML', bestFor: 'Web services, mobile apps' },
                          { type: 'GraphQL', protocol: 'HTTP', dataFormat: 'JSON', bestFor: 'Complex queries, mobile apps' },
                          { type: 'SOAP', protocol: 'HTTP, SMTP', dataFormat: 'XML', bestFor: 'Enterprise systems, financial services' },
                          { type: 'gRPC', protocol: 'HTTP/2', dataFormat: 'Protocol Buffers', bestFor: 'Microservices, low-latency systems' },
                          { type: 'WebSocket', protocol: 'WebSocket', dataFormat: 'JSON, binary', bestFor: 'Real-time applications' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.protocol}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.dataFormat}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.bestFor}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* REST API Section */}
          <section id="rest-api" className="mb-12" ref={restRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaGlobe className="mr-3" /> REST API
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaGlobe className="mr-2 text-green-500" /> RESTful APIs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs use HTTP requests to GET, PUT, POST and DELETE data.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.restExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.restExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.restExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* REST principles */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">REST Principles</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Client-Server", description: "Separation of concerns between client and server" },
                      { icon: <FaCode />, title: "Stateless", description: "Each request contains all necessary information" },
                      { icon: <FaCode />, title: "Cacheable", description: "Responses must define themselves as cacheable or not" },
                      { icon: <FaCode />, title: "Uniform Interface", description: "Standardized way of interacting with resources" },
                      { icon: <FaCode />, title: "Layered System", description: "Architecture composed of hierarchical layers" },
                      { icon: <FaCode />, title: "Code on Demand", description: "Optional ability to send executable code" }
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

                  {/* REST methods */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">REST Methods</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.restMethods}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.restMethods)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.restMethods ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* HTTP status codes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">HTTP Status Codes</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.errorCodes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.errorCodes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.errorCodes ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* GraphQL API Section */}
          <section id="graphql-api" className="mb-12" ref={graphqlRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> GraphQL API
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaDatabase className="mr-2 text-green-500" /> GraphQL APIs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a complete and understandable description of the data in your API.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.graphqlExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.graphqlExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.graphqlExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* GraphQL features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GraphQL Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaCode />, title: "Single Endpoint", description: "All requests go to a single endpoint" },
                      { icon: <FaCode />, title: "Client-Specified Queries", description: "Clients request exactly what they need" },
                      { icon: <FaCode />, title: "Strongly Typed", description: "Type system defines API capabilities" },
                      { icon: <FaCode />, title: "Introspective", description: "API schema can be queried" },
                      { icon: <FaCode />, title: "Real-time Data", description: "Subscriptions for live updates" },
                      { icon: <FaCode />, title: "Batching", description: "Combine multiple requests into one" }
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

                  {/* GraphQL vs REST */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GraphQL vs REST</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-700">
                          <strong>When to use GraphQL:</strong> When you need flexible queries, want to reduce over-fetching, 
                          or have complex data relationships. <br />
                          <strong>When to use REST:</strong> When you need caching benefits, simpler APIs, 
                          or when working with existing REST infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* SOAP API Section */}
          <section id="soap-api" className="mb-12" ref={soapRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> SOAP API
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaServer className="mr-2 text-green-500" /> SOAP APIs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in web services. 
                    It uses XML for its message format and relies on application layer protocols, most often HTTP.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{apiExamples.soapExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(apiExamples.soapExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === apiExamples.soapExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* SOAP Features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">SOAP Features</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Protocol independent (can work with HTTP, SMTP, etc.)",
                      "Built-in error handling with SOAP Fault",
                      "Extensive security standards (WS-Security)",
                      "ACID compliance for transactions",
                      "Language and platform independent",
                      "Formal contract with WSDL"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="inline-block bg-green-100 text-green-700 rounded-full p-1 mr-2">
                          < FiClock className="w-3 h-3" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Authentication Section */}
          <section id="authentication" className="mb-12" ref={authenticationRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLock className="mr-3" /> Authentication
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FaLock className="mr-2 text-green-500" /> API Authentication Methods
                  </h3>
                  
                  {/* Authentication methods */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                      {
                        title: "API Keys",
                        description: "Simple key passed in header or URL",
                        example: "X-API-Key: abc123def456",
                        icon: < FiClock className="text-blue-500" />
                      },
                      {
                        title: "JWT (JSON Web Tokens)",
                        description: "Stateless tokens with expiration",
                        example: apiExamples.authExample,
                        icon: <FaShieldAlt className="text-green-500" />
                      },
                      {
                        title: "OAuth 2.0",
                        description: "Delegated authorization framework",
                        example: "Authorization: Bearer token123",
                        icon: < FiClock className="text-purple-500" />
                      },
                      {
                        title: "Basic Auth",
                        description: "Base64 encoded username:password",
                        example: "Authorization: Basic dXNlcjpwYXNz",
                        icon: <FaLock className="text-red-500" />
                      }
                    ].map((method, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-2">
                          {method.icon}
                          <h4 className="ml-2 font-semibold text-gray-800">{method.title}</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{method.description}</p>
                        <div className="relative group">
                          <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs font-mono overflow-x-auto">
                            {method.example.split('\n')[0]}
                          </div>
                          {method.example.length > 30 && (
                            <motion.button
                              onClick={() => copyToClipboard(method.example)}
                              className="absolute top-1 right-1 bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-xs flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-3 h-3 mr-1" />
                              Copy
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="mb-12" ref={bestPracticesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiAward className="mr-3" /> Best Practices
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiAward className="mr-2 text-green-500" /> API Design Best Practices
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Use Nouns for Resources",
                        description: "REST endpoints should use nouns (e.g., /users) not verbs (e.g., /getUsers)"
                      },
                      {
                        title: "Version Your API",
                        description: "Include version in URL (e.g., /v1/users) or header to maintain backward compatibility"
                      },
                      {
                        title: "Use Proper HTTP Methods",
                        description: "GET for retrieval, POST for creation, PUT for updates, DELETE for removal"
                      },
                      {
                        title: "Provide Consistent Responses",
                        description: "Standardize response format across all endpoints including error handling"
                      },
                      {
                        title: "Implement Pagination",
                        description: "For large datasets, use limit/offset or cursor-based pagination"
                      },
                      {
                        title: "Use SSL/TLS",
                        description: "Always use HTTPS to encrypt data in transit"
                      },
                      {
                        title: "Rate Limiting",
                        description: "Protect your API from abuse with request rate limits"
                      },
                      {
                        title: "Comprehensive Documentation",
                        description: "Provide clear, up-to-date documentation with examples"
                      }
                    ].map((practice, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-700 rounded-full mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{practice.title}</h4>
                          <p className="text-gray-700">{practice.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* API Tools Section */}
          <section id="api-tools" className="mb-12" ref={toolsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> API Tools
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <FiCpu className="mr-2 text-green-500" /> Essential API Development Tools
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Postman",
                        description: "API development and testing environment",
                        example: apiExamples.postmanExample,
                        icon: <FaServer className="text-orange-500" />
                      },
                      {
                        name: "cURL",
                        description: "Command line tool for making HTTP requests",
                        example: apiExamples.curlExample,
                        icon: < FiClock className="text-blue-500" />
                      },
                      {
                        name: "Swagger/OpenAPI",
                        description: "Framework for API documentation and design",
                        icon: < FiClock className="text-green-500" />
                      },
                      {
                        name: "Insomnia",
                        description: "Alternative to Postman for API testing",
                        icon: <FaCloud className="text-purple-500" />
                      },
                      {
                        name: "GraphQL Playground",
                        description: "IDE for GraphQL API development",
                        icon: <FaDatabase className="text-pink-500" />
                      },
                      {
                        name: "SoapUI",
                        description: "SOAP and REST API testing tool",
                        icon: < FiClock className="text-red-500" />
                      }
                    ].map((tool, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-3">
                          {tool.icon}
                          <h4 className="ml-2 font-semibold text-gray-800">{tool.name}</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{tool.description}</p>
                        {tool.example && (
                          <div className="relative group">
                            <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs font-mono overflow-x-auto">
                              {tool.example.split('\n')[0]}
                            </div>
                            <motion.button
                              onClick={() => copyToClipboard(tool.example)}
                              className="absolute top-1 right-1 bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-xs flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1 }}
                            >
                              <FaCopy className="w-3 h-3 mr-1" />
                              Copy
                            </motion.button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer 
            className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-3">API Resources</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <a href="https://swagger.io/" className="text-blue-600 hover:underline">Swagger</a>
                <a href="https://graphql.org/" className="text-blue-600 hover:underline">GraphQL</a>
                <a href="https://www.postman.com/" className="text-blue-600 hover:underline">Postman</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" className="text-blue-600 hover:underline">HTTP Docs</a>
                <a href="https://oauth.net/2/" className="text-blue-600 hover:underline">OAuth 2.0</a>
              </div>
              <p className="text-gray-600">© {new Date().getFullYear()} API Documentation. All rights reserved.</p>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}