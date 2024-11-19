export async function login(authDetail) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
    });

    if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
        return data; // Devuelve el usuario y el token
    } else {
        throw new Error("Credenciales inválidas. Verifica tu usuario o contraseña.");
    }
}

export async function register(userDetail) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Registro fallido. Intenta de nuevo.");
    }
}
