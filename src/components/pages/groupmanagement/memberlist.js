import React, { Component } from 'react';

class Memberlist extends React.Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }
    render() {
        console.log(this.props.state.group_students);
        this.state.students=this.props.state.group_students;
        let rows = this.state.students.map(person => {
            return <PersonRow key = {
                person
            } data = {person}
            />
        })
        return (
            <div className="col-xl-12 col-lg-12 col-md-12 sm-12 col-12">
                <br></br>
                <table className="table ">

                    <thead>
                    <tr>
                        <th>Elèves</th>
                    </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody></table></div>);
    }
}

const PersonRow = (props) => {
    return (
        <tr>
            <td>
                { props.data }
            </td>

        </tr>
    );
}

export default Memberlist;

