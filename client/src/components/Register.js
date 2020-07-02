import React from "react";
import './Register.css';
import RegisterNav from './RegisterNav.js';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
    return (
      <div id="registerWrapper">
        <div id="RegisterNav"><RegisterNav /></div>
        <div id="loginDiv">
          <h2>Register your details</h2>
          <form>
            <label htmlFor= "form_firstname">First name:</label>
            <input
                  type="text"
                  name="form_firstname"
              /> <br/><br/>
            <label htmlFor= "form_surname">Surname:</label>
            <input
                  type="text"
                  name="form_surname"
              /> <br/><br/>
            <label htmlFor= "form_email">Email address:</label>
            <input
                  type="email"
                  name="form_email"
              /> <br/><br/>
            <label htmlFor= "form_password">Create a password:</label>
            <input
                  type="password"
                  name="form_password"
              /><br/><br/>
            <div>Select your location: (dropdown menu)</div>
            <br/>
            <div>Are you:</div>
            <div>Offering assistance? (checkbox)</div>
            <div>Needing assistance? (checkbox)</div>
              <br/><br/>
            <div>Once you register your details, please log in</div><br/>
            <button id=""><a href="/">Register details</a></button> 
          </form>
  
        </div>
      </div>
    );
  }}
  
  export default Register;