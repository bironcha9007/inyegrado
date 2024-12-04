import React from 'react';
import { Outlet } from 'react-router-dom';
import Redes from "../components/redes";
const Plataforma = () => {
  return (
    <>
      <div className="col fourth-col">

        <Redes />
      </div>
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