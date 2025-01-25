import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home/Home.jsx";
import Courses from "./course/Courses.jsx";
import Contact from "./contact/Contact.jsx";
import { useAuth } from "./context/AuthProvider.jsx";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              zIndex: 9999, // Ensures toast appears above modal overlays
              backgroundColor: "#FDC0CB", // Optional: Customize toast background for dark mode
              color: "#000", // Optional: Customize text color
            },
          }}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
