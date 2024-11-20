import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState} from "react";
import { NavLink} from "react-router-dom";
import Logo from "../assets/logo.png";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuToggle = (id) => {
    setActiveSubMenu((prev) => (prev === id ? null : id));
  };
    return (
        <nav className="navbar">
            {/* Logo con enlace al home */}
            <div className="logo">
                <NavLink to="/" onClick={() => setToggle(false)}>
                    <img 
                        src={Logo} 
                        style={{ height: "50px", width: "50px" }} 
                        alt="Integrado Logo" 
                    />
             
                </NavLink>
                <NavLink to="/" onClick={() => setToggle(false)}>
                    
                    <span>INTEGRADO SOACHA</span>
                </NavLink>
            </div>

                  {/* Links de navegación */}
      <div className="nav-links">
        {navLinks.map((nav) => (
          <div key={nav.id} className="nav-item">
            <NavLink to={nav.link} className="link" onClick={() => setToggle(false)}>
              {nav.id}
            </NavLink>

            {/* Mostrar submenús si existen */}
            {nav.subLinks && (
              <div
                className={`submenu ${activeSubMenu === nav.id ? "show" : ""}`}
                onClick={() => handleSubMenuToggle(nav.id)}
              >
                {nav.subLinks.map((subLink) => (
                  <NavLink
                    to={subLink.link}
                    key={subLink.id}
                    className="sublink"
                    onClick={() => {
                      setToggle(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    {subLink.id}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
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
