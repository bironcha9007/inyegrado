import React from 'react';
import { Outlet } from 'react-router-dom';

const Programs = () => {
  return (
    <>
      <div className="pages programs">
        <div className='pad'>
        <h2 className="title">IE INTEGRADO SOACHA</h2>
          <p>Explora nuestros programas y departamentos.</p></div>
      </div>
      <Outlet />
    </>
  )
}

export default Programs