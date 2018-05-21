import React, { Component } from 'react';

class Memberlist extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                name: "Aymeric",
                lastname: "De Javel",
                email : "adejavel@isep.fr"
            }, {
                name: "Alain",
                lastname: "Rizkallah",
                email : "arizkallah@isep.fr"
            }, {
                name: "François",
                lastname: "De Verdun",
                email : "adeverdun@isep.fr"
            }, {
                name: "Adrien",
                lastname: "Ferrer",
                email : "aferrer@isep.fr"
            }]
        }
    }
    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key = {
                person.name
            } data = {person}
            />
        })
        return (
            <div>
                <br></br>
                <table className="table">

                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>E-mail</th>
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
                { props.data.name }
            </td>
            <td>
                { props.data.lastname }
            </td>
            <td>
                { props.data.email }
            </td>
        </tr>
    );
}

export default Memberlist;

