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
        var data = {name: this.state.name,
          description: this.state.description,
          start_date: new Date (this.state.start_date).getTime() /1000,
          end_date: new Date (this.state.end_date).getTime() /1000};

        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        console.log(data);
        axios.get('https://back-dashboardisep.projects.jcloud.fr/users/me')
          .then(response => {
            if (response.data.group != null){
              console.log(response.data.group.id);
              axios.post('https://back-dashboardisep.projects.jcloud.fr/phases/add/'+response.data.group.id, data ).then(response => {
                alert('Votre phase a bien été ajoutée');
              }).catch(function (error) {
                  console.log(error);
                  alert('Une erreur est survenue : '+error);
              });
            }
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
                        <div className="from-group mb-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Date de début :</span>
                            </div>
                            <input type="date" value={this.state.start_date} onChange={this.handlestart_dateChange}
                                   className="form-control" id="date de début" placeholder="Date de début"/>
                        </div>
                        <div className="from-group mb-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Date de fin :</span>
                            </div>
                            <input type="date" value={this.state.end_date} onChange={this.handleend_dateChange}
                                   className="form-control" id="date de fin" placeholder="Date de fin"/>
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

function convert_to_minute(date,unit){
    let time;
    if (unit=='hours'){
        time = date * 60;
    }
    else if (unit=='days'){
        time = date * 1440;
    }
    else{
        time=date;
    }
    return time;
}

export default Addphase;
