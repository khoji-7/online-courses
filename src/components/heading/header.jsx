import React, { useState } from "react";
import Head from "./head";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {

    const [click, setClick] = useState(false);

    return (
        
        <div>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile":"flexSB"} onClick={()=>setClick(false)}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/course">All Course</Link>
                        </li> 
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/journal">Journal</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="start">
                        <div className="button">GET SERTIFICATE</div>
                    </div>
                    <button className="toggle" onClick={()=>setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Header;
