import React, {Component} from 'react';
import "./Login.scss"
import Login from "./Login";

import { withFirebase } from '../Firebase';
import { withRouter } from "react-router-dom"
import { compose } from 'recompose';


class LoginFirebase extends Component {

    render() {
        return (
            <LoginBase />
        )
    }
}


const LoginBase = compose(withRouter, withFirebase)(Login);

export default LoginFirebase;