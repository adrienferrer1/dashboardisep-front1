import React, { Component } from 'react';

class Assigntutor extends React.Component {
    render() {
        return (
        		<div class="col-xl-5">
        		<h3>Affecter un tuteur</h3>
        		<br></br>
        			<div class="container row">
						<input type="text" class="form-control col-6" placeholder="Rechercher un tuteur"/>
						<button class="btn btn-primary col-3"> Rechercher </button>
					</div>
					<br></br>
					<button class="btn btn-primary"> Valider </button>
				</div>

        	);
    }
}


export default Assigntutor;
