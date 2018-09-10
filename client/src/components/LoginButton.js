import React from "react";

const LoginButton = ({ success, statusCode, handleLogin, handleLogout }) => {
    if (success || statusCode === 200) {
        return (
            <button id="login-button" onClick={handleLogout}>Logout</button>
        )
    }

    return (
        <button id="login-button" onClick={handleLogin}>Login</button>
    )
}

export default LoginButton;