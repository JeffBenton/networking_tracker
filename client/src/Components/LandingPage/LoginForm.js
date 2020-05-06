import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        /*
            TODO
                1. handle errors
                2. handle success
         */
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
        })
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    email: "",
                    password: ""
                })
            })
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="email" value={this.state.email} />
                </Form.Group>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="password" value={this.state.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        )
    }
}

export default LoginForm;