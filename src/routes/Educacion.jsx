import React from 'react'
import Footer from '../components/Footer'
import EducacionInfo from '../components/EducacionInfo'
import EduInfo from '../components/EduInfo'
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
      <div className='ad'>
       <EducacionInfo /> <EduInfo /></div>
       <Slide />
      
     

      <Footer />
    </>
  )
}

export default Educacion