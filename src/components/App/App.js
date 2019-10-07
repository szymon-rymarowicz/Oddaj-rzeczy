import React,{Component} from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import RegisterFirebase from "../Register/RegisterFirebase";
import LoginFirebase from "../Login/LoginFirebase";


class App extends Component {

  render() {
    return (

        <HashRouter>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/logowanie" component={LoginFirebase}/>
  <Route exact path="/rejestracja" component={RegisterFirebase}/>
    <Route path={"/wylogowano"} component={Logout}/>
</Switch>
        </HashRouter>
    );
  }
}

export default App;
