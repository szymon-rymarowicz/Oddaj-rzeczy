import React,{Component} from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Logout from "../Logout/Logout";


class App extends Component {

  render() {
    return (

        <HashRouter>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/logowanie" component={Login}/>
  <Route exact path="/rejestracja" component={Register}/>
    <Route path={"/wylogowano"} component={Logout}/>
</Switch>
        </HashRouter>
    );
  }
}

export default App;
