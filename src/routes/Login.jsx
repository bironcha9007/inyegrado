import React, { useState } from 'react';

// component import
import Footer from '../components/Footer';

const Plataforma = () => {
    const [isLogin, setIsLogin] = useState(true); // Controla si muestra el formulario de acceso o registro.

    const toggleForm = () => setIsLogin(prev => !prev);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Manejo del inicio de sesión aquí
        console.log("Login submitted");
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Manejo del registro aquí
        console.log("Registration submitted");
    };

    return (
        <div className="platform-container">
            <div className="auth-section">
                <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit} className="auth-form">
                        <label htmlFor="login-email">Correo Electrónico</label>
                        <input type="email" id="login-email" name="email" required placeholder="Ingresa tu correo" />

                        <label htmlFor="login-password">Contraseña</label>
                        <input type="password" id="login-password" name="password" required placeholder="Ingresa tu contraseña" />

                        <button type="submit">Acceder</button>
                    </form>
                ) : (
                    <form onSubmit={handleRegisterSubmit} className="auth-form">
                        <label htmlFor="register-name">Nombre Completo</label>
                        <input type="text" id="register-name" name="name" required placeholder="Ingresa tu nombre completo" />

                        <label htmlFor="register-email">Correo Electrónico</label>
                        <input type="email" id="register-email" name="email" required placeholder="Ingresa tu correo" />

                        <label htmlFor="register-password">Contraseña</label>
                        <input type="password" id="register-password" name="password" required placeholder="Crea una contraseña" />

                        <label htmlFor="register-password-confirm">Confirmar Contraseña</label>
                        <input type="password" id="register-password-confirm" name="passwordConfirm" required placeholder="Confirma tu contraseña" />

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
