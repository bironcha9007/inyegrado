import React from 'react';
import { Outlet } from 'react-router-dom';

const Programs = () => {
  return (
    <>
      <div className="pages programs">
        <div className='pad'>
        <h2 className="title">Programas y Departamentos</h2>
          <p>Ignite your path to success and begin to explore your passion</p></div>
      </div>
      <Outlet />
    </>
  )
}

export default Programs