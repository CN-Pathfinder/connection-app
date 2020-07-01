import React from "react";
import './Home.css';
import HomeNav from './HomeNav.js';


class Home extends React.Component {
    render() {
    return (
      <div>
          <div className="wrapper">
          <div id="HomeNav"><HomeNav /></div>
          </div>
      </div>
    // <p>Homescreen</p>
    );
  }}
  
  export default Home;