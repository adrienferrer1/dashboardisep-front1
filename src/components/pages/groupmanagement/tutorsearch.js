import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Tutor from './tutor';

class TutorSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            tutors: [],
        };
    }
    componentDidMount() {
        let initialTutors = [];
        fetch('https://swapi.co/api/planets/')
            .then(response => {
                return response.json();
            }).then(data => {
            initialTutors = data.results.map((tutor) => {
                return tutor
            });
            console.log(initialTutors);
            this.setState({
                tutors: initialTutors,
            });
        });
    }

    render() {
        return (
            <Tutor state={this.state}/>
        );
    }
}
// after component is finished

export default TutorSearch;

//ReactDOM.render(<TutorSearch />, document.getElementById('react-search'));
