import React,{Component} from 'react';
import "./HomeAbout.scss"


class HomeAbout extends Component{
    render() {
        return(
            <div name="HomeAbout" className="about">

                <div className="aboutBox">
                    <h2>O nas</h2>
                    <div className="decoration"></div>
                    <p>Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery . Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="signature"></div>
                </div>
                <div className="aboutPhoto"></div>
            </div>
        )
    }
}
export default HomeAbout;