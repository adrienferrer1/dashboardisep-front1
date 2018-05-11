import React, { Component } from 'react';
import Done_tasks from "./done_tasks";
import Memberactivity from "./memberactivity";


class Tracking extends Component {
    render() {
        return (
            <div className="Tracking" class="row">
                <Done_tasks/>
                <Memberactivity/>
            </div>
        );
    }
}

export default Tracking;

