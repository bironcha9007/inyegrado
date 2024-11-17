import React from 'react';
import { useForm } from 'react-hook-form';
import { footerContact, footerContactNum, footerLinks } from '../constants';
import { FaAngleRight, FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'all',
    });

    return (
        <footer>
            <div className="col first-col">
                <h2>Integrado Soacha</h2>
                <p>"Innovamos para transformar el futuro, aprendemos con tecnología."</p>
            </div>
            <div className="col second-col">
                <h2>Navega</h2>
                <ul>
                    {footerLinks.map(link => (
                        <li key={link.id}>
                            <NavLink 
                                to={`/${link.link}`} 
                                style={{ color: '#fff' }}
                                activeStyle={{ textDecoration: 'underline' }}
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
                <h2>Escríbenos</h2>
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Email must be valid',
                            },
                        })}
                    />
                    <button
                        type="submit"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                    >
                        <FaArrowRight />
                    </button>
                </form>
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
                <h2>Redes Sociales</h2>
                <div className="icons">
                    <a
                        href="https://www.facebook.com/share/18GcPSwrr4"
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
                        href="https://twitter.com"
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
