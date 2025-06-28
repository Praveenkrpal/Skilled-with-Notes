// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left side - Logo and Name */}
//         <div className="flex items-center space-x-2">
//           <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-violet-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>
//           <span className="text-xl font-bold">Skilled-with-Notes</span>
//         </div>

//         {/* Middle - Navigation Links (hidden on mobile) */}
//         <nav className="hidden md:flex space-x-8">
//           <a
//             href="#"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Notes
//           </a>
//           <a
//             href="#"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             About Us
//           </a>
//         </nav>

//         {/* Right side - Auth Buttons and Profile */}
//         <div className="flex items-center space-x-4">
//           <button className="hidden sm:inline-block bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors">
//             Register
//           </button>
//           <button className="hidden sm:inline-block border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors">
//             Login
//           </button>
//           <div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center cursor-pointer">
//             <span className="font-medium">U</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// -------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left side - Logo and Name */}
//         <div className="flex items-center space-x-2">
//           <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-violet-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>
//           <span className="text-xl font-bold">Skilled-with-Notes</span>
//         </div>

//         {/* Middle - Navigation Links (hidden on mobile) */}
//         <nav className="hidden md:flex space-x-8">
//           <Link
//             to="/"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/notes"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Notes
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             About Us
//           </Link>
//         </nav>

//         {/* Right side - Auth Buttons and Profile */}
//         <div className="flex items-center space-x-4">
//           <button className="hidden sm:inline-block bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors">
//             Register
//           </button>
//           <button className="hidden sm:inline-block border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors">
//             Login
//           </button>
//           <div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center cursor-pointer">
//             <span className="font-medium">U</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// ----------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left side - Logo and Name */}
//         <div className="flex items-center space-x-2">
//           <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-violet-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>

//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-xl font-bold hover:text-violet-200 transition-colors">
//               Skilled-with-Notes
//             </span>
//           </Link>
//         </div>

//         {/* Middle - Navigation Links (hidden on mobile) */}
//         <nav className="hidden md:flex space-x-8">
//           <Link
//             to="/"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/notes"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Notes
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             About Us
//           </Link>
//         </nav>

//         {/* Right side - Auth Buttons and Profile */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors">
//             Register
//           </button>
//           <button className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors">
//             Login
//           </button>
//           <div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center cursor-pointer">
//             <span className="font-medium">U</span>
//           </div>
//         </div>

//         {/* Mobile menu button (visible on small screens) */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu (shown when toggled) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-violet-800 px-4 py-2">
//           <div className="flex flex-col space-y-3">
//             <Link
//               to="/"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/notes"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Notes
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               About Us
//             </Link>
//             <div className="flex space-x-4 pt-2">
//               <button className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors w-full">
//                 Register
//               </button>
//               <button className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors w-full">
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// ----------------------------------------------


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Logo and Name */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-violet-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold hover:text-violet-200 transition-colors">
              Skilled-with-Notes
            </span>
          </Link>
        </div>

        {/* Middle - Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-violet-200 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/notes"
            className="hover:text-violet-200 transition-colors font-medium"
          >
            Notes
          </Link>
          <Link
            to="/about"
            className="hover:text-violet-200 transition-colors font-medium"
          >
            About Us
          </Link>
        </nav>

        {/* Right side - Auth Buttons and Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/register"
            className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center cursor-pointer"
          >
            <span className="font-medium">U</span>
          </Link>
        </div>

        {/* Mobile menu button (visible on small screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu (shown when toggled) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-violet-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="hover:text-violet-200 transition-colors font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/notes"
              className="hover:text-violet-200 transition-colors font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Notes
            </Link>
            <Link
              to="/about"
              className="hover:text-violet-200 transition-colors font-medium py-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link
                to="/register"
                className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors w-full text-center"
                onClick={toggleMobileMenu}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors w-full text-center"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

// --------------after redux use ------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const user = useSelector((state) => state.user);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left side - Logo and Name */}
//         <div className="flex items-center space-x-2">
//           <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-violet-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>

//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-xl font-bold hover:text-violet-200 transition-colors">
//               Skilled-with-Notes
//             </span>
//           </Link>
//         </div>

//         {/* Middle - Navigation Links (hidden on mobile) */}
//         <nav className="hidden md:flex space-x-8">
//           <Link
//             to="/"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/notes"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             Notes
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-violet-200 transition-colors font-medium"
//           >
//             About Us
//           </Link>
//         </nav>

//         {/* Right side - Auth Buttons and Profile */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <Link
//               to="/profile"
//               className="flex items-center space-x-2"
//             >
//               <img 
//                 src={user.avatar} 
//                 alt="Profile" 
//                 className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
//               />
//               <span className="font-medium">{user.name}</span>
//             </Link>
//           ) : (
//             <>
//               <Link
//                 to="/register"
//                 className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors"
//               >
//                 Register
//               </Link>
//               <Link
//                 to="/login"
//                 className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile menu button (visible on small screens) */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu (shown when toggled) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-violet-800 px-4 py-2">
//           <div className="flex flex-col space-y-3">
//             <Link
//               to="/"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/notes"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               Notes
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-violet-200 transition-colors font-medium py-2"
//               onClick={toggleMobileMenu}
//             >
//               About Us
//             </Link>
//             {user ? (
//               <Link
//                 to="/profile"
//                 className="flex items-center space-x-2 py-2"
//                 onClick={toggleMobileMenu}
//               >
//                 <img 
//                   src={user.avatar} 
//                   alt="Profile" 
//                   className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
//                 />
//                 <span className="font-medium">My Profile</span>
//               </Link>
//             ) : (
//               <div className="flex flex-col space-y-2 pt-2">
//                 <Link
//                   to="/register"
//                   className="bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-100 transition-colors w-full text-center"
//                   onClick={toggleMobileMenu}
//                 >
//                   Register
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border border-white px-4 py-2 rounded-md font-medium hover:bg-violet-600 transition-colors w-full text-center"
//                   onClick={toggleMobileMenu}
//                 >
//                   Login
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


