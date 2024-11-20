import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionInfo = () => {
  return (
    <div className="ad-info">
        <p>Empezar Pre-Inscripcion</p>
        <Link to="/matricula">Matriculas Abiertas 2025</Link>
    </div>
  )
}

export default AdmissionInfo
