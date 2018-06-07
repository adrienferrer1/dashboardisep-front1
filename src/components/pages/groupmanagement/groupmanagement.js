import React, { Component } from 'react';
import Assigntutor from './assigntutor';
import Groupcreation from './groupcreation';
import TutorSearch from'./tutorsearch';

class Groupmanagement extends Component {
    render() {
    	return (
            <div className="Groupmanagement" className="container row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br/>
                    <p> </p>
                    <div className="card container">
                        <div className="row">
                            <Groupcreation/>
                            <Assigntutor/>
                        </div>
                    </div>
                </div>
            </div>
    		);
    }
}

export default Groupmanagement;
