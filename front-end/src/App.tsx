import React from 'react';
import HomePage from "./components/home";
import PageLink from "./api/PageLInk";
import { Route, Switch } from "react-router-dom";
import './App.css';
import ResultPage from "./components/results";
import Menu from "./components/menu";
import AddTestPage from "./components/addtest/";

function App() {

    return (
        <div className="container-fluid">
            <Menu />
            <Switch>
                <Route exact path={PageLink.HOME} component={HomePage} />
                <Route path={PageLink.TESTURL} component={AddTestPage} />
                <Route path={PageLink.RESULTS} component={ResultPage} />
            </Switch>
        </div>
    );
}

export default App;
