import React from 'react'
import Footer from '../components/Footer'
import AdmissionInfo from '../components/AdmissionInfo'
import AdMoreInfo from '../components/AdMoreInfo'
import ApplyNow from '../components/ApplyNow'

const Admission = () => {
  return (
    <>
      <div className="pages admission">
        <h2 className="title">ADMISIONES Y MATRICULA</h2>
      </div>
      
      <AdMoreInfo />
      <AdmissionInfo />
      <ApplyNow />
      <Footer />
    </>
  )
}

export default Admission