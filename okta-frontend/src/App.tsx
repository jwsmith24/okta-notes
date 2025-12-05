import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

import { fetchNotes } from "./api";
import {LoginButton} from "./components/LoginButton.tsx";
import {LogoutButton} from "./components/LogoutButton.tsx";

type Note = { id: string; title: string; content: string };

function App() {
    const { user, loading } = useAuth();
    const [notes, setNotes] = useState<Note[]>([]);
    const [notesError, setNotesError] = useState<string | null>(null);

    useEffect(() => {
        if (!user || !user.authenticated) return;

        (async () => {
            try {
                const data = await fetchNotes();
                setNotes(data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setNotesError("Failed to load notes");
            }
        })();
    }, [user]);

    if (loading) return <div>Loading...</div>;

    if (!user || !user.authenticated) {
        return (
            <div style={{ padding: "2rem" }}>
                <h1>Okta Notes Demo</h1>
                <p>You are not logged in.</p>
                <LoginButton />
            </div>
        );
    }

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Okta Notes Demo</h1>
            <p>Welcome, {user.name ?? user.email}!</p>
            <LogoutButton />

            <h2>Your notes</h2>
            {notesError && <p>{notesError}</p>}
            <ul>
                {notes.map((n) => (
                    <li key={n.id}>
                        <strong>{n.title}</strong> – {n.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;