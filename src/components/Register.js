import React, { Component } from 'react';

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {}
    }

    handleInputName = event => {
        this.setState({name: event.target.value});
    }

    handleInputEmail = event => {
        this.setState({email: event.target.value});
    }

    handleInputPassword = event => {
        this.setState({password: event.target.value});
    }

    handleInputPasswordConfirm = event => {
        this.setState({passwordConfirm: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        }
        console.log(user);
    }

    render() {
        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputName }
                    value={ this.state.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputEmail }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputPassword }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="passwordConfirm"
                    onChange={ this.handleInputPasswordConfirm }
                    value={ this.state.password_confirm }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

export default Register;