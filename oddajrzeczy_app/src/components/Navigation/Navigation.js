import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.scss";
import "../../scss/settings/_colors.scss";
import {Link} from "react-scroll/modules";


class Navigation extends Component {

    render() {
        const selectedStyle1 = {
            border: "1px solid #FAD648",
            padding: "0.5rem"
        };

        const grey = {
            textDecoration: "none",
            color: "#737373"
        };

        const selectedStyle = {
            border: "1px solid #3C3C3C"
        };

        const darkgrey = {
            textDecoration: "none",
            color: "#3C3C3C"
        };

        return (
            <nav className="container">
                <ul className="login">
                    <li> <NavLink exact to="/logowanie" style={grey} activeStyle={selectedStyle1}>Zaloguj</NavLink> </li>
                    <li> <NavLink exact to="/rejestracja" style={grey} activeStyle={selectedStyle1}>Załóż konto</NavLink > </li>
                </ul>
                    <ul className="menu">
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>Start</NavLink> </li>
                        <li> <Link activeClass="active" style={darkgrey} className="link" to="HomeThreeColumns" spy={true} smooth={true} duration={500}>O co chodzi?</Link> </li>
                        <li> <Link activeClass="active" style={darkgrey} className="link" to="HomeAbout" spy={true} smooth={true} duration={500}>O Nas</Link> </li>
                        <li> <Link activeClass="active" style={darkgrey} className="link" to="HomeOrganisation" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link> </li>
                        <li> <Link activeClass="active" style={darkgrey} className="link" to="HomeContact" spy={true} smooth={true} duration={500}>Kontakt</Link> </li>
                    </ul>
            </nav>
        )
    }
}

export default Navigation;