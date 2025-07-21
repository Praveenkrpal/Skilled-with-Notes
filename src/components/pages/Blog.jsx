import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Articles */}
        <div className="space-y-16">
          {/* HTML Article */}
          <motion.article
            id="html"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="h-64 md:h-auto relative">
              <img
                src="https://www.bitdegree.org/learn/storage/media/images/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg"
                alt="HTML"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Foundation of Web: HTML
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  HTML (HyperText Markup Language) is the standard markup
                  language for creating web pages and web applications. It
                  provides the structure and content of a webpage.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 p-4 rounded-lg mb-4"
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Key HTML Concepts
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Semantic HTML elements</li>
                    <li>Document structure and hierarchy</li>
                    <li>Forms and input elements</li>
                    <li>Accessibility best practices</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* CSS Article */}
          <motion.article
            id="css"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="order-2 h-64 md:h-auto relative">
              <img
                src="https://web.dev/static/css/image/hero-css.png"
                alt="CSS"
                className="absolute inset-0 w-full h-full object-contain bg-white"
              />
            </div>
            <div className="p-8 flex flex-col justify-center order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Styling the Web: CSS
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  CSS (Cascading Style Sheets) is used to style and layout web
                  pages — for example, to alter the font, color, size, and
                  spacing of your content.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid md:grid-cols-2 gap-4 mb-4"
                >
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      CSS Features
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Flexbox and Grid layout</li>
                      <li>Animations and transitions</li>
                      <li>Responsive design</li>
                      <li>Variables and custom properties</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* JavaScript Article */}
          <motion.article
            id="javascript"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="h-64 md:h-auto relative">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png"
                alt="JavaScript"
                className="absolute inset-0 w-full h-full object-contain bg-gray-100"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Web Interactivity: JavaScript
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  JavaScript is a programming language that enables interactive
                  web pages and is an essential part of web applications.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-yellow-50 p-4 rounded-lg mb-4"
                >
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                    JavaScript Concepts
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>ES6+ features</li>
                    <li>Asynchronous programming</li>
                    <li>DOM manipulation</li>
                    <li>Modules and bundlers</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Frontend vs Backend Article */}
          <motion.article
            id="frontend-backend"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="order-2 h-64 md:h-auto relative">
              <img
                src="https://flyaps.com/blog/content/images/2020/05/Frame-37-1.png"
                alt="Frontend vs Backend"
                className="absolute inset-0 w-full h-full object-contain bg-white"
              />
            </div>
            <div className="p-8 flex flex-col justify-center order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frontend vs Backend Development
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Understanding the difference between frontend and backend
                  development is crucial for web developers.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid md:grid-cols-2 gap-4 mb-4"
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      Frontend
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>User interface and experience</li>
                      <li>HTML, CSS, JavaScript</li>
                      <li>Frameworks like React, Vue, Angular</li>
                      <li>Client-side rendering</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Backend
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Server, application, and database</li>
                      <li>Node.js, Python, Ruby, Java</li>
                      <li>APIs and data processing</li>
                      <li>Authentication and security</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Databases Article */}
          <motion.article
            id="databases"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="h-64 md:h-auto relative">
              <img
                src="https://ingo.it/storage/2022/01/Cover-database.png"
                alt="Databases"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Understanding Databases
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Databases are organized collections of data that allow for
                  efficient storage, retrieval, and manipulation of information.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-purple-50 p-4 rounded-lg mb-4"
                >
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Database Types
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Relational (SQL) databases</li>
                    <li>NoSQL databases</li>
                    <li>Document databases</li>
                    <li>Key-value stores</li>
                    <li>Graph databases</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* SQL vs NoSQL Article */}
          <motion.article
            id="sql-nosql"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="order-2 h-64 md:h-auto relative">
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png"
                alt="SQL vs NoSQL"
                className="absolute inset-0 w-full h-full object-contain bg-white"
              />
            </div>
            <div className="p-8 flex flex-col justify-center order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                SQL vs NoSQL Databases
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The choice between SQL and NoSQL databases depends on your
                  application's specific requirements.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid md:grid-cols-2 gap-4 mb-4"
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      SQL Databases
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Structured data with schemas</li>
                      <li>Vertical scaling</li>
                      <li>ACID transactions</li>
                      <li>Examples: MySQL, PostgreSQL</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      NoSQL Databases
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Flexible schema</li>
                      <li>Horizontal scaling</li>
                      <li>BASE consistency model</li>
                      <li>Examples: MongoDB, Cassandra</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* MongoDB Article */}
          <motion.article
            id="mongodb"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="h-64 md:h-auto relative">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/0*BmLKgrU_qFtakYsB.png"
                alt="MongoDB"
                className="absolute inset-0 w-full h-full object-contain bg-gray-100"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                MongoDB: Document Database
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  MongoDB is a popular NoSQL database that stores data in
                  flexible, JSON-like documents.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-yellow-50 p-4 rounded-lg mb-4"
                >
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                    MongoDB Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Document-oriented storage</li>
                    <li>Indexing and rich queries</li>
                    <li>Replication and high availability</li>
                    <li>Horizontal scalability</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Node.js Article */}
          <motion.article
            id="nodejs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="order-2 h-64 md:h-auto relative">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/0*-hi_YN6201aadrIe.png"
                alt="Node.js"
                className="absolute inset-0 w-full h-full object-contain bg-gray-100"
              />
            </div>
            <div className="p-8 flex flex-col justify-center order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Node.js: JavaScript Runtime
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Node.js is a JavaScript runtime built on Chrome's V8
                  JavaScript engine that allows JavaScript to run on the server.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid md:grid-cols-2 gap-4 mb-4"
                >
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Node.js Features
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Non-blocking I/O</li>
                      <li>Event-driven architecture</li>
                      <li>NPM ecosystem</li>
                      <li>Single programming language</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      Common Uses
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>API servers</li>
                      <li>Real-time applications</li>
                      <li>Microservices</li>
                      <li>Scripting and tooling</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
