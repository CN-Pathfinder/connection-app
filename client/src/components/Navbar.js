import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import AboutModal from './AboutModal';
import "./Navbar.css";
import Logo from '../images/logowhite.png'

const Navbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    const unauthenticatedNavBar = () => {
        return (
            <div className="navbardiv">
                <ul className="list">

                    <div id="modaldiv"><AboutModal /></div>
                    <Link to="/" className="navlink">
                        <li className="navlink"> Home</li>
                    </Link>
                    <Link to="/" className="navlink">
                        <li className="navlink">Login</li>
                    </Link>
                    <Link to="/register" className="navlink">
                        <li className="navlink"> Register </li>
                    </Link>
                </ul>
            </div>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <div className="authenticatednavbardiv">
                <ul className="authenticatedlist">
                    <Link to="/profile">
                        <li className="authenticatednavlink"> Home </li>
                    </Link>
                    <div classname="modaldiv"><AboutModal /></div>
                    <button type="button" className="logoutbutton" onClick={onClickLogoutHandler}>Logout</button>
                </ul>
            </div>
        )
    }
        return (

            <div className="navbardiv">
            <img src={Logo} id="nav-logo" /> 
                <nav className="listItems">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div>
                            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                        </div>
                    </div>
                 </nav>
            </div>
        )
    }

export default Navbar;