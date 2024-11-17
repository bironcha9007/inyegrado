export async function login(authDetail) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
    });
    if (response.ok) {
        return await response.json(); // Devuelve accessToken si es exitoso
    } else {
        throw new Error("Credenciales inválidas");
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
        return await response.json(); // Devuelve accessToken si es exitoso
    } else {
        throw new Error("Registro fallido");
    }
}
