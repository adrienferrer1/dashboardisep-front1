import React, { Component } from 'react';

import Addtask from './addtask';
import Addphase from './addphase';
import Taskattribution from './taskattribution';
import Tasklist from './tasklist';


class Planification extends Component {
    render() {
    	return (
    		<div className="Planification" class="container row card">
				<br></br>
    			<h4> Planification </h4>
    			<br></br>
    			<Addtask></Addtask>
				<Addphase/>
				<Taskattribution/>
				<Tasklist/>

	    	</div>
    		);
    }
}

export default Planification;

