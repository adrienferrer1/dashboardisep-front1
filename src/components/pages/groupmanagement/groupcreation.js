import React, { Component } from 'react';
import Memberlist from './memberlist';
import axios from 'axios';

class Groupcreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {groupname: '', student:'', students:[], group_students:[]};

        this.handlegroupNameChange = this.handlegroupNameChange.bind(this);
        this.handlestudentChange = this.handlestudentChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handlegroupSubmit = this.handlegroupSubmit.bind(this);
    }
    componentDidMount() {
        getStudents().then(
            data => {
                this.setState({
                    students: data,
                });
            });
    }
    handlegroupNameChange(event) {
        this.setState({groupname: event.target.value});
    }
    handlestudentChange(event) {
        this.setState({student: event.target.value});
    }
    handlegroupSubmit(event) {
        event.preventDefault();
        axios.post('https://back-dashboardisep.projects.jcloud.fr/groups/add',{name: this.state.groupname}).then(function (response) {
            alert('Votre groupe a bien été créé');
        }).catch(function (error) {
            alert('Un erreur est survenue : '+error);
            console.log(error);
        });
    }
    handleAddSubmit(event) {
        event.preventDefault();
        this.state.group_students.push(this.state.student);
        this.forceUpdate();
    }

    render() {
        let students = this.state.students;
        let optionItems1 = students.map((student) =>
            <option key={student.id}>
                {student.name} {student.lastname}</option>
        );
        return (
			<div className="container col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
				<br></br>
				<h5>Création d'un groupe</h5>
				<br></br>
					<div className="row container">
						<input type="text" className="form-control col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" value={this.state.groupname} onChange={this.handlegroupNameChange} placeholder="Nom du groupe"/>
					</div>
					<br></br>
					<div className="row container">
                        <select value={this.state.student} onChange={this.handlestudentChange} className="form-control col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">Choisir un élève
                            <option value='' disabled selected>Choisir un élève</option>
                            {optionItems1}
                        </select>
						<button className="btn btn-primary" onClick={this.handleAddSubmit}> Ajouter </button>
					</div>
				<br/>
				<div className="row container">
					<h5>Liste des membres du groupe</h5>
					<Memberlist state={this.state}/>
				</div>
                <br/>
                <br/>
                <button className="btn btn-primary mx-auto" onClick={this.handlegroupSubmit}> Valider la création du groupe</button>
			    <br/>
                <p></p>
            </div>
);}
}

function getStudents(){
    let students=[];
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    return axios.get('https://back-dashboardisep.projects.jcloud.fr/users/all')
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++){
                if(response.data[i].role==0){
                    students.push(response.data[i]);
                }
            }
            return students;
        });
}

export default Groupcreation;