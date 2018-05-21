import React, { Component } from 'react';
import Memberlist from './memberlist';



class Groupcreation extends React.Component {
    render() {
        return (
			<div class="col-xl-6">
				<br></br>
				<h5>Création d'un groupe</h5>
				<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" placeholder="Nom du groupe"/>
						<button class="btn btn-primary col-2"> Créer </button>
					</div>
					<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" placeholder="Rechercher un élève"/>
						<button class="btn btn-primary col-2"> Rechercher </button>
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