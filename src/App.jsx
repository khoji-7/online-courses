import React from "react";
import Header from "./components/heading/header";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css"
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/home/Home";
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
