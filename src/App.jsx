import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import HeroSection from "./components/MainLayout";
import Footer from "./components/Footer";
import NotesPage from "./components/pages/NotesPage";
import AboutUsPage from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration"; // Adjust path as needed
import LoginPage from "./components/pages/LoginPage"; // Adjust path as needed
import UserProfile from "./components/pages/UserProfile"; // Adjust path as needed
import ReactNotes from "./components/subjects/ReactNotes" // Uncommented this line
import HTML from "./components/subjects/HTML";
import CSS from "./components/subjects/CSS";
import SQL from "./components/subjects/SQL";
import JS from "./components/subjects/JS";

function App() {
  return (
    <>
      
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
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
            <Navbar />
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
            <Navbar />
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
            <Navbar />
              <UserRegistration />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
            <Navbar />
              <LoginPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
            <Navbar />
              <UserProfile />
              <Footer />
            </>
          }
        />

        {/* React Notes specific route */}
        <Route
          path="/notes/react"
          element={
            <>
              <ReactNotes />
            </>
          }
        />
        
        {/* CSS specific route */}
        <Route
          path="/notes/CSS"
          element={
            <>
          
              <CSS/>
            </>
          }
        />
        
        {/* HTML specific route */}
        <Route
          path="/notes/HTML"
          element={
            <>
              <HTML/>
            </>
          }
        />
        
{/*  SQL specific route */}
        <Route
          path="/notes/SQL"
          element={
            <>
              <SQL/>
            </>
          }
        />

{/*  JS specific route */}
<Route
          path="/notes/JS"
          element={
            <>
              <JS/>
            </>
          }
  />

      </Routes>
    </>
  );
}

export default App;