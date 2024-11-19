import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState} from "react";
import { NavLink} from "react-router-dom";
import Logo from "../assets/logo.png";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <nav className="navbar">
            {/* Logo con enlace al home */}
            <div className="logo">
                <NavLink to="/" onClick={() => setToggle(false)}>
                    <img 
                        src={Logo} 
                        style={{ height: "60px", width: "60px" }} 
                        alt="Integrado Logo" 
                    />
             
                </NavLink>
                <NavLink to="/" onClick={() => setToggle(false)}>
                    
                    <span>INTEGRADO SOACHA</span>
                </NavLink>
            </div>

            {/* Links de navegación */}
            <div className="nav-links">
                {navLinks.map(nav => (
                    <NavLink 
                        to={nav.link} 
                        key={nav.id} 
                        className="link" 
                        onClick={() => setToggle(false)} // Cierra el menú al hacer clic
                    >
                        {nav.id}
                    </NavLink>
                ))}
            </div>

            {/* Ícono del menú para dispositivos móviles */}
            <div className="menu-icons">
                <FaBars 
                    onClick={() => setToggle(prev => !prev)} 
                    style={{ cursor: "pointer" }}
                />
            </div>

            {/* Menú desplegable (para móviles) */}
            <div className={`${toggle ? "show" : "hidden"}`}>
                {navLinks.map(nav => (
                    <NavLink 
                        to={nav.link} 
                        key={nav.id} 
                        className="dropdown-link" 
                        onClick={() => setToggle(false)} // Cierra el menú desplegable al seleccionar un enlace
                    >
                        {nav.id}
                    </NavLink>
                ))}
            </div>

          
        </nav>
    );
};

export default Navbar;
