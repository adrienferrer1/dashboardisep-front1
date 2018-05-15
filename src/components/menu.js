import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends React.Component {
    render() {
    	return (
			  <div class="col-xl-2">
    			<div class="list-group" id="list-tab" role="tablist">
	      			<a href="/Tutorsmanagement" class="list-group-item list-group-item-action" role="tab">Gestion Tuteurs</a>
	      			<a class="list-group-item list-group-item-action" href="/Groupmanagement" role="tab">Création d'un groupe</a>
	      			<a class="list-group-item list-group-item-action" href="/Planification" role="tab">Planification</a>
	      			<a class="list-group-item list-group-item-action" href="/Tracking" role="tab">Suivi</a>
	      			<a class="list-group-item list-group-item-action" href="#" role="tab">Reporting</a>
	      			<a class="list-group-item list-group-item-action" href="#" role="tab">Suivi Elève</a>
	    		</div>
 			 </div>
			)
	}
};

export default Menu;