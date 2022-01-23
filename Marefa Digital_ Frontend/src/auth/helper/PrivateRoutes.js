import React from "react";
import {Redirect , Route} from "react-router-dom"
import { isAutheticated } from "./index";

// Private Route where we can render private user component
const PrivateRoute = ({component: Component, ...rest}) => {
   return(
    <Route 
    {...rest}
    render={props =>
    isAutheticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname:"/signin", state: {from: props.location}}} />
    )
    }
    />
   )
}

export default PrivateRoute