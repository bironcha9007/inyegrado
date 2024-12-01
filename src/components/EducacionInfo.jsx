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

        <Link onClick={scrollToTop} to="/departamentos" >Departamentos</Link>


        <Link onClick={scrollToTop} to="/programs">Programas y Asignaturas</Link>
    </div>
    
  )
}

export default EducacionInfo
