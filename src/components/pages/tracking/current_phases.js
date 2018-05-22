import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Current_phases extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data:[["Phase","Etat",{"role":"style"}],
                ["Phase A",0.60,"color:#ffc107"],
                ["Phase B",0.40,"color:#ffc107"],
                ["Phase C",0.10,"color:#ffc107"],
      ]
        };
    }
    render(){
        return(
            <div className="col-5">
                <br></br>
                <h5>Phases en cours</h5>
                <Chart
                    graph_id="BarChart1"
                    chartType = "BarChart"
                    data={this.state.data}
                    width="100%"
                >
                </Chart>
            </div>
        )

    }





}

export default Current_phases;