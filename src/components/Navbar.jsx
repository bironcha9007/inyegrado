import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null); // Referencia al menú móvil

  const handleSubMenuToggle = (id) => {
    setActiveSubMenu((prev) => (prev === id ? null : id));
  };

  // Cierra el menú móvil si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false); // Cierra el menú
        setActiveSubMenu(null); // Resetea submenús activos
      }
    };

    // Agregar el event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el event listener al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={() => setToggle(false)}>
          <img
            src={Logo}
            style={{ height: "50px", width: "50px", marginBottom:"-5px" }}
            alt="Integrado Logo"
          />
        </NavLink>
        <NavLink to="/" onClick={() => setToggle(false)}>
          <span>INTEGRADO SOACHA</span>
        </NavLink>
      </div>

      {/* Links de navegación para escritorio */}
      <div className="nav-links">
        {navLinks.map((nav) => (
          <div key={nav.id} className="nav-item">
            <NavLink to={nav.link} className="link" onClick={() => setToggle(false)}>
              {nav.id}
            </NavLink>
            {nav.subLinks && (
              <div className="submenu">
                {nav.subLinks.map((subLink) => (
                  <NavLink
                    to={subLink.link}
                    key={subLink.id}
                    className="sublink"
                    onClick={() => setToggle(false)}
                  >
                    {subLink.id}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Menú desplegable para móviles */}
      <div className="menu-icons">
        <FaBars onClick={() => setToggle((prev) => !prev)} />
      </div>

      {toggle && (
        <div className="mobile-menu" ref={menuRef}>
          {navLinks.map((nav) => (
            <div key={nav.id} className="mobile-nav-item">
              <NavLink
                to={nav.link}
                className="dropdown-link"
                onClick={() => setToggle(false)}
              >
                {nav.id}
              </NavLink>
              {nav.subLinks && (
                <>
                  <span
                    className="mobile-submenu-toggle"
                    onClick={() => handleSubMenuToggle(nav.id)}
                  >
                    {activeSubMenu === nav.id ? "-" : "+"}
                  </span>
                  {activeSubMenu === nav.id && (
                    <div className="mobile-submenu">
                      {nav.subLinks.map((subLink) => (
                        <NavLink
                          to={subLink.link}
                          key={subLink.id}
                          className="mobile-sublink"
                          onClick={() => setToggle(false)}
                        >
                          {subLink.id}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
