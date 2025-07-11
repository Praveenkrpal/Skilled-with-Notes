import React, { useState } from 'react';
import {
  FaReact, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaCode, FaTable, FaKeyboard, FaHtml5, FaJs, FaList,
  FaCheck, FaCog, FaLink, FaExchangeAlt, FaFilter, FaServer,
  FaChartLine, FaStore
} from 'react-icons/fa';
import {
  FiClock, FiZap, FiShield, FiLayers, FiSmartphone,
  FiGlobe, FiDatabase, FiNavigation, FiFeather, FiGrid,
  FiCpu, FiPackage, FiUser, FiAward, FiBarChart2, FiSettings
} from 'react-icons/fi';
import { DiReact, DiJavascript, DiNodejs } from 'react-icons/di';

export default function ReactNotes() {
  // State for sidebar visibility and active submenu
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? '' : menu);
  };

  // Toggle sidebar visibility with animation
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Copy code to clipboard with feedback
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Menu items data
  const menuItems = [
    { id: 'introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'jsx', label: 'JSX', icon: <FaCode className="mr-2" /> },
    { id: 'components', label: 'Components', icon: <FiGrid className="mr-2" /> },
    {
      id: 'hooks',
      label: 'Hooks',
      icon: <FiCpu className="mr-2" />,
      subItems: [
        { id: 'useState-hook', label: 'useState' },
        { id: 'useEffect-hook', label: 'useEffect' },
        { id: 'useContext-hook', label: 'useContext' },
        { id: 'useReducer-hook', label: 'useReducer' },
        { id: 'useCallback-hook', label: 'useCallback' },
        { id: 'useMemo-hook', label: 'useMemo' },
        { id: 'useRef-hook', label: 'useRef' },
        { id: 'useLayoutEffect-hook', label: 'useLayoutEffect' },
        { id: 'useImperativeHandle-hook', label: 'useImperativeHandle' },
        { id: 'useDebugValue-hook', label: 'useDebugValue' },
        { id: 'useDeferredValue-hook', label: 'useDeferredValue' },
        { id: 'useTransition-hook', label: 'useTransition' },
        { id: 'useId-hook', label: 'useId' },
        { id: 'custom-hooks', label: 'Custom Hooks' }
      ]
    },
    { id: 'props-state', label: 'Props & State', icon: <FiPackage className="mr-2" /> },
    { id: 'events', label: 'Event Handling', icon: <FiZap className="mr-2" /> },
    { id: 'conditional-rendering', label: 'Conditional Rendering', icon: <FiNavigation className="mr-2" /> },
    { id: 'lists-keys', label: 'Lists & Keys', icon: <FiLayers className="mr-2" /> },
    { id: 'forms', label: 'Forms', icon: <FaKeyboard className="mr-2" /> },
    { id: 'routing', label: 'Routing', icon: <FiGlobe className="mr-2" /> },
    { id: 'context-api', label: 'Context API', icon: <FiDatabase className="mr-2" /> },
    { id: 'performance', label: 'Performance', icon: <FiSmartphone className="mr-2" /> },
    { id: 'redux', label: 'Redux', icon: <DiReact className="mr-2" /> },
    { id: 'testing', label: 'Testing', icon: <FiAward className="mr-2" /> },
    { id: 'advanced', label: 'Advanced Patterns', icon: <FiSettings className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Component-Based",
      description: "Build encapsulated components that manage their own state",
      icon: <FiGrid className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Declarative",
      description: "Design simple views for each state in your application",
      icon: <FiFeather className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Virtual DOM",
      description: "Efficiently updates and renders just the right components when data changes",
      icon: <FiLayers className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "One-Way Data Flow",
      description: "Data flows down from parent to child components via props",
      icon: <FiNavigation className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "JSX",
      description: "JavaScript syntax extension that allows HTML-like syntax in JavaScript",
      icon: <FaCode className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "React Fiber",
      description: "Complete rewrite of React's core algorithm for better rendering performance",
      icon: <FiCpu className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Error Boundaries",
      description: "Components that catch JavaScript errors anywhere in their child component tree",
      icon: <FiShield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
    }
  ];

  // Ecosystem data
  const ecosystem = [
    {
      name: "React DOM",
      description: "Package that serves as the entry point to the DOM and server renderers for React",
      category: "For web applications",
      icon: <FiGlobe className="w-5 h-5 text-blue-600" />
    },
    {
      name: "React Native",
      description: "Framework for building native apps using React",
      category: "For mobile applications",
      icon: <FiSmartphone className="w-5 h-5 text-blue-600" />
    },
    {
      name: "Next.js",
      description: "Production grade framework with static generation and server-side rendering",
      category: "React framework for server-side rendering",
      icon: <DiReact className="w-5 h-5 text-blue-600" />
    },
    {
      name: "Gatsby",
      description: "Blazing fast static site generator for React",
      category: "React framework for static websites",
      icon: <DiReact className="w-5 h-5 text-blue-600" />
    },
    {
      name: "Redux",
      description: "Predictable state container for JavaScript apps",
      category: "State management library",
      icon: <FiDatabase className="w-5 h-5 text-blue-600" />
    },
    {
      name: "React Router",
      description: "Declarative routing for React applications",
      category: "Navigation library",
      icon: <FiNavigation className="w-5 h-5 text-blue-600" />
    }
  ];

  // Example code snippets
  const jsxExamples = {
    regularJS: `const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`,
    jsx: `const element = <h1 className="greeting">Hello, world!</h1>;`,
    expressions: `const user = {
  firstName: 'John',
  lastName: 'Doe',
  avatarUrl: 'https://example.com/john.jpg'
};

function formatName(user) {
  return \`\${user.firstName} \${user.lastName}\`;
}

const element = (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <img src={user.avatarUrl} alt="User avatar" />
    <p>Current time: {new Date().toLocaleTimeString()}</p>
  </div>
);`,
    projectStructure: `my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md`
  };

  // Component examples
  const componentExamples = {
    functionalComponent: `import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage: <Welcome name="Sara" />`,
    classComponent: `import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage: <Welcome name="Sara" />`,
    componentComposition: `function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`,
    propsExample: `function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <button onClick={props.onFollow}>Follow</button>
    </div>
  );
}

// Usage:
<UserCard 
  name="Jane Doe" 
  avatar="jane.jpg" 
  bio="Frontend Developer"
  onFollow={() => console.log('Followed!')}
/>`
  };

  // Hooks examples
  const hooksExamples = {
    useState: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    useEffect: `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    useContext: `import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ 
      background: theme.background, 
      color: theme.foreground 
    }}>
      I am styled by theme context!
    </button>
  );
}`,
    useReducer: `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`,
    useCallback: `import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // This function is memoized and won't change unless dependencies change
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No dependencies, so the function is created once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
    useMemo: `import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ list }) {
  // Only recalculate when list changes
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b);
  }, [list]);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`,
    useRef: `import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    // \`current\` points to the mounted text input element
    inputEl.current.focus();
  };
  
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`,
    useLayoutEffect: `import React, { useState, useLayoutEffect } from 'react';

function MeasureExample() {
  const [width, setWidth] = useState(0);
  const divRef = React.useRef();

  useLayoutEffect(() => {
    // Measure after DOM mutations but before browser paints
    setWidth(divRef.current.offsetWidth);
  }, []);

  return (
    <div ref={divRef}>
      <p>Width: {width}px</p>
    </div>
  );
}`,
    useImperativeHandle: `import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    setValue: (value) => {
      inputRef.current.value = value;
    }
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const fancyInputRef = useRef();

  return (
    <>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>
        Focus
      </button>
    </>
  );
}`,
    useDebugValue: `import { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  
  // Show a label in DevTools next to this Hook
  useDebugValue(isOnline ? 'Online' : 'Offline');
  
  return isOnline;
}`,
    useDeferredValue: `import { useState, useDeferredValue } from 'react';

function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  // The deferred value will "lag behind" the latest query
  return (
    <div>
      <Results query={deferredQuery} />
    </div>
  );
}`,
    useTransition: `import { useState, useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [resource, setResource] = useState(initialResource);

  function handleClick() {
    startTransition(() => {
      // Mark any state updates inside as transitions
      setResource(fetchNewResource());
    });
  }

  return (
    <div>
      {isPending ? 'Loading...' : null}
      <button onClick={handleClick}>Load Data</button>
      <Suspense fallback={<Spinner />}>
        <ProfilePage resource={resource} />
      </Suspense>
    </div>
  );
}`,
    useId: `import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}`,
    customHooks: `import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}`
  };

  // Props and state examples
  const propsStateExamples = {
    props: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Sara" />;
}`,
    state: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
    liftingState: `function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function handleCelsiusChange(value) {
    setCelsius(value);
    setFahrenheit(value ? (parseFloat(value) * 9/5 + 32).toString() : '');
  }

  function handleFahrenheitChange(value) {
    setFahrenheit(value);
    setCelsius(value ? ((parseFloat(value) - 32) * 5/9).toString() : '');
  }

  return (
    <div>
      <TemperatureInput
        scale="celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}`
  };

  // Event handling examples
  const eventHandlingExamples = {
    simpleEvent: `function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}`,
    classEvent: `class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}`,
    arrowFunction: `class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}`,
    passingArgs: `function DeleteButton({ id, onDelete }) {
  return (
    <button onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

function ItemList() {
  const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  
  function handleDelete(id) {
    console.log('Deleting item with id:', id);
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <DeleteButton id={item.id} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      {/* Header with gradient background and subtle shadow */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" >
          {/* Sidebar toggle button with animation */}
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </button>

          {/* Main title with React logo animation */}
          <h1 className="text-2xl md:text-3xl font-bold flex items-center space-x-3">
            <FaReact className="w-8 h-8 animate-spin-slow hover:animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white ">
              React Notes
            </span>
          </h1>

          {/* Back button with hover effect */}
          <button className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md">
            <FaArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline-block">Back</span>
          </button>
        </div>
      </header>

      {/* Main content area with sidebar and content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar with smooth transition */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 transition-all duration-300 ease-in-out`}>
          <nav className="bg-white rounded-xl shadow-md p-4 sticky top-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-blue-800 flex items-center">
                <DiReact className="mr-2 text-blue-600 animate-pulse" /> React Topics
              </h2>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu items with hover effects and transitions */}
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 flex justify-between items-center group"
                      >
                        <div className="flex items-center">
                          {React.cloneElement(item.icon, { className: "mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" })}
                          {item.label}
                        </div>
                        {activeSubmenu === item.id ? (
                          <FaChevronUp className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-blue-700" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-blue-700" />
                        )}
                      </button>
                      <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${activeSubmenu === item.id ? 'max-h-96' : 'max-h-0'}`}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={`#${subItem.id}`}
                              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-sm flex items-center"
                            >
                              <span className="w-2 h-2 rounded-full bg-blue-300 mr-2 transition-all duration-200 group-hover:bg-blue-500"></span>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 flex items-center group"
                    >
                      {React.cloneElement(item.icon, { className: "mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" })}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 w-100">
          {/* Introduction Section */}
          <section id="introduction" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiClock className="mr-3" /> Introduction to React
                </h2>
              </div>

              <div className="p-6">
                {/* What is React card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-500" /> What is React?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                    It lets you compose complex UIs from small and isolated pieces of code called "components".
                  </p>

                  {/* Note box with animation */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Note:</p>
                        <p className="text-yellow-700">React was first released in 2013 and has since become one of the most popular frontend libraries, with a strong ecosystem and community support.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tip box with animation */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Tip:</p>
                        <p className="text-blue-700">React is not a framework - it's just the view layer, unlike Angular which is a full framework.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2 text-blue-500" /> Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-sm"
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

                {/* React Ecosystem card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiPackage className="mr-2 text-blue-500" /> React Ecosystem
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ecosystem.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 group-hover:bg-blue-200">
                            {item.icon}
                          </div>
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Setting Up a React Project card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2 text-blue-500" /> Setting Up a React Project
                  </h3>
                  <p className="mb-4 text-gray-700">You can create a new React application using Create React App:</p>

                  {/* Code block with copy button */}
                  <div className="relative mb-4 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{`npx create-react-app my-app
cd my-app
npm start`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`npx create-react-app my-app\ncd my-app\nnpm start`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `npx create-react-app my-app\ncd my-app\nnpm start` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Note:</p>
                        <p className="text-yellow-700">You'll need Node.js (version 14 or higher) installed on your computer.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Alternative Tools:</p>
                        <p className="text-blue-700">You can also use Vite, Next.js, or other tools to bootstrap your React application.</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-gray-500" /> Project Structure
                  </h4>
                  <div className="relative group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{jsxExamples.projectStructure}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(jsxExamples.projectStructure)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === jsxExamples.projectStructure ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* JSX Section */}
          <section id="jsx" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> JSX
                </h2>
              </div>

              <div className="p-6">
                {/* What is JSX card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2 text-blue-500" /> What is JSX?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
                    It makes your React code more readable and expressive.
                  </p>

                  {/* Comparison columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="comparison-col transition-all duration-200 hover:-translate-y-1">
                      <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
                        <DiJavascript className="mr-1 text-yellow-500" /> Regular JavaScript
                      </h4>
                      <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg transition-all duration-200 hover:ring-2 hover:ring-blue-500">
                        <pre className="font-mono text-sm overflow-x-auto">
                          <code>{jsxExamples.regularJS}</code>
                        </pre>
                      </div>
                    </div>
                    <div className="comparison-col transition-all duration-200 hover:-translate-y-1">
                      <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
                        <FaCode className="mr-1 text-blue-500" /> JSX
                      </h4>
                      <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg transition-all duration-200 hover:ring-2 hover:ring-blue-500">
                        <pre className="font-mono text-sm overflow-x-auto">
                          <code>{jsxExamples.jsx}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Tip:</p>
                        <p className="text-blue-700">JSX makes your code more readable and easier to write. It gets compiled to regular JavaScript function calls.</p>
                      </div>
                    </div>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Behind the Scenes:</p>
                        <p className="text-yellow-700">JSX is transformed into React.createElement() calls which return plain JavaScript objects called "React elements".</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* JSX Features card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2 text-blue-500" /> JSX Features
                  </h3>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">JavaScript Expressions in JSX</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{jsxExamples.expressions}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(jsxExamples.expressions)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === jsxExamples.expressions ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* JSX vs HTML Differences card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTable className="mr-2 text-blue-500" /> JSX vs HTML Differences
                  </h3>

                  <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                              <FaHtml5 className="mr-2 text-orange-500" /> HTML
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                              <FaJs className="mr-2 text-yellow-500" /> JSX
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Explanation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            html: 'class="my-class"',
                            jsx: 'className="my-class"',
                            explanation: "'class' is a reserved word in JavaScript"
                          },
                          {
                            html: 'for="input-id"',
                            jsx: 'htmlFor="input-id"',
                            explanation: "'for' is a reserved word in JavaScript"
                          },
                          {
                            html: 'style="color: red"',
                            jsx: 'style={"{"}{"{"}color: \'red\'{"}"}{"}"}',
                            explanation: "JSX style attribute takes a JavaScript object with camelCased properties"
                          },
                          {
                            html: 'onclick="handleClick()"',
                            jsx: 'onClick={"{"}handleClick{"}"}',
                            explanation: "Event handlers in JSX use camelCase and pass functions"
                          },
                          {
                            html: '&lt;input&gt;',
                            jsx: '&lt;input /&gt;',
                            explanation: "JSX tags must be explicitly closed"
                          }
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.html}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.jsx}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.explanation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGrid className="mr-3" /> Components
                </h2>
              </div>

              <div className="p-6">
                {/* What are Components card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiGrid className="mr-2 text-blue-500" /> What are Components?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces that can be handled separately.
                  </p>

                  {/* Component examples comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="transition-all duration-200 hover:-translate-y-1">
                      <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
                        <FaCode className="mr-1 text-blue-500" /> Functional Component
                      </h4>
                      <div className="relative group">
                        <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                          <pre className="font-mono text-sm overflow-x-auto">
                            <code>{componentExamples.functionalComponent}</code>
                          </pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(componentExamples.functionalComponent)}
                          className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <FaCopy className="w-4 h-4 mr-1" />
                          {copiedCode === componentExamples.functionalComponent ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div className="transition-all duration-200 hover:-translate-y-1">
                      <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
                        <FaCode className="mr-1 text-blue-500" /> Class Component
                      </h4>
                      <div className="relative group">
                        <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                          <pre className="font-mono text-sm overflow-x-auto">
                            <code>{componentExamples.classComponent}</code>
                          </pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(componentExamples.classComponent)}
                          className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <FaCopy className="w-4 h-4 mr-1" />
                          {copiedCode === componentExamples.classComponent ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Modern React:</p>
                        <p className="text-blue-700">With the introduction of hooks, functional components can now do everything class components can do. Functional components are now the preferred way to write components.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component Composition card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiPackage className="mr-2 text-blue-500" /> Component Composition
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{componentExamples.componentComposition}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(componentExamples.componentComposition)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === componentExamples.componentComposition ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Best Practice:</p>
                        <p className="text-yellow-700">Break your UI into components where each component matches a single responsibility.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Props card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> Props
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Props (short for properties) are how components talk to each other. They are read-only and allow data to flow from parent to child components.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{componentExamples.propsExample}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(componentExamples.propsExample)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === componentExamples.propsExample ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Prop Types:</p>
                        <p className="text-blue-700">Consider using PropTypes or TypeScript to document and validate the types of props your components expect.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hooks Section */}
          <section id="hooks" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiCpu className="mr-3" /> Hooks
                </h2>
              </div>

              <div className="p-6">
                {/* What are Hooks card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2 text-blue-500" /> What are Hooks?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.
                  </p>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Rules of Hooks:</p>
                        <ul className="list-disc pl-5 text-yellow-700">
                          <li>Only call Hooks at the top level (not inside loops, conditions, or nested functions)</li>
                          <li>Only call Hooks from React function components or custom Hooks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useState Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useState-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-blue-500" /> useState
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useState is a Hook that lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useState}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useState)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useState ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Functional Updates:</p>
                        <p className="text-blue-700">When the new state is computed using the previous state, you can pass a function to setState that will receive the previous value.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useEffect Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useEffect-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaFilter className="mr-2 text-blue-500" /> useEffect
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useEffect lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useEffect}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useEffect)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useEffect ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Dependency Array:</p>
                        <p className="text-yellow-700">You can tell React to skip applying an effect if certain values haven't changed between re-renders by passing an array as an optional second argument.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Cleanup:</p>
                        <p className="text-blue-700">Some effects require cleanup (like subscriptions). Return a function from your effect to handle this.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useContext Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useContext-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaServer className="mr-2 text-blue-500" /> useContext
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useContext lets you subscribe to React context without introducing nesting. It accepts a context object and returns the current context value.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useContext}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useContext)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useContext ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* useReducer Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useReducer-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> useReducer
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useReducer}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useReducer)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useReducer ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">When to Use:</p>
                        <p className="text-blue-700">useReducer is great for managing complex state logic or when state transitions follow predictable patterns.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useCallback Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useCallback-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-blue-500" /> useCallback
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useCallback returns a memoized callback function. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useCallback}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useCallback)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useCallback ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">When to Use:</p>
                        <p className="text-blue-700">Use useCallback when you need to maintain referential equality of a function across re-renders, especially when passing it as a prop to child components.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useMemo Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useMemo-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaChartLine className="mr-2 text-blue-500" /> useMemo
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useMemo returns a memoized value. It only recalculates the memoized value when one of the dependencies has changed. This optimization helps avoid expensive calculations on every render.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useMemo}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useMemo)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useMemo ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">Performance Consideration:</p>
                        <p className="text-yellow-700">Don't overuse useMemo. The optimization comes with a cost (memory usage for the memoized value and comparison of dependencies).</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useRef Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useRef-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> useRef
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useRef}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useRef)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useRef ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Common Uses:</p>
                        <p className="text-blue-700">useRef is commonly used to access DOM elements, store mutable values that don't cause re-renders, and keep track of previous values.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useLayoutEffect Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useLayoutEffect-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaFilter className="mr-2 text-blue-500" /> useLayoutEffect
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useLayoutEffect has the same signature as useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useLayoutEffect}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useLayoutEffect)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useLayoutEffect ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Note box */}
                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-yellow-800">When to Use:</p>
                        <p className="text-yellow-700">Prefer useEffect when possible. Only use useLayoutEffect if you need to measure DOM elements or perform mutations that must be synchronous.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useImperativeHandle Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useImperativeHandle-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaServer className="mr-2 text-blue-500" /> useImperativeHandle
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useImperativeHandle customizes the instance value that is exposed to parent components when using ref. It should be used with forwardRef.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useImperativeHandle}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useImperativeHandle)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useImperativeHandle ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">When to Use:</p>
                        <p className="text-blue-700">This is useful when you need to expose specific methods of a child component to its parent, rather than the entire DOM node.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* useDebugValue Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useDebugValue-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCog className="mr-2 text-blue-500" /> useDebugValue
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useDebugValue can be used to display a label for custom hooks in React DevTools. It's mainly used for debugging purposes.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useDebugValue}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useDebugValue)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useDebugValue ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* useDeferredValue Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useDeferredValue-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-blue-500" /> useDeferredValue
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates. This is useful for deferring non-urgent updates.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useDeferredValue}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useDeferredValue)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useDeferredValue ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* useTransition Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useTransition-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-blue-500" /> useTransition
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useTransition lets you mark some state updates as non-urgent. Other state updates are considered urgent by default. This is useful for performance optimizations.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useTransition}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useTransition)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useTransition ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* useId Hook card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md" id="useId-hook">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2 text-blue-500" /> useId
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useId generates unique IDs that are stable across the server and client, avoiding hydration mismatches. This is useful for accessibility attributes.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.useId}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.useId)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.useId ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Custom Hooks card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md" id="custom-hooks">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCog className="mr-2 text-blue-500" /> Custom Hooks
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Custom Hooks let you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.
                  </p>

                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{hooksExamples.customHooks}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hooksExamples.customHooks)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === hooksExamples.customHooks ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Best Practices:</p>
                        <p className="text-blue-700">Custom Hooks are a powerful way to share logic between components. They follow the same rules as built-in Hooks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Props & State Section */}
          <section id="props-state" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Props & State
                </h2>
              </div>

              <div className="p-6">
                {/* Props vs State card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2 text-blue-500" /> Props vs State
                  </h3>

                  <div className="overflow-x-auto shadow-md rounded-lg mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
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
                          {
                            aspect: 'Definition',
                            props: 'Input passed to a component (read-only)',
                            state: 'Data managed within a component (mutable)'
                          },
                          {
                            aspect: 'Mutable',
                            props: 'Immutable (cannot be changed by component)',
                            state: 'Mutable (can be changed using setState)'
                          },
                          {
                            aspect: 'Ownership',
                            props: 'Owned by parent component',
                            state: 'Owned by the component itself'
                          },
                          {
                            aspect: 'Updates',
                            props: 'Cause re-render when parent re-renders',
                            state: 'Cause re-render when changed'
                          },
                          {
                            aspect: 'Initial Value',
                            props: 'Passed from parent component',
                            state: 'Defined within the component'
                          }
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.props}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.state}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Props example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Props Example</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{propsStateExamples.props}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(propsStateExamples.props)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === propsStateExamples.props ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* State example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">State Example</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{propsStateExamples.state}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(propsStateExamples.state)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === propsStateExamples.state ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Lifting State Up example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Lifting State Up</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{propsStateExamples.liftingState}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(propsStateExamples.liftingState)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === propsStateExamples.liftingState ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">State Management:</p>
                        <p className="text-blue-700">For complex state logic, consider using useReducer or external state management libraries like Redux or Zustand.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Handling Section */}
          <section id="events" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiZap className="mr-3" /> Event Handling
                </h2>
              </div>

              <div className="p-6">
                {/* Event Handling Basics card */}
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2 text-blue-500" /> Event Handling Basics
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Handling events with React elements is similar to handling events on DOM elements, with some syntactic differences:
                  </p>

                  <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                    <li>React events are named using camelCase (onClick) rather than lowercase (onclick)</li>
                    <li>With JSX you pass a function as the event handler rather than a string</li>
                    <li>You must call preventDefault explicitly to prevent default behavior</li>
                    <li>React events are synthetic events that wrap native browser events</li>
                  </ul>

                  {/* Simple event example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Simple Event Example</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{eventHandlingExamples.simpleEvent}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(eventHandlingExamples.simpleEvent)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === eventHandlingExamples.simpleEvent ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Class event example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Class Component Event Example</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{eventHandlingExamples.classEvent}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(eventHandlingExamples.classEvent)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === eventHandlingExamples.classEvent ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Arrow function example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Arrow Function Example</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{eventHandlingExamples.arrowFunction}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(eventHandlingExamples.arrowFunction)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === eventHandlingExamples.arrowFunction ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Passing arguments example */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Passing Arguments to Event Handlers</h4>
                  <div className="relative mb-6 group">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500">
                      <pre className="font-mono text-sm">
                        <code>{eventHandlingExamples.passingArgs}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(eventHandlingExamples.passingArgs)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === eventHandlingExamples.passingArgs ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Tip box */}
                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-800">Performance Tip:</p>
                        <p className="text-blue-700">Avoid creating arrow functions in render methods as they create a new function on each render. Instead, bind methods in the constructor or use class properties syntax.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Conditional Rendering Section */}
          <section id="conditional-rendering" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiNavigation className="mr-3" /> Conditional Rendering
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCheck className="mr-2" /> If Statement
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Usage: <Greeting isLoggedIn={false} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Usage: <Greeting isLoggedIn={false} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Usage: <Greeting isLoggedIn={false} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCog className="mr-2" /> Inline If with Logical && Operator
                  </h3>
                  <p className="mb-4 text-gray-700">
                    You can embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

// Usage: <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

// Usage: <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

// Usage: <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Falsy Values:</p>
                        <p className="text-yellow-700">Be careful with falsy values like 0 that might render unexpectedly with this approach.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2" /> Inline If-Else with Conditional Operator
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function UserStatus(props) {
  return (
    <div>
      The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

// Usage: <UserStatus isLoggedIn={false} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function UserStatus(props) {
  return (
    <div>
      The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

// Usage: <UserStatus isLoggedIn={false} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function UserStatus(props) {
  return (
    <div>
      The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

// Usage: <UserStatus isLoggedIn={false} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Readability:</p>
                        <p className="text-blue-700">For complex conditions, consider extracting the logic into separate components or variables to keep your JSX readable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lists & Keys Section */}
          <section id="lists-keys" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiLayers className="mr-3" /> Lists & Keys
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2" /> Rendering Lists
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    You can build collections of elements and include them in JSX using curly braces { } and the JavaScript map() function.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaKeyboard className="mr-2" /> Keys
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

// Usage: 
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
<Blog posts={posts} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

// Usage: 
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
<Blog posts={posts} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

// Usage: 
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
<Blog posts={posts} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Key Rules:</p>
                        <ul className="list-disc pl-5 text-yellow-700">
                          <li>Keys must be unique among siblings (but don't need to be globally unique)</li>
                          <li>Don't use indexes as keys if the order of items may change</li>
                          <li>Keys should be stable, predictable, and unique</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaTable className="mr-2" /> Extracting Components with Keys
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Keys only make sense in the context of the surrounding array. If you extract a component, you should keep the key on the component rather than on the DOM element inside it.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return <ul>{listItems}</ul>;
}

// Usage: <NumberList numbers={[1, 2, 3, 4, 5]} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forms Section */}
          <section id="forms" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaKeyboard className="mr-3" /> Forms
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaKeyboard className="mr-2" /> Controlled Components
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    In HTML, form elements like input, textarea, and select typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Controlled vs Uncontrolled:</p>
                        <p className="text-yellow-700">In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaList className="mr-2" /> Handling Multiple Inputs
                  </h3>
                  <p className="mb-4 text-gray-700">
                    When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCheck className="mr-2" /> Form Validation
                  </h3>
                  <p className="mb-4 text-gray-700">
                    React doesn't include built-in form validation, but you can implement it by checking values in your state and conditionally rendering error messages.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // Submit form
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // Submit form
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // Submit form
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Validation Libraries:</p>
                        <p className="text-blue-700">For complex forms, consider using libraries like Formik or React Hook Form which provide validation and form state management.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Routing Section */}
          <section id="routing" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGlobe className="mr-3" /> Routing
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiNavigation className="mr-2" /> React Router
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React Router is the most popular routing library for React. It keeps your UI in sync with the URL, allowing for navigation without page reloads.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function Users() { return <h2>Users</h2>; }`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function Users() { return <h2>Users</h2>; }`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function Users() { return <h2>Users</h2>; }` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Installation:</p>
                        <p className="text-yellow-700">First install React Router with: <code className="bg-gray-200 px-1 rounded">npm install react-router-dom</code></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2" /> Route Parameters
                  </h3>
                  <p className="mb-4 text-gray-700">
                    You can pass parameters in routes which can then be accessed in your components.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2" /> Programmatic Navigation
                  </h3>
                  <p className="mb-4 text-gray-700">
                    You can navigate programmatically using the useHistory hook from React Router.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Navigation Methods:</p>
                        <p className="text-blue-700">The history object has several methods including push (adds new entry), replace (replaces current entry), and goBack/goForward.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Context API Section */}
          <section id="context-api" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiDatabase className="mr-3" /> Context API
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiDatabase className="mr-2" /> What is Context?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`// Create a Context
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`// Create a Context
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Create a Context
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">When to Use Context:</p>
                        <p className="text-yellow-700">Context is designed to share data that can be considered "global" for a tree of React components, such as current authenticated user, theme, or preferred language.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCog className="mr-2" /> Updating Context
                  </h3>
                  <p className="mb-4 text-gray-700">
                    To update context from a nested component, you can pass a function down through the context to allow consumers to update it.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeTogglerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeTogglerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeTogglerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaStore className="mr-2" /> Context vs Redux
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Context API and Redux both solve the problem of prop drilling, but they have different use cases and trade-offs.
                  </p>

                  <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Feature
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Context API
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Redux
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Learning Curve</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Easier, built into React</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Steeper, requires learning Redux concepts</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Boilerplate</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Minimal</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Significant</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Performance</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Good for low-frequency updates</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Optimized for frequent updates</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Middleware</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Not available</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Supports middleware (e.g., Redux Thunk, Saga)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">DevTools</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Basic</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Powerful time-travel debugging</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-4">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Recommendation:</p>
                        <p className="text-blue-700">Use Context for simple state management (theme, auth, etc.). Use Redux for complex state with frequent updates or when you need middleware.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Section */}
          <section id="performance" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiSmartphone className="mr-3" /> Performance
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiZap className="mr-2" /> React.memo
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React.memo is a higher order component that memoizes your component, preventing unnecessary re-renders when the props haven't changed.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// Or with a custom comparison function
const MyComponent = React.memo(
  function MyComponent(props) {
    /* render using props */
  },
  function areEqual(prevProps, nextProps) {
    /*
    Return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
);`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// Or with a custom comparison function
const MyComponent = React.memo(
  function MyComponent(props) {
    /* render using props */
  },
  function areEqual(prevProps, nextProps) {
    /*
    Return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
);`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// Or with a custom comparison function
const MyComponent = React.memo(
  function MyComponent(props) {
    /* render using props */
  },
  function areEqual(prevProps, nextProps) {
    /*
    Return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
);` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">When to Use:</p>
                        <p className="text-yellow-700">Use React.memo for components that render often with the same props, or when the rendering is expensive.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2" /> useMemo & useCallback
                  </h3>
                  <p className="mb-4 text-gray-700">
                    useMemo memoizes expensive calculations, and useCallback memoizes functions to prevent unnecessary re-creations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">useMemo</h4>
                      <div className="relative">
                        <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg">
                          <pre className="font-mono text-sm overflow-x-auto">
                            <code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</code>
                          </pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`)}
                          className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                        >
                          <FaCopy className="w-4 h-4 mr-1" />
                          {copiedCode === `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">useCallback</h4>
                      <div className="relative">
                        <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg">
                          <pre className="font-mono text-sm overflow-x-auto">
                            <code>{`const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);`}</code>
                          </pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(`const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);`)}
                          className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                        >
                          <FaCopy className="w-4 h-4 mr-1" />
                          {copiedCode === `const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Optimization Trade-off:</p>
                        <p className="text-blue-700">These hooks come with a memory overhead. Only use them when you can measure a performance improvement that justifies the added complexity.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiBarChart2 className="mr-2" /> Performance Tools
                  </h3>
                  <p className="mb-4 text-gray-700">
                    React provides several tools to help you identify performance bottlenecks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FiCpu className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">React DevTools</h4>
                      </div>
                      <p className="text-sm text-gray-700">Highlight updates when components render. Helps identify unnecessary re-renders.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FiClock className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">Profiler API</h4>
                      </div>
                      <p className="text-sm text-gray-700">Measure how often components render and the "cost" of rendering.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FiZap className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">Production Build</h4>
                      </div>
                      <p className="text-sm text-gray-700">Always test performance in production mode as development mode is much slower.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Redux Section */}
          <section id="redux" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <DiReact className="mr-3" /> Redux
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <DiReact className="mr-2" /> What is Redux?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.
                  </p>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Core Concepts:</p>
                        <ul className="list-disc pl-5 text-yellow-700">
                          <li><strong>Store:</strong> Holds application state</li>
                          <li><strong>Actions:</strong> Describe what happened</li>
                          <li><strong>Reducers:</strong> Specify how the state changes in response to actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaExchangeAlt className="mr-2" /> Redux Flow
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Redux follows a strict unidirectional data flow where state is immutable and can only be changed by dispatching actions.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`// Action Types
const ADD_TODO = 'ADD_TODO';

// Action Creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(todos);

// Dispatch an action
store.dispatch(addTodo('Learn Redux'));

// Get the current state
console.log(store.getState());`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`// Action Types
const ADD_TODO = 'ADD_TODO';

// Action Creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(todos);

// Dispatch an action
store.dispatch(addTodo('Learn Redux'));

// Get the current state
console.log(store.getState());`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `// Action Types
const ADD_TODO = 'ADD_TODO';

// Action Creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(todos);

// Dispatch an action
store.dispatch(addTodo('Learn Redux'));

// Get the current state
console.log(store.getState());` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLink className="mr-2" /> React-Redux
                  </h3>
                  <p className="mb-4 text-gray-700">
                    React-Redux is the official Redux UI binding library for React. It provides the Provider component and connect function to connect your React components to the Redux store.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { Provider, connect } from 'react-redux';

// Presentational Component
function TodoList({ todos, addTodo }) {
  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Map state to props
const mapStateToProps = state => ({
  todos: state.todos
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

// Connect component
const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// Provide store to app
function App() {
  return (
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { Provider, connect } from 'react-redux';

// Presentational Component
function TodoList({ todos, addTodo }) {
  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Map state to props
const mapStateToProps = state => ({
  todos: state.todos
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

// Connect component
const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// Provide store to app
function App() {
  return (
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { Provider, connect } from 'react-redux';

// Presentational Component
function TodoList({ todos, addTodo }) {
  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Map state to props
const mapStateToProps = state => ({
  todos: state.todos
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

// Connect component
const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// Provide store to app
function App() {
  return (
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiCpu className="mr-2" /> Redux Toolkit
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It helps simplify many common Redux use cases.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

// React component usage
function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addTodo('New Todo'))}>
        Add Todo
      </button>
      <TodoList todos={todos} />
    </div>
  );
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

// React component usage
function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addTodo('New Todo'))}>
        Add Todo
      </button>
      <TodoList todos={todos} />
    </div>
  );
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

// React component usage
function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addTodo('New Todo'))}>
        Add Todo
      </button>
      <TodoList todos={todos} />
    </div>
  );
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Modern Redux:</p>
                        <p className="text-blue-700">Redux Toolkit is now the recommended way to write Redux logic. It simplifies store setup, reduces boilerplate, and follows best practices by default.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing Section */}
          <section id="testing" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiAward className="mr-3" /> Testing
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiAward className="mr-2" /> Testing Approaches
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    React components can be tested at different levels, from individual units to full integration tests.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FaCheck className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">Unit Testing</h4>
                      </div>
                      <p className="text-sm text-gray-700">Test individual components in isolation</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FaList className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">Integration Testing</h4>
                      </div>
                      <p className="text-sm text-gray-700">Test how components work together</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FiGlobe className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-semibold">End-to-End</h4>
                      </div>
                      <p className="text-sm text-gray-700">Test complete user flows in the browser</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2" /> Testing with Jest
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Jest is a JavaScript testing framework that works well for React applications. It provides test runners, assertion libraries, and mocking capabilities.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('button click calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button shows loading state', () => {
  render(<Button loading>Click me</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('button click calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button shows loading state', () => {
  render(<Button loading>Click me</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('button click calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button shows loading state', () => {
  render(<Button loading>Click me</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiSmartphone className="mr-2" /> React Testing Library
                  </h3>
                  <p className="mb-4 text-gray-700">
                    React Testing Library is a set of helpers that let you test React components without relying on their implementation details.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'user' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'pass' }
  });
  fireEvent.click(screen.getByText(/submit/i));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'user',
    password: 'pass'
  });
});`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'user' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'pass' }
  });
  fireEvent.click(screen.getByText(/submit/i));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'user',
    password: 'pass'
  });
});`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'user' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'pass' }
  });
  fireEvent.click(screen.getByText(/submit/i));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'user',
    password: 'pass'
  });
});` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-800">Testing Principles:</p>
                        <p className="text-blue-700">Test behavior, not implementation. Write tests that resemble how users interact with your components.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiShield className="mr-2" /> Snapshot Testing
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Snapshot tests are a useful tool to make sure your UI doesn't change unexpectedly.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import renderer from 'react-test-renderer';
import Button from './Button';

test('button renders correctly', () => {
  const tree = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// After initial run, Jest creates a snapshot file.
// Subsequent test runs compare the output to the saved snapshot.`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import renderer from 'react-test-renderer';
import Button from './Button';

test('button renders correctly', () => {
  const tree = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// After initial run, Jest creates a snapshot file.
// Subsequent test runs compare the output to the saved snapshot.`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import renderer from 'react-test-renderer';
import Button from './Button';

test('button renders correctly', () => {
  const tree = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// After initial run, Jest creates a snapshot file.
// Subsequent test runs compare the output to the saved snapshot.` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="note bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800">Snapshot Caveats:</p>
                        <p className="text-yellow-700">Snapshots are not a replacement for meaningful assertions. Use them to complement, not replace, other tests.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Patterns Section */}
          <section id="advanced" className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiSettings className="mr-3" /> Advanced Patterns
                </h2>
              </div>

              <div className="p-6">
                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2" /> Higher-Order Components
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or behavior.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Usage
const ButtonWithLoading = withLoading(Button);
<ButtonWithLoading isLoading={true} onClick={handleClick}>Submit</ButtonWithLoading>`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Usage
const ButtonWithLoading = withLoading(Button);
<ButtonWithLoading isLoading={true} onClick={handleClick}>Submit</ButtonWithLoading>`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Usage
const ButtonWithLoading = withLoading(Button);
<ButtonWithLoading isLoading={true} onClick={handleClick}>Submit</ButtonWithLoading>` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2" /> Render Props
                  </h3>
                  <p className="mb-4 text-gray-700">
                    The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)} />`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)} />`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)} />` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 mb-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2" /> Custom Hooks
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Custom Hooks let you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in a component
function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in a component
function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in a component
function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="card bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2" /> Compound Components
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Compound components are a pattern where components work together to share state and handle logic while giving rendering control to the user.
                  </p>

                  <div className="relative mb-6">
                    <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="font-mono text-sm">
                        <code>{`function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {  
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index)
    });
  });
}

function Tab({ isActive, onSelect, children }) {
  return (
    <button
      onClick={onSelect}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}

// Usage
<Tabs>
  <Tab>Tab 1</Tab>
  <Tab>Tab 2</Tab>
  <Tab>Tab 3</Tab>
</Tabs>`}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index)
    });
  });
}

function Tab({ isActive, onSelect, children }) {
  return (
    <button
      onClick={onSelect}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}

// Usage
<Tabs>
  <Tab>Tab 1</Tab>
  <Tab>Tab 2</Tab>
  <Tab>Tab 3</Tab>
</Tabs>`)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === `function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index)
    });
  });
}

function Tab({ isActive, onSelect, children }) {
  return (
    <button
      onClick={onSelect}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}

// Usage
<Tabs>
  <Tab>Tab 1</Tab>
  <Tab>Tab 2</Tab>
  <Tab>Tab 3</Tab>
</Tabs>` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}