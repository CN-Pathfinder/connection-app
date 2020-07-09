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
    console.log(location)
  }
  
  const submitForm = e =>{
    e.preventDefault();
    AuthService.userLocation(location).then(data=> {
      console.log(data)//returns an array
      console.log(data.users[1])

  

      })

    // const {isAuthenticated, location} = data;
    // if(isAuthenticated) {
    //     authContext.setLocation(location);
    //     authContext.setIsAuthenticated(isAuthenticated); 
     
    
   
  }

 


  
    return (

      <div>
      {/* {profile.firstname}
      {console.log(profile)   }    */}
          <div id="platformWrapper">
            <div className="profile-info-div">
          <ul id="profile-info">
          <li> Name: {profile.firstname} {profile.surname}</li>
          <li> Location: {profile.location}</li>
          <li> Help status: {profile.userstatus}</li>
          </ul>
            </div>
            <div id="locationdiv">

              <div id="locationtext">
                <p id="explanation">Choose your location from the drop down list to see registered users in that area.<br/></p>
                <p id="explanation">You can filter by if you are looking for help or if you require help.<br/></p>
                <p id="explanation">You can then look at a users profile to see more details about their circumstances.<br/></p>
                <p id="explanation">If you have found a user that may suit your needs then click the message button to get in contact with them.</p>
                </div>

                <br/> 
              <form onSubmit={submitForm}>
              <div id="location-dropdown">
              
                <label htmlFor="location">Location: </label>
                <select onChange={selectData} name="location" id="location">
                  <option value="manchester">Manchester</option>
                  <option value="chester">Chester</option>
                  <option value="luton">Luton</option>
                  <option value="bradford">Bradford</option>
                </select></div> 
                <div id="search-button-div">
                <button className="search-button" onSubmit={submitForm}type="submit"> Search </button>
                  </div>

                </form> 


                <div id="locationcheckbox">
                <form>
                  <div>Please choose one or both from the options below:</div><br/>
              
                  <input type="checkbox" id="helpee" name="helpee" value="helpee"></input>
                    <label htmlFor="helpee">I require help</label><br/>
                  <input type="checkbox" id="helper" name="helper" value="helper"></input>
                    <label htmlFor="helper">I am offering help</label>
                   
                </form>
              

              <ul>
               <li></li>
              </ul>
              </div>
            </div>

            </div>
          
      </div>
    )
  
    }
  export default Profile;