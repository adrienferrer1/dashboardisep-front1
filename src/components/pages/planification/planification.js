import React, { Component } from 'react';

import Addtask from './addtask';
import Addphase from './addphase';
import Taskattribution from './taskattribution';
import Tasklist from './tasklist';
import Gantt from './gantt';



class Planification extends Component {
    render() {
    	return (
    		<div className="Planification">
				<br></br>
				<div className="row">
                    <h5> Planification </h5>
				</div>
    			<Addtask></Addtask>
				<Addphase/>
				<Taskattribution/>
				<Tasklist/>
        <Gantt/>

	    	</div>
    		);
    }
}

export default Planification;
