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
            <ul>
                <div classname="modaldiv"><AboutModal/></div>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                </li>
                </Link>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Login
                </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                </li>
                </Link>
            </ul>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <ul>
                <div classname="modaldiv"><AboutModal/></div>
                <Link to="/platform">
                    <li className="nav-item nav-link">
                        Platform
                </li>
                </Link>
                <button type="button" className="btn btn-link nav-item nav-link" onClick={onClickLogoutHandler}>Logout</button>
            </ul>

        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link to="/">
                <div className="navbar-brand">Placeholder</div>
            </Link> */}
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav mr-auto">
                    {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;