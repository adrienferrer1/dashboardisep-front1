import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Workedhours extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data:[["Eleve","Heures travaillées",{"role":"style"}],
                ["Moi",6,"darkblue"],
                ]

        };
    }
    render(){
        return(
            <div className="col-5">
                <br></br>
            <h5>Heures travaillées semaine en cours (en h)</h5>
                <Chart
                    graph_id="BarChart"
                    chartType = "BarChart"
                    data={this.state.data}
                    width="100%"
                >
                </Chart>
            </div>
        )

    }





}

export default Workedhours;