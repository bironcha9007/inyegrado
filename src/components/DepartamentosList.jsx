import React from 'react'
import { departamentosin } from '../constants'
import { Link } from 'react-router-dom'
const DepartamentosList = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }
  return (
    <div className='facilities'>
        {departamentosin.map(fac => (
            <div className='facility' key={fac.id}>
               <Link onClick={scrollToTop} to={fac.link}> <h3>{fac.title}</h3>
                <img src={fac.image} alt={fac.title} />
                <p>{fac.text}</p></Link>
            </div>
        ))}
    </div>
  )
}

export default DepartamentosList
