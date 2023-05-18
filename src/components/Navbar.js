import React from 'react';
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
                            <a href="/"><img src={logo} alt="" /></a>
                            <a href="/"> Hooked On</a>
                        </h1>
                    </div>
                    <nav className='navbar' id="navbar">
                        <ul>
                            <li><a className="active" href="/">Home</a></ li>
                            <li><a href="/squarecalc">Granny Square Calculator</a></ li>
                            <li><a href="/yarncalc">Yarn Calculator</a></ li>
                            <li><a href="/patterns">Granny Square Patterns</a></ li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
