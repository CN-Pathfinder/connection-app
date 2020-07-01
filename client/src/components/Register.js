import React from "react";
import './Register.css';
import RegisterNav from './RegisterNav.js';

class Register extends React.Component {
    render() {
    return (
      <div>
          <div className="wrapper">
          <div id="RegisterNav"><RegisterNav /></div>
          </div>
      </div>
    );
  }}
  
  export default Register;