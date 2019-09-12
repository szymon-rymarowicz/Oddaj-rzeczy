import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.scss";
import "../../scss/settings/_colors.scss";
import {Link} from "react-scroll/modules";


class Navigation extends Component {

    render() {
        const selectedStyleLog = {
            border: "0.0625rem solid #FAD648",
            padding: "0.3rem 0.5rem"
        };

        const selectedStyleStart = {
            border: "0.0625rem solid #737373",
            padding: "0.3rem 1rem"
        };

        return (
            <nav>
                <ul className="login">
                    <li> <NavLink to="/logowanie" activeStyle={selectedStyleLog}>Zaloguj</NavLink> </li>
                    <li> <NavLink to="/rejestracja" activeStyle={selectedStyleLog}>Załóż konto</NavLink > </li>
                </ul>
                    <ul className="menu">
                        <li> <NavLink exact to="/" activeStyle={selectedStyleStart}>Start</NavLink> </li>
                        <li> <Link activeClass="active" className="link" to="HomeFourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</Link> </li>
                        <li> <Link activeClass="active" className="link" to="HomeAbout" spy={true} smooth={true} duration={500}>O nas</Link> </li>
                        <li> <Link activeClass="active" className="link" to="HomeOrganisation" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link> </li>
                        <li> <Link activeClass="active" className="link" to="HomeContact" spy={true} smooth={true} duration={500}>Kontakt</Link> </li>
                    </ul>
            </nav>
        )
    }
}

export default Navigation;