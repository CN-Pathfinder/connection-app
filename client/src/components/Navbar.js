import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import AboutModal from './AboutModal';
import "./Navbar.css";

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
                
                <div classname="modaldiv"><AboutModal/></div>
                <Link to="/">
                    <li className="navlink">
                        Home
                </li>
                </Link>
                <Link to="/">
                    <li className="navlink">
                        Login
                </li>
                </Link>
                <Link to="/register">
                    <li className="navlink">
                        Register
                </li>
                </Link>
                    
            </ul>
            </div>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <div className="navbardiv">
            <ul className="list">
                <div classname="modaldiv"><AboutModal/></div>
                <Link to="/platform">
                    <li className="navlink">
                        Platform
                </li>
                </Link>
                <button type="button" className="btn btn-link nav-item nav-link" onClick={onClickLogoutHandler}>Logout</button>
            </ul>
            </div>
        )
    }
    return (
        
        <div className="navbardiv">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav mr-auto">
                    {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;