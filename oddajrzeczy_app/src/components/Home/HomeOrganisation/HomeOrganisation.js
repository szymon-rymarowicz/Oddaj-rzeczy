import React, {Component} from 'react';
import "./HomeOrganisation.scss";
import Foundation from "./Foundation/Foundation";
import Organisation from "./Organisation/Organisation";
import Local from "./Local/Local";

const spanFoundation = <span>Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisi lacus sed viverra tellus in hac habitasse platea.</span>;
const spanOrganisation = <span>Felis eget nunc lobortis mattis. Ac turpis egestas sed tempus. At auctor urna nunc id. At varius vel pharetra vel.</span>;
const spanLocal = <span>Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt lobortis feugiat vivamus at augue eget arcu.</span>;

class HomeOrganisation extends Component {

    state = {
        border1: "borderButton",
        border2: "",
        border3: "",
        foundation: true,
        organisation: false,
        local: false
    };

    handleClickBorder1 = () => {
        this.setState({
            border1: "borderButton",
            border2: "",
            border3: "",
            foundation: true,
            organisation: false,
            local: false
        })
    };

    handleClickBorder2 = () => {
        this.setState({
            border1: "",
            border2: "borderButton",
            border3: "",
            foundation: false,
            organisation: true,
            local: false
        })
    };

    handleClickBorder3 = () => {
        this.setState({
            border1: "",
            border2: "",
            border3: "borderButton",
            foundation: false,
            organisation: false,
            local: true
        })
    };

    render() {

        return (

            <div name="HomeOrganisation" className="organisation">
                <div className="head">
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"></div>
                    <div className="buttons">
                        <button className={this.state.border1} onClick={this.handleClickBorder1}>Fundacjom</button>
                        <button className={this.state.border2} onClick={this.handleClickBorder2}>Organizacjom
                            pozarządowym
                        </button>
                        <button className={this.state.border3} onClick={this.handleClickBorder3}>Lokalnym zbiórkom
                        </button>
                    </div>
                    {this.state.foundation && spanFoundation}
                    {this.state.organisation && spanOrganisation}
                    {this.state.local && spanLocal}
                </div>

                <div className="foot">

                    {this.state.foundation && <Foundation/>}
                    {this.state.organisation && <Organisation/>}
                    {this.state.local && <Local/>}

                </div>
            </div>
        )
    }
}

export default HomeOrganisation;

