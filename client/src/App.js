// import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import Register from './components/Register.js';
// import Platform from './components/Profile.js';
// import Navbar from './components/Navbar';
// import Messages from './components/Messages';


// class App extends Component {
//     render() {
//     return (
//       <div id="wholePageWrapper">
//         <Router>
//           <Navbar/>
//           <Route exact path="/" component={Home}/>
//           <Route exact path = "/register" component = {Register} />
//           <Route exact path = "/profile" component = {Platform} />
//           <Route exact path = "/messages" component = {Messages} />
//         </Router>
//       </div>
//     );
//   }};

//   export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import Messages from './components/Messages';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <PrivateRoute exact path="/profile" user = {["user"]} component={Profile}/>
      <PrivateRoute exact path="/messages" user = {["user"]} component={Messages}/>
    </Router>
  );
}

export default App;
