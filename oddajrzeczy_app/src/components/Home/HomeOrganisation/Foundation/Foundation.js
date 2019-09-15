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
                    title: '"Dbam o Zdrowie2"',
                    mission: "Pomoc osobom znajdującym się w ciężkiej sytuacji życiowej.2",
                    givenAway: "2ubrania, jedzenie, sprzęt AGD, meble, zabawki"
                },
                {
                    title: '"Dla Dzieci2"',
                    mission: "Pomoc dzieciom z ubogich rodzin.2",
                    givenAway: "2ubrania, meble, zabawki"
                },
                {
                    title: '"Bez Domu 2"',
                    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.2",
                    givenAway: "2ubrania, jedzenie, ciepłe koce"
                },
                {
                    title: '"Dbam o Zdrowie3"',
                    mission: "Pomoc osobom znajdującym się w ciężkiej sytuacji życiowej.3",
                    givenAway: "3ubrania, jedzenie, sprzęt AGD, meble, zabawki"
                },
                {
                    title: '"Dla Dzieci3"',
                    mission: "Pomoc dzieciom z ubogich rodzin.3",
                    givenAway: "3ubrania, meble, zabawki"
                },
                {
                    title: '"Bez Domu 3"',
                    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.3",
                    givenAway: "3ubrania, jedzenie, ciepłe koce"
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

                <ul key={index} className="foundationInfo">
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