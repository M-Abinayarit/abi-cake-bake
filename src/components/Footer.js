import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerColumn">
        <h4>Social Media</h4>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Telegram</div>
        <div>LinkedIn</div>
      </div>
      <div className="footerColumn">
        <h4>About</h4>
        <div>Contact us</div>
        <div>Careers</div>
        <div>Desserts</div>
        <div>customized cakes</div>
      </div>
      <div className="footerColumn">
        <h4>Location</h4>
        <div>Chennai</div>
        <div>Madurai</div>
        <div>Coimbatore</div>
        <div>Trichy</div>
      </div>
    </div>
  );
};

export default Footer;
