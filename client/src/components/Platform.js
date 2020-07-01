import React from "react";
import './Platform.css';
import PlatformNav from './PlaformNav.js';

class Platform extends React.Component {
    render() {
    return (
      <div>
          <div className="wrapper">
          <div id="PlatformNav"><PlatformNav /></div>
          </div>
      </div>
    );
  }}
  
  export default Platform;