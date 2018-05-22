import React, { Component } from 'react';

class Addtutor extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render() {
        return <div className="Addtutor" class="col-xl-5">
            <br></br>
            <h5 class="container"> Ajouter un tuteur</h5>
            <br></br>
            <form class="container" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange}
                           placeholder="Nom"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="Prénom" placeholder="Prénom"/>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="mail" placeholder="e-mail"/>
                </div>
                <button type="submit" class="btn btn-primary">Valider</button>
            </form>

        </div>;
    }
}

export default Addtutor;