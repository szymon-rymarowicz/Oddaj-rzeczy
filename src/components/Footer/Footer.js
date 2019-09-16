import React,{Component} from 'react';
import "./Footer.scss";



class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span>Copyright by Coders Lab</span>
                <div className="icons">
                    <div className="facebook"></div>
                    <div className="instagram"></div>
                </div>
            </div>
        )
    }
}

export default Footer;