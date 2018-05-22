import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Workedhours from "./workedhours";
import Memberactivity from "./memberactivity";


class Tracking extends Component {
    render() {
        return (
            <div className="Tracking" class="row">
                <Done_tasks/>
                <Workedhours/>
            </div>
        );
    }
}

export default Tracking;

