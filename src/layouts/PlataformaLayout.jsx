import React from 'react';
import { Outlet } from 'react-router-dom';

const Plataforma = () => {
  return (
    <>
      <div className="pages plataforma">
        <div className='pad'>
        <h2 className="title">ACCESO PLATAFORMA</h2>
          <p>Explora nuestros programas y departamentos.</p></div>
      </div>
      <Outlet />
    </>
  )
}

export default Plataforma