import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { sliderContent } from "../constants";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex); // Actualiza la imagen actual
        setNextIndex((nextIndex + 1) % sliderContent.length); // Calcula la siguiente imagen
        setIsTransitioning(false);
      }, 5000); // Tiempo igual al de la animación CSS
    }, 5000); // Cambio de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <>
      <div className="home">
        {/* Imagen actual */}
        <div
          className={`slide ${isTransitioning ? "fade-out" : "fade-in"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sliderContent[currentIndex].imageURL})`,
          }}
        ></div>

        {/* Imagen siguiente */}
        <div
          className={`slide ${isTransitioning ? "fade-in" : "fade-out"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sliderContent[nextIndex].imageURL})`,
          }}
        ></div>

        <p className="title">{sliderContent[currentIndex].title}</p>
        <NavLink to={sliderContent[currentIndex].navLink}>Explorar</NavLink>
      </div>
      <MissionVision />
      <WhySchool />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
