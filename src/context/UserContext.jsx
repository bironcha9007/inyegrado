import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado global del usuario
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya está logueado al cargar la app
        const token = sessionStorage.getItem("token");
        const userData = sessionStorage.getItem("user");
        if (token && userData) {
            setUser(JSON.parse(userData));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData, token) => {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        sessionStorage.clear();
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook para acceder al contexto
export const useUser = () => useContext(UserContext);
