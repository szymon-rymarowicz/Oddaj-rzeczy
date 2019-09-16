import React,{Component} from 'react';
import "./HomeFourSteps.scss";
import {Link} from "react-router-dom";


class HomeFourSteps extends Component {
    render() {
        return (
            <div name="HomeFourSteps" className="fourSteps">

                <div className="head">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"></div>
                </div>

                <div className="main">
                    <div className="step_columns">
                        <div className="step">
                            <div className="logo1"></div>
                            <span>Wybierz rzeczy</span>
                            <hr/>
                            <p>ubrania, zabawki, sprzęt i inne</p>

                        </div>
                       <div className="step">
                        <div className="logo2"></div>
                        <span>Spakuj je</span>
                        <hr/>
                        <p>skorzystaj z worków na śmieci</p>

                       </div>
                       <div className="step">
                        <div className="logo3"></div>
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <hr/>
                        <p>wybierz zaufane miejsce</p>

                       </div>
                       <div className="step">
                        <div className="logo4"></div>
                        <span>Zamów kuriera</span>
                        <hr/>
                        <p>kurier przyjedzie w dogodnym terminie</p>

                        </div>
                    </div>
                </div>

                <div className="foot">
                    <button><Link to="/logowanie">oddaj <br/> rzeczy</Link> </button>
                </div>
            </div>
        )
    }
}

export default HomeFourSteps;