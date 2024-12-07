import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { sliderContent } from "../constants";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Redes from "../components/redes";
import Slide from "../components/Slide";
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
      }, 2000); // Tiempo igual al de la animación CSS
    }, 5000); // Cambio de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <>
     <div className="col fourth-col">

<Redes />
</div>
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
        <NavLink to={sliderContent[currentIndex].navLink}>Ver Más</NavLink>
      </div>
      <h1 className="titles">NUESTRO COLEGIO</h1>
      <div className="map">
        <iframe title='cont'
          src="https://www.google.com/maps/embed?pb=!4v1732582801576!6m8!1m7!1sCAoSLEFGMVFpcE4za0wzVThreWdfS0RkVEhkM09qQ0loa2hnR2hMeTlMTHpheldv!2m2!1d4.584833585908672!2d-74.22030240517607!3f60!4f0!5f0.7820865974627469" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <h1 className="titles">LO MÁS DESTACADO</h1>
      <Slide />
      <h1 className="titles2">NUESTRO HORIZONTE</h1>
      <MissionVision />
      <h1 className="titles2">CONOCE NUESTRAS SEDES</h1>
      <WhySchool />


      <Footer />
    </>
  );
};

export default Home;
