import React, { Component } from 'react';
import axios from "axios/index";

class Tutorslist extends Component {
    constructor() {
        super();
        this.state = {
            tutors:[],
            data: [{
                name: "Aymeric",
                lastname: "De Javel",
				email : "adejavel@isep.fr"
            }, {
                name: "Alain",
                lastname: "Rizkallah",
                email : "arizkallah@isep.fr"
            }, {
                name: "François",
                lastname: "De Verdun",
                email : "adeverdun@isep.fr"
            }, {
                name: "Adrien",
                lastname: "Ferrer",
                email : "aferrer@isep.fr"
            }]
        }
    }

    componentDidMount(){
        let tutors = [];
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/users/all')
            .then(response => {
                for (var i = 0; i < response.data.length; i++){
                    if (response.data[i].role==1) {
                        tutors.push(response.data[i]);
                    }
                }
                this.setState({tutors});
                console.log(tutors);
            });
    }

    render() {
        let rows = this.state.tutors.map(person => {
            return <PersonRow key = {
                person.name
            } data = {person}
            />
        })
        return (
        	<div className="col-xl-5 col-lg-4 col-md-4 col-sm-3 col-12">
                <br></br>
				<h5>Liste des tuteurs</h5>
                <table className="table">

                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                < tbody > {
                    rows
                } </tbody></table></div>);
            }
            }

            const PersonRow = (props) => {
                return (
                <tr>
					<td>
					{ props.data.name }
					</td>
					<td>
					{ props.data.lastname }
					</td>
					<td>
					{ props.data.email }
					</td>
                </tr>
                );
            }


export default Tutorslist;