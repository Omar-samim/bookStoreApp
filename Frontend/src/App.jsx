import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home/Home.jsx";
import Courses from "./course/Courses.jsx";
import Contact from "./contact/Contact.jsx";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
