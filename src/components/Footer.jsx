import React from 'react';

import { footerContact, footerContactNum, footerLinks } from '../constants';
import { FaAngleRight, FaFacebook, FaInstagram, FaTiktok,  FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
const Footer = () => {


    // Función para desplazarse al inicio de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  
    return (
        <footer>
            <div className="col first-col"><h2>Integrado Soacha</h2>
            <div className="logo">
                
                <img 
                    src={Logo} 
                    style={{ height: "100px", width: "100px" }} 
                    alt="Integrado Logo" 
                />
         
    
        </div>
                
                <p>"Innovamos para transformar el futuro, aprendemos con tecnología."</p>
            </div>
            <div className="col second-col">
                <h2>Navega</h2>
                <ul>
                    {footerLinks.map(link => (
                        <li key={link.id}>
                            <NavLink
                                to={`/${link.link}`}
                                onClick={scrollToTop}
                                className={({ isActive }) => (isActive ? 'active-link' : '')} // Usa className dinámico
                                style={{ color: '#fff' }}
                            >
                                <FaAngleRight /> {link.id}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col third-col">
                <h2>Contáctanos</h2>
                {footerContact.map(contact => (
                    <ul key={contact.id}>
                        <li>{contact.text}</li>
                    </ul>
                ))}
                <div className="contNum">
                    {footerContactNum.map(msg => (
                        <ul key={msg.id}>
                            <li>
                                <div className="icon">{msg.icon}</div>
                                {msg.text}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="col fourth-col">
                
                <h2>Siguenos</h2>
                
              
        
                <div className="icons">
                    <a
                        href="https://www.facebook.com/share/18GcPSwrr4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff' }}
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.youtube.com/results?search_query=integrado+de+soacha"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff' }}
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.instagram.com/explore/locations/286456354/institucion-educativa-integrado-de-soacha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff' }}
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.tiktok.com/discover/integrado-de-soacha"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff' }}
                    >
                        <FaTiktok />
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
