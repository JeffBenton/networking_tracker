import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirm: ""
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
        fetch('api/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': this.state.name,
                'email': this.state.email,
                'password': this.state.password,
                'password_confirm': this.state.password_confirm
            })
        })
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    password_confirm: ""
                })
            })
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="email" value={this.state.email} />
                </Form.Group>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="password" value={this.state.password} />
                </Form.Group>
                <Form.Group>
                    <Form.Control onChange={this.handleChange} type="password" name="password_confirm" placeholder="confirm password" value={this.state.password_confirm} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }
}

export default RegisterForm;