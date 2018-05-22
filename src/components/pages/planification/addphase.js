import React, { Component } from 'react';

class Addphase extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', startdate:'', enddate: '',comment:''};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStartdateChange = this.handleStartdateChange.bind(this);
        this.handleEnddateChange = this.handleEnddateChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleStartdateChange(event) {
        this.setState({startdate: event.target.value});
    }
    handleEnddateChange(event) {
        this.setState({enddate: event.target.value});
    }
    handleCommentChange(event) {
        this.setState({comment: event.target.value});
    }


    handleSubmit(event) {
        alert(this.state.title  + this.state.startdate + this.state.enddate + this.state.comment );
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
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} class="form-control" id="Intitulé" placeholder="Intitulé"/>
                        </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de début : </p>
                                <input type="date" value={this.state.startdate} onChange={this.handleStartdateChange} class=" form-control" id="date de fin théorique" placeholder="Date de début"/>
                            </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de fin : </p>
                                <input type="date" value={this.state.enddate} onChange={this.handleEnddateChange} class=" form-control" id="date de fin théorique" placeholder="Date de fin théorique"/>
                            </div>
                    </div>
                    <div class ="row">
                        <div class="col-xl-6">
                            <textarea value={this.state.comment} onChange={this.handleCommentChange} class="form-control" id="Commentaires" placeholder="Commentaires"/>
                        </div>
                    </div>


                    <button type="submit" onClick={this.handleSubmit}   class="btn btn-primary">Valider</button>
                </form>

            </div>
        );
    }
}

export default Addphase;