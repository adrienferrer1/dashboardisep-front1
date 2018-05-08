import React, { Component } from 'react';


class Tasklist extends Component {
    render() {
        return (
            <div className="Tasklist" class="col-xl-12">
                <br></br>
                <h5> Liste des tâches </h5>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col" class="col-xl-6">Intitulé</th>
                        <th scope="col">Priorité /5</th>
                        <th scope="col">Nom du réalisateur</th>
                        <th scope="col">Prénom du réalisateur</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Tâche 1</th>
                        <td>4</td>
                        <td>Nom 1</td>
                        <td>Prénom 1</td>
                    </tr>
                    <tr>
                        <th scope="row">Tâche 2</th>
                        <td>1</td>
                        <td>Nom 2</td>
                        <td>Prénom 2</td>
                    </tr>
                    <tr>
                        <th scope="row">Tâche 3</th>
                        <td>2</td>
                        <td>Nom 3</td>
                        <td>Prénom 3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tasklist;