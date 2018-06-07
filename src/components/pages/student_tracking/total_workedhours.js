import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Totalworkedhours extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data:[["Eleve","Heures travaillées",{"role":"style"}],
                ["Moi",24,"darkblue"],]
        };
    }
    render(){
        return(
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <br></br>
                <h5>Heures travaillées au total (en h)</h5>
                <Chart
                    graph_id="BarChart2"
                    chartType = "BarChart"
                    data={this.state.data}
                    width="100%"
                >
                </Chart>
            </div>
        )

    }





}

export default Totalworkedhours;