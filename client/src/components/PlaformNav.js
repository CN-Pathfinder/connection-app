import React from "react";
import './PlatformNav.css';
import AboutModal from './AboutModal';

const PlatformNav = () => {
    return (
        <nav>
            <div><AboutModal/>   |</div>
            <div>|   Messages</div>
            <button id="navRegisterBtn"><a href="/">Logout</a></button>
        </nav>
    )
};

export default PlatformNav;