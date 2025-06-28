// import React from "react";
// import { Link } from "react-router-dom";

// const NotesPage = () => {
//   // Sample notes data
//   const notes = [
//     {
//       id: 1,
//       title: "HTML5 Crash Course",
//       description: "Learn modern HTML5 features and structure",
//       category: "HTML",
//       image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
//     },
//     {
//       id: 2,
//       title: "CSS Styling Guide",
//       description: "Master CSS selectors and styling techniques",
//       category: "CSS",
//       image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
//     },
//     {
//       id: 3,
//       title: "JavaScript Basics",
//       description: "Fundamentals of JavaScript programming language",
//       category: "JavaScript",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
//     },
//     {
//       id: 4,
//       title: "React Essentials",
//       description: "Learn React hooks and components",
//       category: "React",
//       image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
//     },
//     {
//       id: 5,
//       title: "Python Fundamentals",
//       description: "Introduction to Python programming",
//       category: "Python",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
//     },

//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-violet-700 mb-8 text-center">
//           Browse Notes
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {notes.map((note) => (
//             <Link
//               to={`/notes/${note.id}`}
//               key={note.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
//                 <img
//                   src={note.image}
//                   alt={note.category}
//                   className="h-20 object-contain"
//                 />
//               </div>
//               <div className="p-4">
//                 <span className="inline-block px-2 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded mb-2">
//                   {note.category}
//                 </span>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                   {note.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{note.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotesPage;

// --------------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const NotesPage = () => {
//   // Sample notes data
//   const notes = [
//     {
//       id: 1,
//       title: "HTML5 Crash Course",
//       description: "Learn modern HTML5 features and structure",
//       category: "HTML",
//       image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
//     },
//     {
//       id: 2,
//       title: "CSS Styling Guide",
//       description: "Master CSS selectors and styling techniques",
//       category: "CSS",
//       image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
//     },
//     {
//       id: 3,
//       title: "JavaScript Basics",
//       description: "Fundamentals of JavaScript programming language",
//       category: "JavaScript",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
//     },
//     {
//       id: 4,
//       title: "React Essentials",
//       description: "Learn React hooks and components",
//       category: "React",
//       image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
//     },
//     {
//       id: 5,
//       title: "Python Fundamentals",
//       description: "Introduction to Python programming",
//       category: "Python",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-violet-700 mb-8 text-center">
//           Browse Notes
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {notes.map((note) => (
//             <Link
//               to={`/notes/${note.category.toLowerCase()}`} // Changed to use category
//               key={note.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
//                 <img
//                   src={note.image}
//                   alt={note.category}
//                   className="h-20 object-contain"
//                 />
//               </div>
//               <div className="p-4">
//                 <span className="inline-block px-2 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded mb-2">
//                   {note.category}
//                 </span>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                   {note.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{note.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotesPage;

// ------------------------------------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotesPage = () => {
  // Original notes data (constant)
  const originalNotes = [
    {
      id: 1,
      title: "HTML5 Crash Course",
      description: "Learn modern HTML5 features and structure",
      category: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      id: 2,
      title: "CSS Styling Guide",
      description: "Master CSS selectors and styling techniques",
      category: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      description: "Fundamentals of JavaScript programming language",
      category: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      id: 4,
      title: "React Essentials",
      description: "Learn React hooks and components",
      category: "React",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    },
    {
      id: 5,
      title: "Python Fundamentals",
      description: "Introduction to Python programming",
      category: "Python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    // {
    //   id: 6,
    //   title: "c++",
    //   description: "Introduction to C++ programming",
    //   category: "c++",
    //   image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
    // },
  ];

  const [notes, setNotes] = useState(originalNotes);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter notes whenever searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setNotes(originalNotes);
    } else {
      const filteredNotes = originalNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setNotes(filteredNotes);
    }
  }, [searchTerm]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // The useEffect will handle the search automatically
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-violet-700 mb-8 text-center">
          Browse Notes
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search notes"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={() => {}} // No need for separate handler now
              className="bg-violet-600 text-white px-4 py-2 rounded-r-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Link
                to={`/notes/${note.category.toLowerCase()}`}
                key={note.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={note.image}
                    alt={note.category}
                    className="h-20 object-contain"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded mb-2">
                    {note.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {note.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{note.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No notes found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
