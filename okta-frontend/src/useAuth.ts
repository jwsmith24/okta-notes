import { useEffect, useState } from "react";
import { fetchMe } from "./api";

type MeResponse = {
    authenticated: boolean;
    name?: string;
    email?: string;
};

export function useAuth() {
    const [user, setUser] = useState<MeResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const me = await fetchMe();
            setUser(me);
            setLoading(false);
        })();
    }, []);

    return { user, loading, setUser };
}