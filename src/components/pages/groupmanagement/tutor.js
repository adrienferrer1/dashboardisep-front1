import React from 'react';

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
        alert('Votre tuteur : '+this.state.active_tutor+' a été assigné');
    }
    render () {
        let tutors = this.props.state.tutors;
        let optionItems = tutors.map((tutor) =>
                <option key={tutor.name}>{tutor.name} {tutor.lastname}</option>
            );

        return (
         <div className="dropdown" id="tutor-search">
             <select selected="selected" value={this.state.active_tutor} className="form-control" onChange={this.handleSelectChange}>
                 <option value='' disabled selected>Choisir votre tuteur</option>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Tutor;
