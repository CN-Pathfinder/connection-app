import React, {useState,useContext} from 'react';
import "./Home.css";
// import HomeNav from './HomeNav.js';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Home = props=>{
  const [user,setUser] = useState({
    email: "", 
    password : "", 
    message:""
  });
  const [message,setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const formData = e =>{
      setUser({...user,[e.target.name] : e.target.value});
  }

  const submitForm = e =>{
    e.preventDefault();
    AuthService.login(user).then(data=>{
        console.log(data);
        const { isAuthenticated,user,message} = data;
        if(isAuthenticated){
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            props.history.push('/platform');
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
      <div id="homeWrapper">
        {/* <div id="HomeNavDiv">
          <HomeNav />
        </div> */}

        <div id="loginDiv">
          <div id="appName">Help people during covid app!</div>
          <h2>Log in to your account</h2>

          <form onSubmit={submitForm}>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              onChange={formData}
              name="email"
              placeholder="Enter Email"
            />
            <br /> <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={formData}
              name="password"
              placeholder="Enter Password!"
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>

          {message ? <p>{message}</p> : null}

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
//}

export default Home;

