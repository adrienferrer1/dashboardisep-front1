import React, { Component } from 'react';
import axios from 'axios';

class Taskattribution extends React.Component {
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

    componentDidMount(){
      this.getTaskOption();
      this.getElevesOption();
    }

    getTaskOption(){
      var optionsTask = [];
      axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases', { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
        response.data.phases.map(phase => {
          phase.tasks.map(task => {
            optionsTask.push(task.name)
          })
        })
            this.setState({optionsTask})
          })
    }

    getElevesOption(){
      var header = { headers: { Authorization: sessionStorage.getItem('token') }};
      var optionEleves = [];
      axios.get('https://back-dashboardisep.projects.jcloud.fr/users/me', header)
        .then(response => {
          axios.get('https://back-dashboardisep.projects.jcloud.fr/groups/getStudents/'+response.data.group.id, header ).then(response => {
            optionEleves = response.data.students.map(student => { return student.name})
                this.setState({optionEleves})
              })
        });
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
                                {this.state.optionsTask.map(option => {return <option value={option} key={option} >{option}</option>})}
                            </select>
                        </div>
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.student} onChange={this.handleStudentChange} name="choosestudent">
                                <option value="" disabled selected>Choisir élève</option>
                                {this.state.optionEleves.map(option => {return <option value={option} key={option} >{option}</option>})}
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
