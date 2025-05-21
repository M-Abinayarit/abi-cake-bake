import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <h2>Get in Touch</h2>
      <div className="contactBox">
        <p>
          <span className="emoji">📱</span>+91&nbsp;8765432190
        </p>
        <p>
          <span className="emoji">🏢</span>Main Branch Address:
          <br />
          8th Street, Ashok Nagar, Chennai
        </p>
      </div>
    </div>
  );
};

export default Contact;
