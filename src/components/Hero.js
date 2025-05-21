import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Hero.css";

const Hero = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <Sidebar show={show} toggle={toggle} />
      <div className="content">
        <div className="contentItems">
          <h1>Mouth watering delicious yummy cakes</h1>
          <p>
            Every cake is baked with love and crafted to perfection! We
            specialize in a wide range of delicious cakes.
          </p>
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
