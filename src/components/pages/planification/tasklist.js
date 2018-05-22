import React, { Component } from 'react';


class Tasklist extends Component {
    constructor() {
        super();
        this.state = {
            data: [{
                title : "Rédiger le CdC",
                priority: "4",
                name: "Aymeric",
                lastname : "De Javel"
            },{
                title : "Développer la page de login",
                priority: "2",
                name: "Alain",
                lastname : "Rizkallah"
            }, {
                title : "Déployer le site web",
                priority: "3",
                name: "Francçois",
                lastname : "De Verdun"
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
            <div className="col-12">
                <br></br>
                <h5>Liste des tuteurs</h5>
                <table className="col-xl-12 table">

                    <thead>
                    <tr>
                        <th>Intitulé</th>
                        <th>Priorité /5</th>
                        <th>Nom réalisateur</th>
                        <th>Prénom réalisateur</th>
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
                { props.data.priority }
            </td>
            <td>
                { props.data.name }
            </td>
            <td>
                { props.data.lastname }
            </td>
        </tr>
    );
}

export default Tasklist;