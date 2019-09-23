import React, {Component} from 'react';
import "./Login.scss"
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";

class Login extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        formSend: false,
        errEmail: false,
        errPsw: false,
    };

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleOnSubmit = e => {
        this.setState({formSend: false});
        this.setState({errPsw: false});
        this.setState({errEmail: false});


        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        let email = this.state.email;
        let psw = this.state.password;

        e.preventDefault();
        if (mailReg.test(email) && psw.length >= 6) {
            this.setState({formSend: true})
        } else {
            if (!mailReg.test(email)) {
                this.setState({errEmail: true})
            }
            if (psw.length < 6) {
                this.setState({errPsw: true})
            }
        }

    };

    render() {
        return (
            <>
                <div className={"loginNav"}><Navigation/></div>
                <section className={"loginView"}>
                    <div className={"loginForm"}>
                        <span>Zaloguj się</span>
                        <div className={"deco"}></div>
                        <form onSubmit={this.handleOnSubmit}>
                            <div className={"inputs"}>
                                <label className={"loginInput"}>Email
                                    <input type="email" name="email" value={this.state.email}
                                           onChange={this.handleOnChange}/>
                                    {this.state.errEmail &&
                                    <span className="errorMessage" style={{color: 'red'}}>Podany email jest nieprawidłowy!</span>}
                                </label>
                                <label className={"loginInput"}>Hasło
                                    <input type="password" name="password" value={this.state.password}
                                           onChange={this.handleOnChange}/>
                                    {this.state.errPsw && <span className="errorMessage" style={{color: 'red'}}>Podane hasło jest za krótkie!</span>}

                                </label>


                            </div>
                            <div className={"buttons"}>
                                <button type='submit' className={"buttonStyle"}><NavLink to={"/rejestracja"}>Załóż
                                    konto</NavLink></button>
                                <input type='submit' value='Zaloguj' className={"buttonStyle"}
                                       onMouseOver={this.handleOver1} onMouseLeave={this.handleLeave1}/>

                            </div>


                        </form>
                    </div>
                </section>
            </>
        )
    }
}


export default Login;