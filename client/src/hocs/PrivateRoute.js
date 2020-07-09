import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component : Component, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/', 
                                       state : {
                                           from : props.location,
                                           user: user
                                        }}}/>
            return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute;