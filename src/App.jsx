import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import HeroSection from "./components/MainLayout";
import Footer from "./components/Footer";
import NotesPage from "./components/pages/NotesPage";
import AboutUsPage from "./components/pages/About";
import UserRegistration from "./components/pages/UserRegistration";
import LoginPage from "./components/pages/LoginPage";
import UserProfile from "./components/pages/UserProfile";
// import ReactNotes from "./components/subjects/ReactNotes";
// import HTML from "./components/subjects/HTML";
// import CSS from "./components/subjects/CSS";
// import SQL from "./components/subjects/SQL";
// import JS from "./components/subjects/JS";
// import Git from "./components/subjects/Git";
// import Docker from "./components/subjects/Docker";
// import Security from "./components/subjects/Security";
// import C from "./components/subjects/C";
// import Advanced_C from "./components/subjects/Advanced_C";
// import Express from "./components/subjects/Express";
// import MongoDB from "./components/subjects/MongoDB";
// import Node from "./components/subjects/Node";
// import TypeScript from "./components/subjects/TypeScript";
// import Python from "./components/subjects/Python";
// import API from "./components/subjects/API";
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

        {/* React Notes specific route
        <Route
          path="/notes/react"
          element={
            <>
              <ReactNotes />
            </>
          }
        />

        {/* CSS specific route */}
        {/* <Route
          path="/notes/CSS"
          element={
            <>
              <CSS />
            </>
          }
        /> */}

        {/* HTML specific route */}
        {/* <Route
          path="/notes/HTML"
          element={
            <>
              <HTML />
            </>
          }
        /> */}

        {/*  SQL specific route */}
        {/* <Route
          path="/notes/SQL"
          element={
            <>
              <SQL />
            </>
          }
        /> */}

        {/*  JS specific route */}
        {/* <Route
          path="/notes/JS"
          element={
            <>
              <JS />
            </>
          }
        /> */}

        {/*  Git/GitHub specific route */}
        {/* <Route
          path="/notes/Git"
          element={
            <>
              <Git />
            </>
          }
        /> */}

        {/*  Docker specific route */}
        {/* <Route
          path="/notes/Docker"
          element={
            <>
              <Docker />
            </>
          }
        /> */}

        {/*  security specific route */}
        {/* <Route
          path="/notes/Security"
          element={
            <>
              <Security />
            </>
          }
        /> */}

        {/*  mongodb specific route */}
        {/* <Route
          path="/notes/MongoDB"
          element={
            <>
              <MongoDB />
            </>
          }
        /> */}

        {/*  C specific route */}
        {/* <Route
          path="/notes/C"
          element={
            <>
              <C />
            </>
          }
        /> */}

        {/*  Advanced_C specific route */}
        {/* <Route
          path="/notes/Advanced_C"
          element={
            <>
              <Advanced_C />
            </>
          }
        /> */}

        {/*  API specific route */}
        {/* <Route
          path="/notes/API"
          element={
            <>
              <API />
            </>
          }
        /> */}

        {/*  Express specific route */}
        {/* <Route
          path="/notes/Express"
          element={
            <>
              <Express />
            </>
          }
        />
        
        */}

        {/*  Node specific route */}
        {/* <Route
          path="/notes/Node"
          element={
            <>
              <Node />
            </>
          }
        /> */}

        {/*  TypeScript specific route */}
        {/* <Route
          path="/notes/TypeScript"
          element={
            <>
              <TypeScript />
            </>
          }
        /> */}

        {/*  Python specific route */}
        {/* <Route
          path="/notes/Python"
          element={
            <>
              <Python />
            </>
          }
        /> */}
        
        {/* ------------------- */}
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

