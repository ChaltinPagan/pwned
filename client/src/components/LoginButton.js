import React from "react";

const LoginButton = ({ success, handleLogin, handleLogout }) => {
    if (success) {
        return (
            <button id="login-button" onClick={handleLogout}>Logout</button>
        )
    }

    return (
        <button id="login-button" onClick={handleLogin}>Login</button>
    )
}

export default LoginButton;