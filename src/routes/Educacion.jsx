import React from 'react'
import Footer from '../components/Footer'
import EducacionInfo from '../components/EducacionInfo'
import AdMoreInfo from '../components/AdMoreInfo'


const Educacion = () => {
  return (
    <>
      <div className="pages educacion">
        <h2 className="title">EL INTEGRADO SE MUEVE</h2>
      </div>
       <EducacionInfo />
      <AdMoreInfo />
     

      <Footer />
    </>
  )
}

export default Educacion