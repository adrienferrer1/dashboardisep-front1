import React, { Component } from 'react';

import Addtask from './addtask';
import Addphase from './addphase';
import Taskattribution from './taskattribution';
import Tasklist from './tasklist';
import Gantt from './gantt';



class Planification extends Component {
    render() {
    	return (
            <div className="Planification" className="container row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br/>
                    <p> </p>
					<div className="card container">
						<br></br>
						<Addtask></Addtask>
						<Addphase/>
						<Taskattribution/>
						<Tasklist/>
						<Gantt/>
					</div>
				</div>
			</div>
    		);
    }
}

export default Planification;
