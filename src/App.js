import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Cakes from "./components/Cakes";
import Favorite from "./components/Favourite";
import Chefs from "./components/Chefs";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Hero />
      <Cakes id="menu" />
      <Favorite id="favorite" />
      <Chefs id="staff" />
      <AboutUs id="about" />
      <Contact id="contact" />
      <Footer />
    </Router>
  );
}

export default App;
