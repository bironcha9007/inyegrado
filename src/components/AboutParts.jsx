import React from 'react';
import { AboutPart } from '../constants';
import { Link } from 'react-router-dom'



const AboutParts = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='parts'>
      {AboutPart.map(part => (

        <div className="part" key={part.id}>
          <div className="image">
            <img src={part.image} alt={part.title} />
          </div>
          <Link onClick={scrollToTop} to={part.link}> <h3>{part.title}</h3>
            <p>{part.text}</p></Link>
        </div>
      ))}
    </div>
  )
}

export default AboutParts