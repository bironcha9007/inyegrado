import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { login, register } from "../services/auth";
import GSLRAccess from '../components/GSLRAccess';
const Plataforma = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // Almacena los datos del usuario
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const confirmPasswordRef = useRef();

    // Verifica si el usuario ya inició sesión
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const userData = sessionStorage.getItem("user");
        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    const toggleForm = () => setIsLogin((prev) => !prev);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const authDetail = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const data = await login(authDetail);
            if (data.accessToken) {
                // Guarda la sesión
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("user", JSON.stringify({ email: authDetail.email }));
                setIsLoggedIn(true);
                setUser({ email: authDetail.email });
                toast.success("Inicio de sesión exitoso");
                navigate("/programs"); // Cambia "/programs" por la ruta de tu elección
            } else {
                toast.error("Credenciales inválidas");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            toast.error("Las contraseñas no coinciden");
            return;
        }

        const userDetail = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const data = await register(userDetail);
            if (data.accessToken) {
                // Guarda la sesión
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("user", JSON.stringify({ email: userDetail.email, name: userDetail.name }));
                setIsLoggedIn(true);
                setUser({ email: userDetail.email, name: userDetail.name });
                toast.success("Registro exitoso");
                navigate("/programs"); // Cambia "/programs" por la ruta de tu elección
            } else {
                toast.error("Registro fallido");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        setUser(null);
        toast.success("Sesión cerrada");
    };

    return (

        <div className="platform-container">
            <div className="plat">
            {isLoggedIn ? (
                <div className="logged-in-section">
                    <div className="form1">
                    <h2>Sesión Iniciada</h2>
                    <p>Bienvenido, {user?.name || "Usuario"}</p>
                    <p>Correo: {user?.email}</p>
                    <button onClick={handleLogout}>Cerrar Sesión</button></div>
                </div>
            ) : (
                <div className="auth-section">
                    
                    <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit} className="auth-form">
                            <label htmlFor="login-email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="login-email"
                                ref={emailRef}
                                required
                                placeholder="Ingresa tu correo"
                            />
                            <label htmlFor="login-password">Contraseña</label>
                            <input
                                type="password"
                                id="login-password"
                                ref={passwordRef}
                                required
                                placeholder="Ingresa tu contraseña"
                            />
                            <button type="submit">Acceder</button>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className="auth-form">
                            <label htmlFor="register-name">Nombre Completo</label>
                            <input
                                type="text"
                                id="register-name"
                                ref={nameRef}
                                required
                                placeholder="Ingresa tu nombre completo"
                            />
                            <label htmlFor="register-email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="register-email"
                                ref={emailRef}
                                required
                                placeholder="Ingresa tu correo"
                            />
                            <label htmlFor="register-password">Contraseña</label>
                            <input
                                type="password"
                                id="register-password"
                                ref={passwordRef}
                                required
                                placeholder="Crea una contraseña"
                            />
                            <label htmlFor="register-password-confirm">Confirmar Contraseña</label>
                            <input
                                type="password"
                                id="register-password-confirm"
                                ref={confirmPasswordRef}
                                required
                                placeholder="Confirma tu contraseña"
                            />
                            <button type="submit">Registrarse</button>
                        </form>
                    )}
                    <p>
                        {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
                        <button onClick={toggleForm} className="toggle-button">
                            {isLogin ? "Regístrate" : "Inicia Sesión"}
                        </button>
                    </p>
                </div>
            )}
            <div>

            </div>
            <GSLRAccess />
            </div>
            <Footer />
        </div>
    );
};

export default Plataforma;
