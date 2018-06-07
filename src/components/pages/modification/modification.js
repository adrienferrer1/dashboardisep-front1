import React, { Component } from 'react';
import Tasklist from './tasklist';
import Test_table from './test_table';

class Modification extends Component {
    render() {
        return (
            <div className="Modification" className="container row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br/>
                    <p> </p>
                    <div className="card container">
                        <div className="row">
                        <Tasklist/>
                            <Test_table/>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modification;
