import React from "react";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Tournee from "./Tournee/Tournee";
import BackOffice from "./BackOffice/BackOffice";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Tournee" component={Tournee} />
                <Route path="/Backoffice" component={BackOffice} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
