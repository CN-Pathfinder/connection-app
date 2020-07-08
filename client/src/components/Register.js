import React from "react";
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';

class Register extends React.Component {

  state = {
    form_firstname: ' ',
    form_surname: ' ',
    form_email: ' ',
    form_password: ' ',
    passwordcheck: ' ',
    form_location: 'manchester',
    form_userstatus: 'help',
    passwordmessage: '',
    passwordmatch: false,
    formmessage: '',
    message: '',
  }

  //remember these keys refer to the name of the html element/
  //here we are initialising the default state. Most are empty, except the location/user status



  formData = (e) => {
    console.log('formData method working!')

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      form_firstname: ' ',
      form_surname: ' ',
      form_email: ' ',
      form_password: ' ',
      passwordcheck: ' ',
      form_location: 'manchester',
      form_userstatus: 'help'
    })
  }

  // passcheckHandler = (e) => {
  //   console.log('passCheckHandler method working!')
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log('passCheckHandler')
  //   console.log (this.state)
  //   if (this.state.form_password !== this.state.passwordcheck) {
  //     this.setState({
  //       ...this.state,
  //       passwordmessage: 'Passwords do not match',
  //       passwordmatch: false
  //     })
  //   } else {
  //     this.setState({
  //       ...this.state,
  //       passwordmessage: 'Passwords match',
  //       passwordmatch: true

  //     })
  //   }
  // }


  submitForm = async (e) => {
    e.preventDefault();
    const user = {
      firstname: this.state.form_firstname,
      surname: this.state.form_surname,
      email: this.state.form_email,
      password: this.state.form_password,
      location: this.state.form_location,
      userstatus: this.state.form_userstatus
    }
    const { form_firstname,
      form_surname,
      form_email,
      form_password,
      form_location,
      form_userstatus } = this.state

    // if ( form_firstname == '' && form_surname == ''&& form_email == ''&& form_password == ''){
    //   this.setState({
    //     ...this.state,
    //     formmessage: 'Please complete all fields'
    // })}
    // else{
    AuthService.register(user).then(data => {
      const { message } = data;
      this.setState({ ...this.state, message });
      this.resetForm();
      if (!message.msgError) {
        setTimeout(() => {
          this.props.history.push('/home');
        }, 2000)
      }
    });
  //}
}
  //must send this with the request in order for express.json on server side to work



  // if(!firstname|| !surname || !email || !password ||!passwordcheck ||!location ||!userstatus){
  //   return res.status(400).json({
  //       message: 'Please complete all fields'
  // })
  // } 

  render() {
    return (
      <div id="registerWrapper">
      
          <div className="register-container">
          <div id="loginDiv">

          <h2 id="register-title">Register your details</h2>
          <form className="register-form" onSubmit={this.submitForm}>

            <label htmlFor="form_firstname">First name:</label>
            <input name="form_firstname" onChange={this.formData} />
            <br /><br />

            {/* remember onChange runs the formData method */}

            <label htmlFor="form_surname">Surname:</label>
            <input name="form_surname" onChange={this.formData} />
            <br /><br />

            <label htmlFor="form_email">Email address:</label>
            <input type="email" name="form_email" onChange={this.formData} />
            <br /><br />

            <label htmlFor="form_password">Create a password:</label>
            <input type="password" name="form_password" onChange={this.formData} />
            <br /><br />

            {/* <label htmlFor= "passwordcheck">Enter password again:</label>
            <input type="password" name="passwordcheck" onChange={this.passcheckHandler} />
            <p>{this.state.passwordmessage}</p>
            <br /><br /> */}

            {/* <label htmlFor ="form_phone"> Phone Number: </label>
            <input type="tel" name="form_phone"/>  */}

            {/* <label>Phone Number:<input type="tel" name="form_phone" onChange={this.formData} /></label> */}

            {/* can do it like this as well? then don't need htmlfor and other things */}

            <div>Select your location:
            <div id="locationdropdown">
                <label htmlFor="location">Location:</label>
                <select name="form_location" id="location" onChange={this.formData}>
                  <option value="manchester">Manchester</option>
                  <option value="chester">Chester</option>
                  <option value="luton">Luton</option>
                  <option value="bradford">Bradford</option>
                </select></div>
            </div>
            <br />
            <div>Are you:</div>

            <label htmlFor="userstatus">Status:</label>
            <select name="form_userstatus" id="userstatus" onChange={this.formData}>
              <option value="help">I require help</option>
              <option value="offer">I am offering help</option>
            </select>
            <br /><br />

            <div>Once you register your details, please log in</div><br />
            <button id="submit-button" type="submit">Register details</button>
            {/* <p>{this.state.formmessage}</p> */}

          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Register;