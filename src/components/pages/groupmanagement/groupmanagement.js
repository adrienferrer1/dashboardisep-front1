import React, { Component } from 'react';
import Assigntutor from './assigntutor';
import Groupcreation from './groupcreation';
import TutorSearch from'./tutorsearch';

class Groupmanagement extends Component {
    render() {
    	return (
    		<div className="Groupmanagement" class="row">
	    		<Assigntutor/>
	    		<Groupcreation/>
	    	</div>
    		);
    }
}

export default Groupmanagement;
