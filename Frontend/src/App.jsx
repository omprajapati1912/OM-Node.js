import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import WorkoutSessions from "./componets/WorkoutSessions";
import Gallery from "./componets/Gallery";
import Pricing from "./componets/Pricing";
import Contact from "./componets/Contact";
import BMICalculator from "./componets/BMICalculator";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
        <ToastContainer theme="dark" position="top-center " />
      </Router>
    </>
  );
}

export default App;
