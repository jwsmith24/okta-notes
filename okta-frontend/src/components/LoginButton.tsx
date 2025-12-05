export function LoginButton() {
    const handleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/okta";
    };

    return <button onClick={handleLogin}>Log in with Okta</button>;
}