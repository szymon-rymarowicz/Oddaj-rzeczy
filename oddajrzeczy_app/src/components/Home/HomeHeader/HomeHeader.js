import React,{Component} from 'react';
import "./HomeHeader.scss";
import Navigation from "../../Navigation/Navigation";


class HomeHeader extends Component {
    render() {
        return (

            <div name="HomeHeader" className="home_header">

                <div className="background_image"></div>

                <div className="home">
                <Navigation />
                <div className="main"></div>
                </div>

                </div>
        )
    }
}

export default HomeHeader;