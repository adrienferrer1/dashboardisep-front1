import React, { Component } from 'react';
import axios from 'axios';

class Addtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', priority: '',startdate: '', enddate: '', phase:'',comment:'',time:0,unit:'', options:[]};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleEnddateChange = this.handleEnddateChange.bind(this);
        this.handlestartdateChange = this.handlestartdateChange.bind(this);
        this.handlePhaseChange = this.handlePhaseChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTimeChange(event) {
        this.setState({time: event.target.value});
    }

    handleUnitChange(event) {
        this.setState({unit: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
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
        event.preventDefault();
       var data = {
         name: this.state.title,
         start_date: new Date (this.state.startdate).getTime() / 1000,
         end_date: new Date (this.state.enddate).getTime() / 1000,
         time : convert_to_minute (this.state.time, this.state.unit)
       }
      axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
      axios.post('https://back-dashboardisep.projects.jcloud.fr/task/add/' + this.state.phase, data).then(function (response) {
            console.log(response);
            alert('Votre tâche a bien été ajoutée');
        }).catch(function (error) {
            console.log(error);
            alert('Une erreur est survenue : '+error);
        });

    }

    getPhaseOption(){
      var options = [];
      axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases', { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
            options = response.data.phases.map(phase => {return {phase}})
            this.setState({options})
          });
    }

    render() {
    	return (
    		<div className="Addtask" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    		    <br></br>
    			<h5> Ajouter une tâche</h5>
				<form id="addtask">
				  <div className ="row">
					  <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
					    <input type="text" value={this.state.title} onChange={this.handleTitleChange} class="form-control" id="Intitulé" placeholder="Intitulé"/>
					  </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <select className="custom-select" value={this.state.phase} onChange={this.handlePhaseChange}
                                  name="Phase" form="addtask">
                              <option value="" disabled selected>Sélectionner une phase</option>
                              {this.state.options.map(option => {
                                  return <option key={option.phase.id} value={option.phase.id}>{option.phase.name}</option>
                              })}
                          </select>
                      </div>
                  </div>
                  <div className="row">
                      <div className="from-group mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="input-group-prepend">
                              <span className="input-group-text">Date de début :</span>
                          </div>
                          <input type="date" value={this.state.startdate} onChange={this.handlestartdateChange}
                                 className="form-control" id="date de début" placeholder="Date de début"/>
                      </div>
                      <div className="from-group mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="input-group-prepend">
                              <span className="input-group-text">Date de fin théorique:</span>
                          </div>
                          <input type="date" value={this.state.enddate} onChange={this.handleEnddateChange}
                                 className="form-control" id="date de fin théorique"
                                 placeholder="Date de fin théorique"/>
                      </div>
                  </div>
                      <div className="row">
                              <p className="col-xl-2">Me notifier </p>
                              <div className="col-xl-2">
                                  <input type="number" min="0" value={this.state.time} onChange={this.handleTimeChange}  className="form-control" id="date de début" placeholder=""/>
                              </div>
                              <div className="col-xl-2">
                                  <select selected="selected" value={this.state.unit} className="form-control" onChange={this.handleUnitChange}>
                                      <option value='hours'>Heures</option>
                                      <option value='days'>Jours</option>
                                  </select>
                              </div>
                              <p className="col-xl-3">avant la fin de la tâche. </p>
                      </div>
                    <br/>
				  <div className ="row">
					  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					    <textarea className="form-control" value={this.state.comment} onChange={this.handleCommentChange} id="Commentaires" placeholder="Commentaires"/>
					  </div>
				  </div>
                    <br/>
				  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Valider</button>
				</form>

	    	</div>
    		);
    }
}

function convert_to_minute(date, unit){
    if (unit=='hours'){
        return date;
    }
    else if (unit=='days'){
        return date *24
    }
    return date;
}

export default Addtask;
