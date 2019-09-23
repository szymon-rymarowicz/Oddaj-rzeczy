import React,{Component} from 'react';
import "./HomeContact.scss";
import Footer from "../../Footer/Footer";


class HomeContact extends Component {

    state={
        name:'',
        email:'',
        message:'',
        formSend:false,
        errName:false,
        errEmail:false,
        errMessage:false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        this.setState({
            formSend: false, errName: false, errEmail: false, errMessage: false
        });



        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        const nameReg = /^[a-zA-Z]{2,}$/i;
        let {name,email,message} = this.state;

        e.preventDefault();
        if (nameReg.test(name) && mailReg.test(email) && message.length >= 120) {
            this.setState({formSend: true})
        } else {
            if (!nameReg.test(name)) {
                this.setState({errName: true,})
            }
            if (!mailReg.test(email)) {
                this.setState({errEmail: true})
            }
            if (message.length < 120) {
                this.setState({errMessage: true})
            }
        }
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,message
            })
        })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
            });

    };



    render() {
        return (
            <div name="HomeContact" className="contact">
                <div className="form">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                    {this.state.formSend &&
                    <span className="succesMessage" style={{color: 'green'}}>Wiadomość została wysłana!<br/>
                        Wkrótce się skontaktujemy.</span>}
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <label className="inputLabel">Wpisz swoje imię
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Krzysztof"/>
                            {this.state.errName && <span className="errorMessage" style={{color:'red'}}>Podane imię jest nieprawidłowe!</span>}
                        </label>

                            <label className="inputLabel">Wpisz swój email
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="abc@xyz.com"/>
                                {this.state.errEmail && <span className="errorMessage" style={{color:'red'}}>Podany email jest nieprawidłowy!</span>}
                        </label>
                        </div>
                        <label className="textareaLabel">Wpisz swoją wiadomość
                            <textarea rows="4" cols="30" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus urna nibh, at scelerisque odio porta sed. Fusce sagittis sapien leo, a mollis urna luctus a. Vestibulum nec est tincidunt tellus vestibulum tincidunt ac sit amet augue."/>
                            {this.state.errMessage && <span className="errorMessage" style={{color:'red'}}>Wiadomość musi mieć conajmniej 120 znaków!</span>}
                        </label>
                        <input type='submit' value='Wyślij'/>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomeContact;