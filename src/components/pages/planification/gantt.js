import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';


class Gantt extends Component {

    constructor() {
        super();
        this.state = {

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
      
        return (
            <div className="col-12">

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

export default Gantt;
