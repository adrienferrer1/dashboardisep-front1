import React, { Component } from 'react';

class Addtask extends Component {
    render() {
    	return (
    		<div className="Addtask" class="col-xl-12">
    		    <br></br>
    			<h5> Ajouter une tâche</h5>
				<form id="addtask">
				  <div class ="row">
					  <div class="form-group col-xl-6">
					    <input type="text" class="form-control" id="Intitulé" placeholder="Intitulé"/>
					  </div>
					  <div class="form-group col-xl-2">
					    <input type="Number" class="form-control" id="Priorité" placeholder="Priorité"/>
					  </div>
					  <div class="form-group row">
					    <p class="col-xl-7">date de fin théorique : </p>
					    <input type="date" class="col-xl-5 form-control" id="date de fin théorique" placeholder="Date de fin théorique"/>
					  </div>
				  </div>
				  <div class ="row">
					  <div class="form-group col-xl-6">
					  	<select class="custom-select" name="Phase" form="addtask">
					  		<option value="" disabled selected>Sélectionner une phase</option>
					  		<option>Phase 1</option>
					  		<option>Phase 2</option>
					  	</select>
					  </div>
					  <div class="col-xl-6">
					    <textarea class="form-control" id="Commentaires" placeholder="Commentaires"/>
					  </div>
				  </div>


				  <button type="submit" class="btn btn-primary">Valider</button>
				</form>

	    	</div>
    		);
    }
}

export default Addtask;