import React from "react";
import "./Sofa.css";
import sofa from "../../assets/Craft.png";
function Sofa() {
  return (
    <div className="sofa-container">
      <img src={sofa} className="sofa-image" />
      <div className="sofa-content">
        <p>Welcome to Knobs shop!</p>
        <h1>Crafted for Creators. Trusted by Pros.</h1>
        <p>
          Trusted by architects, builders & carpenters for quality and style.
        </p>
        <button>More About us</button>
      </div>
    </div>
  );
}

export default Sofa;
