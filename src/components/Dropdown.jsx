import CarCard from "./CarCard";

import "../css/DropDown.css";
import { useState } from "react";

const Dropdown = (props) => {
  const {
    data: { liText, cars, features },
  } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className="nav-item"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <a href="#Discover" class="nav-link">
        {liText}
      </a>
      <div className={`dropdown ${isActive ? "active" : ""}`}>
        <div
          className={`dropdown-content ${
            liText === "Shop" ? "shop-layout" : ""
          } ${liText === "Discover" ? "discover-layout" : ""}`}
        >
          <div className="dropdown-left">
            {cars?.map((car) => (
              <CarCard {...car} />
            ))}
          </div>
          <ul
            className={`dropdown-right ${
              liText === "Discover" ? "discover-features" : ""
            }`}
          >
            {features?.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Dropdown;
