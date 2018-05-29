import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';


class Tasklist extends Component {

    constructor() {
        super();
        this.state = {
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
    render() {
        let rows = this.state.data.map(person => {
            return <TaskRow key = {
                person.name
            } data = {person}
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
                        <th>Priorité /5</th>
                        <th>Nom réalisateur</th>
                        <th>Prénom réalisateur</th>
                    </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody></table>

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
                { props.data.title }
            </td>
            <td>
                { props.data.priority }
            </td>
            <td>
                { props.data.name }
            </td>
            <td>
                { props.data.lastname }
            </td>
        </tr>
    );
}

export default Tasklist;
