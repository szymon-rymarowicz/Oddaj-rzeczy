import React, {Component} from 'react';
import "./Login.scss";
import Navigation from "../Navigation/Navigation";


class Login extends Component {
    render() {
        return (
            <div className="login"><Navigation/>
                <div className="mainLogin">
                    <h2>Zaloguj się</h2>
                    <div className="decoration"></div>

                    <form>
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email"/>
                        <label for="name">Hasło</label>
                        <input id="name" type="text" name="name"/>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login;