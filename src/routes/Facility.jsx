import React from 'react';
import Redes from "../components/redes";
// components import

import Footer from '../components/Footer';
import Agenda from "../components/Agenda";
const Facility = () => {
  return (
    <>
    <div className="col fourth-col">

<Redes />
</div>
      <div className="pages fac">
        <h2 className="title">Agenda Institucional</h2>
      </div>
      <Agenda />
  
      <Footer />
    </>
  )
}

export default Facility