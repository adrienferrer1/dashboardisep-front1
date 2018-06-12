import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import ReactTable from "react-table";
import Modal from 'react-modal';

//MODALS STYLE
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('body');

class Tasklist extends React.Component {
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
        this.openModal=this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.postModal=this.postModal.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.handleStartdateChange=this.handleStartdateChange.bind(this);
        this.handleEnddateChange=this.handleEnddateChange.bind(this);
        this.handleCommentChange=this.handleCommentChange.bind(this);
        this.doneTask=this.doneTask.bind(this);
    }

    //MODAL STUFF
    openModal(task_id) {
        this.setState({modalIsOpen: true});
        this.setState({task_id : task_id});
    }
    postModal(){
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.post('https://back-dashboardisep.projects.jcloud.fr/tasks/modify/'+this.state.task_id,{name: this.state.title, description: this.state.comment, start_date: timeToStamp(this.state.startdate), end_date: timeToStamp(this.state.enddate)}).then(function (response){
            console.log('Modification de tâche :'+response);
        }).catch(function (error){
            console.log('Erreur lors de la modification de tâche :'+error);
        })
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    deleteTask(task_id) {
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.post('https://back-dashboardisep.projects.jcloud.fr/tasks/deleteOne/' + task_id).then(response => {
            alert ("tache surprimé")
        })

    }

    doneTask(task_id){
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/tasks/markAsDone/' + task_id).then(response => {
          alert("tache validée")
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
                //console.log(response.data.phases.length);
                for (var i = 0; i < response.data.phases.length; i++){
                    for (var j = 0; j < response.data.phases[i].tasks.length; j++) {
                        console.log(response.data.phases[i].tasks[j]);
                        tasks.push(response.data.phases[i].tasks[j]);

                    }
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
                        <button className="btn btn-outline-primary" onClick={()=>this.openModal(task.id)}>Modifier</button>
                        <button className="btn btn-outline-danger" onClick={()=>this.deleteTask(task.id)}>Supprimer</button>
                        <button className="btn btn-outline-success" onClick={()=>this.doneTask(task.id)}>Marquer comme faite</button>
                <p></p>
                    </div>)

        })
        return (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id="main">
                <Modal className="card col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <br/>
                    <h4 className="mx-auto">Modification d'une tâche</h4>
                    <button className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6 btn btn-warning" onClick={this.closeModal}>Annuler</button>
                    <p></p>
                    <form id="addtask">
                        <div className="row">
                            <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="text" value={this.state.title} onChange={this.handleTitleChange}
                                       className="form-control" id="Intitulé" placeholder="Intitulé"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="from-group mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Date de début :</span>
                                </div>
                                <input type="date" value={this.state.startdate} onChange={this.handleStartdateChange}
                                       className="form-control" id="date de début" placeholder="Date de début"/>
                            </div>
                            <div className="from-group mb-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Date de fin théorique:</span>
                                </div>
                                <input type="date" value={this.state.enddate} onChange={this.handleEnddateChange}
                                       className="form-control" id="date de fin théorique"
                                       placeholder="Date de fin théorique"/>
                            </div>
                        </div>
                        <div className="row container">
                            Commentaires :
                            <textarea value={this.state.comment} onChange={this.handleCommentChange} className="form-control mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" aria-label="With textarea"></textarea>
                        </div>

                        <a onClick={this.postModal} className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 btn btn-primary">Valider les modifications</a>
                        <br/>
                        <br/>
                        <a className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 btn btn-warning" onClick={this.closeModal}>Fermer</a>
                        <p></p>
                    </form>
                </Modal>
                <br></br>
                <h5>Liste des tâches</h5>
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

function timeToStamp(date1){
    var timestamp;
    timestamp=(Date.parse(date1))/1000;
    return timestamp;
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
