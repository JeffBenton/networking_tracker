import React from 'react';

import LoginForm from "./LoginForm";
import RegisterForm from "./RegistrationForm";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class LandingPage extends React.Component {

    state = {
        displayLoginForm: true
    };

    swapForm = e => {
        e.preventDefault();

        this.setState({
            displayLoginForm: !this.state.displayLoginForm
        });
    };

    displayForm = () => {
        if(this.state.displayLoginForm) {
            return (
                <>
                    <Row className="justify-content-md-center"><h4>Please sign in</h4></Row>
                    <Row className="justify-content-md-center"><LoginForm /></Row>
                    <Row className="justify-content-md-center"><p>or <a onClick={this.swapForm} href="/">register</a></p></Row>
                </>
            )
        }
        else {
            return (
                <>
                    <Row className="justify-content-md-center"><h4>Please register</h4></Row>
                    <Row className="justify-content-md-center"><RegisterForm /></Row>
                    <Row className="justify-content-md-center"><p>or <a onClick={this.swapForm} href="/">sign in</a></p></Row>
                </>
            )
        }
    };

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center"><h1>Welcome to Housekeeper!</h1></Row>
            {this.displayForm()}
            </Container>
        )
    }
}

export default LandingPage;