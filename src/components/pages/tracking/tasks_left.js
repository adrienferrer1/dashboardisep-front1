import React, { Component } from 'react';


class Tasks_left extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                title : "Faire l'API",
                add_date : "14/05/18",
                priority: "3",
                duration : "3h"
            },{
                title : "Préparer la soutenanace",
                add_date : "18/05/18",
                priority: "5",
                duration : "4h"
            }, {
                title : "Rédiger le CdC",
                add_date : "12/05/18",
                priority: "2",
                duration : "7h"
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
            <div className="col-10">
                <br></br>
                <h5>Tâches Restantes</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Intitulé</th>
                        <th>Date d'ajout</th>
                        <th>Priorité /5</th>
                        <th>Durée (en h)</th>
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
                { props.data.add_date }
            </td>
            <td>
                { props.data.priority }
            </td>
            <td>
                { props.data.duration }
            </td>
        </tr>
    );
}


export default Tasks_left;
