import React from "react";
import Header from "./components/heading/header";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css"
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>

                </Switch>
            </Router>
        </>
    );
};

export default App;
