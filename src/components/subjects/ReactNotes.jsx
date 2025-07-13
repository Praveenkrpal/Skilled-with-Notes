import React, { useState, useEffect } from 'react';
import { FaReact, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp, FaCode, FaTable, FaList, FaLink, FaImage, FaFileAlt, FaCheck, FaGlobe, FaServer, FaLayerGroup, FaTags, FaRegSmile, FaMobileAlt, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { FiClock, FiCode, FiLayout, FiNavigation, FiFeather, FiGrid, FiCpu, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function ReactNotes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('react-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [componentsRef, componentsInView] = useInView({ threshold: 0.1 });
  const [propsRef, propsInView] = useInView({ threshold: 0.1 });
  const [stateRef, stateInView] = useInView({ threshold: 0.1 });
  const [hooksRef, hooksInView] = useInView({ threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.1 });
  const [contextRef, contextInView] = useInView({ threshold: 0.1 });
  const [routerRef, routerInView] = useInView({ threshold: 0.1 });
  const [performanceRef, performanceInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'react-introduction', inView: introInView },
      { id: 'components', inView: componentsInView },
      { id: 'props', inView: propsInView },
      { id: 'state', inView: stateInView },
      { id: 'hooks', inView: hooksInView },
      { id: 'events', inView: eventsInView },
      { id: 'context', inView: contextInView },
      { id: 'router', inView: routerInView },
      { id: 'performance', inView: performanceInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, componentsInView, propsInView, stateInView, hooksInView, eventsInView, contextInView, routerInView, performanceInView]);

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
    { id: 'react-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'components', label: 'Components', icon: <FiCode className="mr-2" /> },
    { id: 'props', label: 'Props', icon: <FiPackage className="mr-2" /> },
    { id: 'state', label: 'State', icon: <FiCpu className="mr-2" /> },
    { id: 'hooks', label: 'Hooks', icon: <FiZap className="mr-2" /> },
    { id: 'events', label: 'Events', icon: <FiFeather className="mr-2" /> },
    { id: 'context', label: 'Context', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'router', label: 'Router', icon: <FiNavigation className="mr-2" /> },
    { id: 'performance', label: 'Performance', icon: <FiAward className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Component-Based",
      description: "Build encapsulated components that manage their own state",
      icon: <FiCode className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UIs",
      icon: <FiLayout className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Learn Once, Write Anywhere",
      description: "Works across web, mobile, and desktop",
      icon: <FaGlobe className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Virtual DOM",
      description: "Efficient updates with minimal DOM operations",
      icon: <FaLayerGroup className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "JSX",
      description: "JavaScript syntax extension for UI components",
      icon: <FaCode className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Unidirectional Data Flow",
      description: "Data flows down through props, events flow up",
      icon: <FaLink className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Rich Ecosystem",
      description: "Large community and extensive tooling",
      icon: <FaServer className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Hooks",
      description: "Reuse stateful logic without changing component hierarchy",
      icon: <FiZap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // React Examples
  const reactExamples = {
    introduction: `import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`,
    components: `// Functional Component
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,
    props: `// Parent Component
function App() {
  return <Greeting name="Sarah" />;
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
    state: `// Class Component State
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// Functional Component State (with Hooks)
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    hooks: `import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    events: `function Button() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`,
    context: `// Create Context
const ThemeContext = React.createContext('light');

// Provider Component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Consumer Component
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}`,
    router: `import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}`,
    performance: `// React.memo for functional components
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// useMemo for expensive calculations
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback for stable function references
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`
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
        className="bg-gradient-to-r from-purple-600 to-blue-800 text-white shadow-lg w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
              <FaReact className="w-8 h-8 text-blue-400" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              React Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:-translate-x-1"
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
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-purple-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-purple-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaReact className="text-blue-500" />
                    </motion.div>
                    React Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-purple-700 text-xl transition-colors duration-200 transform hover:rotate-90"
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
                        className={`block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${activeSection === item.id ? 'bg-purple-100 text-purple-700 font-medium' : ''}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-purple-600 group-hover:text-purple-700 transition-colors ${activeSection === item.id ? 'text-purple-700' : ''}` })}
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
          <section id="react-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to React
                </h2>
              </div>

              <div className="p-6">
                {/* What is React card */}
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is React?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".
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
                        <p className="text-yellow-700">React was created by Jordan Walke at Facebook and first released in 2013. It's now maintained by Facebook and a community of developers.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* React Syntax */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Basic React Component
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.introduction}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.introduction)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.introduction ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiZap className="mr-2 text-purple-500" />
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
                          className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg transition-all duration-200 hover:bg-purple-100 hover:shadow-md"
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

          {/* Components Section */}
          <section id="components" className="mb-12" ref={componentsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCode className="mr-3" /> Components
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiCode className="mr-2 text-purple-500" /> React Components
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.components}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.components)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.components ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Component types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Component Types</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Functional Components", description: "Simpler components defined as functions" },
                      { icon: <FiCode />, title: "Class Components", description: "More feature-rich components using ES6 classes" },
                      { icon: <FiCode />, title: "Presentational Components", description: "Focus on how things look" },
                      { icon: <FiCode />, title: "Container Components", description: "Focus on how things work" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Component lifecycle */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Component Lifecycle (Class Components)</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phase
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Methods
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { phase: 'Mounting', methods: 'constructor(), render(), componentDidMount()', description: 'When component is being created and inserted into DOM' },
                          { phase: 'Updating', methods: 'render(), componentDidUpdate()', description: 'When component is being re-rendered due to props or state changes' },
                          { phase: 'Unmounting', methods: 'componentWillUnmount()', description: 'When component is being removed from DOM' },
                          { phase: 'Error Handling', methods: 'componentDidCatch()', description: 'When there is an error during rendering' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.phase}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.methods}</td>
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
                        <p className="font-semibold text-blue-800">Best Practice:</p>
                        <p className="text-blue-700">Prefer functional components with hooks for new development. They're simpler and have less boilerplate than class components.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Props Section */}
          <section id="props" className="mb-12" ref={propsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Props
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiPackage className="mr-2 text-purple-500" /> React Props
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Props (short for properties) are how components talk to each other. They are read-only and allow data to flow from parent to child components.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.props}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.props)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.props ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Props features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Props Characteristics</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Read-Only", description: "Components should never modify their own props" },
                      { icon: <FiCode />, title: "Unidirectional", description: "Data flows from parent to child components" },
                      { icon: <FiCode />, title: "Any Data Type", description: "Can be strings, numbers, objects, arrays, functions" },
                      { icon: <FiCode />, title: "Default Values", description: "Can specify default props for when values aren't provided" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Props vs State */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Props vs State</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Props
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            State
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { aspect: 'Mutability', props: 'Immutable (read-only)', state: 'Mutable (can be changed)' },
                          { aspect: 'Ownership', props: 'Passed from parent component', state: 'Managed within component' },
                          { aspect: 'Purpose', props: 'Configuration from parent', state: 'Internal state management' },
                          { aspect: 'Initial Value', props: 'Passed from parent', state: 'Defined in constructor or useState' },
                          { aspect: 'Updates', props: 'Cause re-render when changed', state: 'Cause re-render when changed' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.props}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.state}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* State Section */}
          <section id="state" className="mb-12" ref={stateRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> State
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiCpu className="mr-2 text-purple-500" /> React State
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    State is data that changes over time in your application. When state changes, React automatically re-renders the component to reflect those changes.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.state}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.state)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.state ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* State management */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">State Management Approaches</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "Local Component State", description: "Manage state within a single component" },
                      { icon: <FiCode />, title: "Lifting State Up", description: "Move state to common parent component" },
                      { icon: <FiCode />, title: "Context API", description: "Share state across component tree" },
                      { icon: <FiCode />, title: "State Management Libraries", description: "Redux, MobX, Recoil, etc." }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* State rules */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">State Rules</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rule
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { rule: 'Never modify state directly', description: 'Always use setState or the state setter function' },
                          { rule: 'State updates may be asynchronous', description: 'React may batch multiple setState calls' },
                          { rule: 'State updates are merged', description: 'When you call setState, React merges the object you provide' },
                          { rule: 'Data flows down', description: 'State is local to its component unless passed as props' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.rule}</td>
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

          {/* Hooks Section */}
          <section id="hooks" className="mb-12" ref={hooksRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiZap className="mr-3" /> Hooks
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiZap className="mr-2 text-purple-500" /> React Hooks
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.hooks}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.hooks)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.hooks ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Common hooks */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Hooks</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "useState", description: "Add state to functional components" },
                      { icon: <FiCode />, title: "useEffect", description: "Perform side effects in components" },
                      { icon: <FiCode />, title: "useContext", description: "Access context in functional components" },
                      { icon: <FiCode />, title: "useReducer", description: "Alternative to useState for complex state" },
                      { icon: <FiCode />, title: "useCallback", description: "Memoize functions to prevent unnecessary re-renders" },
                      { icon: <FiCode />, title: "useMemo", description: "Memoize expensive calculations" },
                      { icon: <FiCode />, title: "useRef", description: "Access DOM elements or persist mutable values" },
                      { icon: <FiCode />, title: "Custom Hooks", description: "Extract component logic into reusable functions" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hook rules */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Rules of Hooks</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rule
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { rule: 'Only call hooks at the top level', description: "Don't call hooks inside loops, conditions, or nested functions" },
                          { rule: 'Only call hooks from React functions', description: "Call hooks from React function components or custom hooks" },
                          { rule: 'Use exhaustive-deps', description: "Include all dependencies in useEffect, useCallback, and useMemo" }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.rule}</td>
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

          {/* Events Section */}
          <section id="events" className="mb-12" ref={eventsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiFeather className="mr-3" /> Events
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiFeather className="mr-2 text-purple-500" /> React Events
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React events are named using camelCase rather than lowercase. With JSX you pass a function as the event handler rather than a string.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.events}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.events)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.events ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Event handling */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Event Handling Differences</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            HTML
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            React
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { aspect: 'Event names', html: 'Lowercase (onclick)', react: 'CamelCase (onClick)' },
                          { aspect: 'Event handler', html: 'String', react: 'Function' },
                          { aspect: 'Default behavior', html: 'Return false to prevent', react: 'Call preventDefault()' },
                          { aspect: 'Event object', html: 'Global event object', react: 'Synthetic event wrapper' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.html}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.react}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Common events */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common React Events</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "onClick", description: "Mouse click events" },
                      { icon: <FiCode />, title: "onChange", description: "Form input changes" },
                      { icon: <FiCode />, title: "onSubmit", description: "Form submission" },
                      { icon: <FiCode />, title: "onKeyDown", description: "Keyboard key press" },
                      { icon: <FiCode />, title: "onMouseOver", description: "Mouse hover events" },
                      { icon: <FiCode />, title: "onFocus", description: "Element receives focus" },
                      { icon: <FiCode />, title: "onBlur", description: "Element loses focus" },
                      { icon: <FiCode />, title: "onScroll", description: "Element scroll events" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
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

          {/* Context Section */}
          <section id="context" className="mb-12" ref={contextRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Context
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-purple-500" /> React Context
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.context}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.context)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.context ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* When to use context */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">When to Use Context</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FaLightbulb />, title: "Theme", description: "Light/dark theme preference" },
                      { icon: <FaLightbulb />, title: "Authentication", description: "Current authenticated user" },
                      { icon: <FaLightbulb />, title: "Localization", description: "Language preferences" },
                      { icon: <FaLightbulb />, title: "Global State", description: "State shared across many components" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Context vs Redux */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Context vs Redux</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Context
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Redux
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { aspect: 'Built-in', context: 'Yes', redux: 'No (3rd party library)' },
                          { aspect: 'Learning Curve', context: 'Lower', redux: 'Higher' },
                          { aspect: 'Boilerplate', context: 'Less', redux: 'More' },
                          { aspect: 'DevTools', context: 'No', redux: 'Yes' },
                          { aspect: 'Middleware', context: 'No', redux: 'Yes' },
                          { aspect: 'Performance', context: 'Good for low-frequency updates', redux: 'Optimized for frequent updates' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.context}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.redux}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Router Section */}
          <section id="router" className="mb-12" ref={routerRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiNavigation className="mr-3" /> Router
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiNavigation className="mr-2 text-purple-500" /> React Router
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React Router enables "client side routing" in React applications, allowing navigation between views from different components.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.router}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.router)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.router ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Router components */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Router Components</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "BrowserRouter", description: "Uses HTML5 history API (recommended)" },
                      { icon: <FiCode />, title: "HashRouter", description: "Uses URL hash (for static servers)" },
                      { icon: <FiCode />, title: "Route", description: "Renders UI when path matches" },
                      { icon: <FiCode />, title: "Link", description: "Declarative navigation" },
                      { icon: <FiCode />, title: "NavLink", description: "Link with active styling" },
                      { icon: <FiCode />, title: "Switch", description: "Renders first matching Route" },
                      { icon: <FiCode />, title: "Redirect", description: "Navigate to new location" },
                      { icon: <FiCode />, title: "useHistory", description: "Access history instance" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Router hooks */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Router Hooks</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hook
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
                          { hook: 'useHistory', description: 'Access the history instance', example: 'const history = useHistory();' },
                          { hook: 'useLocation', description: 'Access the current location object', example: 'const location = useLocation();' },
                          { hook: 'useParams', description: 'Access URL parameters', example: 'const { id } = useParams();' },
                          { hook: 'useRouteMatch', description: 'Match current URL against path pattern', example: 'const match = useRouteMatch("/users/:id");' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.hook}</td>
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

          {/* Performance Section */}
          <section id="performance" className="mb-12" ref={performanceRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-200 hover:border-purple-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiAward className="mr-3" /> Performance
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                    <FiAward className="mr-2 text-purple-500" /> React Performance
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React is fast by default, but there are several techniques you can use to optimize your application's performance.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{reactExamples.performance}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(reactExamples.performance)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === reactExamples.performance ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Performance techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Performance Techniques</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCode />, title: "React.memo", description: "Memoize functional components" },
                      { icon: <FiCode />, title: "useMemo", description: "Memoize expensive calculations" },
                      { icon: <FiCode />, title: "useCallback", description: "Memoize functions" },
                      { icon: <FiCode />, title: "Virtualization", description: "Render only visible content (react-window)" },
                      { icon: <FiCode />, title: "Code Splitting", description: "Lazy load components" },
                      { icon: <FiCode />, title: "Production Build", description: "Use optimized production build" },
                      { icon: <FiCode />, title: "Profiler", description: "Identify performance bottlenecks" },
                      { icon: <FiCode />, title: "Avoid Reconciliation", description: "Use keys properly" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tools */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Performance Tools</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tool
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { tool: 'React DevTools', description: 'Profiler for component rendering' },
                          { tool: 'Chrome DevTools', description: 'Performance tab for runtime analysis' },
                          { tool: 'Lighthouse', description: 'Audits for performance best practices' },
                          { tool: 'Webpack Bundle Analyzer', description: 'Visualize bundle size' },
                          { tool: 'React.memo', description: 'Prevent unnecessary re-renders' },
                          { tool: 'React.lazy', description: 'Code splitting for lazy loading' }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-purple-50' : 'bg-purple-50 hover:bg-purple-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.tool}</td>
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

          {/* Footer */}
          <motion.footer
            className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-8 rounded-xl shadow-lg mt-12"
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
                      <FaReact />
                    </motion.div>
                    React Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to React</p>
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
                  &copy; {new Date().getFullYear()} React Notes. All rights reserved.
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