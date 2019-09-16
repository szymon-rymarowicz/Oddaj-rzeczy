import React,{Component} from 'react';
import "../HomeOrganisation.scss";


class Local extends Component {

    constructor(props) {
        super(props);
        this.state = {
            local: [
                {title: '"Lorem Ipsum 1"', mission: "Risus in hendrerit gravida rutrum quisque.", givenAway: "Sinto, prendo, questa"},
                {title: '"Lorem Ipsum 2"', mission: "Ultricies mi eget mauris pharetra et ultrices.", givenAway: "Bento, vintre, sed"},
                {title: '"Lorem Ipsum 3"', mission: "Sed ullamcorper morbi tincidunt ornare massa eget.", givenAway: "Questas, bonevto, sintas"}
            ],

            currentPage: 1,
            localPerPage: 3,
        };
    }

    render() {

        const renderLocal = this.state.local.map((local, index) => {
            return (

                <ul key={index} className="info">
                    <li><h3>Zbiórka {local.title}</h3> <p>Cel i misja: {local.mission}</p></li>
                    <span>{local.givenAway}</span>
                </ul>
            )
        });


        return (
            <>
                {renderLocal}
            </>
        )
    }
}

export default Local;