import React, { Component } from 'react';
import Memberlist from './memberlist';

class Groupcreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {groupname: '', studentsearch:''};

        this.handlegroupNameChange = this.handlegroupNameChange.bind(this);
        this.handlestudentSearchChange = this.handlestudentSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlegroupNameChange(event) {
        this.setState({groupname: event.target.value});
    }
    handlestudentSearchChange(event) {
        this.setState({studentserch: event.target.value});
    }
    handlegroupSubmit(event) {
        alert('A name was submitted: ' + this.state.lastname + this.state.name + this.state.mail);
        event.preventDefault();
    }
    handlesearchSubmit(event) {
        alert('A name was submitted: ' + this.state.lastname + this.state.name + this.state.mail);
        event.preventDefault();
    }

    render() {
        return (
			<div class="col-xl-6">
				<br></br>
				<h5>Création d'un groupe</h5>
				<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" value={this.state.groupname} onChange={this.handlegroupNameChange} placeholder="Nom du groupe"/>
						<button class="btn btn-primary col-2" onSubmit={this.handlegroupSubmit}> Créer </button>
					</div>
					<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" placeholder="Rechercher un élève"/>
						<button class="btn btn-primary col-2" onSubmit={this.handlegroupSubmit}> Rechercher </button>
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