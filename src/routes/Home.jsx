// rrd import
import { NavLink } from "react-router-dom";

// Components
import React, { useState, useEffect } from 'react';

import { sliderContent } from '../constants';
import Footer from '../components/Footer';
import MissionVision from '../components/MissionVision';
import Testimonials from '../components/Testimonials';
import WhySchool from '../components/WhySchool';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar la imagen automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 3000);
        return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    }, []);

    const currentSlide = sliderContent[currentIndex];

    return (
        <>
            <div
                className="home"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentSlide.imageURL})`,
                }}
            >
                <p className="title">{currentSlide.title}</p>
                <p className="info">{currentSlide.text}</p>
                <NavLink to={currentSlide.navLink}>Explorar</NavLink>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;
