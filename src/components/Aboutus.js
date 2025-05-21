import React from "react";
import "./Aboutus.css";
import founder from "../images/founder.jpg";
import { motion } from "framer-motion";

const AboutUs = ({ id }) => {
  return (
    <div className="aboutContainer" id={id}>
      <div className="aboutContent">
        <div className="aboutText">
          <h2>About Us</h2>
          <p>
            Abi's CakeBake was founded 10 years ago by Abinaya, a passionate
            baker with a dream to bring smiles through sweet treats. Over the
            years, the shop has grown into a beloved local favorite, known for
            its warm atmosphere, creative bakes, and customer love. From
            traditional recipes to innovative creations, CakeBake is a symbol of
            love, quality, and community.
          </p>
        </div>
        <motion.div
          className="aboutImage"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={founder} alt="Chef Abinaya" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
