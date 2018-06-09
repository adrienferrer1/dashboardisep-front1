import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Tutor from './tutor';
import axios from 'axios';



class TutorSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            tutors: [],
        };
    }
    componentDidMount() {
        getTutors().then(
            data => {
                this.setState({
                    tutors: data,
                });
            });
    }
    render() {
        return (
            <Tutor state={this.state}/>
        );
    }
}

function getTutors(){
    let Tutors=[];
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    return axios.get('https://back-dashboardisep.projects.jcloud.fr/users/all')
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++){
                if(response.data[i].role==1){
                    Tutors.push(response.data[i]);
                }
            }
            return Tutors;
        });
}

export default TutorSearch;

