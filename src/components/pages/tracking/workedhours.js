import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Workedhours extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data:[["Eleve","Heures travaillées",{"role":"style"}],
                ["Eleve 1",6,"color:#ffc107"],
                ["Eleve 2",8,"darkblue"],
                ["Eleve 3",3,"color:#ffc107"],
                ["Eleve 4",3,"darkblue"],
                ["Eleve 5",10,"color:#ffc107"],
                ["Eleve 6",2,"darkblue"]]
        };
    }
    render(){
        return(
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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