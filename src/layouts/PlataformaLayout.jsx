import React from 'react';
import { Outlet } from 'react-router-dom';

const Plataforma = () => {
  return (
    <>
      <div className="pages plataforma">
        <div className='pad'>
        <h2 className="title">INGRESA A NUESTRA PLATAFORMA</h2>
    </div>
      </div>
      <Outlet />
    </>
  )
}

export default Plataforma