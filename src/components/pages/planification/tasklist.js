import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';


class Tasklist extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],

            data: [{
                title : "Rédiger le CdC",
                priority: "4",
                name: "Aymeric",
                lastname : "De Javel"
            },{
                title : "Développer la page de login",
                priority: "2",
                name: "Alain",
                lastname : "Rizkallah"
            }, {
                title : "Déployer le site web",
                priority: "3",
                name: "Francçois",
                lastname : "De Verdun"
            },],

            rows: [
                     ['Research','Find sources',new Date(2015,1,1,8,0,0), new Date(2015,1,5,8,0,0),null,100,null],
                     ['Write','Write paper',null,new Date(2015,1,9,12,0,0),259200000,25,'Research,Outline'],
                     ['Cite','Create bibliography',null,new Date(2015,1,7,8,0,0),86400000,20,'Research'],
                     ['Complete','Hand in paper',null,new Date(2015,1,10,8,0,0),86400000,0,'Cite,Write'],
                     ['Outline','Outline paper',null,new Date(2015,1,6,8,0,0),86400000,100,'Research'],
                 ],
            columns: [
              {
                id:'Task ID',
                type:'string',
              },
              {
                id:'Task Name',
                type:'string',
              },
              {
                id:'Start Date',
                type:'date',
              },
              {
                id:'End Date',
                type:'date',
              },
              {
                id:'Duration',
                type:'number',
              },
              {
                id:'Percent Complete',
                type:'number',
              },
              {
                id:'Dependencies',
                type:'string',
              },
            ],
        }
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
                console.log(tasks);
                console.log(this.state.tasks);
            });
    }
    render() {
        let rows = this.state.tasks.map(task => {
            return <TaskRow key = {
                task.name
            } data = {task}
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
                        </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody>
                </table>

                    <div className={'my-pretty-chart-container'}>
                        <Chart
                               graph_id="ganttchart"
                               chartType = "Gantt"
                               columns={this.state.columns}
                               rows={this.state.rows}
                               width="100%" height="300px">
                           </Chart>
                </div>


                    </div>);
    }
}

const TaskRow = (props) => {
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
                { props.data.students[0].name }
            </td>
            <td>
                { props.data.students[0].lastname }
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

export default Tasklist;
