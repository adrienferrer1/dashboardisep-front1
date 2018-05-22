import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Workedhours from "./workedhours";
import Current_phases from "./current_phases";
import Totalworkedhours from "./total_workedhours";
import Tasks_left from "./tasks_left";
import Memberactivity from "./memberactivity";


class Tracking extends Component {
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

export default Tracking;

