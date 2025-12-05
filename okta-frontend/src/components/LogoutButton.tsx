import { logout } from "../api";

export function LogoutButton() {
    const handleLogout = async () => {
        await logout();
        window.location.reload(); // simplest demo approach
    };

    return <button onClick={handleLogout}>Log out</button>;
}