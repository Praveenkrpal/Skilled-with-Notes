// import "./App.css";

// import Navbar from "./components//Header";
// import HeroSection from "./components//MainLayout";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar></Navbar>

//       <HeroSection></HeroSection>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;

// -------------------------------------

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Header";
// import HeroSection from "./components/MainLayout";
// import Footer from "./components/Footer";
// import NotesPage from "./components/pages/NotesPage";
// import AboutUsPage from "./components/pages/About";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Home route - shows HeroSection */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Footer />
//             </>
//           }
//         />

//         {/* Notes route */}
//         <Route
//           path="/notes"
//           element={
//             <>
//               <NotesPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* about us component */}
//         <Route
//           path="/about"
//           element={
//             <>
//               <AboutUsPage />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// // ----------------------------------

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Header";
// import HeroSection from "./components/MainLayout";
// import Footer from "./components/Footer";
// import NotesPage from "./components/pages/NotesPage";
// import AboutUsPage from "./components/pages/About";
// // import ReactNotes from "./components/subjects/Reactjs"; // Import your ReactNotes component

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Home route - shows HeroSection */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Footer />
//             </>
//           }
//         />

//         {/* Notes routes */}
//         <Route
//           path="/notes"
//           element={
//             <>
//               <NotesPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* React Notes specific route */}
//         {/* <Route
//           path="/notes/react"
//           element={
//             <>
//               <ReactNotes />
//               <Footer />
//             </>
//           }
//         /> */}

//         {/* about us component */}
//         <Route
//           path="/about"
//           element={
//             <>
//               <AboutUsPage />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// -------------------------------------

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import HeroSection from "./components/MainLayout";
import Footer from "./components/Footer";
import NotesPage from "./components/pages/NotesPage";
import AboutUsPage from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration"; // Adjust path as needed
import LoginPage from "./components/pages/LoginPage"; // Adjust path as needed
import UserProfile from "./components/pages/UserProfile"; // Adjust path as needed
// import ReactNotes from "./components/subjects/Reactjs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />

        {/* Notes routes */}
        <Route
          path="/notes"
          element={
            <>
              <NotesPage />
              <Footer />
            </>
          }
        />

        {/* About us */}
        <Route
          path="/about"
          element={
            <>
              <AboutUsPage />
              <Footer />
            </>
          }
        />

        {/* Auth routes */}
        <Route
          path="/register"
          element={
            <>
              <UserRegistration/>
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <LoginPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <UserProfile />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

// ---------------after redux use----------------

// import { Routes, Route } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import Navbar from "./components/Header";
// import HeroSection from "./components/MainLayout";
// import Footer from "./components/Footer";
// import NotesPage from "./components/pages/NotesPage";
// import AboutUsPage from "./components/pages/About";
// import UserRegistration from "./components/pages/UserRegistration";
// import LoginPage from "./components/pages/LoginPage";
// import UserProfile from "./components/pages/UserProfile";

// function App() {
//   return (
//     <Provider store={store}>
//       <Navbar />
//       <Routes>
//         {/* Home route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Footer />
//             </>
//           }
//         />

//         {/* Notes routes */}
//         <Route
//           path="/notes"
//           element={
//             <>
//               <NotesPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* About us */}
//         <Route
//           path="/about"
//           element={
//             <>
//               <AboutUsPage />
//               <Footer />
//             </>
//           }
//         />

//         {/* Auth routes */}
//         <Route
//           path="/register"
//           element={
//             <>
//               <UserRegistration/>
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <>
//               <LoginPage />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/profile"
//           element={
//             <>
//               <UserProfile />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </Provider>
//   );
// }

// export default App;
