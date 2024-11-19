function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getUser() {
    const browserData = getSession();

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`,
        },
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/600/users/${browserData.cbid}`, requestOptions);
    if (!response.ok) {
        throw new Error("No se pudo obtener la información del usuario.");
    }

    const data = await response.json();
    return data;
}

export async function logout() {
    sessionStorage.clear();
}
