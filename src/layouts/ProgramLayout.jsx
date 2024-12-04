import React from 'react';
import { Outlet } from 'react-router-dom';
import Redes from "../components/redes";
const Programs = () => {
  return (
    <>
      <div className="col fourth-col">

        <Redes />
      </div>
      <div className="pages programs">
        <div className='pad'>
          <h2 className="title">PROGRAMAS Y ASIGNATURAS</h2>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Programs