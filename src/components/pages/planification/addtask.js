import React, { Component } from 'react';
import axios from 'axios';

class Addtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', priority: '',startdate: '', enddate: '', phase:'',comment:'', options:[]};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleEnddateChange = this.handleEnddateChange.bind(this);
        this.handlestartdateChange = this.handlestartdateChange.bind(this);
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
    handlestartdateChange(event) {
        this.setState({startdate: event.target.value});
    }
    handlePhaseChange(event) {
        this.setState({phase: event.target.value});
    }
    handleCommentChange(event) {
        this.setState({comment: event.target.value});
    }

    componentDidMount(){
      this.getPhaseOption();
    }
    handleSubmit(event) {
       var data = {
         name: this.state.title,
         description: this.state.comment,
         start_date: new Date (this.state.startdate).getTime(),
         end_date: new Date (this.state.enddate).getTime()
        }
      var header = { headers: { Authorization: sessionStorage.getItem('token') }};
      /*  axios.post('https://back-dashboardisep.projects.jcloud.fr/task/add' + this.state.phase, data, header).then(function (response) {
            console.log(response);
            alert('Votre tâche a bien été ajoutée');
        }).catch(function (error) {
            console.log(error);
            alert('Une erreur est survenue : '+error);
        });*/
        event.preventDefault();
    }

    getPhaseOption(){
      var options = [];
      axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases', { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
            options = response.data.phases.map(phase => {return phase.name})
            this.setState({options})
          });
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
					    <p class="col-xl-7">date de début : </p>
					    <input type="date" value={this.state.startdate} onChange={this.handlestartdateChange} class="col-xl-5 form-control" id="date de début" placeholder="Date de début"/>
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
                {this.state.options.map(option => {return <option value={option} key={option} >{option}</option>})}
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
