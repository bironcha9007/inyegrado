import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return ( 
        <nav className="navbar">
              <img src={Logo} style={{ height: '60px', width: '60px' }} alt="Integrado Logo" />
            <div className="nav-links">
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id} className="link">{nav.id}</NavLink>
                ))}
            </div>
            <div className="menu-icons">
                <FaBars 
                    onClick={() => {
                        setToggle(prev => !prev);
                    }}
                />
            </div>
            <div className={`${toggle ? 'show' : 'hidden'}`}>
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id}>{nav.id}</NavLink>
                ))}
            </div>
        </nav>
    );
}
 
export default Navbar;