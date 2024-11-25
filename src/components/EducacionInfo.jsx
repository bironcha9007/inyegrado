import React from 'react'
import { Link } from 'react-router-dom'

const EducacionInfo = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <div className="ad-info">
        <p>Conoce Nuestros Departamentos</p>
        <Link onClick={scrollToTop} to="/departamentos" >Departamentos</Link>

        <p>Conoce Nuestros Programas</p>
        <Link onClick={scrollToTop} to="/servicios/4">Programas y Asignaturas</Link>
    </div>
    
  )
}

export default EducacionInfo
