import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import HeroSection from "./components/MainLayout";
import Footer from "./components/Footer";
import NotesPage from "./components/pages/NotesPage";
import AboutUsPage from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration";
import LoginPage from "./components/pages/LoginPage";
import UserProfile from "./components/pages/UserProfile";
// ----------subject import below----------------------
import Blog from "./components/pages/Blog";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";

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

        {/*---- subject routes start here----------*/}

        {/* ------subjects routes end here------------- */}
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

        {/* ------------- */}
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

        {/* ---------------- */}

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
