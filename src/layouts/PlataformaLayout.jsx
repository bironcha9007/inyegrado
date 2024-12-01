import React from 'react';
import { Outlet } from 'react-router-dom';

const Plataforma = () => {
  return (
    <>
      <div className="pages plataforma">
        <div className='pad'>
        <h2 className="title">ACCEDE A NUESTRAS PLATAFORMAS</h2>
    </div>
      </div>
      <Outlet />
    </>
  )
}

export default Plataforma