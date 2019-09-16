import React,{Component} from 'react';
import "./HomeHeader.scss";
import Navigation from "../../Navigation/Navigation";
import {Link} from "react-router-dom";


class HomeHeader extends Component {
    render() {
        return (

            <div name="HomeHeader" className="home_header">

                <div className="background_image"></div>

                <div className="home">

                <Navigation />

                <div className="main">
                    <h1>Zacznij pomagać! <br />
                    Oddaj niechciane rzeczy w zaufane rzeczy
                    </h1>
                    <div className="decoration"></div>
                    <div className="button">
                        <button><Link to="/logowanie">oddaj <br/> rzeczy</Link> </button>
                        <button><Link to="/logowanie">zorganizuj <br/> zbiórkę</Link> </button>
                    </div>
                </div>

                </div>

                </div>
        )
    }
}

export default HomeHeader;