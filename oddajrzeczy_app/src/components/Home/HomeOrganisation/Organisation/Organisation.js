import React, {Component} from 'react';
import "../HomeOrganisation.scss";


class Organisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foundation: [
                {
                    title: '"Lorem Ipsum 1"',
                    mission: "Quis imperdiet massa tincidunt nunc.",
                    givenAway: "Egestas, sed, besto"
                },
                {
                    title: '"Lorem Ipsum 2"',
                    mission: "Arcu dui vivamus arcu felis bibendum ut tristique.",
                    givenAway: "Sinto, prendo, questa"
                },
                {title: '"Lorem Ipsum 3"', mission: "Massa enim nec dui nunc mattis enim.", givenAway: "Lansa, ristas"},
                {
                    title: '"Lorem Ipsum 4"',
                    mission: "Risus in hendrerit gravida rutrum quisque.",
                    givenAway: "Bento, vintre, sed"
                },
                {
                    title: '"Lorem Ipsum 5"',
                    mission: "Ultricies mi eget mauris pharetra et ultrices.",
                    givenAway: "Egsteno, bravto, sedino"
                },
                {
                    title: '"Lorem Ipsum 6"',
                    mission: "Sed ullamcorper morbi tincidunt ornare massa eget.",
                    givenAway: "Questas, bonevto, sintas"
                },
            ],

            currentPage: 1,
            foundationPerPage: 3,
            border1: "borderButton",
            border2: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e, index) {
        this.setState({currentPage: Number(e.target.id)});

        if (index === 1) {
            this.setState({border1: "borderButton", border2: ""});
        } else if (index === 2) {
            this.setState({border1: "", border2: "borderButton"});
        }
    }

        render() {
            const {foundation, currentPage, foundationPerPage, border1, border2} = this.state;

            //foundation
            const indexOfLastFoundation = currentPage * foundationPerPage;
            const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
            const currentFoundations = foundation.slice(indexOfFirstFoundation, indexOfLastFoundation);

            const renderFoundation = currentFoundations.map((foundation, index) => {
                return (

                    <ul key={index} className="foundationInfo">
                        <li><h3>Organizacja {foundation.title}</h3> <p>Cel i misja: {foundation.mission}</p></li>
                        <span>{foundation.givenAway}</span>
                    </ul>
                )
            });


            return (
                <>
                    {renderFoundation}
                    <div className="buttons">
                        <button id={1} className={border1} onClick={(e) => this.handleClick(e, 1)}>1</button>
                        <button id={2} className={border2} onClick={(e) => this.handleClick(e, 2)}>2</button>
                    </div>
                </>
            )
        }
}

export default Organisation;
