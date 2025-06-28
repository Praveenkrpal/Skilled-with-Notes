// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaReact,
//   FaArrowLeft,
//   FaChevronDown,
//   FaChevronUp,
//   FaCopy,
//   // FaExclamationTriangle,
//   FaCode,
//   FaBracketsCurly,
//   // FaBraces,
//   FaShieldAlt,
//   FaCube,
//   FaPuzzlePiece,
//   FaListAlt,
// } from "react-icons/fa";

// const ReactNotes = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [expandedSubmenus, setExpandedSubmenus] = useState({});
//   const headerRef = useRef(null);

//   // Toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Toggle submenu
//   const toggleSubmenu = (menuId) => {
//     setExpandedSubmenus((prev) => ({
//       ...prev,
//       [menuId]: !prev[menuId],
//     }));
//   };

//   // Handle scroll to highlight active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       let current = "";

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         if (window.scrollY >= sectionTop - 200) {
//           current = section.getAttribute("id");
//         }
//       });

//       setActiveSection(current);

//       // Header scroll effect
//       if (window.scrollY > 50) {
//         headerRef.current?.classList.add("shadow-md", "bg-violet-700");
//       } else {
//         headerRef.current?.classList.remove("shadow-md", "bg-violet-700");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Copy code block
//   const copyCode = async (code) => {
//     try {
//       await navigator.clipboard.writeText(code);
//       alert("Code copied to clipboard!");
//     } catch (err) {
//       console.error("Failed to copy: ", err);
//     }
//   };

//   // Navigation data
//   const navItems = [
//     { id: "introduction", title: "Introduction" },
//     { id: "jsx", title: "JSX" },
//     { id: "components", title: "Components" },
//     {
//       id: "hooks",
//       title: "Hooks",
//       submenu: [
//         { id: "useState", title: "useState" },
//         { id: "useEffect", title: "useEffect" },
//         { id: "useContext", title: "useContext" },
//         { id: "useReducer", title: "useReducer" },
//         { id: "useCallback", title: "useCallback" },
//         { id: "useMemo", title: "useMemo" },
//       ],
//     },
//     { id: "props-state", title: "Props & State" },
//     { id: "events", title: "Event Handling" },
//     { id: "conditional-rendering", title: "Conditional Rendering" },
//     { id: "lists-keys", title: "Lists & Keys" },
//     { id: "forms", title: "Forms" },
//     { id: "routing", title: "Routing" },
//     { id: "context-api", title: "Context API" },
//     { id: "performance", title: "Performance" },
//     { id: "redux", title: "Redux" },
//   ];

//   // JSX content for each section
//   const sections = [
//     {
//       id: "introduction",
//       title: "Introduction to React",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               What is React?
//             </h3>
//             <p className="text-gray-700 mb-4">
//               React is a JavaScript library for building user interfaces,
//               developed by Facebook. It allows developers to create reusable UI
//               components and efficiently update the UI when data changes.
//             </p>
//             <div className="bg-violet-50 p-4 rounded border border-violet-200">
//               <p className="font-semibold text-violet-700">Note:</p>
//               <p>
//                 React was first released in 2013 and has since become one of the
//                 most popular frontend libraries, with a strong ecosystem and
//                 community support.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               Key Features
//             </h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>
//                 <span className="font-semibold">Component-Based:</span> Build
//                 encapsulated components that manage their own state
//               </li>
//               <li>
//                 <span className="font-semibold">Declarative:</span> Design
//                 simple views for each state in your application
//               </li>
//               <li>
//                 <span className="font-semibold">Virtual DOM:</span> Efficiently
//                 updates and renders just the right components when data changes
//               </li>
//               <li>
//                 <span className="font-semibold">One-Way Data Flow:</span> Data
//                 flows down from parent to child components via props
//               </li>
//               <li>
//                 <span className="font-semibold">JSX:</span> JavaScript syntax
//                 extension that allows HTML-like syntax in JavaScript
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: "jsx",
//       title: "JSX",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               What is JSX?
//             </h3>
//             <p className="text-gray-700 mb-4">
//               JSX (JavaScript XML) is a syntax extension for JavaScript that
//               allows you to write HTML-like code in your JavaScript files.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h4 className="font-bold text-violet-700 mb-2">
//                   Regular JavaScript
//                 </h4>
//                 <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
//                   <pre className="text-sm overflow-x-auto">
//                     {`const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );`}
//                   </pre>
//                   <button
//                     onClick={() =>
//                       copyCode(`const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );`)
//                     }
//                     className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
//                   >
//                     <FaCopy className="mr-1" /> Copy
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-bold text-violet-700 mb-2">JSX</h4>
//                 <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
//                   <pre className="text-sm overflow-x-auto">
//                     {`const element = <h1 className="greeting">Hello, world!</h1>;`}
//                   </pre>
//                   <button
//                     onClick={() =>
//                       copyCode(
//                         `const element = <h1 className="greeting">Hello, world!</h1>;`
//                       )
//                     }
//                     className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
//                   >
//                     <FaCopy className="mr-1" /> Copy
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               JSX Features
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   {/* <FaCode size={24} /> */}
//                   <FaBracketsCurly size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Not a String</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX is not a string - it gets compiled to JavaScript
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaBraces size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">
//                   JavaScript Expressions
//                 </h4>
//                 <p className="text-gray-700 text-sm">
//                   You can embed JavaScript expressions in JSX using curly braces{" "}
//                   {}
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaShieldAlt size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Security</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX prevents injection attacks by escaping values before
//                   rendering them
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaCube size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">React Elements</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX produces React "elements" which are plain JavaScript
//                   objects
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaPuzzlePiece size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Components</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX can represent both HTML elements and React components
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaListAlt size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">HTML Attributes</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX supports all HTML attributes (with camelCase naming)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     // More sections would be added here following the same pattern
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header
//         ref={headerRef}
//         className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-violet-700 to-violet-800 text-white z-50 transition-all duration-300"
//       >
//         <div className="container mx-auto px-4 h-full flex items-center justify-between">
//           <button
//             onClick={toggleSidebar}
//             className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
//             aria-label="Toggle menu"
//           >
//             <span className="mr-2">☰</span>
//             <span className="hidden sm:inline">Menu</span>
//           </button>

//           <h1 className="flex items-center text-xl font-bold">
//             <FaReact className="mr-2 text-2xl" />
//             <span className="hidden sm:inline">React Notes</span>
//           </h1>

//           <button
//             className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
//             aria-label="Go back"
//           >
//             <FaArrowLeft className="mr-2" />
//             <span className="hidden sm:inline">Back</span>
//           </button>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-300 z-40 overflow-y-auto ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         <div className="sticky top-0 bg-violet-700 text-white p-4 flex justify-between items-center">
//           <h2 className="text-lg font-bold">React Topics</h2>
//           <button
//             onClick={toggleSidebar}
//             className="md:hidden bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
//             aria-label="Close menu"
//           >
//             &times;
//           </button>
//         </div>

//         <nav className="p-4">
//           <ul className="space-y-1">
//             {navItems.map((item) => (
//               <li key={item.id}>
//                 {item.submenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleSubmenu(item.id)}
//                       className={`w-full text-left px-4 py-2 rounded flex items-center justify-between ${
//                         activeSection === item.id
//                           ? "text-violet-700 font-bold"
//                           : "text-gray-700"
//                       }`}
//                     >
//                       <span>{item.title}</span>
//                       {expandedSubmenus[item.id] ? (
//                         <FaChevronUp />
//                       ) : (
//                         <FaChevronDown />
//                       )}
//                     </button>
//                     {expandedSubmenus[item.id] && (
//                       <ul className="pl-6 border-l-2 border-violet-200 ml-4">
//                         {item.submenu.map((subItem) => (
//                           <li key={subItem.id}>
//                             <a
//                               href={`#${subItem.id}`}
//                               className={`block px-4 py-2 rounded ${
//                                 activeSection === subItem.id
//                                   ? "text-violet-700 font-bold bg-violet-50"
//                                   : "text-gray-700 hover:bg-gray-100"
//                               }`}
//                             >
//                               {subItem.title}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <a
//                     href={`#${item.id}`}
//                     className={`block px-4 py-2 rounded ${
//                       activeSection === item.id
//                         ? "text-violet-700 font-bold bg-violet-50"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     {item.title}
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Sidebar overlay */}
//       {sidebarOpen && (
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//         />
//       )}

