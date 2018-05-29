import React, { Component } from 'react';
import axios from 'axios';
import browserhistory from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class mail1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail1: '', password:'', mail:'', password1:'',password2:'', name:'', lastname:''};
        //mail1 Form
        this.handlemail1Change = this.handlemail1Change.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

        //Subscribe Form
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePassword1Change = this.handlePassword1Change.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
    }
    //mail1 Form Handle functions
    handlemail1Change(event) {
        this.setState({mail1: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleLoginSubmit(event) {
        //alert(this.state.mail1  + this.state.password);
        axios.post('https://back-dashboardisep.projects.jcloud.fr/login',{email: this.state.mail1, password: this.state.password}).then(function (response) {
            localStorage.setItem('token', response.headers.authorization);
            //alert(localStorage.getItem('token'));
            window.location.replace("/Groupmanagement");
        }).catch(function (error) {
            alert("Votre de identifiant ou votre mot de passe est erroné");
            console.log(error);
        });
        event.preventDefault();
    }
    //Subscribe Form Handle functions
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handlelastNameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleMailChange(event) {
        this.setState({mail: event.target.value});
    }
    handlePassword1Change(event) {
        this.setState({password1: event.target.value});
    }
    handlePassword2Change(event) {
        this.setState({password2: event.target.value});
    }
    handleSubscribeSubmit(event) {
        if (this.state.password1 != this.state.password2){

            alert('Les mots de passes entrés sont différents');
            //return <Redirect to='/Tracking'/>
        }
        else{
            axios.post('https://back-dashboardisep.projects.jcloud.fr/users/add',{name: this.state.name, lastname: this.state.lastname, email: this.state.mail, password: this.state.password1}).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            //<Redirect to='/Tracking'/>
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form class="row">
                    <div class="col-6">
                        <h4> Identification</h4>
                        <input type="text" value={this.state.mail1} onChange={this.handlemail1Change} class="form-control" placeholder="Identifiant" name="mail1"/>
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
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" placeholder="Prénom" name="name"/>
                        <br></br>
                        <input type="text" value={this.state.lastname} onChange={this.handlelastNameChange} className="form-control" placeholder="Nom" name="lastname"/>
                        <br></br>
                        <input type="text" value={this.state.mail} onChange={this.handleMailChange} className="form-control" placeholder="Mail" name="mail"/>
                        <br></br>
                        <input type="password" value={this.state.password1} onChange={this.handlePassword1Change} className="form-control" placeholder="Mot de passe" name="password1"/>
                        <br></br>
                        <input type="password" value={this.state.password2} onChange={this.handlePassword2Change} className="form-control" placeholder="Mot de passe" name="password2"/>
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
export default mail1;

