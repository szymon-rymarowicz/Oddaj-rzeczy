import React,{Component} from 'react';
import "./Home.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";

class Home extends Component {
    render() {
        return (
            <>
            <HomeHeader/>
            <HomeThreeColumns />
            </>
        )
    }
}

export default Home;