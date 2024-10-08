import React from "react";
import Header from "./components/common/heading/header";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css"
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allCourse/CourseHome";
import Team from "./components/Team/Team";
import Test from "./components/home/testimonal/Test";
import Price from "./components/pricing/Price";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/course" exact component={CourseHome} />
                    <Route path="/team" exact component={Team} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/price" exact component={Price} />
                    <Route path="/journal" exact component={Blog} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
