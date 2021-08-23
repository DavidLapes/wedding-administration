import React from "react";
import { Redirect, Route } from "react-router-dom";
import {isAuthenticated} from "../../services/auth/auth";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to="/"/>
    )}/>
);

export default PrivateRoute;