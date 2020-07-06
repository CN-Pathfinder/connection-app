import React from "react";
import "./Home.css";
// import HomeNav from './HomeNav.js';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

class Home extends React.Component {
  state = {
    form_email: "",
    form_password: "",
    message: "",
  };

  formData = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  submitForm = async (e) => {
    e.preventDefault();
    const user = {
      email: this.state.form_email,
      password: this.state.form_password,
    }
    AuthService.login(user).then(data =>{
      const { isAuthenticated,user,message } = data;
      if(isAuthenticated){
        AuthContext.setUser(user);
        AuthContext.setIsAuthenticated(isAuthenticated);
        this.props.history.push('/platform');
      }
      else
        this.setState({...this.state, message})
    })
  };

  render() {
    return (
      <div id="homeWrapper">
        {/* <div id="HomeNavDiv">
          <HomeNav />
        </div> */}

        <div id="loginDiv">
          <div id="appName">Help people during covid app!</div>
          <h2>Log in to your account</h2>

          <form onSubmit={this.submitForm}>
            <label htmlFor="form_email">Email address:</label>
            <input
              type="email"
              onChange={this.formData}
              name="form_email"
              placeholder="Enter Email"
            />
            <br /> <br />
            <label htmlFor="form_password">Password:</label>
            <input
              type="password"
              onChange={this.formData}
              name="form_password"
              placeholder="Enter Password!"
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>

          <br />

          <div id="hereToRegisterDiv">
            Need an account?
            <br />
            <br />
            <button>
              <Link to="/register">Register here</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
