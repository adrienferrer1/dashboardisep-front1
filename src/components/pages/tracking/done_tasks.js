import React, { Component } from 'react';


class Done_tasks extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                title : "Rédiger le CdC",
                theoricalEndDate : "12/05/18",
                endDate: "Aymeric",
                duration : "10"
            },{
                title : "Rédiger le CdC",
                theoricalEndDate : "12/05/18",
                endDate: "Aymeric",
                duration : "10"
            }, {
                title : "Rédiger le CdC",
                theoricalEndDate : "12/05/18",
                endDate: "Aymeric",
                duration : "10"
            },]
        }
    }
    render() {
        let rows = this.state.data.map(person => {
            return <TaskRow key = {
                person.name
            } data = {person}
            />
        })
        return (
            <div className="col-6">
                <br></br>
                <h5>Tâches effectuées</h5>
                <table className="table">

                    <thead>
                    <tr>
                        <th>Intitulé</th>
                        <th>Date de fin théorique</th>
                        <th>Date de fin</th>
                        <th>Durée</th>
                    </tr>
                    </thead>
                    < tbody > {
                        rows
                    } </tbody></table></div>);
    }
}

const TaskRow = (props) => {
    return (
        <tr>
            <td>
                { props.data.title }
            </td>
            <td>
                { props.data.theoricalEndDate }
            </td>
            <td>
                { props.data.endDate }
            </td>
            <td>
                { props.data.duration }
            </td>
        </tr>
    );
}


export default Done_tasks;
