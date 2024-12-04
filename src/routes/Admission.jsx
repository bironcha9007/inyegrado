import React from 'react'
import Footer from '../components/Footer'
import Slide from '../components/Slide'
import AdmissionInfo from '../components/AdmissionInfo'
import AdMoreInfo from '../components/AdMoreInfo'
import ApplyNow from '../components/ApplyNow'
import Redes from "../components/redes";
const Admission = () => {
  return (
    <>
    <div className="col fourth-col">

<Redes />
</div>
      <div className="pages admission">
        <h2 className="title">ADMISIONES Y MATRICULA</h2>
      </div>
     
      <AdMoreInfo />
      <AdmissionInfo />
      <ApplyNow /> <Slide />
      <Footer />
    </>
  )
}

export default Admission