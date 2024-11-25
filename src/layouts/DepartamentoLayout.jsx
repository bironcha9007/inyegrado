import React from 'react';
import { Outlet } from 'react-router-dom';

const Departamentos = () => {
  return (
    <>
      <div className="pages departamentos">
        <div className='pad'>
        <h2 className="title">DEPARTAMENTOS Y BIENESTAR</h2>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Departamentos