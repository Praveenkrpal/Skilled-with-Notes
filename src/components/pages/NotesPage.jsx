import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const NotesPage = () => {
  // Enhanced notes data with more details and MERN Stack course
  const originalNotes = [
    {
      id: 1,
      title: "HTML5 Crash Course",
      description:
        "Learn modern HTML5 features including semantic elements, forms, multimedia, and APIs. Perfect for beginners and refreshers.",
      category: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      level: "Beginner",
      duration: "2h",
      lastUpdated: "2023-05-15",
      popular: true,
      accentColor: "#FF7D45", // Orange
      course: "Web Development Fundamentals",
    },
    {
      id: 2,
      title: "CSS Styling Guide",
      description:
        "Master CSS selectors, Flexbox, Grid, animations and responsive design techniques with practical examples.",
      category: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      level: "Beginner",
      duration: "3h 30m",
      lastUpdated: "2023-06-20",
      popular: true,
      accentColor: "#2965F1", // Blue
      course: "Web Development Fundamentals",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description:
        "Deep dive into JavaScript programming language: variables, functions, objects, ES6+ features and DOM manipulation.",
      category: "JS",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      level: "Beginner",
      duration: "4h",
      lastUpdated: "2023-04-10",
      accentColor: "#F7DF1E", // Yellow
      course: "Web Development Fundamentals",
    },
    {
      id: 4,
      title: "React Essentials",
      description:
        "Comprehensive guide to React hooks, components, state management, and best practices for building modern web apps.",
      category: "React",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      level: "Intermediate",
      duration: "5h",
      lastUpdated: "2023-07-01",
      popular: true,
      accentColor: "#61DAFB", // React Blue
      course: "Frontend Mastery",
    },
    {
      id: 5,
      title: "Python for Beginners",
      description:
        "Introduction to Python programming covering syntax, data structures, functions, and basic algorithms.",
      category: "Python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      level: "Advanced",
      duration: "3h",
      lastUpdated: "2023-03-25",
      accentColor: "#3776AB", // Python Blue
      course: "Python Programming",
    },
    {
      id: 6,
      title: "C Programming Basics",
      description:
        "Learn core C programming concepts including pointers, memory management, and data structures.",
      category: "C",
      image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      level: "Advanced",
      duration: "4h 15m",
      lastUpdated: "2023-06-05",
      accentColor: "#A8B9CC", // C Gray
      course: "C/C++ Development",
    },
    {
      id: 7,
      title: "Advanced C++ Concepts",
      description:
        "Explore advanced C++ features like templates, STL, move semantics, and concurrency patterns.",
      category: "Advanced_C",
      image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      level: "Advanced",
      duration: "6h",
      lastUpdated: "2023-07-12",
      accentColor: "#00599C", // C++ Blue
      course: "C/C++ Development",
    },
    {
      id: 8,
      title: "SQL Mastery",
      description:
        "Complete guide to database management with SQL covering queries, joins, indexes, and optimization.",
      category: "SQL",
      image: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png",
      level: "Advanced",
      duration: "3h 45m",
      lastUpdated: "2023-05-30",
      accentColor: "#00758F", // SQL Blue
      course: "Database Essentials",
    },
    {
      id: 9,
      title: "TypeScript Deep Dive",
      description:
        "Learn how TypeScript enhances JavaScript with types, interfaces, generics and advanced patterns.",
      category: "TypeScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      level: "Intermediate",
      duration: "3h",
      lastUpdated: "2023-06-18",
      popular: true,
      accentColor: "#3178C6", // TypeScript Blue
      course: "Frontend Mastery",
    },
    {
      id: 10,
      title: "Node.js Backend Development",
      description:
        "Build scalable server-side applications with Node.js, Express, and modern JavaScript.",
      category: "Node",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      level: "Intermediate",
      duration: "4h 30m",
      lastUpdated: "2023-07-05",
      accentColor: "#339933", // Node Green
      course: "Backend Development",
    },
    {
      id: 11,
      title: "Git & GitHub Complete Guide",
      description:
        "Master version control with Git and collaborative workflows using GitHub and Git commands.",
      category: "Git",
      image: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png",
      level: "Intermediate",
      duration: "2h 15m",
      lastUpdated: "2023-04-22",
      accentColor: "#F05032", // Git Orange
      course: "DevOps Fundamentals",
    },
    {
      id: 12,
      title: "Docker for Developers",
      description:
        "Containerize your applications with Docker, learn about images, containers, and deployment strategies.",
      category: "Docker",
      image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
      level: "Intermediate",
      duration: "3h",
      lastUpdated: "2023-06-10",
      accentColor: "#2496ED", // Docker Blue
      course: "DevOps Fundamentals",
    },
    {
      id: 13,
      title: "MongoDB Essentials",
      description:
        "Learn NoSQL database concepts with MongoDB including CRUD operations, aggregation, and schema design.",
      category: "MongoDB",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
      level: "Intermediate",
      duration: "3h 20m",
      lastUpdated: "2023-07-10",
      popular: true,
      accentColor: "#47A248", // MongoDB Green
      course: "MERN Stack (Full Stack)",
    },
    {
      id: 14,
      title: "Express.js Framework",
      description:
        "Build web applications with Express.js middleware, routing, error handling, and REST API development.",
      category: "Express",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-express-9-1175170.png",
      level: "Intermediate",
      duration: "3h 45m",
      lastUpdated: "2023-07-08",
      popular: true,
      accentColor: "#000000", // Express Black
      course: "MERN Stack (Full Stack)",
    },
    {
      id: 15,
      title: "REST API Design",
      description:
        "Learn RESTful API principles, best practices, authentication, and documentation with OpenAPI.",
      category: "API",
      image: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      level: "Intermediate",
      duration: "4h",
      lastUpdated: "2023-06-28",
      accentColor: "#FF6B6B", // API Red
      course: "Backend Development",
    },
    {
      id: 16,
      title: "Authentication & Security",
      description:
        "Implement secure authentication with JWT, OAuth, sessions, and learn security best practices.",
      category: "Security",
      image: "https://cdn-icons-png.flaticon.com/512/6331/6331375.png",
      level: "Advanced",
      duration: "4h 30m",
      lastUpdated: "2023-07-03",
      accentColor: "#4E9F3D", // Security Green
      course: "Backend Development",
    },
  ];

  const [notes, setNotes] = useState(originalNotes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  const [isHovering, setIsHovering] = useState(null);
  const [activeCourseFilter, setActiveCourseFilter] = useState(null);

  // Get unique categories, courses, and levels for filters
  const categories = [
    "All",
    ...new Set(originalNotes.map((note) => note.category)),
  ];
  const courses = ["All", ...new Set(originalNotes.map((note) => note.course))];
  const levels = ["All", ...new Set(originalNotes.map((note) => note.level))];

  // Filter and sort notes whenever filters or sort option changes
  useEffect(() => {
    setIsLoading(true);

    let filteredNotes = [...originalNotes];

    // Apply category filter
    if (selectedCategory !== "All") {
      filteredNotes = filteredNotes.filter(
        (note) => note.category === selectedCategory
      );
    }

    // Apply course filter
    if (selectedCourse !== "All") {
      filteredNotes = filteredNotes.filter((note) => {
        if (selectedCourse === "Frontend Mastery") {
          return ["HTML", "CSS", "JS", "React", "TypeScript"].includes(
            note.category
          );
        } else if (selectedCourse === "DevOps Fundamentals") {
          return ["Git", "Docker"].includes(note.category);
        } else if (selectedCourse === "MERN Stack (Full Stack)") {
          return [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Node.js",
            "MongoDB",
            "Express",
          ].includes(note.category);
        } else if (selectedCourse === "Backend Development") {
          return ["Node.js", "Express", "API", "Security", "MongoDB"].includes(
            note.category
          );
        } else {
          return note.course === selectedCourse;
        }
      });
    }

    // Apply level filter
    if (selectedLevel !== "All") {
      filteredNotes = filteredNotes.filter(
        (note) => note.level === selectedLevel
      );
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      filteredNotes = filteredNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.level.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "title-asc":
        filteredNotes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filteredNotes.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "recent":
        filteredNotes.sort(
          (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
        );
        break;
      case "duration-asc":
        filteredNotes.sort((a, b) => {
          const durationA = parseFloat(
            a.duration.replace("h", "").replace("m", "")
          );
          const durationB = parseFloat(
            b.duration.replace("h", "").replace("m", "")
          );
          return durationA - durationB;
        });
        break;
      case "duration-desc":
        filteredNotes.sort((a, b) => {
          const durationA = parseFloat(
            a.duration.replace("h", "").replace("m", "")
          );
          const durationB = parseFloat(
            b.duration.replace("h", "").replace("m", "")
          );
          return durationB - durationA;
        });
        break;
      default:
        // Default sorting (by id or keep original order)
        break;
    }

    setNotes(filteredNotes);

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedCourse, selectedLevel, sortOption]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedCourse("All");
    setSelectedLevel("All");
    setSortOption("default");
    setActiveCourseFilter(null);
  };

  const handleCourseFilterClick = (course) => {
    setSelectedCourse(course);
    setActiveCourseFilter(course);
    setSelectedCategory("All"); // Reset category filter when selecting a course
  };

  const getRandomGradient = () => {
    const gradients = [
      "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
      "bg-gradient-to-r from-green-400 to-blue-500",
      "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      "bg-gradient-to-r from-blue-400 to-emerald-400",
      "bg-gradient-to-r from-rose-400 to-orange-300",
      "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
      "bg-gradient-to-r from-violet-600 to-indigo-600",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-6 shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
            Developer Learning Hub
          </h1>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto relative z-10">
            Explore our comprehensive collection of programming notes, tutorials
            and resources to accelerate your learning journey
          </p>
          <div className="mt-8 relative z-10">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for tutorials, notes, or resources..."
                className="block w-full pl-5 pr-12 py-4 border border-transparent rounded-full bg-white/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-10 bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-white/70">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="w-full md:w-auto">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Refine your search
              </h2>
              <div className="flex flex-wrap gap-3">
                {/* Category Filter */}
                <div className="relative">
                  <label
                    htmlFor="category-filter"
                    className="block text-xs font-medium text-gray-500 mb-1"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category-filter"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="block appearance-none w-full px-4 py-2 pr-8 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-5 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Course Filter */}
                <div className="relative">
                  <label
                    htmlFor="course-filter"
                    className="block text-xs font-medium text-gray-500 mb-1"
                  >
                    Course
                  </label>
                  <div className="relative">
                    <select
                      id="course-filter"
                      value={selectedCourse}
                      onChange={(e) => {
                        setSelectedCourse(e.target.value);
                        setActiveCourseFilter(
                          e.target.value === "All" ? null : e.target.value
                        );
                      }}
                      className="block appearance-none w-full px-4 py-2 pr-8 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm"
                    >
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-5 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Level Filter */}
                <div className="relative">
                  <label
                    htmlFor="level-filter"
                    className="block text-xs font-medium text-gray-500 mb-1"
                  >
                    Level
                  </label>
                  <div className="relative">
                    <select
                      id="level-filter"
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="block appearance-none w-full px-4 py-2 pr-8 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm"
                    >
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-5 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Sort Options */}
                <div className="relative">
                  <label
                    htmlFor="sort-options"
                    className="block text-xs font-medium text-gray-500 mb-1"
                  >
                    Sort By
                  </label>
                  <div className="relative">
                    <select
                      id="sort-options"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="block appearance-none w-full px-4 py-2 pr-8 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm"
                    >
                      <option value="default">Default</option>
                      <option value="title-asc">Title (A-Z)</option>
                      <option value="title-desc">Title (Z-A)</option>
                      <option value="recent">Recently Updated</option>
                      <option value="duration-asc">Duration (Shortest)</option>
                      <option value="duration-desc">Duration (Longest)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-5 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetFilters}
                  className="self-end px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Reset All
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "All" ||
            selectedCourse !== "All" ||
            selectedLevel !== "All" ||
            searchTerm ||
            sortOption !== "default") && (
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 shadow-sm">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-violet-400 hover:bg-violet-200 hover:text-violet-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCourse !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 shadow-sm">
                  Course: {selectedCourse}
                  <button
                    onClick={() => {
                      setSelectedCourse("All");
                      setActiveCourseFilter(null);
                    }}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedLevel !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 shadow-sm">
                  Level: {selectedLevel}
                  <button
                    onClick={() => setSelectedLevel("All")}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 shadow-sm">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {sortOption !== "default" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 shadow-sm">
                  Sorted:{" "}
                  {sortOption === "title-asc"
                    ? "Title (A-Z)"
                    : sortOption === "title-desc"
                    ? "Title (Z-A)"
                    : sortOption === "recent"
                    ? "Recently Updated"
                    : sortOption === "duration-asc"
                    ? "Duration (Shortest)"
                    : "Duration (Longest)"}
                  <button
                    onClick={() => setSortOption("default")}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-amber-400 hover:bg-amber-200 hover:text-amber-600"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Course Quick Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Search
          </h2>
          <div className="flex flex-wrap gap-3">
            {courses
              .filter((course) => course !== "All")
              .map((course) => (
                <button
                  key={course}
                  onClick={() => handleCourseFilterClick(course)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm ${
                    activeCourseFilter === course
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {course}
                </button>
              ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-violet-500 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-violet-100 text-violet-600 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Total Notes
                </h3>
                <p className="text-2xl font-bold text-gray-800">
                  {originalNotes.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Courses</h3>
                <p className="text-2xl font-bold text-gray-800">
                  {courses.length - 1}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Filtered Notes
                </h3>
                <p className="text-2xl font-bold text-gray-800">
                  {notes.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
              >
                <div className={`h-48 ${getRandomGradient()} opacity-30`}></div>
                <div className="p-5">
                  <div className="flex justify-between mb-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {notes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {notes.map((note) => (
                  <Link
                    to={`/notes/${note.category.toLowerCase()}`}
                    key={note.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] relative"
                    onMouseEnter={() => setIsHovering(note.id)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    {/* Popular badge */}
                    {note.popular && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Popular
                      </div>
                    )}

                    {/* Image/Icon Container */}
                    <div
                      className="h-48 flex items-center justify-center p-4 relative overflow-hidden"
                      style={{ backgroundColor: note.accentColor + "20" }} // 20% opacity
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute top-0 left-0 w-32 h-32 rounded-full filter blur-xl"
                          style={{ backgroundColor: note.accentColor }}
                        ></div>
                        <div
                          className="absolute bottom-0 right-0 w-32 h-32 rounded-full filter blur-xl"
                          style={{ backgroundColor: note.accentColor }}
                        ></div>
                      </div>
                      <img
                        src={note.image}
                        alt={note.category}
                        className={`h-20 object-contain transition-all duration-500 ${
                          isHovering === note.id ? "scale-125" : "scale-100"
                        }`}
                        style={{
                          filter:
                            isHovering === note.id
                              ? "drop-shadow(0 5px 15px rgba(0,0,0,0.3))"
                              : "none",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            note.category === "HTML"
                              ? "bg-orange-100 text-orange-800"
                              : note.category === "CSS"
                              ? "bg-blue-100 text-blue-800"
                              : note.category === "JS"
                              ? "bg-yellow-100 text-yellow-800"
                              : note.category === "React"
                              ? "bg-sky-100 text-sky-800"
                              : note.category === "Python"
                              ? "bg-indigo-100 text-indigo-800"
                              : note.category === "C++"
                              ? "bg-cyan-100 text-cyan-800"
                              : note.category === "TypeScript"
                              ? "bg-blue-100 text-blue-800"
                              : note.category === "Node.js"
                              ? "bg-green-100 text-green-800"
                              : note.category === "MongoDB"
                              ? "bg-green-100 text-green-800"
                              : note.category === "Express"
                              ? "bg-gray-100 text-gray-800"
                              : note.category === "API"
                              ? "bg-red-100 text-red-800"
                              : note.category === "Security"
                              ? "bg-green-100 text-green-800"
                              : note.category === "MERN"
                              ? "bg-green-100 text-green-800"
                              : "bg-violet-100 text-violet-800"
                          }`}
                        >
                          {note.category}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${
                            note.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : note.level === "Intermediate"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {note.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors duration-200 line-clamp-2">
                        {note.title}
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                        {note.description}
                      </p>
                      <div className="mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {note.course}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {note.duration}
                        </span>
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {new Date(note.lastUpdated).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center text-violet-600 font-medium group-hover:text-violet-800 transition-colors duration-200 mt-3">
                        View notes
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            isHovering === note.id
                              ? "translate-x-1"
                              : "translate-x-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  No matching notes found
                </h3>
                <p className="mt-2 text-gray-500 max-w-md mx-auto">
                  We couldn't find any notes matching your criteria. Try
                  adjusting your filters or search term.
                </p>
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Reset all filters
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Enhanced Free Newsletter CTA */}
        {!isLoading && notes.length > 0 && (
          <div className="mt-16 relative group">
            {/* Floating decorative elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-indigo-400 opacity-20 filter blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-pink-400 opacity-20 filter blur-3xl animate-float-medium"></div>

            {/* Main CTA Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Gradient background with animated shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700 transition-all duration-500">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner border border-white/10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-white mb-3">
                  Free Weekly Coding Resources
                </h3>

                {/* Description with fancy counter animation */}
                <p className="text-violet-100/90 text-lg mb-6 max-w-2xl mx-auto">
                  Join{" "}
                  <span className="font-mono font-bold text-white inline-block min-w-[3ch]">
                    <CountUp
                      end={originalNotes.length}
                      duration={2}
                      delay={0.5}
                    />
                  </span>
                  + developers who get free weekly updates with:
                </p>

                {/* Value propositions with hover effects */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg group/card">
                    <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto transition-all duration-300 group-hover/card:bg-violet-500/30 group-hover/card:scale-110">
                      <svg
                        className="w-5 h-5 text-white transition-all duration-300 group-hover/card:scale-125"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-white transition-all duration-300 group-hover/card:text-violet-300">
                      Latest Tutorials
                    </h4>
                    <p className="text-violet-100/80 text-sm mt-1 transition-all duration-300 group-hover/card:text-violet-200">
                      Fresh content weekly
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg group/card">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto transition-all duration-300 group-hover/card:bg-pink-500/30 group-hover/card:scale-110">
                      <svg
                        className="w-5 h-5 text-white transition-all duration-300 group-hover/card:scale-125"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-white transition-all duration-300 group-hover/card:text-pink-300">
                      Pro Tips
                    </h4>
                    <p className="text-violet-100/80 text-sm mt-1 transition-all duration-300 group-hover/card:text-pink-200">
                      Expert advice
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg group/card">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto transition-all duration-300 group-hover/card:bg-blue-500/30 group-hover/card:scale-110">
                      <svg
                        className="w-5 h-5 text-white transition-all duration-300 group-hover/card:scale-125"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-white transition-all duration-300 group-hover/card:text-blue-300">
                      Free Resources
                    </h4>
                    <p className="text-violet-100/80 text-sm mt-1 transition-all duration-300 group-hover/card:text-blue-200">
                      Tools & templates
                    </p>
                  </div>
                </div>

                {/* Email collection (optional) */}
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-2 text-violet-200/80">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>No subscription needed - just visit daily!</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/10"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesPage;
