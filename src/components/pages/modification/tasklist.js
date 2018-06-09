import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import ReactTable from "react-table";



class Tasklist extends React.Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            test:'',
        }
        this.myRef = React.createRef();
    }



    componentDidMount(){
        let tasks = [];
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/tasks/all')
            .then(response => {
                for (var i = 0; i < response.data.length; i++){
                    tasks.push(response.data[i]);
                }
                this.setState({tasks});
                console.log(this.state.tasks);
            });
    }
    render() {
        let rows = this.state.tasks.map(task => {
            console.log(task);
            return <TaskRow key = {task} data = {task}
            />

        })
        return (
            <div className="col-12">
                <br></br>
                <h5>Liste des tâches</h5>
                <table className="col-xl-12 table">
                    <thead>
                    <tr>
                        <th>Intitulé</th>
                        <th>Date de début</th>
                        <th>Date de fin </th>
                        <th>Prénom réalisateur</th>
                        <th>Nom réalisateur</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody>
                </table>
            </div>);
    }
}

function TaskRow(props,foo){
    return (
        <tr>
            <td>
                { props.data.name }
            </td>
            <td>
                { timeConverter(props.data.start_date) }
            </td>
            <td>
                { timeConverter(props.data.end_date) }
            </td>
            <td>
                { student_name(props.data) }
            </td>
            <td>
                { student_lastname(props.data) }
            </td>
            <td>
                <button className="btn btn-outline-primary" onClick={()=>hello()}>Modifier</button>
            </td>
            <td>
                <button className="btn btn-outline-danger">Supprimer</button>
            </td>
        </tr>
    );
}
function hello() {
    let test;
    test = "hello";
    alert(test);
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

function student_name(foo){
    try{
        if(foo.students[0].name=='undefined'){
            return 'Non attribué';
        }
        else return foo.students[0].name;
    }
    catch (e) {
        console.log(e);
    }

}

function student_lastname(foo){
    try{
        if(foo.students[0].lastname=='undefined'){
            return 'Non attribué';
        }
        else return foo.students[0].lastname;
    }
    catch (e) {
        console.log(e);
    }

}

export default Tasklist;
