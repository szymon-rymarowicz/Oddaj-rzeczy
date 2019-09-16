import React,{Component} from 'react';
import "./HomeThreeColumns.scss";


class HomeThreeColumns extends Component {
    render() {
        return (
            <div name="HomeThreeColumns" className="threecolumns">
                <div className="section_columns">
                    <article>
                        <h3>10</h3>
                        <span>oddanych worków</span>
                        <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                    </article>
                    <article>
                        <h3>5</h3>
                        <span>wspartych organizacji</span>
                        <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                    </article>
                    <article>
                        <h3>7</h3>
                        <span>zorganizowanych zbiórek</span>
                        <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;