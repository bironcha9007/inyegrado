import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionInfo = () => {
  return (
    <div className="ad-info">
        <p>Admisiones y Registro</p>
        <Link to="/programs">Matriculas Abiertas 2025</Link>
    </div>
  )
}

export default AdmissionInfo
