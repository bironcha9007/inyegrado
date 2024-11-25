import React from 'react'
import { facilities } from '../constants'
import { Link } from 'react-router-dom'
const FacilityList = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <div className='facilities'>
        {facilities.map(fac => (
            <div className='facility' key={fac.id}>
                <Link onClick={scrollToTop} to={fac.link}><h3>{fac.title}</h3>
                <img src={fac.image} alt={fac.title} />
                <p>{fac.text}</p></Link>
            </div>
        ))}
    </div>
  )
}

export default FacilityList
