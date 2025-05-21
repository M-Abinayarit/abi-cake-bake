import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, show }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggle(); // Close sidebar after navigation
  };

  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        ✕
      </div>

      <div className="sideMenu">
        <Link to="/" className="sideLink" onClick={() => scrollTo("menu")}>
          Menu
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("favorite")}>
          Our Customized
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("staff")}>
          Head Chefs
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("about")}>
          About Us
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("contact")}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
