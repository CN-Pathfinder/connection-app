import React from "react";
import './RegisterNav.css';
import AboutModal from './AboutModal';

const RegisterNav = () => {
    return (
        <nav>
            <div><AboutModal/></div>
            <button id="navRegisterBtn"><a href="/">Return to home/Login</a></button>
        </nav>
    )
};

export default RegisterNav;