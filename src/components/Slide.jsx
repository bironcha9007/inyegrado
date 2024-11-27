import React, { useState, useEffect } from 'react'
import { slide, testimonials } from '../constants'

// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Slide = () => {
  const [people] = useState(slide);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => (
      clearInterval(slider)
    )
  }, [index])
  

  return (
    <div className="content">
     <div className='slidc'>
      <div className="slid">
        {slide.map((test, indexTest) => {
          const { id,  image, name, testimonial } = test;
          let position = "nextSlide";
          if (indexTest === index) {
            position = "activeSlide";
          }
          if (indexTest === index - 1 || (index === 0 && indexTest === people.length - 1)) {
            position = "lastslide";
          }
          return (
            <article className={position} key={id}>
             
             <div><h3>{name}</h3>
              
              <p>{testimonial}</p>
              <img src={image} alt="" /> </div>
               
            </article>
          )
        })}
      </div>
      <div className="testimonials">
        {testimonials.map((test, indexTest) => {
          const { id,  image, name, testimonial } = test;
          let position = "nextSlide";
          if (indexTest === index) {
            position = "activeSlide";
          }
          if (indexTest === index - 1 || (index === 0 && indexTest === people.length - 1)) {
            position = "lastslide";
          }
          return (
            <article className={position} key={id}>
             
             <div><h3>{name}</h3>
              
              <p>{testimonial}</p>
              <img src={image} alt="" /> </div>
               
            </article>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Slide