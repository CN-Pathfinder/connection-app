import React from "react";
import './Platform.css';
import PlatformNav from './PlaformNav.js';

class Platform extends React.Component {
    render() {
    return (
      <div>
          <div id="platformWrapper">

            <div id="PlatformNav"><PlatformNav /></div>

            <div id="locationdiv">

              <div id="locationtext">
                Choose your location to see registered users in that area.<br/>
                You can filter by if you are looking for help or if you require help.<br/>
                You can then look at a users profile to see more details about their circumstances.<br/>
                If you have found a user that may suit your needs then click the message button to get in contact with them.
                </div>

                <br/> 

              <div id="locationdropdown">
                <label for="location">Location:</label>
                <select name="location" id="location">
                  <option value="manchester">Manchester</option>
                  <option value="chester">Chester</option>
                  <option value="luton">Luton</option>
                  <option value="bradford">Bradford</option>
                </select></div> 

                <div id="locationcheckbox">
                <form>
                  <div>Please choose one or both from the options below:</div><br/>
              
                  <input type="checkbox" id="helpee" name="helpee" value="helpee"></input>
                    <label for="helpee">I require help</label><br/>
                  <input type="checkbox" id="helper" name="helper" value="helper"></input>
                    <label for="helper">I am offering help</label>
                  
                </form>
                </div>
              
            </div>
                


          </div>
      </div>
    );
  }}
  
  export default Platform;