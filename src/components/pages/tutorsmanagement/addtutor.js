import React, { Component } from 'react';
import axios from 'axios';

class Addtutor extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', lastname:'', mail: ''};

        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
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
    handleSubmit(event) {
        axios.post('https://back-dashboardisep.projects.jcloud.fr/login',{email: this.state.login, password: this.state.password}).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
        alert('A name was submitted: ' + this.state.lastname + this.state.name + this.state.mail);
        event.preventDefault();
    }



    render() {
        return <div className="col-xl-5 col-lg-4 col-md-4 col-sm-3 col-12">
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
                <button type="submit" class="btn btn-primary">Valider</button>
            </form>

        </div>;
    }
}

export default Addtutor;