//       {/* Main content */}
//       <main className="pt-16 md:pl-64 min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           {sections.map((section) => (
//             <section
//               key={section.id}
//               id={section.id}
//               className="mb-12 scroll-mt-20"
//             >
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-violet-800 text-white px-6 py-4 rounded-lg shadow mb-6">
//                 {section.title}
//               </h2>
//               {section.content}
//             </section>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ReactNotes;

// // --------------------------------------

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaCopy,
  FaCode,
  // FaBracketsCurly,
  FaShieldAlt,
  FaCube,
  FaPuzzlePiece,
  FaListAlt,
} from "react-icons/fa";

const ReactNotes = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSubmenus, setExpandedSubmenus] = useState({});
  const headerRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle submenu
  const toggleSubmenu = (menuId) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Handle scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);

      // Header scroll effect
      if (window.scrollY > 50) {
        headerRef.current?.classList.add("shadow-md", "bg-violet-700");
      } else {
        headerRef.current?.classList.remove("shadow-md", "bg-violet-700");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy code block
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Navigation data
  const navItems = [
    { id: "introduction", title: "Introduction" },
    { id: "jsx", title: "JSX" },
    { id: "components", title: "Components" },
    {
      id: "hooks",
      title: "Hooks",
      submenu: [
        { id: "useState", title: "useState" },
        { id: "useEffect", title: "useEffect" },
        { id: "useContext", title: "useContext" },
        { id: "useReducer", title: "useReducer" },
        { id: "useCallback", title: "useCallback" },
        { id: "useMemo", title: "useMemo" },
      ],
    },
    { id: "props-state", title: "Props & State" },
    { id: "events", title: "Event Handling" },
    { id: "conditional-rendering", title: "Conditional Rendering" },
    { id: "lists-keys", title: "Lists & Keys" },
    { id: "forms", title: "Forms" },
    { id: "routing", title: "Routing" },
    { id: "context-api", title: "Context API" },
    { id: "performance", title: "Performance" },
    { id: "redux", title: "Redux" },
  ];

  // JSX content for each section
  const sections = [
    {
      id: "introduction",
      title: "Introduction to React",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-4">
              What is React?
            </h3>
            <p className="text-gray-700 mb-4">
              React is a JavaScript library for building user interfaces,
              developed by Facebook. It allows developers to create reusable UI
              components and efficiently update the UI when data changes.
            </p>
            <div className="bg-violet-50 p-4 rounded border border-violet-200">
              <p className="font-semibold text-violet-700">Note:</p>
              <p>
                React was first released in 2013 and has since become one of the
                most popular frontend libraries, with a strong ecosystem and
                community support.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-4">
              Key Features
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Component-Based:</span> Build
                encapsulated components that manage their own state
              </li>
              <li>
                <span className="font-semibold">Declarative:</span> Design
                simple views for each state in your application
              </li>
              <li>
                <span className="font-semibold">Virtual DOM:</span> Efficiently
                updates and renders just the right components when data changes
              </li>
              <li>
                <span className="font-semibold">One-Way Data Flow:</span> Data
                flows down from parent to child components via props
              </li>
              <li>
                <span className="font-semibold">JSX:</span> JavaScript syntax
                extension that allows HTML-like syntax in JavaScript
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "jsx",
      title: "JSX",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-4">
              What is JSX?
            </h3>
            <p className="text-gray-700 mb-4">
              JSX (JavaScript XML) is a syntax extension for JavaScript that
              allows you to write HTML-like code in your JavaScript files.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-violet-700 mb-2">
                  Regular JavaScript
                </h4>
                <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
                  <pre className="text-sm overflow-x-auto">
                    {`const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`}
                  </pre>
                  <button
                    onClick={() =>
                      copyCode(`const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`)
                    }
                    className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
                  >
                    <FaCopy className="mr-1" /> Copy
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-violet-700 mb-2">JSX</h4>
                <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
                  <pre className="text-sm overflow-x-auto">
                    {`const element = <h1 className="greeting">Hello, world!</h1>;`}
                  </pre>
                  <button
                    onClick={() =>
                      copyCode(
                        `const element = <h1 className="greeting">Hello, world!</h1>;`
                      )
                    }
                    className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
                  >
                    <FaCopy className="mr-1" /> Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-4">
              JSX Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  <FaCode size={24} />
                </div>
                <h4 className="font-bold text-violet-700">Not a String</h4>
                <p className="text-gray-700 text-sm">
                  JSX is not a string - it gets compiled to JavaScript
                </p>
              </div>
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  {/* <FaBracketsCurly size={24} /> */}
                </div>
                <h4 className="font-bold text-violet-700">
                  JavaScript Expressions
                </h4>
                <p className="text-gray-700 text-sm">
                  You can embed JavaScript expressions in JSX using curly braces
                </p>
              </div>
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  <FaShieldAlt size={24} />
                </div>
                <h4 className="font-bold text-violet-700">Security</h4>
                <p className="text-gray-700 text-sm">
                  JSX prevents injection attacks by escaping values before
                  rendering them
                </p>
              </div>
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  <FaCube size={24} />
                </div>
                <h4 className="font-bold text-violet-700">React Elements</h4>
                <p className="text-gray-700 text-sm">
                  JSX produces React "elements" which are plain JavaScript
                  objects
                </p>
              </div>
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  <FaPuzzlePiece size={24} />
                </div>
                <h4 className="font-bold text-violet-700">Components</h4>
                <p className="text-gray-700 text-sm">
                  JSX can represent both HTML elements and React components
                </p>
              </div>
              <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
                <div className="text-violet-600 mb-2">
                  <FaListAlt size={24} />
                </div>
                <h4 className="font-bold text-violet-700">HTML Attributes</h4>
                <p className="text-gray-700 text-sm">
                  JSX supports all HTML attributes (with camelCase naming)
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // More sections would be added here following the same pattern
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-violet-700 to-violet-800 text-white z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
            aria-label="Toggle menu"
          >
            <span className="mr-2">☰</span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <h1 className="flex items-center text-xl font-bold">
            <FaReact className="mr-2 text-2xl" />
            <span className="hidden sm:inline">React Notes</span>
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
            aria-label="Go back"
          >
            <FaArrowLeft className="mr-2" />
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-300 z-40 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="sticky top-0 bg-violet-700 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">React Topics</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className={`w-full text-left px-4 py-2 rounded flex items-center justify-between ${
                        activeSection === item.id
                          ? "text-violet-700 font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{item.title}</span>
                      {expandedSubmenus[item.id] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    {expandedSubmenus[item.id] && (
                      <ul className="pl-6 border-l-2 border-violet-200 ml-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={`#${subItem.id}`}
                              className={`block px-4 py-2 rounded ${
                                activeSection === subItem.id
                                  ? "text-violet-700 font-bold bg-violet-50"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={`block px-4 py-2 rounded ${
                      activeSection === item.id
                        ? "text-violet-700 font-bold bg-violet-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Main content */}
      <main className="pt-16 md:pl-64 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 scroll-mt-20"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-violet-800 text-white px-6 py-4 rounded-lg shadow mb-6">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReactNotes;






// -----------------------------------------------


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaReact,
//   FaArrowLeft,
//   FaChevronDown,
//   FaChevronUp,
//   FaCopy,
//   FaExclamationTriangle,
//   FaCode,
//   FaBraces,
//   FaShieldAlt,
//   FaCube,
//   FaPuzzlePiece,
//   FaListAlt,
// } from "react-icons/fa";

// const ReactNotes = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [expandedSubmenus, setExpandedSubmenus] = useState({});
//   const headerRef = useRef(null);

//   // Toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Toggle submenu
//   const toggleSubmenu = (menuId) => {
//     setExpandedSubmenus((prev) => ({
//       ...prev,
//       [menuId]: !prev[menuId],
//     }));
//   };

//   // Handle scroll to highlight active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       let current = "";

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         if (window.scrollY >= sectionTop - 200) {
//           current = section.getAttribute("id");
//         }
//       });

//       setActiveSection(current);

//       // Header scroll effect
//       if (window.scrollY > 50) {
//         headerRef.current?.classList.add("shadow-md", "bg-violet-700");
//       } else {
//         headerRef.current?.classList.remove("shadow-md", "bg-violet-700");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Copy code block
//   const copyCode = async (code) => {
//     try {
//       await navigator.clipboard.writeText(code);
//       alert("Code copied to clipboard!");
//     } catch (err) {
//       console.error("Failed to copy: ", err);
//     }
//   };

//   // Navigation data
//   const navItems = [
//     { id: "introduction", title: "Introduction" },
//     { id: "jsx", title: "JSX" },
//     { id: "components", title: "Components" },
//     {
//       id: "hooks",
//       title: "Hooks",
//       submenu: [
//         { id: "useState", title: "useState" },
//         { id: "useEffect", title: "useEffect" },
//         { id: "useContext", title: "useContext" },
//         { id: "useReducer", title: "useReducer" },
//         { id: "useCallback", title: "useCallback" },
//         { id: "useMemo", title: "useMemo" },
//       ],
//     },
//     { id: "props-state", title: "Props & State" },
//     { id: "events", title: "Event Handling" },
//     { id: "conditional-rendering", title: "Conditional Rendering" },
//     { id: "lists-keys", title: "Lists & Keys" },
//     { id: "forms", title: "Forms" },
//     { id: "routing", title: "Routing" },
//     { id: "context-api", title: "Context API" },
//     { id: "performance", title: "Performance" },
//     { id: "redux", title: "Redux" },
//   ];

//   // JSX content for each section
//   const sections = [
//     {
//       id: "introduction",
//       title: "Introduction to React",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               What is React?
//             </h3>
//             <p className="text-gray-700 mb-4">
//               React is a JavaScript library for building user interfaces,
//               developed by Facebook. It allows developers to create reusable UI
//               components and efficiently update the UI when data changes.
//             </p>
//             <div className="bg-violet-50 p-4 rounded border border-violet-200">
//               <p className="font-semibold text-violet-700">Note:</p>
//               <p>
//                 React was first released in 2013 and has since become one of the
//                 most popular frontend libraries, with a strong ecosystem and
//                 community support.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               Key Features
//             </h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>
//                 <span className="font-semibold">Component-Based:</span> Build
//                 encapsulated components that manage their own state
//               </li>
//               <li>
//                 <span className="font-semibold">Declarative:</span> Design
//                 simple views for each state in your application
//               </li>
//               <li>
//                 <span className="font-semibold">Virtual DOM:</span> Efficiently
//                 updates and renders just the right components when data changes
//               </li>
//               <li>
//                 <span className="font-semibold">One-Way Data Flow:</span> Data
//                 flows down from parent to child components via props
//               </li>
//               <li>
//                 <span className="font-semibold">JSX:</span> JavaScript syntax
//                 extension that allows HTML-like syntax in JavaScript
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: "jsx",
//       title: "JSX",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               What is JSX?
//             </h3>
//             <p className="text-gray-700 mb-4">
//               JSX (JavaScript XML) is a syntax extension for JavaScript that
//               allows you to write HTML-like code in your JavaScript files.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h4 className="font-bold text-violet-700 mb-2">
//                   Regular JavaScript
//                 </h4>
//                 <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
//                   <pre className="text-sm overflow-x-auto">
//                     {`const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );`}
//                   </pre>
//                   <button
//                     onClick={() =>
//                       copyCode(`const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );`)
//                     }
//                     className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
//                   >
//                     <FaCopy className="mr-1" /> Copy
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-bold text-violet-700 mb-2">JSX</h4>
//                 <div className="bg-gray-100 p-4 rounded border-l-4 border-violet-500 relative">
//                   <pre className="text-sm overflow-x-auto">
//                     {`const element = <h1 className="greeting">Hello, world!</h1>;`}
//                   </pre>
//                   <button
//                     onClick={() =>
//                       copyCode(
//                         `const element = <h1 className="greeting">Hello, world!</h1>;`
//                       )
//                     }
//                     className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded text-xs flex items-center"
//                   >
//                     <FaCopy className="mr-1" /> Copy
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
//             <h3 className="text-xl font-bold text-violet-700 mb-4">
//               JSX Features
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaCode size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Not a String</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX is not a string - it gets compiled to JavaScript
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaBraces size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">
//                   JavaScript Expressions
//                 </h4>
//                 <p className="text-gray-700 text-sm">
//                   You can embed JavaScript expressions in JSX using curly braces{" "}
//                   {}
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaShieldAlt size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Security</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX prevents injection attacks by escaping values before
//                   rendering them
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaCube size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">React Elements</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX produces React "elements" which are plain JavaScript
//                   objects
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaPuzzlePiece size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">Components</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX can represent both HTML elements and React components
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded border-t-4 border-violet-500 shadow-sm">
//                 <div className="text-violet-600 mb-2">
//                   <FaListAlt size={24} />
//                 </div>
//                 <h4 className="font-bold text-violet-700">HTML Attributes</h4>
//                 <p className="text-gray-700 text-sm">
//                   JSX supports all HTML attributes (with camelCase naming)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     // More sections would be added here following the same pattern
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header
//         ref={headerRef}
//         className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-violet-700 to-violet-800 text-white z-50 transition-all duration-300"
//       >
//         <div className="container mx-auto px-4 h-full flex items-center justify-between">
//           <button
//             onClick={toggleSidebar}
//             className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
//             aria-label="Toggle menu"
//           >
//             <span className="mr-2">☰</span>
//             <span className="hidden sm:inline">Menu</span>
//           </button>

//           <h1 className="flex items-center text-xl font-bold">
//             <FaReact className="mr-2 text-2xl" />
//             <span className="hidden sm:inline">React Notes</span>
//           </h1>

//           <button
//             onClick={() => navigate('/notes')} // Changed to navigate to /notes
//             className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded flex items-center transition-colors"
//             aria-label="Go back"
//           >
//             <FaArrowLeft className="mr-2" />
//             <span className="hidden sm:inline">Back</span>
//           </button>
//         </div>
//       </header>

//       {/* Rest of your component remains exactly the same */}
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-300 z-40 overflow-y-auto ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         {/* ... existing sidebar content ... */}
//       </aside>

//       {/* Sidebar overlay */}
//       {sidebarOpen && (
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//         />
//       )}

//       {/* Main content */}
//       <main className="pt-16 md:pl-64 min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           {sections.map((section) => (
//             <section
//               key={section.id}
//               id={section.id}
//               className="mb-12 scroll-mt-20"
//             >
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-violet-800 text-white px-6 py-4 rounded-lg shadow mb-6">
//                 {section.title}
//               </h2>
//               {section.content}
//             </section>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ReactNotes;
