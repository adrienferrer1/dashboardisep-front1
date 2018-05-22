import React, { Component } from 'react';
import Tutorsearch from "./tutorsearch";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

class Assigntutor extends React.Component {
    render() {
        return (
        		<div class="col-5">
				<br></br>
        		<h5>Affecter un tuteur</h5>
        		<br></br>
					<div className="row">
						<div className="col-6">
                            <Tutorsearch />
						</div>
						<button className="col-2 btn btn-primary"> Valider </button>
					</div>

          <XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>
				</div>

        	);
    }
}


export default Assigntutor;
