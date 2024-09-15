import React from "react";
import Header from "./components/common/heading/header";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css"
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/home/Home";
import About from "./components/about/About";
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
