import React from 'react'
import { departamentosin } from '../constants'

const DepartamentosList = () => {
  return (
    <div className='facilities'>
        {departamentosin.map(fac => (
            <div className='facility' key={fac.id}>
                <h3>{fac.title}</h3>
                <img src={fac.image} alt={fac.title} />
                <p>{fac.text}</p>
            </div>
        ))}
    </div>
  )
}

export default DepartamentosList
