import React, { Component } from 'react';

class Login extends Component {

    state = {
        name: '',
        password: ''
    }

    handleInputName = event => {
        this.setState({name: event.target.value});
    }

    handleInputPassword = event => {
        this.setState({password: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password);
    }


    render() {
        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
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
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputPassword }
                    value={ this.state.password }
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

export default Login;