import React, { Component } from 'react';
import Assigntutor from './assigntutor';
import Groupcreation from './groupcreation';
import TutorSearch from'./tutorsearch';

class Groupmanagement extends Component {
    render() {
    	return (
            <div className="Groupmanagement" className="container row">
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-12">
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
