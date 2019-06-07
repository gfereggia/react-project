import React, {useContext} from "react";
import {Redirect} from 'react-router-dom';

//components
import Login from '../Login/Login';

//context
import {AppContext} from "../../appContext";

const Splash = () => {
    const {state} = useContext(AppContext);
    return (
        <>
            {state.isAuth ? (
                <Redirect to="/products"/>
            ) : (<Login/>)}
        </>
    );
};

export default Splash;
