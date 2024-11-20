import React from 'react';
import { Outlet } from 'react-router-dom';

const Servicios = () => {
  return (
    <>
      <div className="pages plataforma">
        <div className='pad'>
        <h2 className="title">ACCESO SERVICIOS</h2>
          <p>Explora nuestros servicios</p></div>
      </div>
      <Outlet />
    </>
  )
}

export default Servicios