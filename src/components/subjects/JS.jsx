import React, { useState, useEffect } from 'react';
import {
  FaCode, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaJs, FaGlobe, FaServer, FaMobile, FaDatabase, FaCogs,
  FaProjectDiagram, FaShieldAlt, FaRegClock, FaListUl
} from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * JavaScript Notes Application
 * 
 * Features:
 * - Comprehensive JavaScript documentation
 * - Organized by topics with expandable sections
 * - Code examples with copy functionality
 * - Responsive design with collapsible sidebar
 * - Animated transitions
 * - Syntax highlighting
 */
const JS = () => {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? '' : menu);
  };

  // Handle copy button click
  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768 && sidebarOpen &&
        !event.target.closest('#sidebar') &&
        !event.target.closest('.sidebar-toggle')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  /**
   * JavaScript Data Structure
   * Organized by topics with cards containing:
   * - Title
   * - Detailed content
   * - Code examples
   * - Tips and warnings
   */
  const jsData = {
    introduction: {
      title: "Introduction to JavaScript",
      icon: <FaJs className="mr-2" />,
      cards: [
        {
          title: "What is JavaScript?",
          content: (
            <>
              <p>JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Client-side</strong>: Runs in the browser to make web pages interactive</li>
                <li><strong>Server-side</strong>: Can run on servers (Node.js)</li>
                <li><strong>Multi-paradigm</strong>: Supports object-oriented, imperative, and functional programming styles</li>
                <li><strong>Dynamic</strong>: Variables don't need type declarations and types are checked at runtime</li>
              </ul>
            </>
          )
        },
        {
          title: "JavaScript vs ECMAScript",
          content: (
            <>
              <p>ECMAScript is the standard that JavaScript is based on. JavaScript implements the ECMAScript standard but also includes additional features not in the ECMA specification.</p>
              <div className="overflow-x-auto my-4 rounded-lg shadow">
                <table className="min-w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-2">Feature</th>
                      <th className="px-4 py-2">ECMAScript</th>
                      <th className="px-4 py-2">JavaScript</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-2">Definition</td>
                      <td className="px-4 py-2">Standard specification</td>
                      <td className="px-4 py-2">Implementation of the standard</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-2">DOM/BOM</td>
                      <td className="px-4 py-2">Not included</td>
                      <td className="px-4 py-2">Includes DOM and BOM APIs</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-2">Environment</td>
                      <td className="px-4 py-2">Language specification</td>
                      <td className="px-4 py-2">Runs in browsers, Node.js, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: "JavaScript Engines",
          content: (
            <>
              <p>JavaScript engines execute JavaScript code. Different browsers use different engines:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>V8</strong>: Chrome, Edge, Opera, Node.js</li>
                <li><strong>SpiderMonkey</strong>: Firefox</li>
                <li><strong>JavaScriptCore</strong>: Safari</li>
                <li><strong>Chakra</strong>: Legacy Edge</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Note:</p>
                    <p className="text-yellow-700">Modern JavaScript engines use Just-In-Time (JIT) compilation to optimize performance.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    basics: {
      title: "JavaScript Basics",
      icon: <FaCode className="mr-2" />,
      cards: [
        {
          title: "Variables and Data Types",
          content: (
            <>
              <p>JavaScript has dynamic typing - variables can hold any type of value.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Variable declaration
let name = "John";  // String
const age = 30;     // Number (integer)
let isStudent = true; // Boolean
let height = 1.85;  // Number (float)
let person = null;  // Null
let score;          // Undefined

// ES6+ variable declarations
let x = 10;         // Block-scoped, can be reassigned
const y = 20;       // Block-scoped, cannot be reassigned
var z = 30;         // Function-scoped, avoid in modern code`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Variable declaration
let name = "John";  // String
const age = 30;     // Number (integer)
let isStudent = true; // Boolean
let height = 1.85;  // Number (float)
let person = null;  // Null
let score;          // Undefined

// ES6+ variable declarations
let x = 10;         // Block-scoped, can be reassigned
const y = 20;       // Block-scoped, cannot be reassigned
var z = 30;         // Function-scoped, avoid in modern code`, 'variables')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'variables' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'variables' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Best Practices:</p>
                    <p className="text-blue-700">1) Prefer <code className="bg-blue-100 px-1 rounded">const</code> over <code className="bg-blue-100 px-1 rounded">let</code> when possible
                      <br />2) Avoid <code className="bg-blue-100 px-1 rounded">var</code> in modern JavaScript
                      <br />3) Use meaningful variable names
                      <br />4) Initialize variables when declaring them</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "Operators and Expressions",
          content: (
            <>
              <p>JavaScript includes various types of operators:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Arithmetic</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><code>+</code> Addition</li>
                    <li><code>-</code> Subtraction</li>
                    <li><code>*</code> Multiplication</li>
                    <li><code>/</code> Division</li>
                    <li><code>%</code> Modulus</li>
                    <li><code>**</code> Exponentiation</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Comparison</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><code>==</code> Loose equality</li>
                    <li><code>===</code> Strict equality</li>
                    <li><code>!=</code> Loose inequality</li>
                    <li><code>!==</code> Strict inequality</li>
                    <li><code>&gt;</code> Greater than</li>
                    <li><code>&lt;</code> Less than</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Logical</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><code>&&</code> AND</li>
                    <li><code>||</code> OR</li>
                    <li><code>!</code> NOT</li>
                    <li><code>??</code> Nullish coalescing</li>
                  </ul>
                </div>
              </div>

              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Arithmetic examples
let sum = 10 + 5;      // 15
let power = 2 ** 3;    // 8 (2 to the power of 3)

// Comparison examples
'5' == 5;              // true (type coercion)
'5' === 5;             // false (strict comparison)

// Logical examples
true && false;         // false
true || false;         // true
!true;                 // false

// Nullish coalescing
let value = null ?? 'default'; // 'default'`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Arithmetic examples
let sum = 10 + 5;      // 15
let power = 2 ** 3;    // 8 (2 to the power of 3)

// Comparison examples
'5' == 5;              // true (type coercion)
'5' === 5;             // false (strict comparison)

// Logical examples
true && false;         // false
true || false;         // true
!true;                 // false

// Nullish coalescing
let value = null ?? 'default'; // 'default'`, 'operators')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'operators' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'operators' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Control Flow",
          content: (
            <>
              <p>JavaScript provides several control flow statements:</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// If-else statement
let age = 18;
if (age < 18) {
  console.log('Minor');
} else if (age >= 18 && age < 65) {
  console.log('Adult');
} else {
  console.log('Senior');
}

// Switch statement
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Friday':
    console.log('Weekend is coming');
    break;
  default:
    console.log('Midweek day');
}

// Ternary operator
let isAdult = age >= 18 ? 'Yes' : 'No';`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// If-else statement
let age = 18;
if (age < 18) {
  console.log('Minor');
} else if (age >= 18 && age < 65) {
  console.log('Adult');
} else {
  console.log('Senior');
}

// Switch statement
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Friday':
    console.log('Weekend is coming');
    break;
  default:
    console.log('Midweek day');
}

// Ternary operator
let isAdult = age >= 18 ? 'Yes' : 'No';`, 'control-flow')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'control-flow' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'control-flow' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Best Practices:</p>
                    <p className="text-purple-700">
                      1) Use <code className="bg-purple-100 px-1 rounded">===</code> instead of <code className="bg-purple-100 px-1 rounded">==</code> for comparisons
                      <br />2) Prefer ternary operators for simple conditionals
                      <br />3) Always include <code className="bg-purple-100 px-1 rounded">break</code> in switch cases
                      <br />4) Avoid deeply nested conditionals
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    functions: {
      title: "Functions",
      icon: <FaCogs className="mr-2" />,
      cards: [
        {
          title: "Function Declarations",
          content: (
            <>
              <p>Functions are reusable blocks of code that perform a specific task.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Function declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression (not hoisted)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function (ES6+)
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Concise arrow function
const greet = name => \`Hello, \${name}!\`;

// Calling functions
greet('Alice'); // "Hello, Alice!"`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Function declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression (not hoisted)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function (ES6+)
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Concise arrow function
const greet = name => \`Hello, \${name}!\`;

// Calling functions
greet('Alice'); // "Hello, Alice!"`, 'functions')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'functions' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'functions' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Function Types:</p>
                    <p className="text-purple-700">1) <strong>Declaration</strong>: Hoisted, can be called before definition
                      <br />2) <strong>Expression</strong>: Not hoisted, assigned to variables
                      <br />3) <strong>Arrow</strong>: Shorter syntax, no <code className="bg-purple-100 px-1 rounded">this</code> binding
                      <br />4) <strong>IIFE</strong>: Immediately Invoked Function Expression</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "Higher-Order Functions",
          content: (
            <>
              <p>Functions that operate on other functions, either by taking them as arguments or by returning them.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Function that returns a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
double(5); // 10

// Function that takes a function as argument
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const squares = applyOperation([1, 2, 3], x => x * x); // [1, 4, 9]

// Array higher-order functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Function that returns a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
double(5); // 10

// Function that takes a function as argument
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const squares = applyOperation([1, 2, 3], x => x * x); // [1, 4, 9]

// Array higher-order functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`, 'hof')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'hof' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'hof' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Closures",
          content: (
            <>
              <p>A closure is a function that remembers its outer variables and can access them.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Simple closure example
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Practical use case: Private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(25); // 125`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Simple closure example
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Practical use case: Private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(25); // 125`, 'closures')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'closures' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'closures' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Important:</p>
                    <p className="text-yellow-700">Closures can lead to memory leaks if not used carefully, as they maintain references to outer variables even when the outer function has completed execution.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    objects: {
      title: "Objects and Arrays",
      icon: <FaDatabase className="mr-2" />,
      cards: [
        {
          title: "Objects",
          content: (
            <>
              <p>Objects are collections of key-value pairs used to store complex data.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Object literal
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'hiking'],
  address: {
    street: '123 Main St',
    city: 'Boston'
  },
  getFullName: function() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

// Accessing properties
person.firstName;       // "John"
person['lastName'];     // "Doe"
person.getFullName();   // "John Doe"

// Adding/modifying properties
person.email = 'john@example.com';
person['age'] = 31;

// Deleting properties
delete person.age;

// Object destructuring
const { firstName, lastName } = person;

// Object methods
Object.keys(person);    // ["firstName", "lastName", ...]
Object.values(person);  // ["John", "Doe", ...]
Object.entries(person); // [["firstName", "John"], ...]`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Object literal
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'hiking'],
  address: {
    street: '123 Main St',
    city: 'Boston'
  },
  getFullName: function() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

// Accessing properties
person.firstName;       // "John"
person['lastName'];     // "Doe"
person.getFullName();   // "John Doe"

// Adding/modifying properties
person.email = 'john@example.com';
person['age'] = 31;

// Deleting properties
delete person.age;

// Object destructuring
const { firstName, lastName } = person;

// Object methods
Object.keys(person);    // ["firstName", "lastName", ...]
Object.values(person);  // ["John", "Doe", ...]
Object.entries(person); // [["firstName", "John"], ...]`, 'objects')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'objects' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'objects' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Arrays",
          content: (
            <>
              <p>Arrays are ordered lists of values that can hold multiple data types.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Array creation
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'two', true, { name: 'John' }];

// Accessing elements
fruits[0];      // "apple"
fruits.length;  // 3

// Adding/removing elements
fruits.push('grape');   // Add to end
fruits.pop();           // Remove from end
fruits.unshift('kiwi'); // Add to beginning
fruits.shift();         // Remove from beginning

// Array methods
const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]
numbers.filter(n => n > 2);   // [3, 4, 5]
numbers.reduce((a, b) => a + b); // 15
numbers.slice(1, 3);          // [2, 3] (subarray)
numbers.splice(2, 1, 99);     // [1, 2, 99, 4, 5] (modify array)

// Array destructuring
const [first, second, ...rest] = numbers;

// Spread operator
const newNumbers = [...numbers, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Array creation
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'two', true, { name: 'John' }];

// Accessing elements
fruits[0];      // "apple"
fruits.length;  // 3

// Adding/removing elements
fruits.push('grape');   // Add to end
fruits.pop();           // Remove from end
fruits.unshift('kiwi'); // Add to beginning
fruits.shift();         // Remove from beginning

// Array methods
const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]
numbers.filter(n => n > 2);   // [3, 4, 5]
numbers.reduce((a, b) => a + b); // 15
numbers.slice(1, 3);          // [2, 3] (subarray)
numbers.splice(2, 1, 99);     // [1, 2, 99, 4, 5] (modify array)

// Array destructuring
const [first, second, ...rest] = numbers;

// Spread operator
const newNumbers = [...numbers, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]`, 'arrays')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'arrays' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'arrays' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Object-Oriented Programming",
          content: (
            <>
              <p>JavaScript supports OOP through prototype-based inheritance.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Constructor function (old way)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return \`Hello, my name is \${this.name}\`;
};

const john = new Person('John', 30);
john.greet(); // "Hello, my name is John"

// ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
  
  // Static method
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    return \`\${this.name} is studying\`;
  }
}

const student = new Student('Alice', 20, 'A');
student.greet(); // "Hello, my name is Alice"
student.study(); // "Alice is studying"`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Constructor function (old way)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return \`Hello, my name is \${this.name}\`;
};

const john = new Person('John', 30);
john.greet(); // "Hello, my name is John"

// ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
  
  // Static method
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    return \`\${this.name} is studying\`;
  }
}

const student = new Student('Alice', 20, 'A');
student.greet(); // "Hello, my name is Alice"
student.study(); // "Alice is studying"`, 'oop')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'oop' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'oop' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    },
    es6: {
      title: "ES6+ Features",
      icon: <FaGlobe className="mr-2" />,
      cards: [
        {
          title: "Let and Const",
          content: (
            <>
              <p>ES6 introduced <code className="bg-gray-100 px-1 rounded">let</code> and <code className="bg-gray-100 px-1 rounded">const</code> for variable declarations.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Block-scoped variables
let x = 10;
if (true) {
  let x = 20; // Different variable
  console.log(x); // 20
}
console.log(x); // 10

// Constants
const PI = 3.14159;
PI = 3.14; // Error: Assignment to constant variable

// const with objects
const person = { name: 'John' };
person.name = 'Jane'; // Allowed (property change)
person = { name: 'Bob' }; // Error (reassignment)`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Block-scoped variables
let x = 10;
if (true) {
  let x = 20; // Different variable
  console.log(x); // 20
}
console.log(x); // 10

// Constants
const PI = 3.14159;
PI = 3.14; // Error: Assignment to constant variable

// const with objects
const person = { name: 'John' };
person.name = 'Jane'; // Allowed (property change)
person = { name: 'Bob' }; // Error (reassignment)`, 'let-const')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'let-const' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'let-const' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Template Literals",
          content: (
            <>
              <p>Template literals provide an easy way to create strings with embedded expressions.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic template literal
const name = 'John';
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const message = \`
  This is a
  multi-line
  string.
\`;

// Expressions
const a = 5;
const b = 10;
console.log(\`\${a} + \${b} = \${a + b}\`); // "5 + 10 = 15"

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}<span class="highlight">\${values[i] || ''}</span>\`, '');
}

const name = 'John';
const age = 30;
const output = highlight\`Hello \${name}, you are \${age} years old.\`;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Basic template literal
const name = 'John';
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const message = \`
  This is a
  multi-line
  string.
\`;

// Expressions
const a = 5;
const b = 10;
console.log(\`\${a} + \${b} = \${a + b}\`); // "5 + 10 = 15"

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}<span class="highlight">\${values[i] || ''}</span>\`, '');
}

const name = 'John';
const age = 30;
const output = highlight\`Hello \${name}, you are \${age} years old.\`;`, 'template-literals')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'template-literals' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'template-literals' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Destructuring and Spread",
          content: (
            <>
              <p>ES6 introduced destructuring assignment and spread operator for easier data handling.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Object destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name, age); // "John" 30

// Array destructuring
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4]

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Function parameter destructuring
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age} years old\`;
}
greet(person); // "Hello John, you are 30 years old"`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Object destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name, age); // "John" 30

// Array destructuring
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4]

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Function parameter destructuring
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age} years old\`;
}
greet(person); // "Hello John, you are 30 years old"`, 'destructuring')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'destructuring' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'destructuring' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    },
    async: {
      title: "Asynchronous JavaScript",
      icon: <FaRegClock className="mr-2" />,
      cards: [
        {
          title: "Callbacks and Promises",
          content: (
            <>
              <p>JavaScript uses asynchronous patterns to handle operations that take time.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Callback pattern
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data received" after 1 second
});

// Promise pattern
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
      // Or reject('Error occurred');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data)) // "Data received"
  .catch(error => console.error(error));

// Chaining promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => displayResult(result))
  .catch(error => handleError(error));`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Callback pattern
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data received" after 1 second
});

// Promise pattern
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
      // Or reject('Error occurred');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data)) // "Data received"
  .catch(error => console.error(error));

// Chaining promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => displayResult(result))
  .catch(error => handleError(error));`, 'callbacks-promises')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'callbacks-promises' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'callbacks-promises' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Async/Await",
          content: (
            <>
              <p>Async/await provides a cleaner syntax for working with promises.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Async function
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using async function
async function processData() {
  try {
    const data = await fetchData();
    console.log('Processed data:', data);
  } catch (error) {
    console.error('Processing failed:', error);
  }
}

// Immediately invoked async function
(async () => {
  const result = await someAsyncOperation();
  console.log(result);
})();

// Parallel execution with Promise.all
async function fetchMultiple() {
  try {
    const [users, posts] = await Promise.all([
      fetch('/api/users').then(res => res.json()),
      fetch('/api/posts').then(res => res.json())
    ]);
    return { users, posts };
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Async function
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using async function
async function processData() {
  try {
    const data = await fetchData();
    console.log('Processed data:', data);
  } catch (error) {
    console.error('Processing failed:', error);
  }
}

// Immediately invoked async function
(async () => {
  const result = await someAsyncOperation();
  console.log(result);
})();

// Parallel execution with Promise.all
async function fetchMultiple() {
  try {
    const [users, posts] = await Promise.all([
      fetch('/api/users').then(res => res.json()),
      fetch('/api/posts').then(res => res.json())
    ]);
    return { users, posts };
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}`, 'async-await')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'async-await' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'async-await' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    },
    advanced: {
      title: "Advanced Concepts",
      icon: <FaProjectDiagram className="mr-2" />,
      cards: [
        {
          title: "Prototypes and Inheritance",
          content: (
            <>
              <p>JavaScript uses prototypal inheritance rather than classical inheritance.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Prototype basics
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a noise.\`);
};

function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(\`\${this.name} barks.\`);
};

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."

// Modern alternative: ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog2 = new Dog('Max');
dog2.speak(); // "Max barks."`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Prototype basics
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a noise.\`);
};

function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(\`\${this.name} barks.\`);
};

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."

// Modern alternative: ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog2 = new Dog('Max');
dog2.speak(); // "Max barks."`, 'prototypes')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'prototypes' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'prototypes' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Modules",
          content: (
            <>
              <p>ES6 introduced a native module system for JavaScript.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// math.js - Exporting module
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}

// app.js - Importing module
import subtract, { PI, add, multiply } from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(subtract(5, 2)); // 3

// Dynamic imports
async function loadModule() {
  const module = await import('./math.js');
  console.log(module.add(10, 20)); // 30
}`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// math.js - Exporting module
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}

// app.js - Importing module
import subtract, { PI, add, multiply } from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(subtract(5, 2)); // 3

// Dynamic imports
async function loadModule() {
  const module = await import('./math.js');
  console.log(module.add(10, 20)); // 30
}`, 'modules')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'modules' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'modules' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    },
    errorHandling: {
      title: "Error Handling",
      icon: <FaShieldAlt className="mr-2" />,
      cards: [
        {
          title: "Try/Catch and Error Types",
          content: (
            <>
              <p>JavaScript provides error handling through try/catch blocks.</p>
              
              <div className="relative group my-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic try/catch
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This always runs');
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError('Input cannot be empty');
  }
}

try {
  validateInput('');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}

// Error types in JavaScript
// - Error: Generic error
// - SyntaxError: Syntax errors
// - ReferenceError: Undefined variable
// - TypeError: Wrong type used
// - RangeError: Number out of range
// - URIError: Malformed URI
// - EvalError: eval() related errors`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`// Basic try/catch
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This always runs');
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError('Input cannot be empty');
  }
}

try {
  validateInput('');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}

// Error types in JavaScript
// - Error: Generic error
// - SyntaxError: Syntax errors
// - ReferenceError: Undefined variable
// - TypeError: Wrong type used
// - RangeError: Number out of range
// - URIError: Malformed URI
// - EvalError: eval() related errors`, 'error-handling')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'error-handling' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'error-handling' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    }
  };

  // Menu items data
  const menuItems = [
    { id: 'introduction', label: 'Introduction', icon: <FaJs className="mr-2" /> },
    { id: 'basics', label: 'Basics', icon: <FaCode className="mr-2" /> },
    { id: 'functions', label: 'Functions', icon: <FaCogs className="mr-2" /> },
    { id: 'objects', label: 'Objects & Arrays', icon: <FaDatabase className="mr-2" /> },
    { id: 'es6', label: 'ES6+ Features', icon: <FaGlobe className="mr-2" /> },
    { id: 'async', label: 'Async JS', icon: <FaRegClock className="mr-2" /> },
    { id: 'advanced', label: 'Advanced', icon: <FaProjectDiagram className="mr-2" /> },
    { id: 'errorHandling', label: 'Error Handling', icon: <FaShieldAlt className="mr-2" /> }
  ];

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Render a section with all its cards
  const renderSection = (sectionId) => {
    const section = jsData[sectionId];
    return (
      <motion.section 
        id={sectionId} 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-100"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              {section.icon} {section.title}
            </h2>
          </div>

          <div className="p-6">
            {section.cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="card bg-white rounded-lg border border-blue-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{card.title}</h3>
                <div className="text-gray-700 leading-relaxed">
                  {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 w-full">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md sidebar-toggle"
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </button>

          {/* Main title */}
          <motion.h1 
            className="text-2xl md:text-3xl font-bold flex items-center space-x-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaJs className="w-8 h-8" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              JavaScript Notes
            </span>
          </motion.h1>

          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline-block">Back</span>
          </button>
        </div>
      </header>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <motion.aside
          id="sidebar"
          className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 transition-all duration-300 ease-in-out`}
          initial={{ x: -300, opacity: 0 }}
          animate={{ 
            x: sidebarOpen ? 0 : -300,
            opacity: sidebarOpen ? 1 : 0
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-blue-800 flex items-center">
                <FaJs className="mr-2 text-blue-600" /> JS Topics
              </h2>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-blue-700 text-xl transition-colors duration-200"
              >
                <FaTimes />
              </button>
            </div>

            {/* Search bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Menu items */}
            <ul className="space-y-1">
              {filteredMenuItems.length > 0 ? (
                filteredMenuItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    variants={itemVariants}
                  >
                    <a
                      href={`#${item.id}`}
                      className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 flex items-center group"
                      onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
                    >
                      {React.cloneElement(item.icon, { className: "mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" })}
                      {item.label}
                    </a>
                  </motion.li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No topics found</li>
              )}
            </ul>
          </nav>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 w-100">
          {Object.keys(jsData).map(sectionId => renderSection(sectionId))}
        </main>
      </div>
    </div>
  );
};

export default JS;