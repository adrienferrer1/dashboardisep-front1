import React, { Component } from 'react';

import Assigntutor from './assigntutor';
import Groupcreation from './groupcreation';

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

