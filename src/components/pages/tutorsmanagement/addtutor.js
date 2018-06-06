import React, { Component } from 'react';
import axios from 'axios';

class Addtutor extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', lastname:'', mail: '',password:'',password_repeat:'', role: 1};

        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handlePW_RepChange = this.handlePW_RepChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlelastNameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleMailChange(event) {
        this.setState({mail: event.target.value});
    }
    handlePWChange(event) {
        this.setState({password: event.target.value});
    }
    handlePW_RepChange(event) {
        this.setState({password_repeat: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.password != this.state.password_repeat){
            alert('Les mots de passes entrés sont différents');
        }
        else{
            axios.post('https://back-dashboardisep.projects.jcloud.fr/users/add',{name :this.state.name,lastname:this.state.lastname ,email: this.state.mail, password: this.state.password, passwordRepeat: this.state.password_repeat, role: this.state.role}).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

            alert('Votre tuteur : '+this.state.lastname +' '+ this.state.name +' a bien été ajouté : ');
        }
    }

    render() {
        return <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
            <br></br>
            <h5 class="container"> Ajouter un tuteur</h5>
            <br></br>
            <form class="container" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" value={this.state.lastname} onChange={this.handlelastNameChange}
                           placeholder="Nom" required/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange}
						   placeholder="Prénom" required/>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" value={this.state.mail} onChange={this.handleMailChange} placeholder="e-mail" required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" value={this.state.password}
                           onChange={this.handlePWChange} placeholder="Mot de passe" required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" value={this.state.password_repeat}
                           onChange={this.handlePW_RepChange} placeholder="Répétez votre mot de passe" required/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Valider</button>
                <br/>
                <p> </p>
            </form>

        </div>;
    }
}

export default Addtutor;