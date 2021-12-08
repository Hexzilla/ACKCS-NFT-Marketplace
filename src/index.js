import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import CreateAsset from "./views/CreateAsset";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* add routes with layouts */}
            <Route path="/landing" exact component={Landing}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/auth" component={Auth}/>
            {/* add routes without layouts */}
            <Route path="/profile" exact component={Profile}/>
            <Route path="/" exact component={Landing}/>
            <Route path="/asset/create" exact component={CreateAsset}/>
            {/* add redirect for first page */}
            <Redirect from="*" to="/"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
