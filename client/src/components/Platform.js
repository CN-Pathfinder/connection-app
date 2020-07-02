import React from "react";
import './Platform.css';
import PlatformNav from './PlaformNav.js';

class Platform extends React.Component {
    render() {
    return (
      <div>
          <div id="platformWrapper">
            <div id="PlatformNav"><PlatformNav /></div>
            <div id="platformText">
              Use this page to search for people, filtering by location and/or helper status. Once filtered, click on one of the displayed users to see their profile (ie. name, location, if they're looking for help or offering it, a small blurb about what they're looking for), click to send them a message.
            </div>



          </div>
      </div>
    );
  }}
  
  export default Platform;