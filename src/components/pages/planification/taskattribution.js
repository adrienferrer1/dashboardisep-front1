import React, { Component } from 'react';

class Taskattribution extends Component {
    constructor(props) {
        super(props);
        this.state = {phase: '', student:''};
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

    render() {
        return (
            <div className="Taskattribution" class="col-xl-12">
                <br></br>
                <h5> Attribuer une tâche</h5>
                <form id="taskattribution">
                    <div class ="row">
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.phase} onChange={this.handlePhaseChange} name="choosetask">
                                <option value="" disabled selected>Sélectionner une phase</option>
                                <option>Phase 1</option>
                                <option>Phase 2</option>
                            </select>
                        </div>
                        <div class="form-group col-xl-6">
                            <select class="custom-select" value={this.state.student} onChange={this.handleStudentChange} name="choosestudent">
                                <option value="" disabled selected>Choisir élève</option>
                                <option>Elève 1</option>
                                <option>Elève 2</option>
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