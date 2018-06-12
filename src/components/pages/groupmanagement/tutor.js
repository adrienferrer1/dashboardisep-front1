import React from 'react';
import axios from "axios/index";

class Tutor extends React.Component {
    constructor() {
        super();
        this.state = {
            active_tutor:'', //variable tampon
        }
        this.handleTutorSubmit = this.handleTutorSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event){
        this.setState({active_tutor: event.target.value});
    }
    handleTutorSubmit(){
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.post('https://back-dashboardisep.projects.jcloud.fr/users/associateGroupToTutor/'+this.state.active_tutor,{groupId : parseInt(sessionStorage.getItem('group_id'))}).then(function (response) {
        })
        alert('Votre tuteur a été assigné');
    }
    render () {
        let tutors = this.props.state.tutors;
        let optionItems = tutors.map((tutor) =>
                <option value={tutor.id}>{tutor.name} {tutor.lastname}</option>
            );

        return (
         <div className="dropdown " id="tutor-search">
             <select required selected="selected" value={this.state.active_tutor} className="form-control " onChange={this.handleSelectChange}>
                 <option value='' disabled selected>Choisir votre tuteur</option>
                {optionItems}
             </select>
             <button className="btn btn-primary mx-auto" onClick={this.handleTutorSubmit}> Assigner le tuteur</button>


         </div>
        )
    }
}

export default Tutor;
