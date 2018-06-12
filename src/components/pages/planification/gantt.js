import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import axios from 'axios';

class Gantt extends Component {

    constructor(props) {
        super(props);
        this.state = {

            rows: [

              // ['Research','Find sources',new Date(2015,1,1,8,0,0), new Date(2015,1,5,8,0,0),null,100,null],
              // ['Write','Write paper',null,new Date(2015,1,9,12,0,0),259200000,25,'Research,Outline'],
              // ['Outline','Outline paper',null,new Date(2015,1,6,8,0,0),86400000,100,'Research'],


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
                id:'Resource',
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


    getTaskListGantt(){
      console.log("List creation:");
        var phases = []
        var rows = []
          axios.get('https://back-dashboardisep.projects.jcloud.fr/users/myGroupPhases', { headers: { Authorization: sessionStorage.getItem('token') }}).then(response => {
                phases = response.data.phases
                phases.map(p => {
                  rows.push([p.id.toString(),p.name,null,new Date(p.start_date*1000),new Date(p.end_date*1000),null,0,null])
                  p.tasks.map(t => {
                      rows.push([t.id.toString(),t.name,p.name,new Date(t.start_date*1000),new Date(t.end_date*1000),null,t.done? 100 : 0,p.id.toString()])
                  });
                });
                console.log(rows);
              });
              this.state.rows=rows;



          }



    render() {

        return (
            <div className="col-12">
                <h5>Digramme de Gantt</h5>
              {this.getTaskListGantt()}

                    <div className={'my-pretty-chart-container'} width="100%" height="800px">
                        <Chart
                               graph_id="ganttchart"
                               chartType = "Gantt"
                               columns={this.state.columns}
                               rows={this.state.rows}
                               width="100%" height="800px">
                           </Chart>
                </div>


                    </div>);
    }
}

export default Gantt;
