import React from 'react'
import Footer from '../components/Footer'
import EducacionInfo from '../components/EducacionInfo'
import AdMoreInfo from '../components/AdMoreInfo'
import Slide from '../components/Slide'
import Redes from "../components/redes";
const Educacion = () => {
  return (
    <>
    <div className="col fourth-col">

<Redes />
</div>
      <div className="pages educacion">
        <h2 className="title">EL INTEGRADO SE MUEVE</h2>
      </div>
      
       <EducacionInfo />
       <Slide />
      <AdMoreInfo />
     

      <Footer />
    </>
  )
}

export default Educacion