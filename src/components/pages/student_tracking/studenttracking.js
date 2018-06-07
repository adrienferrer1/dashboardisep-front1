import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Workedhours from "./workedhours";
import Current_phases from "../tracking/current_phases"; //That component is imported from "tracking" page because it's exactly the same
import Totalworkedhours from "./total_workedhours";
import Tasks_left from "./tasks_left";


class Studenttracking extends Component {
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
                            <Workedhours/>
                            <Totalworkedhours/>
                            <Tasks_left/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Studenttracking;

