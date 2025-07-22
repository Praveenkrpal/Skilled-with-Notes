import React, { useState, useEffect } from 'react';
import { FaHtml5, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp, FaCode, FaTable, FaList, FaLink, FaImage, FaFileAlt, FaCheck, FaGlobe, FaServer, FaLayerGroup, FaTags, FaRegSmile, FaMobileAlt, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { FiClock, FiCode, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function HTML() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('html-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [structureRef, structureInView] = useInView({ threshold: 0.1 });
  const [elementsRef, elementsInView] = useInView({ threshold: 0.1 });
  const [attributesRef, attributesInView] = useInView({ threshold: 0.1 });
  const [headingsRef, headingsInView] = useInView({ threshold: 0.1 });
  const [paragraphsRef, paragraphsInView] = useInView({ threshold: 0.1 });
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });
  const [imagesRef, imagesInView] = useInView({ threshold: 0.1 });
  const [listsRef, listsInView] = useInView({ threshold: 0.1 });
  const [tablesRef, tablesInView] = useInView({ threshold: 0.1 });
  const [formsRef, formsInView] = useInView({ threshold: 0.1 });
  const [semanticRef, semanticInView] = useInView({ threshold: 0.1 });
  const [multimediaRef, multimediaInView] = useInView({ threshold: 0.1 });
  const [accessibilityRef, accessibilityInView] = useInView({ threshold: 0.1 });
  const [metaTagsRef, metaTagsInView] = useInView({ threshold: 0.1 });
  const [apisRef, apisInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'html-introduction', inView: introInView },
      { id: 'basic-structure', inView: structureInView },
      { id: 'elements-tags', inView: elementsInView },
      { id: 'attributes', inView: attributesInView },
      { id: 'headings', inView: headingsInView },
      { id: 'paragraphs', inView: paragraphsInView },
      { id: 'links', inView: linksInView },
      { id: 'images', inView: imagesInView },
      { id: 'lists', inView: listsInView },
      { id: 'tables', inView: tablesInView },
      { id: 'forms', inView: formsInView },
      { id: 'semantic', inView: semanticInView },
      { id: 'multimedia', inView: multimediaInView },
      { id: 'accessibility', inView: accessibilityInView },
      { id: 'meta-tags', inView: metaTagsInView },
      { id: 'html5-apis', inView: apisInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, structureInView, elementsInView, attributesInView,
    headingsInView, paragraphsInView, linksInView, imagesInView,
    listsInView, tablesInView, formsInView, semanticInView,
    multimediaInView, accessibilityInView, metaTagsInView, apisInView
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
    { id: 'html-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'basic-structure', label: 'Basic Structure', icon: <FiCode className="mr-2" /> },
    { id: 'elements-tags', label: 'Elements & Tags', icon: <FaTags className="mr-2" /> },
    { id: 'attributes', label: 'Attributes', icon: <FiLayout className="mr-2" /> },
    { id: 'headings', label: 'Headings', icon: <FaList className="mr-2" /> },
    { id: 'paragraphs', label: 'Paragraphs', icon: <FaList className="mr-2" /> },
    { id: 'links', label: 'Links', icon: <FaLink className="mr-2" /> },
    { id: 'images', label: 'Images', icon: <FaImage className="mr-2" /> },
    { id: 'lists', label: 'Lists', icon: <FaList className="mr-2" /> },
    { id: 'tables', label: 'Tables', icon: <FaTable className="mr-2" /> },
    { id: 'forms', label: 'Forms', icon: <FaFileAlt className="mr-2" /> },
    { id: 'semantic', label: 'Semantic HTML', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'multimedia', label: 'Multimedia', icon: <FaImage className="mr-2" /> },
    { id: 'meta-tags', label: 'Meta Tags', icon: <FaSearch className="mr-2" /> },
    { id: 'html5-apis', label: 'HTML5 APIs', icon: <FiCpu className="mr-2" /> },
    { id: 'accessibility', label: 'Accessibility', icon: <FiUser className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Markup Language",
      description: "HTML provides the structure and content of web pages using markup tags",
      icon: <FiCode className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Document Structure",
      description: "Defines the hierarchical structure of web documents",
      icon: <FiLayout className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Platform Independent",
      description: "Works across all devices and browsers",
      icon: <FaGlobe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Semantic Meaning",
      description: "Modern HTML provides semantic meaning to content",
      icon: <FaLayerGroup className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Hyperlinks",
      description: "Enables linking between pages and resources",
      icon: <FaLink className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Multimedia Support",
      description: "Embed images, audio, video, and other media",
      icon: <FaImage className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Forms",
      description: "Collect user input with various form controls",
      icon: <FaFileAlt className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "APIs Integration",
      description: "Supports various HTML5 APIs for enhanced functionality",
      icon: <FiCpu className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // HTML Examples
  const htmlExamples = {
    basicStructure: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Page content goes here -->
  <h1>Hello World</h1>
</body>
</html>`,
    elementsTags: `<!-- Paragraph -->
<p>This is a paragraph.</p>

<!-- Heading -->
<h1>Main Heading</h1>

<!-- Image -->
<img src="image.jpg" alt="Description">

<!-- Link -->
<a href="https://example.com">Visit Example</a>

<!-- Div container -->
<div class="container">
  <!-- Content -->
</div>`,
    attributes: `<!-- Class attribute -->
<div class="container">...</div>

<!-- ID attribute -->
<section id="main-content">...</section>

<!-- Data attribute -->
<article data-author="John Doe">...</article>

<!-- Boolean attribute -->
<input type="checkbox" checked>

<!-- Multiple attributes -->
<img src="photo.jpg" alt="Description" width="200" height="100">`,
    headings: `<!-- HTML Headings -->
<h1>Main Heading (Most Important)</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 (Least Important)</h6>`,
    paragraphs: `<!-- Basic paragraph -->
<p>This is a paragraph of text. It can contain 
<strong>bold text</strong>, <em>italic text</em>, 
and <a href="#">links</a>.</p>

<!-- Line breaks -->
<p>This text has<br>a line break.</p>

<!-- Horizontal rule -->
<p>Section above</p>
<hr>
<p>Section below</p>`,
    links: `<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Link with title -->
<a href="https://example.com" title="Example Website">Example</a>

<!-- Link to page section -->
<a href="#section-id">Jump to Section</a>

<!-- Email link -->
<a href="mailto:email@example.com">Email Us</a>

<!-- Telephone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener">Open in New Tab</a>`,
    images: `<!-- Basic image -->
<img src="image.jpg" alt="Description">

<!-- Image with dimensions -->
<img src="photo.png" alt="Photo" width="400" height="300">

<!-- Responsive image -->
<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
     src="medium.jpg" alt="Responsive image">

<!-- Figure with caption -->
<figure>
  <img src="art.jpg" alt="Artwork">
  <figcaption>Beautiful artwork by artist</figcaption>
</figure>`,
    lists: `<!-- Unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

<!-- Nested list -->
<ul>
  <li>Main item
    <ul>
      <li>Sub item</li>
    </ul>
  </li>
</ul>`,
    tables: `<!-- Basic table -->
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>

<!-- Table with semantic elements -->
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$100</td>
    </tr>
  </tfoot>
</table>

<!-- Table with colspan/rowspan -->
<table>
  <tr>
    <th colspan="2">Combined Header</th>
  </tr>
  <tr>
    <td rowspan="2">Combined Cell</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
  </tr>
</table>`,
    forms: `<!-- Basic form -->
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8">
  
  <button type="submit">Submit</button>
</form>

<!-- Radio buttons -->
<fieldset>
  <legend>Gender</legend>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
</fieldset>

<!-- Checkboxes -->
<label>
  <input type="checkbox" name="subscribe"> Subscribe to newsletter
</label>

<!-- Select dropdown -->
<select name="country">
  <option value="">Select country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</select>

<!-- Textarea -->
<textarea name="message" rows="4" cols="50"></textarea>`,
    semantic: `<!-- Semantic structure -->
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>...</ul>
  </aside>
</main>

<footer>
  <p>&copy; 2023 Company</p>
</footer>`,
    multimedia: `<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>

<!-- Video -->
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support video.
</video>

<!-- YouTube embed -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  frameborder="0" allowfullscreen></iframe>`,
    accessibility: `<!-- Alt text for images -->
<img src="logo.png" alt="Company Logo">

<!-- ARIA attributes -->
<button aria-label="Close">X</button>

<!-- Semantic HTML -->
<nav aria-label="Main navigation">...</nav>

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to content</a>

<!-- Proper heading structure -->
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Labeling form controls -->
<label for="search">Search:</label>
<input type="text" id="search" name="search">`,
    metaTags: `<!-- Character encoding -->
<meta charset="UTF-8">

<!-- Viewport for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Page description -->
<meta name="description" content="A comprehensive guide to HTML">

<!-- Keywords (less important now) -->
<meta name="keywords" content="HTML, web development, coding">

<!-- Author -->
<meta name="author" content="John Doe">

<!-- Refresh/redirect -->
<meta http-equiv="refresh" content="30">

<!-- Social media meta tags (Open Graph) -->
<meta property="og:title" content="HTML Guide">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com">
<meta property="og:image" content="image.jpg">`,
    html5Apis: `<!-- Geolocation API -->
<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
                " Longitude: " + position.coords.longitude);
  }
</script>

<!-- Local Storage -->
<script>
  // Store data
  localStorage.setItem("username", "JohnDoe");
  
  // Retrieve data
  const user = localStorage.getItem("username");
</script>

<!-- Canvas -->
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>

<!-- Drag and Drop -->
<div id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div id="draggable" draggable="true" ondragstart="drag(event)"></div>

<!-- Web Workers -->
<script>
  const worker = new Worker("worker.js");
  worker.postMessage("Start working");
  worker.onmessage = function(event) {
    console.log("Worker says: " + event.data);
  };
</script>`
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
              <FaHtml5 className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              HTML Notes
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
                      <FaHtml5 className="text-blue-600" />
                    </motion.div>
                    HTML Topics
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
                        {React.cloneElement(item.icon, { className: `mr-2 text-blue-600 group-hover:text-blue-700 transition-colors ${activeSection === item.id ? 'text-blue-700' : ''}` })}
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
          <section id="html-introduction" className="mb-12" ref={introRef}>
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
                  Introduction to HTML
                </h2>
              </div>

              <div className="p-6">
                {/* What is HTML card */}
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is HTML?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It defines the structure and content of a webpage using a system of tags and attributes.
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
                        <p className="text-yellow-700">HTML was created by Tim Berners-Lee in 1991 and has evolved through HTML 2.0, HTML 3.2, HTML 4.01, XHTML, and HTML5.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* HTML Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic HTML Structure
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.basicStructure}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.basicStructure ? 'Copied!' : 'Copy'}
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

          {/* Basic Structure Section */}
          <section id="basic-structure" className="mb-12" ref={structureRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCode className="mr-3" /> Basic Structure
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCode className="mr-2 text-blue-500" /> HTML Document Structure
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every HTML document has a specific structure that includes several essential elements. These elements provide metadata and define the content structure.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.basicStructure}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.basicStructure ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Document structure elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Document Structure Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<!DOCTYPE html>", description: "Declares the document type and HTML version (HTML5)." },
                      { icon: <FiCode />, title: "<html>", description: "Root element that wraps all content on the page." },
                      { icon: <FiCode />, title: "<head>", description: "Contains metadata, title, links to CSS/JS files." },
                      { icon: <FiCode />, title: "<body>", description: "Contains all visible page content." }
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

                  {/* Head section elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common &lt;head&gt; Elements</h4>
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
                            Element
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Purpose
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { element: '<title>', purpose: 'Sets the page title shown in browser tab' },
                          { element: '<meta charset="UTF-8">', purpose: 'Defines character encoding' },
                          { element: '<meta name="viewport">', purpose: 'Controls mobile viewport behavior' },
                          { element: '<meta name="description">', purpose: 'Provides page description for SEO' },
                          { element: '<link rel="stylesheet">', purpose: 'Links to external CSS files' },
                          { element: '<script>', purpose: 'Embeds or links to JavaScript' },
                          { element: '<style>', purpose: 'Contains internal CSS styles' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practice:</p>
                        <p className="text-blue-700">Always include the viewport meta tag for responsive design: <code className="font-mono text-sm">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Elements & Tags Section */}
          <section id="elements-tags" className="mb-12" ref={elementsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTags className="mr-3" /> Elements & Tags
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTags className="mr-2 text-blue-500" /> HTML Elements and Tags
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.elementsTags}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.elementsTags)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.elementsTags ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Element types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Element Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Block-level Elements", description: "Start on a new line and take full width (e.g., <div>, <p>, <h1>-<h6>)" },
                      { icon: <FiCode />, title: "Inline Elements", description: "Flow within text (e.g., <span>, <a>, <strong>, <em>)" },
                      { icon: <FiCode />, title: "Void Elements", description: "No closing tag (e.g., <img>, <br>, <input>)" },
                      { icon: <FiCode />, title: "Container Elements", description: "Can contain other elements (e.g., <div>, <section>)" }
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

                  {/* Common elements table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common HTML Elements</h4>
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
                            Element
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { element: '<div>', description: 'Generic container for flow content' },
                          { element: '<span>', description: 'Generic inline container' },
                          { element: '<p>', description: 'Paragraph' },
                          { element: '<a>', description: 'Hyperlink' },
                          { element: '<img>', description: 'Image' },
                          { element: '<ul>, <ol>, <li>', description: 'Unordered/ordered lists and list items' },
                          { element: '<table>, <tr>, <td>, <th>', description: 'Table elements' },
                          { element: '<form>, <input>, <button>', description: 'Form elements' },
                          { element: '<header>, <footer>', description: 'Semantic sectioning elements' },
                          { element: '<article>, <section>', description: 'Semantic content elements' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
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

          {/* Attributes Section */}
          <section id="attributes" className="mb-12" ref={attributesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Attributes
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiLayout className="mr-2 text-blue-500" /> HTML Attributes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like name="value".
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.attributes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.attributes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.attributes ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Attribute types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Attribute Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Global Attributes", description: "Can be used on all HTML elements (e.g., class, id, style, title)" },
                      { icon: <FiCode />, title: "Element-specific Attributes", description: "Only work on specific elements (e.g., href on <a>, src on <img>)" },
                      { icon: <FiCode />, title: "Boolean Attributes", description: "Presence represents true value (e.g., disabled, readonly, required)" },
                      { icon: <FiCode />, title: "Data Attributes", description: "Custom attributes prefixed with data- (e.g., data-user-id)" }
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

                  {/* Common attributes table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common HTML Attributes</h4>
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
                            Attribute
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
                          { attribute: 'class', description: 'Specifies one or more class names', example: 'class="container"' },
                          { attribute: 'id', description: 'Specifies a unique id for an element', example: 'id="main-content"' },
                          { attribute: 'style', description: 'Specifies inline CSS styles', example: 'style="color:red"' },
                          { attribute: 'title', description: 'Extra information about an element (tooltip)', example: 'title="Tooltip text"' },
                          { attribute: 'href', description: 'URL for links', example: 'href="https://example.com"' },
                          { attribute: 'src', description: 'URL for external resources', example: 'src="image.jpg"' },
                          { attribute: 'alt', description: 'Alternative text for images', example: 'alt="Description"' },
                          { attribute: 'disabled', description: 'Disables the element', example: 'disabled' },
                          { attribute: 'required', description: 'Makes form input required', example: 'required' },
                          { attribute: 'data-*', description: 'Custom data attributes', example: 'data-user-id="123"' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Use semantic class/id names that describe content or function, not presentation. For example, "main-nav" instead of "blue-box".</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Headings Section */}
          <section id="headings" className="mb-12" ref={headingsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Headings
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Headings
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags. &lt;h1&gt; defines the most important heading and &lt;h6&gt; defines the least important heading.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.headings}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.headings)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.headings ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Heading hierarchy */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Heading Hierarchy</h4>
                  <motion.div
                    className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="space-y-4">
                      <motion.h1
                        className="text-4xl font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 1
                      </motion.h1>
                      <motion.h2
                        className="text-3xl font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 2
                      </motion.h2>
                      <motion.h3
                        className="text-2xl font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 3
                      </motion.h3>
                      <motion.h4
                        className="text-xl font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 4
                      </motion.h4>
                      <motion.h5
                        className="text-lg font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 5
                      </motion.h5>
                      <motion.h6
                        className="text-base font-bold text-gray-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        Heading 6
                      </motion.h6>
                    </div>
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
                        <p className="font-semibold text-yellow-800">SEO Tip:</p>
                        <p className="text-yellow-700">Search engines use headings to index the structure and content of your web pages. Use headings to show document structure, not just to make text big or bold.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Paragraphs Section */}
          <section id="paragraphs" className="mb-12" ref={paragraphsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Paragraphs
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Paragraphs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The HTML &lt;p&gt; element defines a paragraph. Browsers automatically add some margin before and after each paragraph.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.paragraphs}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.paragraphs)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.paragraphs ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Text formatting */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Text Formatting</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<strong> or <b>", description: "Bold text (semantic vs presentational)" },
                      { icon: <FiCode />, title: "<em> or <i>", description: "Italic text (semantic vs presentational)" },
                      { icon: <FiCode />, title: "<u>", description: "Underlined text" },
                      { icon: <FiCode />, title: "<mark>", description: "Highlighted text" },
                      { icon: <FiCode />, title: "<small>", description: "Smaller text" },
                      { icon: <FiCode />, title: "<br>", description: "Line break" },
                      { icon: <FiCode />, title: "<hr>", description: "Horizontal rule (thematic break)" },
                      { icon: <FiCode />, title: "<sup> and <sub>", description: "Superscript and subscript" }
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

          {/* Links Section */}
          <section id="links" className="mb-12" ref={linksRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLink className="mr-3" /> Links
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> HTML Links
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML links are defined with the &lt;a&gt; tag. The href attribute specifies the destination address.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.links}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.links)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.links ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Link attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Link Attributes</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "target", description: "Where to open the linked document (_blank, _self, _parent, _top)" },
                      { icon: <FiCode />, title: "rel", description: "Relationship between documents (noopener, noreferrer, nofollow)" },
                      { icon: <FiCode />, title: "download", description: "Download target instead of navigating" },
                      { icon: <FiCode />, title: "hreflang", description: "Language of the linked document" }
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

                  {/* Link types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Link Types</h4>
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
                            Example
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { type: 'Absolute URL', example: 'href="https://example.com"', description: 'Full web address' },
                          { type: 'Relative URL', example: 'href="about.html"', description: 'Relative to current page' },
                          { type: 'Page Section', example: 'href="#section-id"', description: 'Links to section on same page' },
                          { type: 'Email', example: 'href="mailto:email@example.com"', description: 'Opens email client' },
                          { type: 'Telephone', example: 'href="tel:+1234567890"', description: 'Opens phone dialer on mobile' },
                          { type: 'JavaScript', example: 'href="javascript:void(0)"', description: 'Executes JavaScript' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Security Best Practice:</p>
                        <p className="text-blue-700">When using target="_blank", always include rel="noopener noreferrer" to prevent potential security vulnerabilities.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Images Section */}
          <section id="images" className="mb-12" ref={imagesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaImage className="mr-3" /> Images
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaImage className="mr-2 text-blue-500" /> HTML Images
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The HTML &lt;img&gt; tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.images}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.images)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.images ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Image attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Image Attributes</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "src", description: "Path to the image file (required)" },
                      { icon: <FiCode />, title: "alt", description: "Alternative text (required for accessibility)" },
                      { icon: <FiCode />, title: "width/height", description: "Image dimensions in pixels" },
                      { icon: <FiCode />, title: "srcset/sizes", description: "Responsive images with different resolutions" }
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

                  {/* Image formats */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Image Formats</h4>
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
                            Format
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Extension
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Best For
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { format: 'JPEG', extension: '.jpg, .jpeg', bestFor: 'Photographs, complex images' },
                          { format: 'PNG', extension: '.png', bestFor: 'Graphics with transparency' },
                          { format: 'GIF', extension: '.gif', bestFor: 'Simple animations' },
                          { format: 'SVG', extension: '.svg', bestFor: 'Vector graphics, logos' },
                          { format: 'WebP', extension: '.webp', bestFor: 'Modern format with better compression' },
                          { format: 'AVIF', extension: '.avif', bestFor: 'Next-gen format with excellent compression' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.format}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.extension}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.bestFor}</td>
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
                        <p className="font-semibold text-yellow-800">Accessibility:</p>
                        <p className="text-yellow-700">Always provide meaningful alt text for images. For decorative images, use alt="" (empty string).</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Lists Section */}
          <section id="lists" className="mb-12" ref={listsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Lists
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Lists
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML lists allow web developers to group a set of related items in lists. There are three types of lists in HTML.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.lists}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.lists)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.lists ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* List types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">List Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Unordered List
                      </h5>
                      <p className="text-sm text-gray-700">Bulleted list using &lt;ul&gt; and &lt;li&gt;</p>
                      <ul className="mt-2 pl-5 list-disc text-sm text-gray-700">
                        <li>First item</li>
                        <li>Second item</li>
                      </ul>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Ordered List
                      </h5>
                      <p className="text-sm text-gray-700">Numbered list using &lt;ol&gt; and &lt;li&gt;</p>
                      <ol className="mt-2 pl-5 list-decimal text-sm text-gray-700">
                        <li>First step</li>
                        <li>Second step</li>
                      </ol>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Description List
                      </h5>
                      <p className="text-sm text-gray-700">Term-description pairs using &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</p>
                      <dl className="mt-2 text-sm text-gray-700">
                        <dt className="font-semibold">HTML</dt>
                        <dd className="ml-4">HyperText Markup Language</dd>
                      </dl>
                    </motion.div>
                  </motion.div>

                  {/* List attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">List Attributes</h4>
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
                            Attribute
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Element
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { attribute: 'type', element: '<ol>', description: 'Numbering type (1, A, a, I, i)' },
                          { attribute: 'start', element: '<ol>', description: 'Starting number' },
                          { attribute: 'reversed', element: '<ol>', description: 'Reverse numbering' },
                          { attribute: 'value', element: '<li>', description: 'Set item number in ordered list' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
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

          {/* Tables Section */}
          <section id="tables" className="mb-12" ref={tablesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTable className="mr-3" /> Tables
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTable className="mr-2 text-blue-500" /> HTML Tables
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML tables allow web developers to arrange data into rows and columns. Tables should be used for tabular data, not for page layout.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.tables}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.tables)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.tables ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Table elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Table Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<table>", description: "Defines the table container" },
                      { icon: <FiCode />, title: "<tr>", description: "Defines a table row" },
                      { icon: <FiCode />, title: "<td>", description: "Defines a table cell" },
                      { icon: <FiCode />, title: "<th>", description: "Defines a header cell" },
                      { icon: <FiCode />, title: "<thead>", description: "Groups header content" },
                      { icon: <FiCode />, title: "<tbody>", description: "Groups body content" },
                      { icon: <FiCode />, title: "<tfoot>", description: "Groups footer content" },
                      { icon: <FiCode />, title: "<caption>", description: "Defines a table caption" }
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

                  {/* Table attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Table Attributes</h4>
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
                            Attribute
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Element
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { attribute: 'colspan', element: '<td>, <th>', description: 'Number of columns a cell spans' },
                          { attribute: 'rowspan', element: '<td>, <th>', description: 'Number of rows a cell spans' },
                          { attribute: 'scope', element: '<th>', description: 'Associates header with cells (col, row)' },
                          { attribute: 'headers', element: '<td>', description: 'Associates cell with headers' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Accessibility:</p>
                        <p className="text-blue-700">Use proper table structure with &lt;thead&gt;, &lt;tbody&gt;, &lt;th scope&gt; for screen readers. Avoid using tables for layout purposes.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Forms Section */}
          <section id="forms" className="mb-12" ref={formsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaFileAlt className="mr-3" /> Forms
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaFileAlt className="mr-2 text-blue-500" /> HTML Forms
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML forms are used to collect user input. The form element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.forms}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.forms)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.forms ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Form elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Form Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<form>", description: "Container for form elements" },
                      { icon: <FiCode />, title: "<input>", description: "Various input types (text, email, password, etc.)" },
                      { icon: <FiCode />, title: "<label>", description: "Label for form controls" },
                      { icon: <FiCode />, title: "<select>", description: "Dropdown list" },
                      { icon: <FiCode />, title: "<textarea>", description: "Multi-line text input" },
                      { icon: <FiCode />, title: "<button>", description: "Clickable button" },
                      { icon: <FiCode />, title: "<fieldset>", description: "Groups related elements" },
                      { icon: <FiCode />, title: "<legend>", description: "Caption for fieldset" }
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

                  {/* Input types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Input Types</h4>
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
                          { type: 'text', description: 'Single-line text input', example: '<input type="text">' },
                          { type: 'password', description: 'Masked text input', example: '<input type="password">' },
                          { type: 'email', description: 'Email address input', example: '<input type="email">' },
                          { type: 'number', description: 'Numeric input', example: '<input type="number">' },
                          { type: 'tel', description: 'Telephone number input', example: '<input type="tel">' },
                          { type: 'url', description: 'URL input', example: '<input type="url">' },
                          { type: 'date', description: 'Date picker', example: '<input type="date">' },
                          { type: 'checkbox', description: 'Checkbox', example: '<input type="checkbox">' },
                          { type: 'radio', description: 'Radio button', example: '<input type="radio">' },
                          { type: 'file', description: 'File upload', example: '<input type="file">' },
                          { type: 'submit', description: 'Submit button', example: '<input type="submit">' },
                          { type: 'reset', description: 'Reset button', example: '<input type="reset">' },
                          { type: 'button', description: 'Clickable button', example: '<input type="button">' },
                          { type: 'color', description: 'Color picker', example: '<input type="color">' },
                          { type: 'range', description: 'Slider control', example: '<input type="range">' },
                          { type: 'search', description: 'Search field', example: '<input type="search">' },
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

                  {/* Form attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Form Attributes</h4>
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
                            Attribute
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Element
                          </th>
                          { /* ... rest of the form attributes table ... */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { attribute: 'action', element: '<form>', description: 'Where to send form data' },
                          { attribute: 'method', element: '<form>', description: 'HTTP method (GET or POST)' },
                          { attribute: 'name', element: '<form>, <input>', description: 'Name for form or control' },
                          { attribute: 'for', element: '<label>', description: 'Associates label with control' },
                          { attribute: 'placeholder', element: '<input>, <textarea>', description: 'Hint text' },
                          { attribute: 'required', element: '<input>, <select>, <textarea>', description: 'Field is mandatory' },
                          { attribute: 'disabled', element: '<input>, <button>', description: 'Disables the control' },
                          { attribute: 'readonly', element: '<input>', description: 'Read-only input' },
                          { attribute: 'min/max', element: '<input type="number">', description: 'Minimum/maximum values' },
                          { attribute: 'minlength/maxlength', element: '<input>, <textarea>', description: 'Minimum/maximum length' },
                          { attribute: 'pattern', element: '<input>', description: 'Regex pattern for validation' },
                          { attribute: 'autocomplete', element: '<form>, <input>', description: 'Enable/disable autocomplete' },
                          { attribute: 'multiple', element: '<input type="file">', description: 'Allow multiple files' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Always use &lt;label&gt; elements for form controls. For better accessibility, either wrap the control in the label or use the for attribute to associate them.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Semantic HTML Section */}
          <section id="semantic" className="mb-12" ref={semanticRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Semantic HTML
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-500" /> Semantic HTML
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Semantic HTML introduces meaning to the web page rather than just presentation. It clearly defines its content to both the browser and the developer.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.semantic}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.semantic)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.semantic ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Semantic elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Semantic Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<header>", description: "Introductory content or navigation" },
                      { icon: <FiCode />, title: "<nav>", description: "Navigation links" },
                      { icon: <FiCode />, title: "<main>", description: "Dominant content of the document" },
                      { icon: <FiCode />, title: "<article>", description: "Self-contained composition" },
                      { icon: <FiCode />, title: "<section>", description: "Thematic grouping of content" },
                      { icon: <FiCode />, title: "<aside>", description: "Content indirectly related to main content" },
                      { icon: <FiCode />, title: "<footer>", description: "Footer for its nearest sectioning content" },
                      { icon: <FiCode />, title: "<figure> & <figcaption>", description: "Self-contained content with caption" }
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

                  {/* Benefits */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Benefits of Semantic HTML</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiUser />, title: "Accessibility", description: "Screen readers can better interpret page structure" },
                      { icon: <FaSearch />, title: "SEO", description: "Search engines understand content better" },
                      { icon: <FiCode />, title: "Maintainability", description: "Easier to understand and maintain code" },
                      { icon: <FiLayout />, title: "Future Compatibility", description: "More likely to work with future technologies" }
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

          {/* Multimedia Section */}
          <section id="multimedia" className="mb-12" ref={multimediaRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaImage className="mr-3" /> Multimedia
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaImage className="mr-2 text-blue-500" /> HTML Multimedia
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML provides elements for embedding multimedia content such as audio, video, and external content like YouTube videos.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.multimedia}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.multimedia)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.multimedia ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Multimedia elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Multimedia Elements</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "<audio>", description: "Embeds sound content" },
                      { icon: <FiCode />, title: "<video>", description: "Embeds video content" },
                      { icon: <FiCode />, title: "<source>", description: "Multiple media sources" },
                      { icon: <FiCode />, title: "<track>", description: "Text tracks for media (subtitles)" },
                      { icon: <FiCode />, title: "<iframe>", description: "Embeds external content" },
                      { icon: <FiCode />, title: "<object>", description: "Embeds external resource" },
                      { icon: <FiCode />, title: "<embed>", description: "Embeds external application" },
                      { icon: <FiCode />, title: "<picture>", description: "Responsive images with fallbacks" }
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

          {/* Meta Tags Section */}
          <section id="meta-tags" className="mb-12" ref={metaTagsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaSearch className="mr-3" /> Meta Tags
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaSearch className="mr-2 text-blue-500" /> HTML Meta Tags
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Meta tags provide metadata about the HTML document that is used by browsers, search engines, and other web services.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.metaTags}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.metaTags)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.metaTags ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Common meta tags */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Meta Tags</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "charset", description: "Defines character encoding (UTF-8 recommended)" },
                      { icon: <FiCode />, title: "viewport", description: "Controls responsive behavior on mobile devices" },
                      { icon: <FiCode />, title: "description", description: "Brief summary of page content for SEO" },
                      { icon: <FiCode />, title: "keywords", description: "Comma-separated list of keywords (less important now)" },
                      { icon: <FiCode />, title: "author", description: "Specifies the author of the document" },
                      { icon: <FiCode />, title: "refresh", description: "Redirects or refreshes the page after specified time" },
                      { icon: <FiCode />, title: "robots", description: "Controls search engine crawling and indexing" },
                      { icon: <FiCode />, title: "og: (Open Graph)", description: "Social media metadata for rich sharing" }
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practice:</p>
                        <p className="text-blue-700">Always include the viewport meta tag for responsive design and charset meta tag for proper character encoding.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* HTML5 APIs Section */}
          <section id="html5-apis" className="mb-12" ref={apisRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> HTML5 APIs
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2 text-blue-500" /> HTML5 APIs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML5 introduced several JavaScript APIs that enhance the capabilities of web applications, including geolocation, local storage, drag and drop, and more.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.html5Apis}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.html5Apis)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.html5Apis ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* HTML5 APIs */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">HTML5 APIs</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCpu />, title: "Geolocation API", description: "Access user's geographical location" },
                      { icon: <FiCpu />, title: "Local Storage", description: "Store data locally in the browser" },
                      { icon: <FiCpu />, title: "Canvas API", description: "Draw graphics programmatically" },
                      { icon: <FiCpu />, title: "Drag and Drop", description: "Native drag and drop functionality" },
                      { icon: <FiCpu />, title: "Web Workers", description: "Run scripts in background threads" },
                      { icon: <FiCpu />, title: "Web Sockets", description: "Full-duplex communication channels" },
                      { icon: <FiCpu />, title: "History API", description: "Manipulate browser history" },
                      { icon: <FiCpu />, title: "Web Components", description: "Create reusable custom elements" }
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
                        <p className="font-semibold text-yellow-800">Security Note:</p>
                        <p className="text-yellow-700">Some APIs like Geolocation require user permission. Always handle sensitive data with care and follow security best practices.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Accessibility Section */}
          <section id="accessibility" className="mb-12" ref={accessibilityRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiUser className="mr-3" /> Accessibility
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiUser className="mr-2 text-blue-500" /> HTML Accessibility
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.accessibility}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(htmlExamples.accessibility)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.accessibility ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Accessibility techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Accessibility Techniques</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Semantic HTML", description: "Use proper semantic elements for structure" },
                      { icon: <FiCode />, title: "Alt Text", description: "Descriptive alt text for images" },
                      { icon: <FiCode />, title: "ARIA", description: "ARIA attributes for complex widgets" },
                      { icon: <FiCode />, title: "Keyboard Navigation", description: "Ensure all functionality is keyboard accessible" },
                      { icon: <FiCode />, title: "Color Contrast", description: "Sufficient color contrast for readability" },
                      { icon: <FiCode />, title: "Form Labels", description: "Proper labeling of form controls" },
                      { icon: <FiCode />, title: "Skip Links", description: "Allow skipping to main content" },
                      { icon: <FiCode />, title: "Text Resizing", description: "Ensure text can be resized without breaking layout" }
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

                  {/* ARIA attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common ARIA Attributes</h4>
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
                            Attribute
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
                          { attribute: 'aria-label', description: 'Provides a label for the element', example: 'aria-label="Close"' },
                          { attribute: 'aria-labelledby', description: 'References another element as label', example: 'aria-labelledby="label-id"' },
                          { attribute: 'aria-describedby', description: 'References description text', example: 'aria-describedby="desc-id"' },
                          { attribute: 'aria-hidden', description: 'Hides element from screen readers', example: 'aria-hidden="true"' },
                          { attribute: 'aria-live', description: 'Indicates dynamic content updates', example: 'aria-live="polite"' },
                          { attribute: 'aria-required', description: 'Indicates required form input', example: 'aria-required="true"' },
                          { attribute: 'role', description: 'Defines the type of element', example: 'role="navigation"' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Use semantic HTML elements first before resorting to ARIA. ARIA should enhance, not replace, native semantics.</p>
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
                      <FaHtml5 />
                    </motion.div>
                    HTML Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to HTML</p>
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
                  &copy; {new Date().getFullYear()} HTML Notes. All rights reserved.
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