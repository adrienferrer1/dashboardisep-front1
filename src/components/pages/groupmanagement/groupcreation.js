import React, { Component } from 'react';
import Memberlist from './memberlist';
import axios from 'axios';

class Groupcreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {groupname: '', studentsearch:''};

        this.handlegroupNameChange = this.handlegroupNameChange.bind(this);
        this.handlestudentSearchChange = this.handlestudentSearchChange.bind(this);
        this.handlesearchSubmit = this.handlesearchSubmit.bind(this);
        this.handlegroupSubmit = this.handlegroupSubmit.bind(this);
    }
    handlegroupNameChange(event) {
        this.setState({groupname: event.target.value});
    }
    handlestudentSearchChange(event) {
        this.setState({studentsearch: event.target.value});
    }
    handlegroupSubmit(event) {
        alert(this.state.groupname);
        axios.post('https://back-dashboardisep.projects.jcloud.fr/groups/add',{name: this.state.groupname}).then(function (response) {
            console.log(response);
            alert('Votre groupe a bien été créé');
        }).catch(function (error) {
            alert('Un erreur est survenue : '+error);
            console.log(error);
        });
        event.preventDefault();
    }
    handlesearchSubmit(event) {
        alert(this.state.studentsearch);
        event.preventDefault();
    }

    render() {
        return (
			<div class="col-xl-6 col-lg-6">
				<br></br>
				<h5>Création d'un groupe</h5>
				<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" value={this.state.groupname} onChange={this.handlegroupNameChange} placeholder="Nom du groupe"/>
						<button class="btn btn-primary col-2" onClick={this.handlegroupSubmit}> Créer </button>
					</div>
					<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" value={this.state.studentsearch} onChange={this.handlestudentSearchChange}placeholder="Rechercher un élève"/>
						<button class="btn btn-primary col-2" onClick={this.handlesearchSubmit}> Rechercher </button>
					</div>
				<br></br>
				<div class="row">
					<h5>Liste des membres du groupe</h5>
					<Memberlist/>
				</div>
			</div>
);}
}
export default Groupcreation;