import React, { useState, useEffect } from "react";
import "../css/Carousel.css";
import image1 from "../images/tesla-robotaxi.jpg";
import image2 from "../images/tesla-apr.jpg";

// const images = [image1, image2];
const slides = [
  {
    image: image1,
    caption: "WE,ROBOT",
    buttonText: "Learn More",
    buttonLink: "#robotaxi",
  },
  {
    image: image2,
    caption: "Tesla APR Offers - Drive Your Dream Today",
    buttonText: "Order Model 3",
    buttonLink: "#apr",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false); // Hide current image
      setTimeout(() => {
        // setCurrentIndex((currentIndex + 1) % images.length);
        setCurrentIndex((currentIndex + 1) % slides.length);
        setShowImage(true); // Show next image
      }, 800); // Delay for the transition
    }, 4000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleManualChange = (index) => {
    setShowImage(false); // Hide current image
    setTimeout(() => {
      setCurrentIndex(index);
      setShowImage(true); // Show selected image
    }, 300); // Delay for the transition
  };

  return (
    <div className="carousel-container">
      <img
        // src={images[currentIndex]}
        src={slides[currentIndex].image}
        alt="Tesla Carousel"
        className={`carousel-image ${showImage ? "show" : ""}`} // Apply show class
      />
      <div
        className={`carousel-content ${
          currentIndex === 0 ? "large-caption" : ""
        }`}
      >
        <h2 className="carousel-caption">{slides[currentIndex].caption}</h2>
        <a
          href={slides[currentIndex].buttonLink}
          className="carousel-button-link"
        >
          <button
            className={`carousel-text-button ${
              currentIndex === 0 ? "large-button" : ""
            }`}
          >
            {slides[currentIndex].buttonText}
          </button>
        </a>
      </div>
      <div className="carousel-buttons">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-button ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleManualChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
