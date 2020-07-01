import React from "react";
// import HomeNav from './components/HomeNav.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Platform from './components/Platform.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
    return (
      <BrowserRouter>
          <div className="pagewrapper">
          <div id="Home"><Home/></div>
          <div id="Register"><Register/></div>
          <div id="Register"><Platform/></div>
          </div>
          </BrowserRouter>
    );
  }};

  export default App;
