import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppContext} from "./appContext";

const ProtectedRoute = ({component: Component, ...rest}) => {

    const {state} = useContext(AppContext);
    return (
        <Route render={props => !state.isAuth
            ? <Redirect to="/login"/>
            : <Component {...props}/>
        } {...rest}/>
    )
}

export default ProtectedRoute;
