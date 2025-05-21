import React from "react";
import "./Chefs.css";
import { chefs } from "../data/chefs";

const Chefs = ({ id }) => {
  return (
    <div className="chefContainer" id={id}>
      <h1 className="chefHeading">Our Skilled Head Chefs</h1>
      <div className="chefWrapper">
        {chefs.map((chef, index) => (
          <div key={chef.name} className="chefCard">
            <img src={chef.img} alt={chef.alt} className="chefImg" />
            <div className="chefInfo">
              <div className="chefName">{chef.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
