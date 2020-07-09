import React, { useState, useContext } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import background from '../images/volunteer.jpg';
import { FaUser } from 'react-icons/fa';


const Home = props => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    message: ""
  });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const formData = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitForm = e => {
    e.preventDefault();
    AuthService.login(user).then(data => {
      //console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push('/profile');
      }
      else
        setMessage(message);
    });
  }


  // class Home extends React.Component {
  //   state = {
  //     form_email: "",
  //     form_password: "",
  //     message: "",
  //   };

  //   formData = (e) => {
  //     this.setState({
  //       ...this.state,
  //       [e.target.name]: e.target.value,
  //     });
  //   };


  // submitForm = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     email: this.state.form_email,
  //     password: this.state.form_password,
  //   }
  //   AuthService.login(user).then(data =>{
  //     const { isAuthenticated,user,message } = data;
  //     if(isAuthenticated){
  //       AuthContext.this.formData();
  //       AuthContext.setIsAuthenticated(isAuthenticated);
  //       this.props.history.push('/platform');
  //     }
  //     else
  //       this.setState({...this.state, message})
  //   })
  // };

  // render() {
  return (
    <div className="banana">
      <div id="homeWrapper" >
        
        <div id="login-div">

          <div id="app-name">Vol-Connect - help others and request help</div>

          </div> 

         <div className="container-home">
         <div id="here-to-register">
          Need an account?
            <br />
          <br />
          <button className="submit-button-register">
            <Link to="/register">Register here</Link>
          </button>
        </div>
          <div className="form-wrapper">
            <h2 id="login-title">Log in to your account</h2>
            <br /> <br />
            <form onSubmit={submitForm}>
            <div className="form-label-div">
              <label htmlFor="email" className="login-form-labels"> <FaUser/>  Email address:</label>
             
              
              <input
                type="email"
                onChange={formData}
                name="email"
                placeholder= "email"  />
               
            
                
              <br /> <br />
              <label htmlFor="password" className="login-form-labels">Password:</label>
              <input
                type="password"
                onChange={formData}
                name="password"
                placeholder=" Enter Password!"
              />
              </div>
              <br />
              <br />
              <button className="submit-button-login" type="submit">Login</button>
            </form>
          </div>
        
        {message ? <p>{message}</p> : null}

        <br /> 

       </div>
        </div>

      
    </div>
  );
}


export default Home;

