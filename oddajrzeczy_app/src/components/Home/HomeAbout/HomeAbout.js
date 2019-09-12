import React,{Component} from 'react';
import "./HomeAbout.scss";


class HomeAbout extends Component {
    render() {
        return (
            <div name="HomeAbout" className="about">

                <div className="head">
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className="decoration"></div>
                </div>

                <div className="main">
                    <div className="step_columns">
                        <div className="step">
                            <div className="logo1"></div>
                            <span></span>
                            <hr/>
                            <p></p>

                        </div>
                       <div className="step">
                        <div className="logo2"></div>
                        <span></span>
                        <hr/>
                        <p></p>

                       </div>
                       <div className="step">
                        <div className="logo3"></div>
                        <span></span>
                        <hr/>
                        <p></p>

                       </div>
                       <div className="step">
                        <div className="logo4"></div>
                        <span></span>
                        <hr/>
                        <p></p>

                        </div>
                    </div>
                </div>

                <div className="foot"></div>
            </div>
        )
    }
}

export default HomeAbout;