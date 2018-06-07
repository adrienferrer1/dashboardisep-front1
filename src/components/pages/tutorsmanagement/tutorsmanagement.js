import React, { Component } from 'react';

import Addtutor from './addtutor';
import Tutorslist from './tutorslist';



class Tutorsmanagement extends Component {
    render() {
    	return (
    		<div className="Tutorsmanagement" className="container row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br/>
                    <p> </p>
                    <div className="card container">
                        <div className="row">
                            <Addtutor></Addtutor>
                            <Tutorslist></Tutorslist>
                        </div>

                    </div>
				</div>
	    	</div>
    		);
    }
}

export default Tutorsmanagement;

