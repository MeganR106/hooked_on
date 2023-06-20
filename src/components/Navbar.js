import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

function Navbar() {
    return (
        <>
            <section id="topbar" className="d-flex align-items-center" />
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1>
                            <a href="/">
                                <img src={logo} alt="" />
                            </a>
                            <a href="/"> Hooked On</a>
                        </h1>
                    </div>
                    <nav className="navbar" id="navbar">
                        <ul>
                            <li>
                                <NavLink exact activeClassName="active" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/squarecalc">
                                    Granny Square Calculator
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/yarncalc">
                                    Yarn Calculator
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/patterns">
                                    Granny Square Patterns
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
