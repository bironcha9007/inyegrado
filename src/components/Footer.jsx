import React from 'react';
import { useForm } from 'react-hook-form';
import { footerContact, footerContactNum, navLinks } from '../constants';

// import { Link } from 'react-router-dom'
import { FaAngleRight, FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const {
        register, 
        formState: {errors}, 
        handleSubmit
      } = useForm({
        mode: "all",
      });

  return (
    <footer>
        <div className="col first-col">
            <h2>Integrado Soacha</h2>
            <p>"Innovamos para transformar el futuro, aprendemos con tecnología."</p>
        </div>
        <div className="col second-col">
            <h2>Navega</h2>
            {navLinks.map(link => (
                <ul key={link.id}>
                    <li><FaAngleRight /> {link.id}</li>
                </ul>    
            ))}
        </div>
        <div className="col third-col">
            <h2>Contactanos</h2>
            {footerContact.map(contact => (
                <ul key={contact.id}>
                    <li>{contact.text}</li>
                </ul>
            ))}
            <div className="contNum">
                {footerContactNum.map(msg => (
                    <ul key={msg.id}>
                        <li><div className="icon">{msg.icon}</div>{msg.text}</li>
                    </ul>
                ))}
            </div>
        </div>
        <div className="col fourth-col">
            <h2>Escribenos</h2>
           
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <FaEnvelope />
                <input 
                    type="email" 
                    placeholder='Enter your email address'
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Email must be valid"
                        }
                      })}
                />
                <button 
                    type='submit' 
                    style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', }}>
                    <FaArrowRight />
                </button>
            </form>
            <p style={{color: "red",}}>{errors.email?.message}</p>
            <h2>Redes Sociales</h2>
            <div className="icons">
                
                <NavLink to='https://www.facebook.com/profile.php?id=100073669704664' style={{ color: '#fff' }}><FaFacebook /></NavLink>
                <NavLink to='https://www.youtube.com/channel/UCMlYP5e33T_sZhaBNc-s0iQ' style={{ color: '#fff' }}><FaYoutube /></NavLink>
                <NavLink to='https://www.instagram.com/timothyolude/' style={{ color: '#fff' }}><FaInstagram /></NavLink>
                <NavLink to='/twitter' style={{ color: '#fff' }}><FaTwitter /></NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer