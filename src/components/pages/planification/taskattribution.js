import React, { Component } from 'react';
import axios from 'axios';

class Taskattribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phase:'', student:'', optionsTask:[], optionEleves:[]};
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
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.post('https://back-dashboardisep.projects.jcloud.fr/tasks/addStudentToTask/' + this.state.phase, {userId: parseInt(this.state.student)}).then(function (response) {
              alert('Votre tâche a bien été assignée');
          }).catch(function (error) {
              alert('Une erreur est survenue : '+error);
          });
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
            optionsTask.push([task.name, task.id])
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
          if (response.data.group != null){
            axios.get('https://back-dashboardisep.projects.jcloud.fr/groups/getStudents/'+response.data.group.id, header ).then(response => {
              response.data.students.map(student => {optionEleves.push([student.name, student.id])})
              this.setState({optionEleves})
            })
          }
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
                                {this.state.optionsTask.map(option => {return <option value={option[1]} key={option} >{option[0]}</option>})}
                            </select>
                        </div>
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.student} onChange={this.handleStudentChange} name="choosestudent">
                                <option value="" disabled selected>Choisir élève</option>
                                {this.state.optionEleves.map(option => {return <option value={option[1]} key={option} >{option[0]}</option>})}
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
