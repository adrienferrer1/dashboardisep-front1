import React, { Component } from 'react';
import axios from "axios/index";

class Tutorslist extends Component {
    constructor() {
        super();
        this.state = {
            tutors:[],
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
        	<div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
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