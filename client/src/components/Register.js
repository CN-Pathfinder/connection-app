import React from "react";
import './Register.css';
import RegisterNav from './RegisterNav.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
 
  state = {
    form_firstname: ' ',
    form_surname: ' ',
    form_email: ' ',
    form_password: ' ',
    form_passwordcheck: ' ',
    form_location: 'manchester',
    form_userstatus: 'help',

  }

  //remember these keys refer to the name of the html element/
  //here we are initialising the default state. Most are empty, except the location/user status

  formData = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  submitForm = async (e) => {
    e.preventDefault();
    //this prevents the form from being submitted  

    const config = {
      headers: {
        'Content-Type': 'application/json'

      }
    }

    //must send this with the request in order for express.json on server side to work

    const body = JSON.stringify({
      firstname: this.state.form_firstname,
      surname: this.state.form_surname,
      email: this.state.form_email,
      password: this.state.form_password,
      passwordcheck: this.state.form_passwordcheck,
      location: this.state.form_location,
      userstatus: this.state.form_userstatus
    })

    //updates the state values to be what the user has entered (and so can be passed to the server)

    const newreg = await axios.post('/register', body, config);
    // const newregd = await axios.get('/registered', body, config);

    // axios will send a post request to the server at the /registered endpoint with the body and config information 
    //axios sends a get request to the /register endpoint
    //axios request knows where to make the request because of the proxy we added in the package.json

  }

  render() {
    return (
      <div id="registerWrapper">
        <div id="RegisterNav"><RegisterNav /></div>
        <div id="loginDiv">

          <h2>Register your details</h2>

          <form onSubmit={this.submitForm}>

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

            <label htmlFor="form_passwordcheck">Enter password again:</label>
            <input type="password" name="form_passwordcheck" onChange={this.formData} />
            <br /><br />

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

          </form>

        </div>
      </div>
    );
  }
}

export default Register;