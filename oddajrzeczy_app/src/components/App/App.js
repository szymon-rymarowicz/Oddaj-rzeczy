import React,{Component} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";


class App extends Component {

  render() {
    return (
        <HashRouter>

          <Navigation />
<Switch>
  <Route exact path="/" component={Home}/>

</Switch>
        </HashRouter>
    );
  }
}

export default App;
