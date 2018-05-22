import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Workedhours from "./workedhours";
import Current_phases from "../tracking/current_phases"; //That component is imported from "tracking" page because it's exactly the same
import Totalworkedhours from "./total_workedhours";
import Tasks_left from "./tasks_left";


class Studenttracking extends Component {
    render() {
        return (
            <div className="Tracking" class="row">
                <Done_tasks/>
                <Current_phases/>
                <Workedhours/>
                <Totalworkedhours/>
                <Tasks_left/>
            </div>
        );
    }
}

export default Studenttracking;

