import React from 'react';
import { Outlet } from 'react-router-dom';

const Servicios = () => {
  return (
    <>
      <div className="pages servicios">
        <div className='pad'>
        <h2 className="title">SERVICIOS Y OFICINAS</h2>
          </div>
      </div>
      <Outlet />
    </>
  )
}

export default Servicios