import React, { Component } from 'react';
import axios from 'axios';

class Addphase extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', start_date:'', end_date: '',description:''};
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handlestart_dateChange = this.handlestart_dateChange.bind(this);
        this.handleend_dateChange = this.handleend_dateChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlenameChange(event) {
        this.setState({name: event.target.value});
    }
    handlestart_dateChange(event) {
        this.setState({start_date: event.target.value});
    }
    handleend_dateChange(event) {
        this.setState({end_date: event.target.value});
    }
    handledescriptionChange(event) {
        this.setState({description: event.target.value});
    }
    handleSubmit(event) {
        axios.post('https://back-dashboardisep.projects.jcloud.fr/phases/add',{name: this.state.name, description: this.state.description, start_date: this.state.start_date, end_date: this.state.end_date}).then(function (response) {
            console.log(response);
            alert('Votre phase a bien été ajoutée');
        }).catch(function (error) {
            console.log(error);
            alert('Une erreur est survenue : '+error);
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className="Addphase" class="col-xl-12">
                <br></br>
                <h5> Ajouter une phase</h5>
                <form id="addphase">
                    <div class ="row">
                        <div class="form-group col-xl-6">
                            <input type="text" value={this.state.name} onChange={this.handlenameChange} class="form-control" id="Intitulé" placeholder="Intitulé"/>
                        </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de début : </p>
                                <input type="date" value={this.state.start_date} onChange={this.handlestart_dateChange} class=" form-control" id="date de fin théorique" placeholder="Date de début"/>
                            </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de fin : </p>
                                <input type="date" value={this.state.end_date} onChange={this.handleend_dateChange} class=" form-control" id="date de fin théorique" placeholder="Date de fin théorique"/>
                            </div>
                    </div>
                    <div class ="row">
                        <div class="col-xl-6">
                            <textarea value={this.state.description} onChange={this.handledescriptionChange} class="form-control" id="Description" placeholder="Description"/>
                        </div>
                    </div>


                    <button type="submit" onClick={this.handleSubmit}   class="btn btn-primary">Valider</button>
                </form>

            </div>
        );
    }
}

export default Addphase;