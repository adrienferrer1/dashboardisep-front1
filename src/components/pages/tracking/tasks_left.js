import React, { Component } from 'react';
import axios from 'axios';


class Tasks_left extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks:[],
        }
    }
    componentDidMount(){
        let tasks = [];
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/tasks/all')
            .then(response => {
                for (var i = 0; i < response.data.length; i++){
                    if (response.data[i].done==false) {
                        tasks.push(response.data[i]);
                    }
                }
                this.setState({tasks});
                console.log(this.state.tasks);
            });
    }
    render() {
        let rows = this.state.tasks.map(person => {
            return <TaskRow key = {
                person.name
            } data = {person}
            />
        })
        return (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <br></br>
                <h5>Tâches Restantes</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Intitulé</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Durée</th>
                    </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody></table></div>);
    }
}

const TaskRow = (props) => {
    return (
        <tr>
            <td>
                { props.data.name }
            </td>
            <td>
                { timeConverter(props.data.start_date)}
            </td>
            <td>
                { timeConverter(props.data.end_date) }
            </td>
            <td>
                { hourConverter(Duration(props.data.end_date,props.data.start_date)) }j
            </td>
        </tr>
    );
}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year ;
    return time;
}

function hourConverter(time) {
    var hours;
    hours = time / (3600*24);
    return hours;
}


function Duration(date1,date2){
    var time;
    time = Math.abs(date2 - date1);
    return time;

}


export default Tasks_left;
