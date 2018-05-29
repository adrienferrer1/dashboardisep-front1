import React, { Component } from 'react';
import Tutorsearch from "./tutorsearch";

import { render } from 'react-dom';



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




				</div>

        	);
    }
}


export default Assigntutor;
