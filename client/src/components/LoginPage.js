import React, { Component } from 'react';
import axios from 'axios';
import LoginButton from './LoginButton';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            email: "",
            submit: false,
            success: false
        }
    }

    handleLoginButton = () => {
        let modal = document.getElementById("login-form-modal");
        modal.style.display = "initial";
    }

    handleCloseModal = (e) => {
        let modal = document.getElementById("login-form-modal");
        modal.style.display = "none";
    }

    showRegisterForm = () => {
        let loginForm = document.getElementById("login-form");
        let registerForm = document.getElementById("register-form");
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }

    showSignUpForm = () => {
        let loginForm = document.getElementById("login-form");
        let registerForm = document.getElementById("register-form");
        registerForm.style.display = "none";
        loginForm.style.display = "flex"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegistration = (e) => {
        e.preventDefault();
        const { firstName, email } = this.state;

        axios.post('/users/new', {
            firstName: firstName,
            email: email.toLowerCase()
        })
            .then(res => {
                this.handleCloseModal();
                if (res.status === 200) {
                    this.setState({ submit: true, success: true });
                }
            })
            .catch(err => {
                console.log("Error: Email already registered.");
                this.setState({ submit: true, success: false });
            });
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { email } = this.state;

        axios.post('/users/login', {
            email: email.toLowerCase()
        })
            .then(res => {
                if (res.status === 200) {
                    this.handleCloseModal();
                    this.setState({ submit: true, success: true });
                } else {
                    this.setState({ submit: true, success: false });
                }
            })
            .catch(err => {
                console.log("error:", "Email not not file. User does not exist.");
                this.setState({ submit: true, success: false });
            });
    }

    handleLogout = (e) => {
        e.preventDefault();

        this.setState({
            firstName: "",
            email: "",
            submit: false,
            success: false
        })
    }

    render() {
        const { firstName, email, submit, success } = this.state;
        return (
            <section id="login-page">
                <section id="login-button-block">
                    <p id="user">{success ? `Hello, ${firstName}` : ""}</p>
                    <LoginButton success={success} handleLogin={this.handleLoginButton} handleLogout={this.handleLogout} />
                </section>

                <section id="login-form-modal">
                    <form className="modal-form" id="login-form">
                        <i className="fas fa-times" id="close-modal" onClick={this.handleCloseModal}></i>
                        <h3>Login</h3>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.handleChange} />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={this.handleChange} />

                        <button id="submitLogin" onClick={this.handleLogin} >Submit</button>

                        <p id="register-link" onClick={this.showRegisterForm}>Create an Account</p>

                        <p id="login-error">{!submit && !success ? "" : "Email not on file."}</p>
                    </form>

                    <form className="modal-form" id="register-form">
                        <i className="fas fa-times" id="close-modal" onClick={this.handleCloseModal}></i>
                        <h3>Register</h3>
                        <p>By registering for an acccount, you will be subscribed to our newsletters.</p>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.handleChange} />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email}onChange={this.handleChange} />

                        <button id="submitRegistration" onClick={this.handleRegistration}>Submit</button>

                        <p id="login-link" onClick={this.showSignUpForm}>I have an account</p>

                        <p id="register-error">{!submit && !success ? "" : "Email already registered."}</p>
                    </form>
                </section>

            </section>
        )
    }
}

export default LoginPage;