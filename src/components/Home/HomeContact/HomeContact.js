import React,{Component} from 'react';
import "./HomeContact.scss";
import Footer from "../../Footer/Footer";

class HomeContact extends Component {
    render() {
        return (
            <div name="HomeContact" className="contact">
                <div className="form">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"></div>

                    <form>
                        <div>
                        <label className="inputLabel">Wpisz swoje imię
                            <input type="text" name="name" placeholder="Krzysztof"/>
                        </label>

                            <label className="inputLabel">Wpisz swój email
                            <input type="email" name="email" placeholder="abc@xyz.com"/>
                        </label>
                        </div>
                        <label className="textareaLabel">Wpisz swoją wiadomość
                            <textarea rows="4" cols="30" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus urna nibh, at scelerisque odio porta sed. Fusce sagittis sapien leo, a mollis urna luctus a. Vestibulum nec est tincidunt tellus vestibulum tincidunt ac sit amet augue."/>
                        </label>
                        {/*<input type="submit" value="Wyślij" />*/}
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomeContact;