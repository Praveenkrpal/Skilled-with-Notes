
import React, { useState, useEffect } from 'react';
import { FaDocker, FaBars, FaArrowLeft, FaTimes, FaLightbulb, FaExclamationTriangle, FaCopy, FaServer, FaNetworkWired, FaDatabase, FaCode, FaShieldAlt, FaCogs, FaLayerGroup, FaBoxes, FaCloud } from 'react-icons/fa';
import { FiClock, FiCode as FiCodeIcon, FiLayout, FiPackage, FiUser, FiAward, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Docker() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('docker-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [conceptsRef, conceptsInView] = useInView({ threshold: 0.1 });
  const [installationRef, installationInView] = useInView({ threshold: 0.1 });
  const [commandsRef, commandsInView] = useInView({ threshold: 0.1 });
  const [imagesRef, imagesInView] = useInView({ threshold: 0.1 });
  const [containersRef, containersInView] = useInView({ threshold: 0.1 });
  const [networkingRef, networkingInView] = useInView({ threshold: 0.1 });
  const [volumesRef, volumesInView] = useInView({ threshold: 0.1 });
  const [composeRef, composeInView] = useInView({ threshold: 0.1 });
  const [swarmRef, swarmInView] = useInView({ threshold: 0.1 });
  const [securityRef, securityInView] = useInView({ threshold: 0.1 });
  const [bestPracticesRef, bestPracticesInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'docker-introduction', inView: introInView },
      { id: 'docker-concepts', inView: conceptsInView },
      { id: 'docker-installation', inView: installationInView },
      { id: 'docker-commands', inView: commandsInView },
      { id: 'docker-images', inView: imagesInView },
      { id: 'docker-containers', inView: containersInView },
      { id: 'docker-networking', inView: networkingInView },
      { id: 'docker-volumes', inView: volumesInView },
      { id: 'docker-compose', inView: composeInView },
      { id: 'docker-swarm', inView: swarmInView },
      { id: 'docker-security', inView: securityInView },
      { id: 'docker-best-practices', inView: bestPracticesInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [
    introInView, conceptsInView, installationInView, commandsInView,
    imagesInView, containersInView, networkingInView, volumesInView,
    composeInView, swarmInView, securityInView, bestPracticesInView
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
    { id: 'docker-introduction', label: 'Introduction', icon: <FiClock className="mr-2" /> },
    { id: 'docker-concepts', label: 'Core Concepts', icon: <FaServer className="mr-2" /> },
    { id: 'docker-installation', label: 'Installation', icon: <FiPackage className="mr-2" /> },
    { id: 'docker-commands', label: 'Basic Commands', icon: <FaCode className="mr-2" /> },
    { id: 'docker-images', label: 'Images', icon: <FaBoxes className="mr-2" /> },
    { id: 'docker-containers', label: 'Containers', icon: <FaDocker className="mr-2" /> },
    { id: 'docker-networking', label: 'Networking', icon: <FaNetworkWired className="mr-2" /> },
    { id: 'docker-volumes', label: 'Volumes', icon: <FaDatabase className="mr-2" /> },
    { id: 'docker-compose', label: 'Docker Compose', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'docker-swarm', label: 'Docker Swarm', icon: <FaCloud className="mr-2" /> },
    { id: 'docker-security', label: 'Security', icon: <FaShieldAlt className="mr-2" /> },
    { id: 'docker-best-practices', label: 'Best Practices', icon: <FaCogs className="mr-2" /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Containerization",
      description: "Package applications with all dependencies into standardized units",
      icon: <FiPackage className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Isolation",
      description: "Processes run in isolated environments with their own filesystem",
      icon: <FaServer className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Portability",
      description: "Run anywhere - development, testing, and production environments",
      icon: <FaCloud className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Efficiency",
      description: "Lightweight compared to traditional virtual machines",
      icon: <FiZap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Scalability",
      description: "Easily scale up or tear down container instances",
      icon: <FaNetworkWired className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Version Control",
      description: "Track versions of your container images like code",
      icon: <FaCode className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Microservices",
      description: "Ideal architecture for microservices applications",
      icon: <FaLayerGroup className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration with continuous integration/deployment pipelines",
      icon: <FaCogs className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
    }
  ];

  // Docker Examples
  const dockerExamples = {
    basicCommands: `# List running containers
docker ps

# List all containers (including stopped ones)
docker ps -a

# Run a container from an image
docker run -d -p 8080:80 --name mynginx nginx

# Stop a container
docker stop mynginx

# Remove a container
docker rm mynginx

# List images
docker images

# Pull an image
docker pull ubuntu:latest

# Remove an image
docker rmi ubuntu:latest

# View container logs
docker logs mynginx`,

    dockerfile: `# Sample Dockerfile
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]`,

    buildRun: `# Build an image from Dockerfile
docker build -t my-app .

# Run the built image
docker run -d -p 3000:3000 --name my-app-container my-app

# Run with environment variables
docker run -d -e "ENV=production" -p 3000:3000 my-app

# Run with volume mounting
docker run -d -v /host/path:/container/path -p 3000:3000 my-app`,

    networking: `# Create a network
docker network create my-network

# Run containers on the same network
docker run -d --network my-network --name container1 my-app
docker run -d --network my-network --name container2 my-app

# Inspect network
docker network inspect my-network

# Connect a running container to a network
docker network connect my-network existing-container

# List all networks
docker network ls`,

    volumes: `# Create a volume
docker volume create my-volume

# Run container with volume
docker run -d -v my-volume:/data --name my-container my-app

# Inspect volume
docker volume inspect my-volume

# List all volumes
docker volume ls

# Remove unused volumes
docker volume prune

# Bind mount (host directory)
docker run -d -v /host/path:/container/path my-app`,

    composeFile: `# docker-compose.yml example
version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    networks:
      - frontend

  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
    networks:
      - frontend
      - backend

  db:
    image: postgres:13
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret
    networks:
      - backend

networks:
  frontend:
  backend:

volumes:
  db-data:`,

    swarmCommands: `# Initialize swarm
docker swarm init

# Join a worker to swarm
docker swarm join --token <token> <manager-ip>:2377

# Deploy a stack
docker stack deploy -c docker-compose.yml my-stack

# List services
docker service ls

# Scale a service
docker service scale my-stack_web=5

# List nodes
docker node ls

# Leave swarm
docker swarm leave --force`,

    security: `# Scan an image for vulnerabilities
docker scan my-image

# Run container with read-only filesystem
docker run --read-only -d my-app

# Limit container resources
docker run -d --memory="512m" --cpus="1.5" my-app

# Run container with non-root user
docker run -d --user 1000:1000 my-app

# Enable content trust
export DOCKER_CONTENT_TRUST=1

# View container processes
docker top my-container`,

    bestPractices: `# Use .dockerignore to exclude unnecessary files
echo "node_modules" >> .dockerignore
echo ".git" >> .dockerignore

# Multi-stage builds to reduce final image size
FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Use specific tags, not 'latest'
FROM node:14.17.0-alpine

# Keep containers ephemeral
# (Don't store data in containers)

# Minimize layers by combining RUN commands
RUN apt-get update && \\
    apt-get install -y package1 package2 && \\
    rm -rf /var/lib/apt/lists/*

# Use HEALTHCHECK instruction
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost/ || exit 1`
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
              <FaDocker className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Docker Notes
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
                      <FaDocker className="text-blue-600" />
                    </motion.div>
                    Docker Topics
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
          <section id="docker-introduction" className="mb-12" ref={introRef}>
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
                  Introduction to Docker
                </h2>
              </div>

              <div className="p-6">
                {/* What is Docker card */}
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLightbulb className="mr-2 text-yellow-400" /> What is Docker?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker is an open-source platform for developing, shipping, and running applications in lightweight, portable containers. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
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
                        <p className="text-yellow-700">Docker was first released in 2013 and has since become the de facto standard for containerization, revolutionizing how applications are developed and deployed.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Docker vs VMs */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaServer className="mr-2 text-gray-500" /> Docker vs Virtual Machines
                  </h4>
                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`
+----------------+---------------------+----------------------+
|                | Virtual Machines    | Docker Containers    |
+----------------+---------------------+----------------------+
| Isolation      | Full OS isolation   | Process isolation    |
| Performance    | Heavier overhead    | Near-native          |
| Boot Time      | Minutes             | Seconds              |
| Disk Usage     | GBs                 | MBs                  |
| Portability    | Limited             | Highly portable      |
| Scaling        | Slower              | Faster               |
+----------------+---------------------+----------------------+
                        `}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.basicCommands)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.basicCommands ? 'Copied!' : 'Copy'}
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

          {/* Core Concepts Section */}
          <section id="docker-concepts" className="mb-12" ref={conceptsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Core Concepts
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaServer className="mr-2 text-blue-500" /> Docker Architecture
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{`
+-------------+    +-------------+    +------------------+
| Docker      |    | Docker      |    | Docker           |
| Client      | -> | Daemon      | -> | Registry         |
| (CLI, API)  |    | (dockerd)   |    | (Docker Hub,     |
+-------------+    +-------------+    | Private)         |
                                      +------------------+
                        `}</code>
                      </pre>
                    </motion.div>
                  </div>

                  {/* Core components */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Core Components</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Docker Daemon", description: "Background service managing containers, images, networks, etc." },
                      { icon: <FiCodeIcon />, title: "Docker Client", description: "CLI or API used to interact with the Docker daemon" },
                      { icon: <FiCodeIcon />, title: "Docker Images", description: "Read-only templates used to build containers" },
                      { icon: <FiCodeIcon />, title: "Docker Containers", description: "Runnable instances of Docker images" },
                      { icon: <FiCodeIcon />, title: "Docker Registry", description: "Repository for Docker images (Docker Hub, ECR, etc.)" },
                      { icon: <FiCodeIcon />, title: "Dockerfile", description: "Text document containing commands to build an image" },
                      { icon: <FiCodeIcon />, title: "Docker Compose", description: "Tool for defining and running multi-container apps" },
                      { icon: <FiCodeIcon />, title: "Docker Swarm", description: "Native clustering and orchestration solution" }
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
                        <p className="font-semibold text-blue-800">Concept:</p>
                        <p className="text-blue-700">Containers are like lightweight, standalone, executable packages that include everything needed to run a piece of software, including code, runtime, system tools, libraries, and settings.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Installation Section */}
          <section id="docker-installation" className="mb-12" ref={installationRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiPackage className="mr-3" /> Installation
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FiPackage className="mr-2 text-blue-500" /> Installing Docker
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker can be installed on various operating systems including Linux, Windows, and macOS. The installation process varies slightly depending on your platform.
                  </p>

                  {/* Installation commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Installation Commands</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
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
                        <FiCodeIcon className="mr-2" /> Ubuntu/Debian
                      </h5>
                      <div className="relative group">
                        <motion.div
                          className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                          whileHover={{ scale: 1.01 }}
                        >
                          <pre className="font-mono text-sm">
                            <code>{`
# Update packages
sudo apt-get update

# Install prerequisites
sudo apt-get install \\
    apt-transport-https \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \\
sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository
echo \\
"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \\
https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \\
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Verify installation
sudo docker run hello-world
                            `}</code>
                          </pre>
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCodeIcon className="mr-2" /> Windows/macOS
                      </h5>
                      <p className="text-sm text-gray-700 mb-2">
                        For Windows and macOS, download Docker Desktop from the official Docker website:
                      </p>
                      <motion.a
                        href="https://www.docker.com/products/docker-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        https://www.docker.com/products/docker-desktop
                      </motion.a>
                      <p className="text-sm text-gray-700 mt-2">
                        Docker Desktop includes Docker Engine, CLI, Compose, and other tools with a user-friendly interface.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Post-installation */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Post-Installation Steps</h4>
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
                            Step
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Command
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { step: 'Manage as non-root', command: 'sudo usermod -aG docker $USER', description: 'Add your user to docker group to avoid sudo' },
                          { step: 'Enable on startup', command: 'sudo systemctl enable docker', description: 'Configure Docker to start on boot' },
                          { step: 'Test installation', command: 'docker run hello-world', description: 'Verify Docker is installed correctly' },
                          { step: 'Check version', command: 'docker --version', description: 'Display Docker version information' },
                          { step: 'System info', command: 'docker info', description: 'Display system-wide information' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.step}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.command}</td>
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

          {/* Basic Commands Section */}
          <section id="docker-commands" className="mb-12" ref={commandsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Basic Commands
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCode className="mr-2 text-blue-500" /> Essential Docker Commands
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    These are the fundamental Docker commands you'll use regularly for managing containers, images, and other Docker resources.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.basicCommands}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.basicCommands)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.basicCommands ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Command categories */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Command Categories</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Container Management", description: "docker run, start, stop, rm, ps, exec" },
                      { icon: <FiCodeIcon />, title: "Image Management", description: "docker images, pull, rmi, build, tag" },
                      { icon: <FiCodeIcon />, title: "Networking", description: "docker network create, connect, inspect" },
                      { icon: <FiCodeIcon />, title: "Volumes", description: "docker volume create, inspect, ls, prune" },
                      { icon: <FiCodeIcon />, title: "System", description: "docker info, version, system df, prune" },
                      { icon: <FiCodeIcon />, title: "Logs & Inspection", description: "docker logs, inspect, stats, top" },
                      { icon: <FiCodeIcon />, title: "Docker Compose", description: "docker-compose up, down, ps, logs" },
                      { icon: <FiCodeIcon />, title: "Docker Swarm", description: "docker swarm init, join, service, stack" }
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

                  {/* Common flags */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Command Flags</h4>
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
                            Flag
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
                          { flag: '-d', description: 'Run container in detached mode', example: 'docker run -d nginx' },
                          { flag: '-p', description: 'Publish container port to host', example: 'docker run -p 8080:80 nginx' },
                          { flag: '-v', description: 'Mount a volume', example: 'docker run -v /host:/container nginx' },
                          { flag: '-e', description: 'Set environment variable', example: 'docker run -e "ENV=prod" nginx' },
                          { flag: '--name', description: 'Assign name to container', example: 'docker run --name mynginx nginx' },
                          { flag: '--rm', description: 'Remove container after exit', example: 'docker run --rm nginx' },
                          { flag: '-it', description: 'Interactive terminal', example: 'docker run -it ubuntu bash' },
                          { flag: '--network', description: 'Connect to network', example: 'docker run --network mynet nginx' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.flag}</td>
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

          {/* Images Section */}
          <section id="docker-images" className="mb-12" ref={imagesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaBoxes className="mr-3" /> Images
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaBoxes className="mr-2 text-blue-500" /> Docker Images
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker images are read-only templates used to build containers. Images are built from a series of layers specified in a Dockerfile.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.dockerfile}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.dockerfile)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.dockerfile ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Image commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Image Commands</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Build Image", description: "docker build -t my-image ." },
                      { icon: <FiCodeIcon />, title: "List Images", description: "docker images" },
                      { icon: <FiCodeIcon />, title: "Pull Image", description: "docker pull ubuntu:latest" },
                      { icon: <FiCodeIcon />, title: "Push Image", description: "docker push my-repo/my-image" },
                      { icon: <FiCodeIcon />, title: "Remove Image", description: "docker rmi my-image" },
                      { icon: <FiCodeIcon />, title: "Tag Image", description: "docker tag my-image new-repo/new-image" },
                      { icon: <FiCodeIcon />, title: "Inspect Image", description: "docker inspect my-image" },
                      { icon: <FiCodeIcon />, title: "Save/Load Image", description: "docker save/load" }
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
                        <p className="text-sm font-mono text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Dockerfile instructions */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Dockerfile Instructions</h4>
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
                            Instruction
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
                          { instruction: 'FROM', description: 'Base image', example: 'FROM node:14-alpine' },
                          { instruction: 'WORKDIR', description: 'Working directory', example: 'WORKDIR /app' },
                          { instruction: 'COPY', description: 'Copy files', example: 'COPY . .' },
                          { instruction: 'RUN', description: 'Execute commands', example: 'RUN npm install' },
                          { instruction: 'CMD', description: 'Default command', example: 'CMD ["npm", "start"]' },
                          { instruction: 'EXPOSE', description: 'Document port', example: 'EXPOSE 3000' },
                          { instruction: 'ENV', description: 'Environment variable', example: 'ENV NODE_ENV=production' },
                          { instruction: 'ARG', description: 'Build-time variable', example: 'ARG VERSION=latest' },
                          { instruction: 'ENTRYPOINT', description: 'Configure container', example: 'ENTRYPOINT ["npm"]' },
                          { instruction: 'VOLUME', description: 'Create mount point', example: 'VOLUME /data' },
                          { instruction: 'USER', description: 'Set user', example: 'USER node' },
                          { instruction: 'HEALTHCHECK', description: 'Check container health', example: 'HEALTHCHECK --interval=30s CMD curl -f http://localhost/' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.instruction}</td>
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

          {/* Containers Section */}
          <section id="docker-containers" className="mb-12" ref={containersRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDocker className="mr-3" /> Containers
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaDocker className="mr-2 text-blue-500" /> Docker Containers
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Containers are runnable instances of Docker images. You can create, start, stop, move, or delete a container using the Docker API or CLI.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.buildRun}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.buildRun)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.buildRun ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Container lifecycle */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Container Lifecycle</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Create", description: "docker create" },
                      { icon: <FiCodeIcon />, title: "Start", description: "docker start" },
                      { icon: <FiCodeIcon />, title: "Run", description: "docker run" },
                      { icon: <FiCodeIcon />, title: "Pause", description: "docker pause" },
                      { icon: <FiCodeIcon />, title: "Unpause", description: "docker unpause" },
                      { icon: <FiCodeIcon />, title: "Stop", description: "docker stop" },
                      { icon: <FiCodeIcon />, title: "Restart", description: "docker restart" },
                      { icon: <FiCodeIcon />, title: "Kill", description: "docker kill" },
                      { icon: <FiCodeIcon />, title: "Remove", description: "docker rm" },
                      { icon: <FiCodeIcon />, title: "Exec", description: "docker exec" },
                      { icon: <FiCodeIcon />, title: "Attach", description: "docker attach" },
                      { icon: <FiCodeIcon />, title: "Commit", description: "docker commit" }
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
                        <p className="text-sm font-mono text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Container states */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Container States</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Created", description: "Initialized but not running" },
                      { icon: <FiCodeIcon />, title: "Running", description: "Currently executing" },
                      { icon: <FiCodeIcon />, title: "Paused", description: "Processes suspended" },
                      { icon: <FiCodeIcon />, title: "Restarting", description: "In process of restarting" },
                      { icon: <FiCodeIcon />, title: "Exited", description: "Stopped after running" },
                      { icon: <FiCodeIcon />, title: "Dead", description: "Failed to start or error" },
                      { icon: <FiCodeIcon />, title: "Removing", description: "In process of deletion" },
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

          {/* Networking Section */}
          <section id="docker-networking" className="mb-12" ref={networkingRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaNetworkWired className="mr-3" /> Networking
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaNetworkWired className="mr-2 text-blue-500" /> Docker Networking
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker networking allows containers to communicate with each other and with external networks. Docker provides several network drivers out of the box.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.networking}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.networking)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.networking ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Network drivers */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Network Drivers</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Bridge", description: "Default network driver for standalone containers" },
                      { icon: <FiCodeIcon />, title: "Host", description: "Remove network isolation between container and host" },
                      { icon: <FiCodeIcon />, title: "Overlay", description: "Connect multiple Docker daemons (Swarm)" },
                      { icon: <FiCodeIcon />, title: "Macvlan", description: "Assign MAC address to container" },
                      { icon: <FiCodeIcon />, title: "None", description: "Disable all networking" },
                      { icon: <FiCodeIcon />, title: "Custom", description: "Create your own network plugins" }
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

                  {/* Networking commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Networking Commands</h4>
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
                            Command
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { command: 'docker network create', description: 'Create a new network' },
                          { command: 'docker network connect', description: 'Connect container to network' },
                          { command: 'docker network disconnect', description: 'Disconnect container from network' },
                          { command: 'docker network inspect', description: 'Display detailed network information' },
                          { command: 'docker network ls', description: 'List networks' },
                          { command: 'docker network prune', description: 'Remove unused networks' },
                          { command: 'docker network rm', description: 'Remove one or more networks' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.command}</td>
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

          {/* Volumes Section */}
          <section id="docker-volumes" className="mb-12" ref={volumesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> Volumes
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaDatabase className="mr-2 text-blue-500" /> Docker Volumes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker volumes are the preferred mechanism for persisting data generated by and used by Docker containers. Volumes are completely managed by Docker.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.volumes}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.volumes)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.volumes ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Volume types */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Volume Types</h4>
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
                        <FiCodeIcon className="mr-2" /> Named Volumes
                      </h5>
                      <p className="text-sm text-gray-700">Managed by Docker with a specific name. Best for production.</p>
                      <p className="text-sm font-mono text-gray-700 mt-2">docker volume create my-volume</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCodeIcon className="mr-2" /> Bind Mounts
                      </h5>
                      <p className="text-sm text-gray-700">Mount a host directory into a container. Good for development.</p>
                      <p className="text-sm font-mono text-gray-700 mt-2">docker run -v /host/path:/container/path</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                        <FiCodeIcon className="mr-2" /> tmpfs Mounts
                      </h5>
                      <p className="text-sm text-gray-700">Stored in host memory only. Temporary, non-persistent storage.</p>
                      <p className="text-sm font-mono text-gray-700 mt-2">docker run --tmpfs /app</p>
                    </motion.div>
                  </motion.div>

                  {/* Volume commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Volume Commands</h4>
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
                            Command
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { command: 'docker volume create', description: 'Create a volume' },
                          { command: 'docker volume inspect', description: 'Display detailed information' },
                          { command: 'docker volume ls', description: 'List volumes' },
                          { command: 'docker volume prune', description: 'Remove unused volumes' },
                          { command: 'docker volume rm', description: 'Remove one or more volumes' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.command}</td>
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
                        <p className="text-blue-700">Use named volumes for production data persistence as they are managed by Docker and have better performance than bind mounts in many cases.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Docker Compose Section */}
          <section id="docker-compose" className="mb-12" ref={composeRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLayerGroup className="mr-3" /> Docker Compose
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-500" /> Docker Compose
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.composeFile}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.composeFile)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.composeFile ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Compose commands */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Compose Commands</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Start Services", description: "docker-compose up" },
                      { icon: <FiCodeIcon />, title: "Start in Background", description: "docker-compose up -d" },
                      { icon: <FiCodeIcon />, title: "Stop Services", description: "docker-compose down" },
                      { icon: <FiCodeIcon />, title: "List Containers", description: "docker-compose ps" },
                      { icon: <FiCodeIcon />, title: "Build Images", description: "docker-compose build" },
                      { icon: <FiCodeIcon />, title: "View Logs", description: "docker-compose logs" },
                      { icon: <FiCodeIcon />, title: "Run Command", description: "docker-compose exec" },
                      { icon: <FiCodeIcon />, title: "Scale Services", description: "docker-compose up --scale" }
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
                        <p className="text-sm font-mono text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Compose file structure */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Compose File Structure</h4>
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
                            Key
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
                          { key: 'version', description: 'Compose file format version', example: '"3.8"' },
                          { key: 'services', description: 'Define the containers to run', example: 'web: image: nginx' },
                          { key: 'image', description: 'Specify image to use', example: 'image: nginx:alpine' },
                          { key: 'build', description: 'Specify build context', example: 'build: ./dir' },
                          { key: 'ports', description: 'Expose ports', example: 'ports: - "8080:80"' },
                          { key: 'volumes', description: 'Mount volumes', example: 'volumes: - ./data:/data' },
                          { key: 'environment', description: 'Set environment variables', example: 'environment: - DEBUG=1' },
                          { key: 'depends_on', description: 'Service dependencies', example: 'depends_on: - db' },
                          { key: 'networks', description: 'Networks to join', example: 'networks: - frontend' },
                          { key: 'deploy', description: 'Swarm deployment config', example: 'deploy: replicas: 3' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{row.key}</td>
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

          {/* Docker Swarm Section */}
          <section id="docker-swarm" className="mb-12" ref={swarmRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCloud className="mr-3" /> Docker Swarm
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCloud className="mr-2 text-blue-500" /> Docker Swarm
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Docker Swarm is Docker's native clustering and orchestration solution. It turns a pool of Docker hosts into a single, virtual Docker host.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.swarmCommands}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.swarmCommands)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.swarmCommands ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Swarm concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Swarm Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Node", description: "A single Docker host in the swarm (manager or worker)" },
                      { icon: <FiCodeIcon />, title: "Service", description: "Definition of tasks to execute on nodes" },
                      { icon: <FiCodeIcon />, title: "Task", description: "A running container that's part of a service" },
                      { icon: <FiCodeIcon />, title: "Stack", description: "Collection of services that make up an application" },
                      { icon: <FiCodeIcon />, title: "Overlay Network", description: "Network spanning all nodes in swarm" },
                      { icon: <FiCodeIcon />, title: "Load Balancing", description: "Distribute work across tasks" },
                      { icon: <FiCodeIcon />, title: "Raft Consensus", description: "How manager nodes maintain state" },
                      { icon: <FiCodeIcon />, title: "Secret", description: "Secure way to store sensitive data" }
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

                  {/* Swarm vs Kubernetes */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Swarm vs Kubernetes</h4>
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
                            Feature
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Docker Swarm
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kubernetes
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { feature: 'Learning Curve', swarm: 'Easy', kubernetes: 'Steep' },
                          { feature: 'Setup', swarm: 'Simple', kubernetes: 'Complex' },
                          { feature: 'Scaling', swarm: 'Fast', kubernetes: 'Slower' },
                          { feature: 'GUI', swarm: 'Limited', kubernetes: 'Dashboard' },
                          { feature: 'Auto-scaling', swarm: 'No', kubernetes: 'Yes' },
                          { feature: 'Load Balancing', swarm: 'Basic', kubernetes: 'Advanced' },
                          { feature: 'Community', swarm: 'Smaller', kubernetes: 'Large' },
                          { feature: 'Best For', swarm: 'Simple apps', kubernetes: 'Complex apps' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.feature}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.swarm}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.kubernetes}</td>
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
          <section id="docker-security" className="mb-12" ref={securityRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaShieldAlt className="mr-3" /> Security
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaShieldAlt className="mr-2 text-blue-500" /> Docker Security
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Securing Docker containers involves multiple layers including the host, container images, runtime, and network. Proper security practices help mitigate risks.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.security}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.security)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.security ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Security practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Practices</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Use Trusted Images", description: "Only use images from trusted sources" },
                      { icon: <FiCodeIcon />, title: "Minimal Images", description: "Use minimal base images like Alpine" },
                      { icon: <FiCodeIcon />, title: "Non-root User", description: "Run containers as non-root user" },
                      { icon: <FiCodeIcon />, title: "Read-only Filesystem", description: "Use --read-only flag when possible" },
                      { icon: <FiCodeIcon />, title: "Resource Limits", description: "Set memory and CPU limits" },
                      { icon: <FiCodeIcon />, title: "Regular Updates", description: "Keep Docker and images updated" },
                      { icon: <FiCodeIcon />, title: "Scan Images", description: "Scan for vulnerabilities regularly" },
                      { icon: <FiCodeIcon />, title: "Network Security", description: "Use proper network segmentation" }
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

                  {/* Security tools */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Tools</h4>
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
                            Tool
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Purpose
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { tool: 'Docker Bench', purpose: 'Checks for common best practices' },
                          { tool: 'Clair', purpose: 'Static analysis of vulnerabilities' },
                          { tool: 'Anchore', purpose: 'Image scanning and policy compliance' },
                          { tool: 'Trivy', purpose: 'Simple vulnerability scanner' },
                          { tool: 'Falco', purpose: 'Runtime security monitoring' },
                          { tool: 'Notary', purpose: 'Content trust and signing' },
                          { tool: 'gVisor', purpose: 'Secure container runtime sandbox' },
                          { tool: 'Kata Containers', purpose: 'Lightweight VMs for containers' },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.tool}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.purpose}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Best Practices Section */}
          <section id="docker-best-practices" className="mb-12" ref={bestPracticesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-200 hover:border-blue-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCogs className="mr-3" /> Best Practices
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                    <FaCogs className="mr-2 text-blue-500" /> Docker Best Practices
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Following Docker best practices helps create efficient, secure, and maintainable containerized applications.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{dockerExamples.bestPractices}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(dockerExamples.bestPractices)}
                      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCopy className="w-4 h-4 mr-1" />
                      {copiedCode === dockerExamples.bestPractices ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>

                  {/* Best practices list */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Best Practices</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <FiCodeIcon />, title: "Use .dockerignore", description: "Exclude unnecessary files from build context" },
                      { icon: <FiCodeIcon />, title: "Multi-stage Builds", description: "Reduce final image size significantly" },
                      { icon: <FiCodeIcon />, title: "Specific Tags", description: "Avoid 'latest' tag in production" },
                      { icon: <FiCodeIcon />, title: "Minimal Base Images", description: "Use Alpine or distroless images" },
                      { icon: <FiCodeIcon />, title: "Combine RUN Commands", description: "Minimize layers by combining commands" },
                      { icon: <FiCodeIcon />, title: "Ephemeral Containers", description: "Don't store data in containers" },
                      { icon: <FiCodeIcon />, title: "HEALTHCHECK", description: "Add health checks to your containers" },
                      { icon: <FiCodeIcon />, title: "Non-root User", description: "Run containers as non-root when possible" },
                      { icon: <FiCodeIcon />, title: "Resource Limits", description: "Set memory and CPU constraints" },
                      { icon: <FiCodeIcon />, title: "Logging", description: "Configure proper logging drivers" },
                      { icon: <FiCodeIcon />, title: "Security Scanning", description: "Regularly scan images for vulnerabilities" },
                      { icon: <FiCodeIcon />, title: "CI/CD Integration", description: "Automate builds and deployments" }
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

                  {/* Anti-patterns */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Anti-patterns</h4>
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
                            Anti-pattern
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Why It's Bad
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Better Approach
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            antipattern: 'Running multiple processes',
                            why: 'Containers should run a single process',
                            better: 'Use multiple containers and Docker Compose'
                          },
                          {
                            antipattern: 'Storing data in container',
                            why: 'Data is lost when container stops',
                            better: 'Use volumes or bind mounts'
                          },
                          {
                            antipattern: 'Using root user',
                            why: 'Security risk if container is compromised',
                            better: 'Create and use non-root user'
                          },
                          {
                            antipattern: 'Large images',
                            why: 'Slower to deploy, more attack surface',
                            better: 'Use multi-stage builds, minimal base images'
                          },
                          {
                            antipattern: 'Hardcoding config',
                            why: 'Not portable between environments',
                            better: 'Use environment variables or config files'
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-blue-50' : 'bg-blue-50 hover:bg-blue-100'}
                          >
                            <td className="px-6 py-4 text-sm text-gray-900">{row.antipattern}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.why}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.better}</td>
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
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaDocker />
                    </motion.div>
                    Docker Notes
                  </h2>
                  <p className="text-blue-200 mt-1">A comprehensive guide to Docker</p>
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
                  <motion.a
                    href="#"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">Docker</span>
                    <FaDocker className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-blue-500 text-center md:text-left">
                <p className="text-blue-200 text-sm">
                  &copy; {new Date().getFullYear()} Docker Notes. All rights reserved.
                </p>
              </div>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}