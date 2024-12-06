import React from 'react'
import Footer from '../components/Footer'
import EducacionInfo from '../components/EducacionInfo'
import EduInfo from '../components/EduInfo'
import Slide from '../components/Slide'
import Redes from "../components/redes";
import FacilityList from "../components/FacilityList";
import DepartamentosList from "../components/DepartamentosList";
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
       <h1 className="titles">DEPARTAMENTOS</h1>
       <DepartamentosList />
       <h1 className="titles">PROGRAMAS</h1>
       <FacilityList />
       <Slide />
      
     

      <Footer />
    </>
  )
}

export default Educacion