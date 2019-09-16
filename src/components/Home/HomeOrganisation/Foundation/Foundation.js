import React, {Component} from 'react';
import "../HomeOrganisation.scss";


class Foundation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foundation: [
                {
                    title: '"Dbam o Zdrowie"',
                    mission: "Pomoc osobom znajdującym się w ciężkiej sytuacji życiowej.",
                    givenAway: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
                },
                {
                    title: '"Dla Dzieci"',
                    mission: "Pomoc dzieciom z ubogich rodzin.",
                    givenAway: "ubrania, meble, zabawki"
                },
                {
                    title: '"Bez Domu"',
                    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
                    givenAway: "ubrania, jedzenie, ciepłe koce"
                },
                {
                    title: '"Lorem Ipsum 4"',
                    mission: "Ultricies mi eget mauris pharetra et ultrices.",
                    givenAway: "Egsteno, bravto, sedino"
                },
                {
                    title: '"Lorem Ipsum 5"',
                    mission: "Sed ullamcorper morbi tincidunt ornare massa eget.",
                    givenAway: "Questas, bonevto, sintas"
                },
                {
                    title: '"Lorem Ipsum 6"',
                    mission: "Massa enim nec dui nunc mattis enim.",
                    givenAway: "Egestas, sed, besto"
                },
                {
                    title: '"Lorem Ipsum 7"',
                    mission: "Arcu dui vivamus arcu felis bibendum ut tristique.",
                    givenAway: "Sinto, prendo, questa"
                },
                {
                    title: '"Lorem Ipsum 8"',
                    mission: "Ultricies mi eget mauris pharetra et ultrices.",
                    givenAway: "Bento, vintre, sed"
                },
                {
                    title: '"Lorem Ipsum 9"',
                    mission: "Sed ullamcorper morbi tincidunt ornare massa eget.",
                    givenAway: "Sinto, prendo, questa"
                },
            ],

            currentPage: 1,
            foundationPerPage: 3,
            border1: "borderButton",
            border2: "",
            border3: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e, index) {
        this.setState({currentPage: Number(e.target.id)});

        if (index === 1) {
            this.setState({border1: "borderButton", border2: "", border3: ""});
        } else if (index === 2) {
            this.setState({border1: "", border2: "borderButton", border3: ""});
        } else {
            this.setState({border1: "", border2: "", border3: "borderButton"});
        }
    }


    render() {
        const {foundation, currentPage, foundationPerPage, border1, border2, border3} = this.state;

        //foundation
        const indexOfLastFoundation = currentPage * foundationPerPage;
        const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
        const currentFoundations = foundation.slice(indexOfFirstFoundation, indexOfLastFoundation);

        const renderFoundation = currentFoundations.map((foundation, index) => {
            return (

                <ul key={index} className="info">
                    <li><h3>Fundacja {foundation.title}</h3> <p>Cel i misja: {foundation.mission}</p></li>
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
                    <button id={3} className={border3} onClick={(e) => this.handleClick(e, 3)}>3</button>
                </div>
            </>
        )
    }
}

export default Foundation;