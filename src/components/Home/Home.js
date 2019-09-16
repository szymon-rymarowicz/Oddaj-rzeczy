import React,{Component} from 'react';
import "./Home.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFourSteps from "./HomeFourSteps/HomeFourSteps";
import HomeOrganisation from "./HomeOrganisation/HomeOrganisation";
import HomeContact from "./HomeContact/HomeContact";


class Home extends Component {
    render() {
        return (
            <>
            <HomeHeader/>
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAbout />
            <HomeOrganisation />
            <HomeContact />
            </>
        )
    }
}

export default Home;