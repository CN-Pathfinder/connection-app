import React from "react";
import './HomeNav.css';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <nav>
            <div>About app</div>
            <button id="navRegisterBtn"><Link to ="/register">Register Here</Link></button>
        </nav>
    )
};

export default HomeNav;