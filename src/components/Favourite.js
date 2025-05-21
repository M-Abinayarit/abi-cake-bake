import React, { useState, useEffect } from "react";
import "./Favourite.css";
import { motion, AnimatePresence } from "framer-motion";
import favourite1 from "../images/favourite.jpg";
import favourite2 from "../images/Favourite2.jpg";

const cakes = [
  {
    img: favourite1,
    description:
      "Strawberries and cream and spice with a zip of balsamic. This cake celebrates all the classic strawberry combinations, a little like a greatest hits album, but way more delicious!",
  },
  {
    img: favourite2,
    description:
      "A decadent chocolate delight layered with fresh cream and hints of coffee. Perfect for those who love rich and indulgent treats!",
  },
];

const Favorite = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cakes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="favContainer" id="favorite">
      <h2>Top notch yummies</h2>

      <div className="slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={cakes[index].img} alt="cake" className="favImage" />
            <div className="textContent">
              <p>{cakes[index].description}</p>
              <div className="btnGroup">
                <button className="favBtn">Customize Now</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favorite;
