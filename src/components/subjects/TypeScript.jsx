import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaBars,
  FaArrowLeft,
  FaTimes,
  FaLightbulb,
  FaExclamationTriangle,
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaGlobe,
  FaServer,
  FaLayerGroup,
  FaTags,
  FaRegSmile,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import {
  FiClock,
  FiLayout,
  FiNavigation,
  FiFeather,
  FiGrid,
  FiCpu,
  FiPackage,
  FiUser,
  FiAward,
  FiZap,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function TypeScript() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [copiedCode, setCopiedCode] = useState("");
  const [activeSection, setActiveSection] = useState("typescript-introduction");

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });
  const [typesRef, typesInView] = useInView({ threshold: 0.1 });
  const [interfacesRef, interfacesInView] = useInView({ threshold: 0.1 });
  const [classesRef, classesInView] = useInView({ threshold: 0.1 });
  const [genericsRef, genericsInView] = useInView({ threshold: 0.1 });
  const [configRef, configInView] = useInView({ threshold: 0.1 });
  const [advancedRef, advancedInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: "typescript-introduction", inView: introInView },
      { id: "key-features", inView: featuresInView },
      { id: "basic-types", inView: typesInView },
      { id: "interfaces", inView: interfacesInView },
      { id: "classes", inView: classesInView },
      { id: "generics", inView: genericsInView },
      { id: "configuration", inView: configInView },
      { id: "advanced-types", inView: advancedInView },
    ];

    const active = sections.find((section) => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView,
    featuresInView,
    typesInView,
    interfacesInView,
    classesInView,
    genericsInView,
    configInView,
    advancedInView,
  ]);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? "" : menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Menu items data
  const menuItems = [
    {
      id: "typescript-introduction",
      label: "Introduction",
      icon: <FiClock className="mr-2" />,
    },
    {
      id: "key-features",
      label: "Key Features",
      icon: <FiZap className="mr-2" />,
    },
    {
      id: "basic-types",
      label: "Basic Types",
      icon: <FaTags className="mr-2" />,
    },
    {
      id: "interfaces",
      label: "Interfaces",
      icon: <FiLayout className="mr-2" />,
    },
    { id: "classes", label: "Classes", icon: <FiGrid className="mr-2" /> },
    { id: "generics", label: "Generics", icon: <FiPackage className="mr-2" /> },
    {
      id: "configuration",
      label: "Configuration",
      icon: <FiCpu className="mr-2" />,
    },
    {
      id: "advanced-types",
      label: "Advanced Types",
      icon: <FaCode className="mr-2" />,
    },
  ];

  // Feature cards data
  const features = [
    {
      title: "Static Typing",
      description:
        "TypeScript adds optional static types to JavaScript, catching errors during development",
      icon: <FaCode className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
    {
      title: "Type Inference",
      description:
        "Automatically infers types when no explicit type is provided",
      icon: <FiLayout className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
    {
      title: "Modern JavaScript",
      description: "Supports all ES6+ features and more",
      icon: <FaGlobe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
    {
      title: "Tooling Support",
      description: "Enhanced IDE support with autocompletion and refactoring",
      icon: <FiCpu className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
    {
      title: "Interfaces",
      description: "Define contracts within your code and with external code",
      icon: (
        <FaLayerGroup className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
      ),
    },
    {
      title: "Generics",
      description: "Create reusable components that work with multiple types",
      icon: (
        <FiPackage className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
      ),
    },
    {
      title: "Compilation",
      description: "Compiles to clean, readable JavaScript",
      icon: <FaServer className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
    {
      title: "Gradual Adoption",
      description: "Can be adopted gradually in existing JavaScript projects",
      icon: <FiUser className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />,
    },
  ];

  // TypeScript Examples
  const tsExamples = {
    introduction: `// Simple TypeScript example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet('TypeScript');
console.log(message); // Output: Hello, TypeScript!`,

    basicTypes: `// Basic Types in TypeScript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10]; // Fixed length array

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";

function warnUser(): void {
  console.log("This is a warning message");
}

let u: undefined = undefined;
let n: null = null;`,

    interfaces: `// Interface example
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  readonly id: number; // Readonly property
}

function greetPerson(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Doe", id: 1 };
console.log(greetPerson(user));

// Interface with function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}`,

    classes: `// Class example
class Animal {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  move(distance: number = 0) {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  
  bark() {
    console.log('Woof! Woof!');
  }
  
  move(distance = 5) {
    super.move(distance);
  }
}

const dog = new Dog('Rex');
dog.bark();
dog.move();`,

    generics: `// Generics example
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Generic interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// Generic class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}`,

    config: `// tsconfig.json example
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}`,

    advancedTypes: `// Advanced Types
type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  return padding + value;
}

// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;`,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
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
              <FaCode className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              TypeScript Notes
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
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <FaCode className="text-blue-600" />
                    </motion.div>
                    TypeScript Topics
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
                    <motion.li key={item.id} variants={itemVariants}>
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center group transform hover:translate-x-1 ${
                          activeSection === item.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : ""
                        }`}
                      >
                        {React.cloneElement(item.icon, {
                          className: `mr-2 text-blue-600 group-hover:text-blue-700 transition-colors ${
                            activeSection === item.id ? "text-blue-700" : ""
                          }`,
                        })}
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
          <section
            id="typescript-introduction"
            className="mb-12"
            ref={introRef}
          >
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
                  Introduction to TypeScript
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is
                    TypeScript?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript is a strongly typed programming language that
                    builds on JavaScript, giving you better tooling at any
                    scale. Developed and maintained by Microsoft, it adds
                    optional static typing to the JavaScript language.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.introduction}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.introduction)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.introduction
                        ? "Copied!"
                        : "Copy"}
                    </motion.button>
                  </div>

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
                        <p className="text-yellow-700">
                          TypeScript was first released in 2012 and has grown
                          rapidly in popularity, becoming a standard for
                          large-scale JavaScript applications.
                        </p>
                      </div>
                    </div>
                  </motion.div>

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
                            <strong className="font-semibold text-gray-800">
                              {feature.title}:
                            </strong>
                            <span className="text-gray-700">
                              {" "}
                              {feature.description}
                            </span>
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
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiZap className="mr-3" /> Key Features
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2 text-blue-500" /> TypeScript Features
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript offers several powerful features that enhance
                    JavaScript development, providing better tooling and
                    catching errors at compile time rather than runtime.
                  </p>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Main Features
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaCode />,
                        title: "Static Typing",
                        description:
                          "Adds type annotations to catch errors early",
                      },
                      {
                        icon: <FaCode />,
                        title: "Type Inference",
                        description:
                          "Automatically determines types when not specified",
                      },
                      {
                        icon: <FaCode />,
                        title: "Interfaces",
                        description: "Define contracts for objects and classes",
                      },
                      {
                        icon: <FaCode />,
                        title: "Classes",
                        description:
                          "Full support for ES6 classes with additional features",
                      },
                      {
                        icon: <FaCode />,
                        title: "Generics",
                        description:
                          "Create reusable components with type parameters",
                      },
                      {
                        icon: <FaCode />,
                        title: "Modules",
                        description: "Organize code using ES6 module syntax",
                      },
                      {
                        icon: <FaCode />,
                        title: "Decorators",
                        description:
                          "Add annotations and meta-programming syntax",
                      },
                      {
                        icon: <FaCode />,
                        title: "Compiler",
                        description: "Compiles to clean JavaScript code",
                      },
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
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    TypeScript vs JavaScript
                  </h4>
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Feature
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            TypeScript
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            JavaScript
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            feature: "Typing",
                            typescript: "Static (optional)",
                            javascript: "Dynamic",
                          },
                          {
                            feature: "Compilation",
                            typescript: "Required",
                            javascript: "Not required",
                          },
                          {
                            feature: "Error Checking",
                            typescript: "Compile-time",
                            javascript: "Runtime",
                          },
                          {
                            feature: "Interfaces",
                            typescript: "Supported",
                            javascript: "Not supported",
                          },
                          {
                            feature: "Generics",
                            typescript: "Supported",
                            javascript: "Not supported",
                          },
                          {
                            feature: "Tooling",
                            typescript: "Excellent",
                            javascript: "Basic",
                          },
                          {
                            feature: "Learning Curve",
                            typescript: "Steeper",
                            javascript: "Gentler",
                          },
                          {
                            feature: "Adoption",
                            typescript: "Gradual",
                            javascript: "Immediate",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={
                              index % 2 === 0
                                ? "hover:bg-blue-50"
                                : "bg-blue-50 hover:bg-blue-100"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {row.feature}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.typescript}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.javascript}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Basic Types Section */}
          <section id="basic-types" className="mb-12" ref={typesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTags className="mr-3" /> Basic Types
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTags className="mr-2 text-blue-500" /> TypeScript Basic
                    Types
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript provides several basic types that are used to
                    annotate variables, function parameters, and return values.
                    These types help catch errors during development.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.basicTypes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.basicTypes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.basicTypes
                        ? "Copied!"
                        : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Basic Type Summary
                  </h4>
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            type: "boolean",
                            description: "True/false values",
                            example: "let isDone: boolean = false;",
                          },
                          {
                            type: "number",
                            description: "All numbers (integers, floats, etc.)",
                            example: "let decimal: number = 6;",
                          },
                          {
                            type: "string",
                            description: "Text values",
                            example: 'let color: string = "blue";',
                          },
                          {
                            type: "array",
                            description: "Array of values",
                            example: "let list: number[] = [1, 2, 3];",
                          },
                          {
                            type: "tuple",
                            description: "Fixed-length array",
                            example: 'let x: [string, number] = ["hello", 10];',
                          },
                          {
                            type: "enum",
                            description: "Named constants",
                            example: "enum Color {Red, Green, Blue}",
                          },
                          {
                            type: "any",
                            description: "Dynamic/unknown type",
                            example: "let notSure: any = 4;",
                          },
                          {
                            type: "void",
                            description: "No return value",
                            example: "function warn(): void { ... }",
                          },
                          {
                            type: "null/undefined",
                            description: "Primitive values",
                            example: "let u: undefined = undefined;",
                          },
                          {
                            type: "never",
                            description: "Never occurs",
                            example: "function error(): never { throw ... }",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={
                              index % 2 === 0
                                ? "hover:bg-blue-50"
                                : "bg-blue-50 hover:bg-blue-100"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {row.type}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {row.example}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Interfaces Section */}
          <section id="interfaces" className="mb-12" ref={interfacesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayout className="mr-3" /> Interfaces
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiLayout className="mr-2 text-blue-500" /> TypeScript
                    Interfaces
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Interfaces in TypeScript are powerful way to define
                    contracts within your code and with external code. They
                    define the syntax that any entity must adhere to.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.interfaces}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.interfaces)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.interfaces
                        ? "Copied!"
                        : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Interface Features
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaCode />,
                        title: "Optional Properties",
                        description: "Mark properties as optional with ?",
                      },
                      {
                        icon: <FaCode />,
                        title: "Readonly Properties",
                        description: "Mark properties as readonly",
                      },
                      {
                        icon: <FaCode />,
                        title: "Function Types",
                        description: "Define call signatures for functions",
                      },
                      {
                        icon: <FaCode />,
                        title: "Indexable Types",
                        description: "Describe array-like objects",
                      },
                      {
                        icon: <FaCode />,
                        title: "Extending Interfaces",
                        description: "Inherit from other interfaces",
                      },
                      {
                        icon: <FaCode />,
                        title: "Hybrid Types",
                        description: "Combine multiple types in one interface",
                      },
                      {
                        icon: <FaCode />,
                        title: "Class Implementation",
                        description: "Classes can implement interfaces",
                      },
                      {
                        icon: <FaCode />,
                        title: "Type Checking",
                        description: "Verify object shapes at compile time",
                      },
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
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-12" ref={classesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Classes
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiGrid className="mr-2 text-blue-500" /> TypeScript Classes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript classes add type annotations and additional
                    features to ES6 classes, including access modifiers,
                    abstract classes, and more.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.classes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.classes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.classes ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Class Features
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaCode />,
                        title: "Access Modifiers",
                        description: "public, private, protected",
                      },
                      {
                        icon: <FaCode />,
                        title: "Readonly",
                        description: "Properties that can't be modified",
                      },
                      {
                        icon: <FaCode />,
                        title: "Parameter Properties",
                        description: "Declare and initialize in constructor",
                      },
                      {
                        icon: <FaCode />,
                        title: "Abstract Classes",
                        description: "Base classes that can't be instantiated",
                      },
                      {
                        icon: <FaCode />,
                        title: "Inheritance",
                        description: "Extend functionality with subclasses",
                      },
                      {
                        icon: <FaCode />,
                        title: "Static Properties",
                        description: "Properties on the class itself",
                      },
                      {
                        icon: <FaCode />,
                        title: "Getters/Setters",
                        description: "Control access to properties",
                      },
                      {
                        icon: <FaCode />,
                        title: "Implementing Interfaces",
                        description: "Classes can implement interfaces",
                      },
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
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Generics Section */}
          <section id="generics" className="mb-12" ref={genericsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Generics
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiPackage className="mr-2 text-blue-500" /> TypeScript
                    Generics
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Generics provide a way to create reusable components that
                    can work with a variety of types rather than a single one.
                    This allows users to consume these components and use their
                    own types.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.generics}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.generics)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.generics ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Generic Concepts
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaCode />,
                        title: "Type Variables",
                        description: "Placeholder types (T, U, V, etc.)",
                      },
                      {
                        icon: <FaCode />,
                        title: "Generic Functions",
                        description: "Functions that work with multiple types",
                      },
                      {
                        icon: <FaCode />,
                        title: "Generic Interfaces",
                        description: "Interfaces with type parameters",
                      },
                      {
                        icon: <FaCode />,
                        title: "Generic Classes",
                        description: "Classes with type parameters",
                      },
                      {
                        icon: <FaCode />,
                        title: "Generic Constraints",
                        description: "Limit the types that can be used",
                      },
                      {
                        icon: <FaCode />,
                        title: "Default Types",
                        description: "Default type parameters",
                      },
                      {
                        icon: <FaCode />,
                        title: "Utility Types",
                        description:
                          "Built-in generic types (Partial, Readonly, etc.)",
                      },
                      {
                        icon: <FaCode />,
                        title: "Type Inference",
                        description: "Compiler infers type arguments",
                      },
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
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Configuration Section */}
          <section id="configuration" className="mb-12" ref={configRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> Configuration
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2 text-blue-500" /> TypeScript
                    Configuration
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript projects are configured through a tsconfig.json
                    file that specifies compiler options and which files to
                    include in the project.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.config}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.config)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.config ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Common Compiler Options
                  </h4>
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Option
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            option: "target",
                            description:
                              "ECMAScript target version (es3, es5, es6, etc.)",
                          },
                          {
                            option: "module",
                            description:
                              "Module system (commonjs, amd, es2015, etc.)",
                          },
                          {
                            option: "strict",
                            description:
                              "Enable all strict type checking options",
                          },
                          {
                            option: "noImplicitAny",
                            description:
                              "Error on expressions with implied any type",
                          },
                          {
                            option: "strictNullChecks",
                            description: "Enable strict null checks",
                          },
                          {
                            option: "outDir",
                            description: "Output directory for compiled files",
                          },
                          {
                            option: "rootDir",
                            description: "Root directory of input files",
                          },
                          {
                            option: "esModuleInterop",
                            description:
                              "Enable interoperability between CommonJS and ES Modules",
                          },
                          {
                            option: "skipLibCheck",
                            description:
                              "Skip type checking of declaration files",
                          },
                          {
                            option: "forceConsistentCasingInFileNames",
                            description:
                              "Disallow inconsistent casing in file names",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={
                              index % 2 === 0
                                ? "hover:bg-blue-50"
                                : "bg-blue-50 hover:bg-blue-100"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {row.option}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.description}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Advanced Types Section */}
          <section id="advanced-types" className="mb-12" ref={advancedRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Advanced Types
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2 text-blue-500" /> Advanced
                    TypeScript Types
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    TypeScript provides several advanced type features that
                    allow for more sophisticated type manipulation and checking.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{tsExamples.advancedTypes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(tsExamples.advancedTypes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === tsExamples.advancedTypes
                        ? "Copied!"
                        : "Copy"}
                    </motion.button>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Advanced Type Features
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaCode />,
                        title: "Union Types",
                        description: "Combine multiple types with |",
                      },
                      {
                        icon: <FaCode />,
                        title: "Intersection Types",
                        description: "Combine multiple types with &",
                      },
                      {
                        icon: <FaCode />,
                        title: "Type Aliases",
                        description: "Create new names for types",
                      },
                      {
                        icon: <FaCode />,
                        title: "String Literal Types",
                        description: "Specify exact string values",
                      },
                      {
                        icon: <FaCode />,
                        title: "Numeric Literal Types",
                        description: "Specify exact numeric values",
                      },
                      {
                        icon: <FaCode />,
                        title: "Mapped Types",
                        description: "Create types by transforming properties",
                      },
                      {
                        icon: <FaCode />,
                        title: "Conditional Types",
                        description: "Types that depend on conditions",
                      },
                      {
                        icon: <FaCode />,
                        title: "Template Literal Types",
                        description: "String template types",
                      },
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
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Utility Types
                  </h4>
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            type: "Partial<T>",
                            description: "Make all properties optional",
                            example: "Partial<Person>",
                          },
                          {
                            type: "Required<T>",
                            description: "Make all properties required",
                            example: "Required<Person>",
                          },
                          {
                            type: "Readonly<T>",
                            description: "Make all properties readonly",
                            example: "Readonly<Person>",
                          },
                          {
                            type: "Record<K,T>",
                            description: "Map type with keys K and values T",
                            example: "Record<string, number>",
                          },
                          {
                            type: "Pick<T,K>",
                            description: "Select subset of properties",
                            example: 'Pick<Person, "name" | "age">',
                          },
                          {
                            type: "Omit<T,K>",
                            description: "Exclude subset of properties",
                            example: 'Omit<Person, "id">',
                          },
                          {
                            type: "Exclude<T,U>",
                            description: "Exclude types from union",
                            example: "Exclude<string|number, string>",
                          },
                          {
                            type: "Extract<T,U>",
                            description: "Extract types from union",
                            example: "Extract<string|number, number>",
                          },
                          {
                            type: "NonNullable<T>",
                            description: "Exclude null and undefined",
                            example: "NonNullable<string|null>",
                          },
                          {
                            type: "ReturnType<T>",
                            description: "Get function return type",
                            example: "ReturnType<typeof func>",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={
                              index % 2 === 0
                                ? "hover:bg-blue-50"
                                : "bg-blue-50 hover:bg-blue-100"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {row.type}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {row.example}
                            </td>
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
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <FaCode />
                    </motion.div>
                    TypeScript Notes
                  </h2>
                  <p className="text-blue-200 mt-1">
                    A comprehensive guide to TypeScript
                  </p>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              <div className="mt-8 border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-blue-200 text-sm">
                  &copy; {new Date().getFullYear()} TypeScript Notes. All rights
                  reserved.
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
