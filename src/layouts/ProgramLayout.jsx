import React from 'react';
import { Outlet } from 'react-router-dom';

const Programs = () => {
  return (
    <>
      <div className="pages programs">
        <div className='pad'>
        <h2 className="title">PROGRAMAS Y DEPARTAMENTOS</h2>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Programs