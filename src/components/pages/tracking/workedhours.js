import React, { Component } from 'react';

import { Chart } from 'react-google-charts';

class Workedhours extends Component {
    render(){
        return(
            <Chart
                graph_id="ganttchart"
                chartType = "Gantt"
                columns={this.state.columns}
                rows={this.state.rows}
                chartPackages={['gantt']}
                width="100%" height="9999px">
            </Chart>
        )

    }





}

export default Workedhours;