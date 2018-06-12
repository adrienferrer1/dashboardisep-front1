import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import ReactTable from "react-table";

//MODALS STYLE

class Mark_task extends React.Component {
    constructor() {
        super();
        this.state = {
            title:'',
            startdate:'',
            enddate:'',
            comment:'',
            task_id:'',
            modalIsOpen: false,
            tasks: [],
            test:'',
        }

        this.deleteTask=this.deleteTask.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.handleStartdateChange=this.handleStartdateChange.bind(this);
        this.handleEnddateChange=this.handleEnddateChange.bind(this);
        this.handleCommentChange=this.handleCommentChange.bind(this);
    }

    deleteTask(task_id) {
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.delete('https://back-dashboardisep.projects.jcloud.fr/tasks/one/' + task_id).then(function (response) {
            console.log(response);
        })
    }

    //MODAL FORM CONTROL
    handleTitleChange(event){
        this.setState({title: event.target.value})
    }

    handleStartdateChange(event){
        this.setState({startdate: event.target.value})
    }

    handleEnddateChange(event){
        this.setState({enddate: event.target.value})
    }

    handleCommentChange(event){
        this.setState({comment: event.target.value})
    }

    componentDidMount(){
        let tasks = [];
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases')
            .then(response => {
                for (var i = 0; i < response.data.length; i++){
                    tasks.push(response.data[i]);
                }
                this.setState({tasks});
                //console.log(this.state.tasks);
            });
    }
    render() {
        let rows = this.state.tasks.map(task => {
            //console.log(task.id);
            return (<div>
                <TaskRow key = {task} data = {task} />
                <button className="btn btn-outline-danger" onClick={()=>this.deleteTask(task.id)}>Marquer comme effectuer</button>
                <p></p>
            </div>)
        })
        return (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="main">

                <br></br>
                <h5>Marquer les tâches réalisées </h5>
                <table className="col-xl-12 table">
                    < tbody > {
                        rows
                    } </tbody>
                </table>
            </div>);
    }
}

function TaskRow(props){
    return (
        <tr>
            <td>
                <u>Intitulé :</u>  <br/><strong>{ props.data.name }</strong>
            </td>
            <td>
                <u>Date de début :</u> <br/>{ timeConverter(props.data.start_date) }
            </td>
            <td>
                <u>Date de fin :</u>  <br/>{ timeConverter(props.data.end_date) }
            </td>
            <td>
                <u>Nom réalisateur :</u>  <br/>{ student_name(props.data) }
            </td>
            <td>
                <u>Prénom réalisateur :</u>  <br/>{ student_lastname(props.data) }
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

export default Mark_task;
