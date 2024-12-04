import React from 'react';
import { Outlet } from 'react-router-dom';
import Redes from "../components/redes";
const Servicios = () => {
  return (
    <>
      <div className="col fourth-col">

        <Redes />
      </div>
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