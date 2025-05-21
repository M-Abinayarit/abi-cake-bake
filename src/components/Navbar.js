import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="navicon" onClick={toggle}>
        <FaBars className="icon" />
      </div>
      <Link className="navlink" to="/">
        <div className="desktop">Abi's CakeBake</div>
      </Link>
      {/* <div className="navicon" onClick={toggle}>
        <FaBars className="icon" />
      </div> */}
    </nav>
  );
};

export default Navbar;
