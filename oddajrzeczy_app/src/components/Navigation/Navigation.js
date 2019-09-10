import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.scss";
import "../../scss/settings/_colors.scss";


class Navigation extends Component {

    render() {
        const selectedStyle1 = {
            border: "1px solid #FAD648"
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
            <nav>
                <ul className="login">
                    <li> <NavLink exact to="/logowanie" style={grey} activeStyle={selectedStyle1}>Zaloguj</NavLink> </li>
                    <li> <NavLink exact to="/rejestracja" style={grey} activeStyle={selectedStyle1}>Załóż konto</NavLink > </li>
                </ul>
                    <ul className="menu">
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>Start</NavLink> </li>
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>O co chodzi?</NavLink > </li>
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>O Nas</NavLink > </li>
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>Fundacja i organizacje</NavLink > </li>
                        <li> <NavLink exact to="/" style={darkgrey} activeStyle={selectedStyle}>Kontakt</NavLink > </li>
                    </ul>
            </nav>
        )
    }
}

export default Navigation;