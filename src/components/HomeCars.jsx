import React from "react";
import HomeCar from "./HomeCar";

const carsData = [
  {
    id: 1,
    image: require("../images/ModelY.jpg"),
    largeText: "Model Y",
    smallText: "Lease Starting at $394/mo",
  },
  {
    id: 2,
    image: require("../images/Model3.jpg"),
    largeText: "Model 3",
    smallText: "Lease Starting at $499/mo",
  },
  {
    id: 3,
    image: require("../images/ModelX.jpg"),
    largeText: "Model X",
    smallText: "Lease Starting at $494/mo",
  },
  {
    id: 4,
    image: require("../images/ModelS.jpg"),
    largeText: "Model S",
    smallText: "Lease Starting at $549/mo",
  },
  {
    id: 5,
    image: require("../images/CyberTruck.jpg"),
    largeText: "",
    smallText: "",
  },
];

const HomeCars = () => {
  const handleButtonClick = (carName) => {
    alert(`Order placed for ${carName}`);
  };

  return (
    <div>
      {carsData.map((car) => (
        <HomeCar
          key={car.id}
          image={car.image}
          largeText={car.largeText}
          smallText={car.smallText}
          onButtonClick={() => handleButtonClick(car.largeText)}
        />
      ))}
    </div>
  );
};

export default HomeCars;
