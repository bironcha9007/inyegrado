import React from 'react'
import Footer from '../components/Footer'

import AdmissionInfo from '../components/AdmissionInfo'
import AdMoreInfo from '../components/AdMoreInfo'

import Redes from "../components/redes";
const Admission = () => {
  return (
    <>
    <div className="col fourth-col">

<Redes />
</div>
      <div className="pages admission">
        <h2 className="title">ADMISIONES Y MATRÍCULAS</h2>
      </div>
     <div className='ad'>
     <AdMoreInfo />
      <AdmissionInfo />
      
     </div>
      
      <Footer />
    </>
  )
}

export default Admission