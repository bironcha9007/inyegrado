import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState,  useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { getUser, logout } from "../services/dataService";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch {
                setUser(null); // Si falla, se asegura de que el usuario no esté definido
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        logout();
        setUser(null);
        navigate("/login");
    };
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

            <div className="dropdown">
                {user ? (
                    <div className="user-info">
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <NavLink to="/plataforma" className="link">Login</NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
