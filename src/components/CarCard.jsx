import React from "react";

import "../css/CarCard.css";

const CarCard = (props) => {
  const { image, name } = props;

  return (
    <summary className="car-card">
      <img className="img-resp" src={image} alt="Car-Image" />
      <article className="car-text">
        <p>{name}</p>
        <div className="vehicle-links">
          <li>Learn</li>
          <li>Order</li>
        </div>
      </article>
    </summary>
  );
};

export default CarCard;
