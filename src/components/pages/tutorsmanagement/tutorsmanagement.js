import React, { Component } from 'react';

import Addtutor from './addtutor';
import Tutorslist from './tutorslist';



class Tutorsmanagement extends Component {
    render() {
    	return (
    		<div className="Tutorsmanagement" class="row">
    			<Addtutor></Addtutor>
    			<Tutorslist></Tutorslist>

	    	</div>
    		);
    }
}

export default Tutorsmanagement;

