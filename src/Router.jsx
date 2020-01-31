import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Tournee from "./Tournee/Tournee";
import BackOffice from "./BackOffice/BackOffice";
import Contact from "./Contact/Contact";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={Contact} />
                <Route path="/Tournee" component={Tournee} />
                <Route path="/Backoffice" component={BackOffice} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
