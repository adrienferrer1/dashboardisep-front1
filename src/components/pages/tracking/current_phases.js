import React, { Component } from 'react';

import { Chart } from 'react-google-charts';
import axios from "axios/index";

class Current_phases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phases:[],
        };
    }
    componentDidMount(){
        let phases = [];
        phases[0]=["Phase","Etat",{"role":"style"}];
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        axios.get('https://back-dashboardisep.projects.jcloud.fr/phases/all')
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                        let phase;
                        phase = [response.data[i].name,percentage_done(response.data[i]),"color:#ffc107"]
                        phases.push(phase);
                }
                this.setState({phases});
            });
    }
    render(){
        return(
            <div className="col-5">
                <br></br>
                <h5>Phases en cours</h5>
                <Chart
                    graph_id="BarChart1"
                    chartType = "BarChart"
                    data={this.state.phases}
                    width="100%">
                </Chart>
            </div>
        )
    }
}

function percentage_done(phase){
    let done_tasks=[];
    let todo_tasks=[];
    var percentage_done;
    for (var i=0 ; i < phase.tasks.length;i++){
        if(phase.tasks[i].done == true){
            done_tasks.push(phase.tasks[i]);
        }
        else{
            todo_tasks.push(phase.tasks[i]);
        }
    }
    percentage_done = done_tasks.length / (phase.tasks.length);
    return percentage_done;
}


export default Current_phases;