import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import * as serviceWorker from './serviceWorker'

import App from './components/App/App'
import Benefits from "./components/Benefits/Benefits";
import ProtectedRoute from './ProtectedRoute';
import Products from './components/Products/Products';
import Requirements from "./components/Requirements/Requirements";
import Splash from './components/Splash/Splash'
import Technologies from "./components/Technologies/Technologies";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppContextProvider} from './appContext'

ReactDOM.render(
    <Router>
        <AppContextProvider>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Splash}/>
                <Route path="/benefits" component={Benefits}/>
                <Route path="/requirements" component={Requirements}/>
                <Route path="/technologies" component={Technologies}/>
                <ProtectedRoute exact path="/products" component={Products}/>
            </Switch>
        </AppContextProvider>
    </Router>,
document.getElementById('root')
)

serviceWorker.unregister()
