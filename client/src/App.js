import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register.js';
import Platform from './components/Platform.js';
import Navbar from './components/Navbar';


class App extends Component {
    render() {
    return (
      <div id="wholePageWrapper">
        <Router>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path = "/register" component = {Register} />
          <Route exact path = "/platform" component = {Platform} />
        </Router>
      </div>
    );
  }};

  export default App;
