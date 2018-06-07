import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Totalworkedhours extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data:[["Eleve","Heures travaillées",{"role":"style"}],
                ["Eleve 1",24,"darkblue"],
                ["Eleve 2",18,"color:#ffc107"],
                ["Eleve 3",31,"darkblue"],
                ["Eleve 4",33,"color:#ffc107"],
                ["Eleve 5",29,"darkblue"],
                ["Eleve 6",21,"color:#ffc107"]]
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