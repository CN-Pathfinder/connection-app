import React from "react";
import './HomeNav.css';
import AboutModal from './AboutModal';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <nav>
            <div><AboutModal/></div>
            <button id="navRegisterBtn"><Link to ="/register">Register Here</Link></button>
        </nav>
    )
};

export default HomeNav;