import React from "react";
import "../css/HomeCar.css";

const HomeCar = ({ image, largeText, smallText, onButtonClick }) => {
  return (
    <div className="fullscreen-container">
      <img
        src={image}
        alt="Full Screen Background"
        className="fullscreen-image"
      />
      {/* Top Text */}
      <div className="large-text-overlay">
        <h1>{largeText}</h1>
      </div>
      <div className="small-text-overlay">
        <h4>{smallText}</h4>
        <hr />
      </div>
      {/* Bottom Button */}
      <div className="button-overlay">
        <button className="overlay-button" onClick={onButtonClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HomeCar;
