import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "./navbar.scss";


const Navbar = ({toogle, setToogle}) => {

    const handleToggle = () => {
        setToogle(!toogle);
    }
    return (
        <div className={toogle ? "navbar navbarActive" : "navbar"}>
            <div className="navbar-left">
                <Link className="navbar-left-link" to="/">dmc</Link>
            </div>
            <div className="navbar-center">top music</div>
            <div className="navbar-right" onClick={handleToggle}>
                {toogle ? "🌑" : "☀️"}
            </div>
        </div>
    );
};

export default Navbar;
