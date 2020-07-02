import React from "react";
import './Home.css';
import HomeNav from './HomeNav.js';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    render() {
    return (
      <div id="homeWrapper">
          <div id="HomeNavDiv">
            <HomeNav />
          </div>
          <div id="loginDiv">
            <div id="appName">Help people during covid app!</div>
            <h2>Log in to your account</h2>
            <form>
            <label htmlFor= "form_email">Email address:</label>
              <input
                  type="email"
                  name="form_email"
              />
              <br/> <br/>
              <label htmlFor= "form_password">Password:</label>
              <input
                  type="password"
                  name="form_password"
              />
              <br/><br/>
              <button type="submit"><Link to ="/platform">Login</Link></button>
            </form><br/>
            <div id="hereToRegisterDiv">
              Need an account?<br/><br/>
              <button><Link to ="/register">Register here</Link></button>
            </div>
          </div>
      </div>
    );
  }}
  
  export default Home;