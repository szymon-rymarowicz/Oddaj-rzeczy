import React,{Component} from 'react';
import "../HomeOrganisation.scss";


class Local extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foundation: [
                {title: '"Lorem Ipsum 1"', mission: "Risus in hendrerit gravida rutrum quisque.", givenAway: "Sinto, prendo, questa"},
                {title: '"Lorem Ipsum 2"', mission: "Ultricies mi eget mauris pharetra et ultrices.", givenAway: "Bento, vintre, sed"},
                {title: '"Lorem Ipsum 3"', mission: "Sed ullamcorper morbi tincidunt ornare massa eget.", givenAway: "Questas, bonevto, sintas"}
            ],

            currentPage: 1,
            foundationPerPage: 3,
        };
    }

    render() {

        const renderFoundation = this.state.foundation.map((foundation, index) => {
            return (

                <ul key={index} className="foundationInfo">
                    <li><h3>Zbiórka {foundation.title}</h3> <p>Cel i misja: {foundation.mission}</p></li>
                    <span>{foundation.givenAway}</span>
                </ul>
            )
        });


        return (
            <>
                {renderFoundation}
            </>
        )
    }
}

export default Local;