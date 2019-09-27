import React, {Component} from 'react';
import "./Register.scss"
import Register from "./Register";

import { withFirebase } from '../Firebase';
import { withRouter } from "react-router-dom"
import { compose } from 'recompose';


class RegisterFirebase extends Component {

    render() {
        return (
            <RegisterBase />
        )
    }
}


const RegisterBase = compose(withRouter, withFirebase)(Register);

export default RegisterFirebase;