import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Header";
import HeroSection from "./components/MainLayout";
import Footer from "./components/Footer";

// Main Pages
import NotesPage from "./components/pages/NotesPage";
import AboutUsPage from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration";
import LoginPage from "./components/pages/LoginPage";
import UserProfile from "./components/pages/UserProfile";
import Blog from "./components/pages/Blog";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";

// Subject Pages
import Advanced_C from "./components/subjects/Advanced_C";
import API from "./components/subjects/API";
import C from "./components/subjects/C";
import CSS from "./components/subjects/CSS";
import Docker from "./components/subjects/Docker";
import Express from "./components/subjects/Express";
import Git from "./components/subjects/Git";
import HTML from "./components/subjects/HTML";
import JS from "./components/subjects/JS";
import MongoDB from "./components/subjects/MongoDB";
import Node from "./components/subjects/Node";
import Python from "./components/subjects/Python";
import ReactNotes from "./components/subjects/ReactNotes";
import Security from "./components/subjects/Security";
import SQL from "./components/subjects/SQL";
import TypeScript from "./components/subjects/TypeScript";

function App() {
  return (
    <>
      <Routes>
        {/* 
          ======================
          MAIN LAYOUT ROUTES
          ======================
        */}
        
        {/* Home Route */}
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

        {/* Notes Page */}
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

        {/* About Us Page */}
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

        {/* 
          ======================
          AUTHENTICATION ROUTES
          ======================
        */}
        
        {/* User Registration */}
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

        {/* Login */}
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

        {/* User Profile */}
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

        {/* 
          ======================
          SUBJECT NOTES ROUTES
          ======================
          Note: These don't include Navbar/Footer as they're likely embedded in NotesPage
        */}
        
        <Route path="/notes/react" element={<ReactNotes />} />
        <Route path="/notes/css" element={<CSS />} />
        <Route path="/notes/html" element={<HTML />} />
        <Route path="/notes/sql" element={<SQL />} />
        <Route path="/notes/js" element={<JS />} />
        <Route path="/notes/git" element={<Git />} />
        <Route path="/notes/docker" element={<Docker />} />
        <Route path="/notes/security" element={<Security />} />
        <Route path="/notes/mongodb" element={<MongoDB />} />
        <Route path="/notes/c" element={<C />} />
        <Route path="/notes/Advanced_C" element={<Advanced_C />} />
        <Route path="/notes/api" element={<API />} />
        <Route path="/notes/express" element={<Express />} />
        <Route path="/notes/node" element={<Node />} />
        <Route path="/notes/TypeScript" element={<TypeScript />} />
        <Route path="/notes/python" element={<Python />} />

        {/* 
          ======================
          ADDITIONAL PAGES
          ======================
        */}
        
        {/* Blog Page */}
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />

        {/* Contact Us Page */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* 
          ======================
          ERROR HANDLING
          ======================
        */}
        
        {/* 404 Page Not Found */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <PageNotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;