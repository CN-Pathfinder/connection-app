import React from "react";
import './HomeNav.css';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <nav>
            <ul>
                <button><Link to ="#Register">Register Here</Link></button>
            </ul>
        </nav>
    )
};

export default HomeNav;