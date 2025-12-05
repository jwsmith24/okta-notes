export async function fetchMe() {
    const res = await fetch("http://localhost:8080/api/me", {
        credentials: "include",
    });

    if (res.status === 401) {
        return { authenticated: false };
    }

    if (!res.ok) {
        throw new Error("Failed to fetch /api/me");
    }

    return res.json();
}

export async function fetchNotes() {
    const res = await fetch("http://localhost:8080/api/notes", {
        credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to fetch notes");
    return res.json();
}

export async function logout() {
    await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
    });
}