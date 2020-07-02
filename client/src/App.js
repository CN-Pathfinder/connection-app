import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register.js';
import Platform from './components/Platform.js';

class App extends Component {
    render() {
    return (
      <div id="wholePageWrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/platform" component = {Platform} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }};

  export default App;
