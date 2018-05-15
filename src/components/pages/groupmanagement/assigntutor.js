import React, { Component } from 'react';
import Tutorsearch from "./tutorsearch";

class Assigntutor extends React.Component {
    render() {
        return (
        		<div class="col-5">
        		<h3>Affecter un tuteur</h3>
        		<br></br>
					<div className="row">
						<div className="col-6">
                            <Tutorsearch />
						</div>

						<button className="col-2 btn btn-primary"> Valider </button>
					</div>
				</div>

        	);
    }
}


export default Assigntutor;
