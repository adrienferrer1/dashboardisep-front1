import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Current_phases from "./current_phases";
import Tasks_left from "./tasks_left";
import Memberactivity from "./memberactivity";


class Tracking extends Component {
    render() {
        return (
            <div className="Tracking" className="container row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br/>
                    <p> </p>
                    <div className="card container">
                        <div className="row">
                            <Done_tasks/>
                            <Current_phases/>
                            <Tasks_left/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Tracking;

