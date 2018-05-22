import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password:'', login1:'', password1:'',password2:''};
        //Login Form
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

        //Subscribe Form
        this.handleLogin1Change = this.handleLogin1Change.bind(this);
        this.handlePassword1Change = this.handlePassword1Change.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
    }
    //Login Form Handle functions
    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleLoginSubmit(event) {
        alert(this.state.login  + this.state.password);
        event.preventDefault();
    }

    //Subscribe Form Handle functions
    handleLogin1Change(event) {
        this.setState({login1: event.target.value});
    }
    handlePassword1Change(event) {
        this.setState({password1: event.target.value});
    }
    handlePassword2Change(event) {
        this.setState({password2: event.target.value});
    }
    handleSubscribeSubmit(event) {
        alert(this.state.login1  + this.state.password1 + this.state.password2);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form class="row">
                    <div class="col-6">
                        <h4> Identification</h4>
                        <input type="text" value={this.state.login} onChange={this.handleLoginChange} class="form-control" placeholder="Identifiant" name="login"/>
                        <br></br>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} class="form-control" placeholder="Mot de passe" name="password"/>
                        <br></br>
                        <button class="btn btn-warning" onClick={this.handleLoginSubmit}>
                            S'identifier
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="col-6">
                        <h4> Inscription</h4>
                        <input type="text" value={this.state.login1} onChange={this.handleLogin1Change} className="form-control" placeholder="Identifiant" name="login"/>
                        <br></br>
                        <input type="password" value={this.state.password1} onChange={this.handlePassword1Change} className="form-control" placeholder="Mot de passe" name="password"/>
                        <br></br>
                        <input type="password" value={this.state.password2} onChange={this.handlePassword2Change} className="form-control" placeholder="Mot de passe" name="password"/>
                        <br></br>
                        <button className="btn btn-warning" onClick={this.handleSubscribeSubmit}>
                            S'inscrire
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;

