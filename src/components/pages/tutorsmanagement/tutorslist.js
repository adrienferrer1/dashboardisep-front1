import React, { Component } from 'react';

class Tutorslist extends Component {
    render() {
    	return (
    		<div className="Tutorslist" class="col-xl-5">
    			<h4 class="container"> Liste des tuteurs</h4>
    			<br></br>
					<table class="table">
					  <thead>
					    <tr>
					      <th scope="col">Nom</th>
					      <th scope="col">Prénom</th>
					      <th scope="col">e-mail</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Nom 1</td>
					      <td>Prénom 1</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					    <tr>
					      <td>Nom 2</td>
					      <td>Prénom 2</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					    <tr>
					      <td>Nom 3</td>
					      <td>Prénom 3</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					  </tbody>
					</table>

	    	</div>
    		);
    }
}

export default Tutorslist;