import React, { Component } from 'react';

class Addtask extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', priority:'', enddate: '', phase:'',comment:''};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleEnddateChange = this.handleEnddateChange.bind(this);
        this.handlePhaseChange = this.handlePhaseChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handlePriorityChange(event) {
        this.setState({priority: event.target.value});
    }
    handleEnddateChange(event) {
        this.setState({enddate: event.target.value});
    }
    handlePhaseChange(event) {
        this.setState({phase: event.target.value});
    }
    handleCommentChange(event) {
        this.setState({comment: event.target.value});
    }


    handleSubmit(event) {
        alert(this.state.title  + this.state.priority + this.state.enddate + this.state.phase + this.state.comment );
        event.preventDefault();
    }

    getPhaseOption(){
        //recup json server et traitement pour remplir le tableau a faire
        //TO DO
        this.state.options = ["phase 1", "Phase 2"]
        return this.state.options;
    }

    render() {
    	return (
    		<div className="Addtask" class="col-xl-12">
    		    <br></br>
    			<h5> Ajouter une tâche</h5>
				<form id="addtask">
				  <div class ="row">
					  <div class="form-group col-xl-6">
					    <input type="text" value={this.state.title} onChange={this.handleTitleChange} class="form-control" id="Intitulé" placeholder="Intitulé"/>
					  </div>
					  <div class="form-group col-xl-2">
					    <input type="Number" value={this.state.priority} onChange={this.handlePriorityChange} class="form-control" id="Priorité" placeholder="Priorité"/>
					  </div>
					  <div class="form-group row">
					    <p class="col-xl-7">date de fin théorique : </p>
					    <input type="date" value={this.state.enddate} onChange={this.handleEnddateChange} class="col-xl-5 form-control" id="date de fin théorique" placeholder="Date de fin théorique"/>
					  </div>
				  </div>
				  <div class ="row">
					  <div class="form-group col-xl-6">
					  	<select class="custom-select" value={this.state.phase} onChange={this.handlePhaseChange} name="Phase" form="addtask">
					  		<option value="" disabled selected>Sélectionner une phase</option>
                {this.getPhaseOption().map(option => {return <option value={option} key={option} >{option}</option>})}
					  	</select>
					  </div>
					  <div class="col-xl-6">
					    <textarea class="form-control" value={this.state.comment} onChange={this.handleCommentChange} id="Commentaires" placeholder="Commentaires"/>
					  </div>
				  </div>


				  <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Valider</button>
				</form>

	    	</div>
    		);
    }
}

export default Addtask;
