import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import { login, register } from '../services/auth';

const Plataforma = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const confirmPasswordRef = useRef();

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
                toast.success("Inicio de sesión exitoso");
                navigate("/programs"); // Cambia "/dashboard" por la ruta de tu elección
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
                toast.success("Registro exitoso");
                navigate("/programs"); // Cambia "/dashboard" por la ruta de tu elección
            } else {
                toast.error("Registro fallido");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="platform-container">
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
            <Footer />
        </div>
    );
};

export default Plataforma;
