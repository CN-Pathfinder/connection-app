import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AuthService from '../Services/AuthService';
import './Profile.css';
import { set } from 'mongoose';
const Profile = props => {
  const [profile, setProfile] = useState({});
  //profile is current value of state, setProfile is state setter - if we call it with a new value the state will be re-set and the component re-rendered 
  const [location, setLocation] = useState({
    location: "",
    userstatus: "",
  });
  const [data, setData] = useState([]);
  //profile.firstname
  //profile.location
  //profile.surname
  //profile.userstatus
  const authContext = useContext(AuthContext);
  // const returnedUsers
  //componentDidMount
  useEffect(() => {
    AuthService.profileInformation(authContext.user).then(data => {
      setProfile(data.user);
    })
  }, [location])
  //[] stops it from running again and again, just runs once when the component is loaded. Can also put variables in here, and when they are updated, useEffect will run again
  useEffect( ()=>{
    AuthService.userLocation(authContext.user).then(data =>{
      setLocation(data.user)
    })
  },[])
  const selectData = e => {
    setLocation({ ...location, [e.target.name]: e.target.value })
    console.log(location)
  }
  const submitForm = e => {
    e.preventDefault()
    AuthService.userLocation(location).then(data => {
      console.log(data)//returns an array
      setData(data)
      //  if(isAuthenticated) {
      //      authContext.setLocation(location);
      //      authContext.setIsAuthenticated(isAuthenticated); 
      //  } 
      // const location = data;
      // const returnedUsers = location.map((returneduser, index) =>{
      //   return(<li key={index}>{returneduser}</li>)
      // }
    })
    const returnedUsers = location 
    console.log(returnedUsers)
    // const {isAuthenticated, location} = data;
    // if(isAuthenticated) {
    //     authContext.setLocation(location);
    //     authContext.setIsAuthenticated(isAuthenticated); 
  }
  const items = []
  for (const [index, locationinfo] of data.entries()) {
    items.push(
    <ul key={index}>
      <li>{locationinfo.firstname}</li>
      <li>{locationinfo.location}</li>
    </ul>
    )
  }
  return (
    <div>
      {/* {profile.firstname}
      {console.log(profile)   }    */}
      <div id="platformWrapper">
        <div id="locationdiv">
          <div id="locationtext">
            <p id="explanation">Choose your location from the drop down list to see registered users in that area.<br /></p>
            <p id="explanation">You can filter by if you are looking for help or if you require help.<br /></p>
            <p id="explanation">You can then look at a users profile to see more details about their circumstances.<br /></p>
            <p id="explanation">If you have found a user that may suit your needs then click the message button to get in contact with them.</p>
          </div>
          <br />
          <div className="dropdown-div">
            <form onSubmit={submitForm}>
              <div id="lucydiv">
                <div id="location-dropdown">
                  <label htmlFor="location">Location: </label>
                  <select onChange={selectData} name="location" id="location">
                    <option value="manchester">Manchester</option>
                    <option value="chester">Chester</option>
                    <option value="luton">Luton</option>
                    <option value="bradford">Bradford</option>
                  </select></div>
                <div id="locationcheckbox">
                  <label htmlFor="userstatus">I am looking for someone:  </label>
                  <select onChange={selectData} name="userstatus" id="userstatus">
                    <option value="offer">Offering help</option>
                    <option value="help">Requiring help</option>
                  </select>
                </div>
                {/* </div> */}
            </div> 
            <div id="search-button-div">
              <button className="search-button" type="submit"> Search </button>
            </div>
                </form>
              </div>
              <div className="profile-info-div">
                 {items}
               </div>
        </div>
        </div>
    </div> 
  )
}
export default Profile;