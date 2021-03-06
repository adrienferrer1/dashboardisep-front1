import React, { Component } from 'react';
import axios from 'axios';
import browserhistory from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';

class mail1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail1: '', password:'', mail:'', password1:'',password2:'', name:'', lastname:'',role:''};
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
        event.preventDefault();
        axios.post('https://back-dashboardisep.projects.jcloud.fr/login',{email: this.state.mail1, password: this.state.password}).then(response => {
            sessionStorage.setItem('token', response.headers.authorization);
            let role;
            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
            axios.get('https://back-dashboardisep.projects.jcloud.fr/users/me').then(response => {
                role = response.data.role;
                sessionStorage.setItem('role', response.data.role);
                this.setState({role});
                console.log(this.setState);
                window.location.replace("/Welcome");
            });
        }).catch(function (error) {
            alert("Votre identifiant ou votre mot de passe est erroné");
        });


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
        }
        else{
          var data = {name: this.state.name,
              lastname: this.state.lastname,
              email: this.state.mail,
              password: this.state.password1,
              passwordRepeat: this.state.password2};
            axios.post('https://back-dashboardisep.projects.jcloud.fr/users/add',data).then(function (response) {
                console.log(response);
                alert('Vous avez bien été inscrit');
            }).catch(function (error) {
                console.log(error);
                alert("Erreur lors de l'inscription" + error);
            });
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
