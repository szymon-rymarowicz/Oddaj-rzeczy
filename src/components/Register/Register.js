import React, {Component} from 'react';
import "./Register.scss"
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";

class Register extends Component {
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
        this.setState({errConfirmPsw: false});


        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        let email = this.state.email;
        let confirm = this.state.confirmPassword;
        let psw = this.state.password;

        e.preventDefault();
        if (mailReg.test(email) && psw.length >= 6 && confirm === psw && confirm.length >= 6) {
            this.setState({formSend: true})
        } else {
            if (!mailReg.test(email)) {
                this.setState({errEmail: true})
            }
            if (psw.length < 6) {
                this.setState({errPsw: true})
            }
            if (psw !== confirm) {
                this.setState({errConfirmPsw: true})
            }
        }

    };

    render() {
        return (
            <>
                <div className={"regNav"}><Navigation/></div>
                <section className={"regView"}>
                    <div className={"regForm"}>
                        <span>Załóż konto</span>
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
                                <label className={"loginInput"}>Powtórz hasło
                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword}
                                           onChange={this.handleOnChange}/>
                                    {this.state.errConfirmPsw &&
                                    <span className="errorMessage" style={{color: 'red'}}>Podane hasło jest nieprawidłowe!</span>}

                                </label>


                            </div>
                            <div className={"buttons"}>
                                <button type='submit' className={"buttonStyle"} ><NavLink to={"/logowanie"}>Zaloguj</NavLink>
                                </button>
                                <input type='submit' value='Załóż konto' className={"buttonStyle"}/>

                            </div>


                        </form>
                    </div>
                </section>
            </>
        )
    }
}


export default Register;