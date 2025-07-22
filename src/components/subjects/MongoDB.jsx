import React, { useState, useEffect } from 'react';
import { FaDatabase, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaCode, FaTable, FaList, FaLink, FaServer, FaShieldAlt, FaLayerGroup, FaRegSmile, FaMobileAlt, FaSearch, FaGlobe } from 'react-icons/fa';
import { FiClock, FiCode, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function MongoDB() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('mongodb-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [basicsRef, basicsInView] = useInView({ threshold: 0.1 });
  const [crudRef, crudInView] = useInView({ threshold: 0.1 });
  const [schemaRef, schemaInView] = useInView({ threshold: 0.1 });
  const [indexesRef, indexesInView] = useInView({ threshold: 0.1 });
  const [aggregationRef, aggregationInView] = useInView({ threshold: 0.1 });
  const [performanceRef, performanceInView] = useInView({ threshold: 0.1 });
  const [securityRef, securityInView] = useInView({ threshold: 0.1 });
  const [deploymentRef, deploymentInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'mongodb-introduction', inView: introInView },
      { id: 'mongodb-basics', inView: basicsInView },
      { id: 'crud-operations', inView: crudInView },
      { id: 'schema-design', inView: schemaInView },
      { id: 'indexes', inView: indexesInView },
      { id: 'aggregation', inView: aggregationInView },
      { id: 'performance', inView: performanceInView },
      { id: 'security', inView: securityInView },
      { id: 'deployment', inView: deploymentInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, basicsInView, crudInView, schemaInView, indexesInView, aggregationInView, performanceInView, securityInView, deploymentInView]);

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
    { id: 'mongodb-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'mongodb-basics', label: 'MongoDB Basics', icon: <FaDatabase className="mr-2" /> },
    { id: 'crud-operations', label: 'CRUD Operations', icon: <FiCode className="mr-2" /> },
    { id: 'schema-design', label: 'Schema Design', icon: <FiLayout className="mr-2" /> },
    { id: 'indexes', label: 'Indexes', icon: <FaSearch className="mr-2" /> },
    { id: 'aggregation', label: 'Aggregation', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'performance', label: 'Performance', icon: <FiZap className="mr-2" /> },
    { id: 'security', label: 'Security', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'deployment', label: 'Deployment', icon: <FaServer className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Document-Oriented",
      description: "Stores data in flexible, JSON-like documents",
      icon: <FiCode className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Scalable",
      description: "Horizontal scaling through sharding",
      icon: <FiGrid className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "High Performance",
      description: "Indexing and rich queries for fast access",
      icon: <FiZap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Flexible Schema",
      description: "No fixed schema allows for rapid iteration",
      icon: <FiLayout className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Rich Query Language",
      description: "Supports complex queries and aggregations",
      icon: <FaSearch className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "High Availability",
      description: "Replication and failover for reliability",
      icon: <FaServer className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Horizontal Scaling",
      description: "Distributes data across multiple servers",
      icon: <FiCpu className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Multi-Cloud",
      description: "Deploy anywhere - public, private or hybrid cloud",
      icon: <FaGlobe className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // MongoDB Examples
  const mongoExamples = {
    basicDocument: `{
  "_id": ObjectId("5f8d8a7f4f4d4a4f4d4a4f4d"),
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "hiking", "photography"]
}`,
    insertOperation: `// Insert a single document
db.users.insertOne({
  name: "Alice",
  age: 28,
  email: "alice@example.com"
});

// Insert multiple documents
db.users.insertMany([
  { name: "Bob", age: 32, email: "bob@example.com" },
  { name: "Charlie", age: 25, email: "charlie@example.com" }
]);`,
    findOperation: `// Find all documents
db.users.find();

// Find with query
db.users.find({ age: { $gt: 25 } });

// Find with projection (only return certain fields)
db.users.find(
  { age: { $gt: 25 } },
  { name: 1, email: 1, _id: 0 }
);`,
    updateOperation: `// Update a single document
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 29 } }
);

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
);

// Replace a document
db.users.replaceOne(
  { name: "Bob" },
  { name: "Robert", age: 33, email: "robert@example.com" }
);`,
    deleteOperation: `// Delete a single document
db.users.deleteOne({ name: "Alice" });

// Delete multiple documents
db.users.deleteMany({ status: "inactive" });`,
    aggregationExample: `// Group by age and count
db.users.aggregate([
  { $group: { 
    _id: "$age", 
    count: { $sum: 1 } 
  }},
  { $sort: { count: -1 } }
]);

// Lookup (join) example
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  }
]);`,
    indexExample: `// Create a single field index
db.users.createIndex({ email: 1 });

// Create a compound index
db.users.createIndex({ name: 1, age: -1 });

// Create a text index for search
db.articles.createIndex({ content: "text" });

// View indexes on a collection
db.users.getIndexes();`,
    transactionExample: `// Start a transaction
const session = db.getMongo().startSession();
session.startTransaction();

try {
  // Operations in transaction
  const user = db.users.findOne({ name: "Alice" }, { session });
  db.orders.insertOne({
    user_id: user._id,
    amount: 100,
    date: new Date()
  }, { session });
  
  // Commit if successful
  session.commitTransaction();
} catch (error) {
  // Abort on error
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
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
              <FaDatabase className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white">
              MongoDB Notes
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-green-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-blue-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaDatabase className="text-green-600" />
                    </motion.div>
                    MongoDB Topics
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
                        className={`block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-blue-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-green-100 text-blue-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-green-600 group-hover:text-blue-700 transition-colors ${activeSection === item.id ? 'text-blue-700' : ''}` })}
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
          <section id="mongodb-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
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
                  Introduction to MongoDB
                </h2>
              </div>

              <div className="p-6">
                {/* What is MongoDB card */}
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is MongoDB?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas, making it flexible and scalable for modern applications.
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
                        <p className="text-yellow-700">MongoDB was first released in 2009 by MongoDB Inc. (formerly 10gen) and has since become one of the most popular NoSQL databases.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* MongoDB Document Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> MongoDB Document Example
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.basicDocument}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.basicDocument)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.basicDocument ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
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

          {/* MongoDB Basics Section */}
          <section id="mongodb-basics" className="mb-12" ref={basicsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> MongoDB Basics
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaDatabase className="mr-2 text-blue-500" /> MongoDB Structure
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    MongoDB has a hierarchical structure consisting of databases, collections, and documents. Unlike relational databases, MongoDB doesn't use tables and rows but instead uses collections and documents.
                  </p>

                  {/* MongoDB Structure */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">MongoDB Structure</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaDatabase />, title: "Database", description: "A physical container for collections" },
                      { icon: <FaTable />, title: "Collection", description: "Group of MongoDB documents (analogous to a table in RDBMS)" },
                      { icon: <FaFileAlt />, title: "Document", description: "Basic unit of data in MongoDB (JSON-like BSON format)" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* MongoDB vs RDBMS */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">MongoDB vs Relational Databases</h4>
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
                            Concept
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            RDBMS
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            MongoDB
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { concept: 'Data Structure', rdbms: 'Tables with rows and columns', mongodb: 'Collections with documents' },
                          { concept: 'Schema', rdbms: 'Fixed schema required', mongodb: 'Flexible schema (schema-less)' },
                          { concept: 'Relationships', rdbms: 'Foreign keys and joins', mongodb: 'Embedded documents or references' },
                          { concept: 'Scalability', rdbms: 'Vertical scaling', mongodb: 'Horizontal scaling (sharding)' },
                          { concept: 'Query Language', rdbms: 'SQL', mongodb: 'MongoDB Query Language (MQL)' },
                          { concept: 'Transactions', rdbms: 'ACID compliant', mongodb: 'Multi-document ACID transactions (v4.0+)' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.concept}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.rdbms}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.mongodb}</td>
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
                        <p className="font-semibold text-green-800">When to Use MongoDB:</p>
                        <p className="text-green-700">MongoDB is ideal for applications with unstructured or semi-structured data, rapid development cycles, and requirements for horizontal scaling.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* CRUD Operations Section */}
          <section id="crud-operations" className="mb-12" ref={crudRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCode className="mr-3" /> CRUD Operations
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCode className="mr-2 text-blue-500" /> MongoDB CRUD Operations
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    CRUD stands for Create, Read, Update, and Delete - the four basic operations for persistent storage. MongoDB provides rich methods for each of these operations.
                  </p>

                  {/* Insert Operations */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Insert Operations</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.insertOperation}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.insertOperation)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.insertOperation ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Find Operations */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Find (Read) Operations</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.findOperation}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.findOperation)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.findOperation ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Update Operations */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Update Operations</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.updateOperation}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.updateOperation)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.updateOperation ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Delete Operations */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Delete Operations</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.deleteOperation}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.deleteOperation)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.deleteOperation ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Query Operators */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Query Operators</h4>
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
                            Operator
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
                          { operator: '$eq', description: 'Matches values that are equal to a specified value', example: '{ age: { $eq: 25 } }' },
                          { operator: '$gt', description: 'Matches values that are greater than a specified value', example: '{ age: { $gt: 25 } }' },
                          { operator: '$lt', description: 'Matches values that are less than a specified value', example: '{ age: { $lt: 25 } }' },
                          { operator: '$in', description: 'Matches any of the values specified in an array', example: '{ status: { $in: ["A", "B"] } }' },
                          { operator: '$and', description: 'Joins query clauses with a logical AND', example: '{ $and: [{ status: "A" }, { age: { $lt: 30 } }] }' },
                          { operator: '$or', description: 'Joins query clauses with a logical OR', example: '{ $or: [{ status: "A" }, { age: { $lt: 30 } }] }' },
                          { operator: '$regex', description: 'Provides regular expression capabilities', example: '{ name: { $regex: /^J/ } }' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.operator}</td>
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

          {/* Schema Design Section */}
          <section id="schema-design" className="mb-12" ref={schemaRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Schema Design
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiLayout className="mr-2 text-blue-500" /> MongoDB Schema Design
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    While MongoDB is schema-less, proper schema design is crucial for performance and maintainability. MongoDB supports two primary approaches: embedding and referencing.
                  </p>

                  {/* Embedding vs Referencing */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Embedding vs Referencing</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Embedding
                      </h5>
                      <p className="text-sm text-gray-700 mb-2">Store related data in a single document structure.</p>
                      <p className="text-sm text-gray-700"><strong>Best for:</strong> One-to-one or one-to-few relationships, data that's always accessed together.</p>
                      <div className="mt-3 p-2 bg-gray-800 text-gray-100 rounded text-xs font-mono">
                        {`{
  _id: 1,
  name: "John",
  address: {
    street: "123 Main",
    city: "NY"
  }
}`}
                      </div>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Referencing
                      </h5>
                      <p className="text-sm text-gray-700 mb-2">Store references between documents in separate collections.</p>
                      <p className="text-sm text-gray-700"><strong>Best for:</strong> One-to-many or many-to-many relationships, large hierarchical data sets.</p>
                      <div className="mt-3 p-2 bg-gray-800 text-gray-100 rounded text-xs font-mono">
                        {`// User document
{
  _id: 1,
  name: "John",
  posts: [23, 45, 78]
}

// Post documents
{
  _id: 23,
  title: "First Post"
}`}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Schema Design Patterns */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Schema Design Patterns</h4>
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
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Use Case
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { pattern: 'Embedded', description: 'All related data in a single document', useCase: 'One-to-one or one-to-few relationships' },
                          { pattern: 'Referenced', description: 'References between documents in different collections', useCase: 'One-to-many or many-to-many relationships' },
                          { pattern: 'Subset', description: 'Embed a subset of data for faster access', useCase: 'Large documents with frequently accessed portions' },
                          { pattern: 'Extended Reference', description: 'Embed frequently accessed fields with reference', useCase: 'Reduce joins while maintaining relationships' },
                          { pattern: 'Outlier', description: 'Handle outliers separately from main pattern', useCase: 'Most data fits one pattern but some exceptions exist' },
                          { pattern: 'Attribute', description: 'Store common fields with varying attributes', useCase: 'Products with different attributes' },
                          { pattern: 'Bucket', description: 'Group data into buckets by criteria', useCase: 'Time-series data, IoT sensor readings' },
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
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.useCase}</td>
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
                        <p className="font-semibold text-green-800">Schema Design Considerations:</p>
                        <p className="text-green-700">Design your schema according to your application's data access patterns. Favor embedding for data that's always accessed together and referencing for more complex relationships.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Indexes Section */}
          <section id="indexes" className="mb-12" ref={indexesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaSearch className="mr-3" /> Indexes
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaSearch className="mr-2 text-blue-500" /> MongoDB Indexes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan (i.e., scan every document in a collection) to select those documents that match the query statement.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.indexExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.indexExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.indexExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Index Types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Index Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Single Field", description: "Index on a single field" },
                      { icon: <FiCode />, title: "Compound", description: "Index on multiple fields" },
                      { icon: <FiCode />, title: "Multikey", description: "Index on array fields" },
                      { icon: <FiCode />, title: "Text", description: "Index for text search" },
                      { icon: <FiCode />, title: "Geospatial", description: "Index for geospatial queries" },
                      { icon: <FiCode />, title: "Hashed", description: "Index for hash-based sharding" },
                      { icon: <FiCode />, title: "Wildcard", description: "Index on all fields matching pattern" },
                      { icon: <FiCode />, title: "Unique", description: "Ensures unique values in indexed field" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* Index Properties */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Index Properties</h4>
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
                            Property
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
                          { property: 'Unique', description: 'Ensures uniqueness of indexed field values', example: '{ unique: true }' },
                          { property: 'Partial', description: 'Index only documents that match filter', example: '{ partialFilterExpression: { age: { $gt: 25 } } }' },
                          { property: 'Sparse', description: 'Index only documents with the field', example: '{ sparse: true }' },
                          { property: 'TTL', description: 'Automatically remove documents after time', example: '{ expireAfterSeconds: 3600 }' },
                          { property: 'Collation', description: 'Language-specific rules for string comparison', example: '{ collation: { locale: "en", strength: 2 } }' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.property}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
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
                        <p className="font-semibold text-yellow-800">Performance Impact:</p>
                        <p className="text-yellow-700">While indexes improve query performance, they add overhead for write operations. Create indexes carefully based on your query patterns.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Aggregation Section */}
          <section id="aggregation" className="mb-12" ref={aggregationRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Aggregation
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-500" /> MongoDB Aggregation
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The aggregation framework provides powerful data processing capabilities. It processes data records and returns computed results through a pipeline of stages.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.aggregationExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.aggregationExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.aggregationExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Aggregation Stages */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Aggregation Stages</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "$match", description: "Filters documents (like find())" },
                      { icon: <FiCode />, title: "$group", description: "Groups documents by expression" },
                      { icon: <FiCode />, title: "$sort", description: "Sorts documents by fields" },
                      { icon: <FiCode />, title: "$project", description: "Reshapes documents (like select)" },
                      { icon: <FiCode />, title: "$limit", description: "Limits number of documents" },
                      { icon: <FiCode />, title: "$skip", description: "Skips number of documents" },
                      { icon: <FiCode />, title: "$lookup", description: "Performs a left outer join" },
                      { icon: <FiCode />, title: "$unwind", description: "Deconstructs an array field" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* Aggregation Operators */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Aggregation Operators</h4>
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
                            Category
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Operators
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { category: 'Arithmetic', operators: '$add, $subtract, $multiply, $divide', description: 'Perform math operations' },
                          { category: 'Comparison', operators: '$eq, $ne, $gt, $lt, $gte, $lte', description: 'Compare values' },
                          { category: 'Logical', operators: '$and, $or, $not, $nor', description: 'Logical operations' },
                          { category: 'Array', operators: '$size, $slice, $concatArrays', description: 'Array operations' },
                          { category: 'Date', operators: '$year, $month, $dayOfMonth', description: 'Date operations' },
                          { category: 'String', operators: '$concat, $substr, $toLower', description: 'String operations' },
                          { category: 'Accumulators', operators: '$sum, $avg, $min, $max', description: 'Used in $group stage' },
                          { category: 'Conditional', operators: '$cond, $ifNull, $switch', description: 'Conditional logic' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.operators}</td>
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

          {/* Performance Section */}
          <section id="performance" className="mb-12" ref={performanceRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiZap className="mr-3" /> Performance
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2 text-blue-500" /> MongoDB Performance
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    MongoDB performance can be optimized through proper schema design, indexing, query optimization, and hardware configuration.
                  </p>

                  {/* Performance Techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Performance Optimization Techniques</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Proper Indexing", description: "Create indexes based on query patterns" },
                      { icon: <FiCode />, title: "Query Optimization", description: "Use explain() to analyze queries" },
                      { icon: <FiCode />, title: "Schema Design", description: "Optimize schema for read/write patterns" },
                      { icon: <FiCode />, title: "Sharding", description: "Distribute data across multiple servers" },
                      { icon: <FiCode />, title: "Caching", description: "Implement application-level caching" },
                      { icon: <FiCode />, title: "Connection Pooling", description: "Reuse database connections" },
                      { icon: <FiCode />, title: "Read Preference", description: "Route reads to secondaries if appropriate" },
                      { icon: <FiCode />, title: "Write Concern", description: "Balance durability vs performance" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* Performance Tools */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Performance Analysis Tools</h4>
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
                            Tool/Method
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
                          { tool: 'explain()', description: 'Analyzes query execution plan', example: 'db.collection.find(...).explain("executionStats")' },
                          { tool: 'mongostat', description: 'Real-time database statistics', example: 'mongostat --host localhost' },
                          { tool: 'mongotop', description: 'Tracks read/write activity', example: 'mongotop --host localhost' },
                          { tool: 'Database Profiler', description: 'Logs slow operations', example: 'db.setProfilingLevel(1, 100)' },
                          { tool: 'Current Operations', description: 'Views running operations', example: 'db.currentOp()' },
                          { tool: 'Server Status', description: 'General database metrics', example: 'db.serverStatus()' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.tool}</td>
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

          {/* Security Section */}
          <section id="security" className="mb-12" ref={securityRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaShieldAlt className="mr-3" /> Security
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaShieldAlt className="mr-2 text-blue-500" /> MongoDB Security
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    MongoDB provides several features to help secure your database, including authentication, authorization, encryption, and auditing.
                  </p>

                  {/* Security Features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiUser />, title: "Authentication", description: "Verify identity of users" },
                      { icon: <FiUser />, title: "Authorization", description: "Control access to resources" },
                      { icon: <FiCode />, title: "Encryption", description: "Protect data at rest and in transit" },
                      { icon: <FiCode />, title: "Auditing", description: "Track system activity" },
                      { icon: <FiCode />, title: "Network Isolation", description: "Restrict network access" },
                      { icon: <FiCode />, title: "Role-Based Access", description: "Granular permissions" },
                      { icon: <FiCode />, title: "LDAP Integration", description: "Enterprise authentication" },
                      { icon: <FiCode />, title: "Field-Level Encryption", description: "Client-side encryption" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* Security Best Practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Best Practices</h4>
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
                            Practice
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Implementation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { practice: 'Enable Access Control', description: 'Require authentication', implementation: 'mongod --auth' },
                          { practice: 'Use Strong Passwords', description: 'Complex credentials for users', implementation: 'Create users with secure passwords' },
                          { practice: 'Role-Based Access', description: 'Least privilege principle', implementation: 'Define custom roles with specific privileges' },
                          { practice: 'Encrypt Communication', description: 'TLS/SSL for network traffic', implementation: 'Configure net.ssl options' },
                          { practice: 'Encrypt Data at Rest', description: 'Protect stored data', implementation: 'Use WiredTiger encryption' },
                          { practice: 'Network Isolation', description: 'Restrict network exposure', implementation: 'Bind to specific IPs, firewalls' },
                          { practice: 'Regular Updates', description: 'Patch security vulnerabilities', implementation: 'Keep MongoDB updated' },
                          { practice: 'Audit Logging', description: 'Track system activity', implementation: 'Enable database auditing' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.practice}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.implementation}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Deployment Section */}
          <section id="deployment" className="mb-12" ref={deploymentRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200 hover:border-green-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Deployment
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaServer className="mr-2 text-blue-500" /> MongoDB Deployment
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    MongoDB can be deployed in various configurations depending on your requirements for availability, scalability, and performance.
                  </p>

                  {/* Deployment Options */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Deployment Options</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaServer />, title: "Standalone", description: "Single server deployment" },
                      { icon: <FaServer />, title: "Replica Set", description: "High availability with automatic failover" },
                      { icon: <FaServer />, title: "Sharded Cluster", description: "Horizontal scaling for large datasets" },
                      { icon: <FaGlobe />, title: "Atlas", description: "Fully managed MongoDB as a service" },
                      { icon: <FaGlobe />, title: "On-Premises", description: "Self-managed in your data center" },
                      { icon: <FaGlobe />, title: "Hybrid", description: "Combination of cloud and on-premises" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
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

                  {/* Replica Set Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Replica Set Configuration</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// Initialize a replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb0.example.net:27017" },
    { _id: 1, host: "mongodb1.example.net:27017" },
    { _id: 2, host: "mongodb2.example.net:27017" }
  ]
})

// Check replica set status
rs.status()`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// Initialize a replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb0.example.net:27017" },
    { _id: 1, host: "mongodb1.example.net:27017" },
    { _id: 2, host: "mongodb2.example.net:27017" }
  ]
})

// Check replica set status
rs.status()`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Initialize a replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb0.example.net:27017" },
    { _id: 1, host: "mongodb1.example.net:27017" },
    { _id: 2, host: "mongodb2.example.net:27017" }
  ]
})

// Check replica set status
rs.status()` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Sharding Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Sharding Configuration</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`// Add shards to the cluster
sh.addShard("rs0/mongodb0.example.net:27017")
sh.addShard("rs1/mongodb1.example.net:27017")

// Enable sharding for a database
sh.enableSharding("myDatabase")

// Shard a collection
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })`}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(`// Add shards to the cluster
sh.addShard("rs0/mongodb0.example.net:27017")
sh.addShard("rs1/mongodb1.example.net:27017")

// Enable sharding for a database
sh.enableSharding("myDatabase")

// Shard a collection
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Add shards to the cluster
sh.addShard("rs0/mongodb0.example.net:27017")
sh.addShard("rs1/mongodb1.example.net:27017")

// Enable sharding for a database
sh.enableSharding("myDatabase")

// Shard a collection
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })` ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Transactions Example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Transactions Example</h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{mongoExamples.transactionExample}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(mongoExamples.transactionExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === mongoExamples.transactionExample ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Deployment Considerations */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Deployment Considerations</h4>
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
                            Factor
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Standalone
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Replica Set
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sharded Cluster
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { factor: 'Availability', standalone: 'Low', replicaSet: 'High', shardedCluster: 'High' },
                          { factor: 'Scalability', standalone: 'Vertical only', replicaSet: 'Vertical only', shardedCluster: 'Horizontal' },
                          { factor: 'Complexity', standalone: 'Low', replicaSet: 'Medium', shardedCluster: 'High' },
                          { factor: 'Use Case', standalone: 'Development', replicaSet: 'Production', shardedCluster: 'Large datasets' },
                          { factor: 'Maintenance', standalone: 'Simple', replicaSet: 'Moderate', shardedCluster: 'Complex' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-green-50' : 'bg-green-50 hover:bg-green-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.factor}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.standalone}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.replicaSet}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.shardedCluster}</td>
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
                      <FaDatabase />
                    </motion.div>
                    MongoDB Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to MongoDB</p>
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
                  &copy; {new Date().getFullYear()} MongoDB Notes. All rights reserved.
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