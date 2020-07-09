import React, {useState,useContext,useEffect} from 'react';
import { AuthContext } from '../Context/AuthContext';
import AuthService from '../Services/AuthService';
import './Profile.css';

const Profile = props => {
  const [profile,setProfile] = useState({});
  //profile is current value of state, setProfile is state setter - if we call it with a new value the state will be re-set and the component re-rendered 
  const [location, setLocation] = useState({
      location: "", 
  });

  //profile.firstname
  //profile.location
  //profile.surname
  //profile.userstatus

  const authContext = useContext(AuthContext);


  //componentDidMount
  useEffect( ()=>{
         AuthService.profileInformation(authContext.user).then(data =>{
      setProfile(data.user);
    })
  }, [])
  //[] stops it from running again and again, just runs once when the component is loaded. Can also put variables in here, and when they are updated, useEffect will run again

  const selectData = e => {
    setLocation({...location, [e.target.name]: e.target.value })
  }
  
  const submitForm = e =>{
    e.preventDefault();
    AuthService.usersLocations(location).then(data=> {
    const {isAuthenticated, location} = data;
    if(isAuthenticated) {
        authContext.setLocation(location);
        authContext.setIsAuthenticated(isAuthenticated); 
    }

  })

} 
  
    return (

      <div>
      {/* {profile.firstname}
      {console.log(profile)   }    */}
          <div id="platformWrapper">
          <ul>
          <li> Name: {profile.firstname} {profile.surname}</li>
          <li> location: {profile.location}</li>
          <li> Status: {profile.userstatus}</li>
          </ul>

            <div id="locationdiv">

              <div id="locationtext">
                Choose your location to see registered users in that area.<br/>
                You can filter by if you are looking for help or if you require help.<br/>
                You can then look at a users profile to see more details about their circumstances.<br/>
                If you have found a user that may suit your needs then click the message button to get in contact with them.
                </div>

                <br/> 
              {/* <form onSubmit={submitForm}> */}
              <div id="location-dropdown">
              
                <label htmlFor="location">Location:</label>
                <select onChange={selectData} name="location" id="location">
                  <option value="manchester">Manchester</option>
                  <option value="chester">Chester</option>
                  <option value="luton">Luton</option>
                  <option value="bradford">Bradford</option>
                </select></div> 

                {/* </form>  */}


                <div id="locationcheckbox">
                <form>
                  <div>Please choose one or both from the options below:</div><br/>
              
                  <input type="checkbox" id="helpee" name="helpee" value="helpee"></input>
                    <label htmlFor="helpee">I require help</label><br/>
                  <input type="checkbox" id="helper" name="helper" value="helper"></input>
                    <label htmlFor="helper">I am offering help</label>
                    <button onSubmit={submitForm}type="submit"> Search </button>
                  
                </form>
              
              </div>
            </div>

            </div>
          
      </div>
    )
  
    }
  export default Profile;