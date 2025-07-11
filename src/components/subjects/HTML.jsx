import React, { useState } from 'react';
import {
  FaHtml5, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaCode, FaTable, FaList, FaLink, FaImage, FaFileAlt,
  FaCheck, FaGlobe, FaServer, FaLayerGroup, FaTags
} from 'react-icons/fa';
import {
  FiClock, FiCode, FiLayout, FiNavigation, FiFeather,
  FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap
} from 'react-icons/fi';

export default function HTML() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

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
    // { id: 'forms', label: 'Forms', icon: <FaForm className="mr-2" /> },
    { id: 'semantic', label: 'Semantic HTML', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'multimedia', label: 'Multimedia', icon: <FaImage className="mr-2" /> },
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
      // icon: <FaForm className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
<input type="text" id="search" name="search">`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 w-full">
      {/* Header with animation */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg animate-gradient-x">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </button>

          <h1 className="text-2xl md:text-3xl font-bold flex items-center space-x-3">
            <FaHtml5 className="w-8 h-8 animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              HTML Notes
            </span>
          </h1>

          <button className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1">
            <FaArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline-block">Back</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar with animation */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 transition-all duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-blue-200 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-blue-800 flex items-center">
                <FaHtml5 className="mr-2 text-blue-600 animate-spin-slow" /> HTML Topics
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
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center group transform hover:translate-x-1"
                  >
                    {React.cloneElement(item.icon, { className: "mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" })}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 w-100">
          {/* Introduction Section */}
          <section id="html-introduction" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiClock className="mr-3 animate-pulse" /> Introduction to HTML
                </h2>
              </div>

              <div className="p-6">
                {/* What is HTML card */}
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400 animate-pulse" /> What is HTML?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It defines the structure and content of a webpage using a system of tags and attributes.
                  </p>

                  {/* Note box with animation */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 animate-bounce" />
                      <div>
                        <p className="font-semibold text-yellow-800">Note:</p>
                        <p className="text-yellow-700">HTML was created by Tim Berners-Lee in 1991 and has evolved through HTML 2.0, HTML 3.2, HTML 4.01, XHTML, and HTML5.</p>
                      </div>
                    </div>
                  </div>

                  {/* HTML Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic HTML Structure
                  </h4>
                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.basicStructure}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.basicStructure ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Key Features card */}
                  <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                    <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                      <FiZap className="mr-2 text-blue-500 animate-pulse" /> Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:shadow-md transform hover:-translate-y-1"
                        >
                          {feature.icon}
                          <div>
                            <strong className="font-semibold text-gray-800">{feature.title}:</strong>
                            <span className="text-gray-700"> {feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Structure Section */}
          <section id="basic-structure" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCode className="mr-3" /> Basic Structure
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCode className="mr-2 text-blue-500" /> HTML Document Structure
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every HTML document has a specific structure that includes several essential elements. These elements provide metadata and define the content structure.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.basicStructure}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.basicStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.basicStructure ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Document structure elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Document Structure Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;!DOCTYPE html&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Declares the document type and HTML version (HTML5).</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;html&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Root element that wraps all content on the page.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;head&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Contains metadata, title, links to CSS/JS files.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;body&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Contains all visible page content.</p>
                    </div>
                  </div>

                  {/* Head section elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common &lt;head&gt; Elements</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Best Practice:</p>
                        <p className="text-blue-700">Always include the viewport meta tag for responsive design: <code className="font-mono text-sm">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Elements & Tags Section */}
          <section id="elements-tags" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTags className="mr-3" /> Elements & Tags
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTags className="mr-2 text-blue-500" /> HTML Elements and Tags
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.elementsTags}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.elementsTags)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.elementsTags ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Element types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Element Types</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Block-level Elements
                      </h5>
                      <p className="text-sm text-gray-700">Start on a new line and take full width (e.g., &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Inline Elements
                      </h5>
                      <p className="text-sm text-gray-700">Flow within text (e.g., &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Void Elements
                      </h5>
                      <p className="text-sm text-gray-700">No closing tag (e.g., &lt;img&gt;, &lt;br&gt;, &lt;input&gt;)</p>
                    </div>
                  </div>

                  {/* Common elements table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common HTML Elements</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Attributes Section */}
          <section id="attributes" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Attributes
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiLayout className="mr-2 text-blue-500" /> HTML Attributes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like name="value".
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.attributes}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.attributes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.attributes ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Attribute types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Attribute Types</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Global Attributes
                      </h5>
                      <p className="text-sm text-gray-700">Can be used on all HTML elements (e.g., class, id, style, title)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Element-specific Attributes
                      </h5>
                      <p className="text-sm text-gray-700">Only work on specific elements (e.g., href on &lt;a&gt;, src on &lt;img&gt;)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Boolean Attributes
                      </h5>
                      <p className="text-sm text-gray-700">Presence represents true value (e.g., disabled, readonly, required)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Data Attributes
                      </h5>
                      <p className="text-sm text-gray-700">Custom attributes prefixed with data- (e.g., data-user-id)</p>
                    </div>
                  </div>

                  {/* Common attributes table */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common HTML Attributes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Use semantic class/id names that describe content or function, not presentation. For example, "main-nav" instead of "blue-box".</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Headings Section */}
          <section id="headings" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Headings
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Headings
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags. &lt;h1&gt; defines the most important heading and &lt;h6&gt; defines the least important heading.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.headings}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.headings)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.headings ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Heading hierarchy */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Heading Hierarchy</h4>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6 hover:border-blue-400 transition-all duration-200 transform hover:scale-101">
                    <div className="space-y-4">
                      <h1 className="text-4xl font-bold text-gray-800">Heading 1</h1>
                      <h2 className="text-3xl font-bold text-gray-800">Heading 2</h2>
                      <h3 className="text-2xl font-bold text-gray-800">Heading 3</h3>
                      <h4 className="text-xl font-bold text-gray-800">Heading 4</h4>
                      <h5 className="text-lg font-bold text-gray-800">Heading 5</h5>
                      <h6 className="text-base font-bold text-gray-800">Heading 6</h6>
                    </div>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 animate-bounce" />
                      <div>
                        <p className="font-semibold text-yellow-800">SEO Tip:</p>
                        <p className="text-yellow-700">Search engines use headings to index the structure and content of your web pages. Use headings to show document structure, not just to make text big or bold.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Paragraphs Section */}
          <section id="paragraphs" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Paragraphs
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Paragraphs
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The HTML &lt;p&gt; element defines a paragraph. Browsers automatically add some margin before and after each paragraph.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.paragraphs}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.paragraphs)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.paragraphs ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Text formatting */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Text Formatting</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;strong&gt; or &lt;b&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Bold text (semantic vs presentational)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;em&gt; or &lt;i&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Italic text (semantic vs presentational)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;u&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Underlined text</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;mark&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Highlighted text</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;small&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Smaller text</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;br&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Line break</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;hr&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Horizontal rule (thematic break)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section id="links" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLink className="mr-3" /> Links
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> HTML Links
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML links are defined with the &lt;a&gt; tag. The href attribute specifies the destination address.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.links}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.links)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.links ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Link attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Link Attributes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> target
                      </h5>
                      <p className="text-sm text-gray-700">Where to open the linked document (_blank, _self, _parent, _top)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> rel
                      </h5>
                      <p className="text-sm text-gray-700">Relationship between documents (noopener, noreferrer, nofollow)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> download
                      </h5>
                      <p className="text-sm text-gray-700">Download target instead of navigating</p>
                    </div>
                  </div>

                  {/* Link types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Link Types</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Security Best Practice:</p>
                        <p className="text-blue-700">When using target="_blank", always include rel="noopener noreferrer" to prevent potential security vulnerabilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Images Section */}
          <section id="images" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaImage className="mr-3" /> Images
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaImage className="mr-2 text-blue-500" /> HTML Images
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The HTML &lt;img&gt; tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.images}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.images)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.images ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Image attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Image Attributes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> src
                      </h5>
                      <p className="text-sm text-gray-700">Path to the image file (required)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> alt
                      </h5>
                      <p className="text-sm text-gray-700">Alternative text (required for accessibility)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> width/height
                      </h5>
                      <p className="text-sm text-gray-700">Image dimensions in pixels</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> srcset/sizes
                      </h5>
                      <p className="text-sm text-gray-700">Responsive images with different resolutions</p>
                    </div>
                  </div>

                  {/* Image formats */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Image Formats</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.format}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.extension}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 animate-bounce" />
                      <div>
                        <p className="font-semibold text-yellow-800">Accessibility:</p>
                        <p className="text-yellow-700">Always provide meaningful alt text for images. For decorative images, use alt="" (empty string).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lists Section */}
          <section id="lists" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaList className="mr-3" /> Lists
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2 text-blue-500" /> HTML Lists
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML lists allow web developers to group a set of related items in lists. There are three types of lists in HTML.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.lists}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.lists)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.lists ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* List types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">List Types</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Unordered List
                      </h5>
                      <p className="text-sm text-gray-700">Bulleted list using &lt;ul&gt; and &lt;li&gt;</p>
                      <ul className="mt-2 pl-5 list-disc text-sm text-gray-700">
                        <li>First item</li>
                        <li>Second item</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Ordered List
                      </h5>
                      <p className="text-sm text-gray-700">Numbered list using &lt;ol&gt; and &lt;li&gt;</p>
                      <ol className="mt-2 pl-5 list-decimal text-sm text-gray-700">
                        <li>First step</li>
                        <li>Second step</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Description List
                      </h5>
                      <p className="text-sm text-gray-700">Term-description pairs using &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</p>
                      <dl className="mt-2 text-sm text-gray-700">
                        <dt className="font-semibold">HTML</dt>
                        <dd className="ml-4">HyperText Markup Language</dd>
                      </dl>
                    </div>
                  </div>

                  {/* List attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">List Attributes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tables Section */}
          <section id="tables" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTable className="mr-3" /> Tables
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTable className="mr-2 text-blue-500" /> HTML Tables
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML tables allow web developers to arrange data into rows and columns. Tables should be used for tabular data, not for page layout.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.tables}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.tables)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.tables ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Table elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Table Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;table&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Defines the table container</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;tr&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Defines a table row</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;td&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Defines a table cell</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;th&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Defines a header cell</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;thead&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Groups header content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;tbody&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Groups body content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;tfoot&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Groups footer content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;caption&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Defines a table caption</p>
                    </div>
                  </div>

                  {/* Table attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Table Attributes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Accessibility:</p>
                        <p className="text-blue-700">Use proper table structure with &lt;thead&gt;, &lt;tbody&gt;, &lt;th scope&gt; for screen readers. Avoid using tables for layout purposes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forms Section */}
          <section id="forms" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  {/* <FaForm className="mr-3" /> Forms */}
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    {/* <FaForm className="mr-2 text-blue-500" /> HTML Forms */}
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML forms are used to collect user input. The form element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.forms}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.forms)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.forms ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Form elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Form Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;form&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Container for form elements</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;input&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Various input types (text, email, password, etc.)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;label&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Label for form controls</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;select&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Dropdown list</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;textarea&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Multi-line text input</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;button&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Clickable button</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;fieldset&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Groups related elements</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;legend&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Caption for fieldset</p>
                    </div>
                  </div>

                  {/* Input types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Input Types</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.type}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Form attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Form Attributes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.element}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Always use &lt;label&gt; elements for form controls. For better accessibility, either wrap the control in the label or use the for attribute to associate them.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Semantic HTML Section */}
          <section id="semantic" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Semantic HTML
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-500" /> Semantic HTML
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Semantic HTML introduces meaning to the web page rather than just presentation. It clearly defines its content to both the browser and the developer.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.semantic}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.semantic)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.semantic ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Semantic elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Semantic Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;header&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Introductory content or navigation</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;nav&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Navigation links</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;main&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Dominant content of the document</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;article&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Self-contained composition</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;section&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Thematic grouping of content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;aside&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Content indirectly related to main content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;footer&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Footer for its nearest sectioning content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;figure&gt; & &lt;figcaption&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Self-contained content with caption</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Benefits of Semantic HTML</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiUser className="mr-2" /> Accessibility
                      </h5>
                      <p className="text-sm text-gray-700">Screen readers can better interpret page structure</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        {/* <FiGlobe className="mr-2" /> SEO */}
                      </h5>
                      <p className="text-sm text-gray-700">Search engines understand content better</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Maintainability
                      </h5>
                      <p className="text-sm text-gray-700">Easier to understand and maintain code</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiLayout className="mr-2" /> Future Compatibility
                      </h5>
                      <p className="text-sm text-gray-700">More likely to work with future technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Multimedia Section */}
          <section id="multimedia" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaImage className="mr-3" /> Multimedia
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaImage className="mr-2 text-blue-500" /> HTML Multimedia
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    HTML provides elements for embedding multimedia content such as audio, video, and external content like YouTube videos.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.multimedia}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.multimedia)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.multimedia ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Multimedia elements */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Multimedia Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;audio&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Embeds sound content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;video&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Embeds video content</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;source&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Multiple media sources</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;track&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Text tracks for media (subtitles)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> &lt;iframe&gt;
                      </h5>
                      <p className="text-sm text-gray-700">Embeds external content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Section */}
          <section id="accessibility" className="mb-12 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiUser className="mr-3" /> Accessibility
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiUser className="mr-2 text-blue-500" /> HTML Accessibility
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
                  </p>

                  <div className="relative group mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{htmlExamples.accessibility}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(htmlExamples.accessibility)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === htmlExamples.accessibility ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Accessibility techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Accessibility Techniques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Semantic HTML
                      </h5>
                      <p className="text-sm text-gray-700">Use proper semantic elements for structure</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Alt Text
                      </h5>
                      <p className="text-sm text-gray-700">Descriptive alt text for images</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> ARIA
                      </h5>
                      <p className="text-sm text-gray-700">ARIA attributes for complex widgets</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Keyboard Navigation
                      </h5>
                      <p className="text-sm text-gray-700">Ensure all functionality is keyboard accessible</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Color Contrast
                      </h5>
                      <p className="text-sm text-gray-700">Sufficient color contrast for readability</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 transform hover:-translate-y-1">
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCode className="mr-2" /> Form Labels
                      </h5>
                      <p className="text-sm text-gray-700">Proper labeling of form controls</p>
                    </div>
                  </div>

                  {/* ARIA attributes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common ARIA Attributes</h4>
                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
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
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.attribute}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Use semantic HTML elements first before resorting to ARIA. ARIA should enhance, not replace, native semantics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 rounded-xl shadow-lg mt-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-bold flex items-center">
                    <FaHtml5 className="mr-2 animate-pulse" /> HTML Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to HTML</p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-8 border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-blue-200 text-sm">
                  &copy; 2023 HTML Notes. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors duration-200 mr-4">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors duration-200 mr-4">
                    Terms of Service
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 text-sm transition-colors duration-200">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}