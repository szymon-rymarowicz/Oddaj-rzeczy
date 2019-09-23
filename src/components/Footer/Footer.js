import React,{Component} from 'react';
import "./Footer.scss";



class Footer extends Component{
    render() {
        return(
            <footer className={"footer"}>
                <div className={"copyright"}>Copyright by Coders Lab</div>
                <div className={"logo"}>
                    <div className={"facebook"}></div>
                    <div className={"instagram"}></div>
                </div>

            </footer>
        )
    }

}

export default Footer;