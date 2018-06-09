import React, { Component } from 'react';
import Tutorsearch from "./tutorsearch";

import { render } from 'react-dom';



class Assigntutor extends React.Component {

    render() {
        return (
        		<div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
					<br></br>
					<h5>2 : Affecter un tuteur</h5>
					<br></br>
						<div className="row">
							<div>
								<Tutorsearch />
							</div>
						</div>
				</div>
        	);
    }
}


export default Assigntutor;
