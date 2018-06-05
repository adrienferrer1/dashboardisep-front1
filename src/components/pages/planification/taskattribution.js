import React, { Component } from 'react';
import axios from 'axios';

class Taskattribution extends Component {
    constructor(props) {
        super(props);
        this.state = {phase: '', student:'', optionsTask:[], optionEleves:[]};
        this.handlePhaseChange = this.handlePhaseChange.bind(this);
        this.handleStudentChange = this.handleStudentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlePhaseChange(event) {
        this.setState({phase: event.target.value});
    }
    handleStudentChange(event) {
        this.setState({student: event.target.value});
    }
    handleSubmit(event) {
        alert(this.state.phase  + this.state.student);
        event.preventDefault();
    }

    getTaskOption(){
      var optionsTask = []
      axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases', { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
        response.data.phases.map(phase => {
          phase.tasks.map(task => {
            optionsTask.push(task.name)
          })
        })
            this.setState({optionsTask})
          })
      return this.state.optionsTask;
    }

    getElevesOption(){
      var group = 11;
      var optionEleves = []
      axios.get('https://back-dashboardisep.projects.jcloud.fr/groups/getStudents/'+group, { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
        optionEleves = response.data.students.map(student => { return student.name})
        console.log(optionEleves);
            this.setState({optionEleves})
          })
      return this.state.optionEleves;

        //recup json server et traitement pour remplir le tableau a faire
        //TO DO
    }

    render() {
        return (
            <div className="Taskattribution" class="col-xl-12">
                <br></br>
                <h5> Attribuer une tâche</h5>
                <form id="taskattribution">
                    <div class ="row">
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.phase} onChange={this.handlePhaseChange} name="choosetask">
                                <option value="" disabled selected>Sélectionner une tâche</option>
                                {this.getTaskOption().map(option => {return <option value={option} key={option} >{option}</option>})}
                            </select>
                        </div>
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.student} onChange={this.handleStudentChange} name="choosestudent">
                                <option value="" disabled selected>Choisir élève</option>
                                {this.getElevesOption().map(option => {return <option value={option} key={option} >{option}</option>})}
                            </select>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Valider</button>
                </form>

            </div>
        );
    }
}

export default Taskattribution;
