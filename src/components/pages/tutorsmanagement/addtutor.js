import React, { Component } from 'react';

class Addtutor extends Component {
    render() {
    	return (
    		<div className="Addtutor" class="col-xl-5">
    			<h4 class="container"> Ajouter un tuteur</h4>
    			<br></br>
				<form class="container">
				  <div class="form-group">
				    <input type="text" class="form-control" id="Nom" placeholder="Nom"/>
				  </div>
				  <div class="form-group">
				    <input type="text" class="form-control" id="Prénom" placeholder="Prénom"/>
				  </div>
				  <div class="form-group">
				    <input type="email" class="form-control" id="mail" placeholder="e-mail"/>
				  </div>
				  <button type="submit" class="btn btn-primary">Valider</button>
				</form>

	    	</div>
    		);
    }
}

export default Addtutor;