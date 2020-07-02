import React from "react";
import './PlatformNav.css';

const PlatformNav = () => {
    return (
        <nav>
            <div>About app    |</div>
            <div>|   Messages</div>
            <button id="navRegisterBtn"><a href="/">Logout</a></button>
        </nav>
    )
};

export default PlatformNav;