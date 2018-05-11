import React, { Component } from 'react';

class Done_tasks extends React.Component{
    render(){
        return(
            <div className="Done_tasks" className="col-6">
                <br></br>
                <h5> Liste des tâches </h5>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col" className="col-4">Intitulé</th>
                        <th scope="col">Date de fin théorique</th>
                        <th scope="col">Date de fin réelle</th>
                        <th scope="col">Durée</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Tâche 1</th>
                        <td>jj/mm/aaaa</td>
                        <td>jj/mm/aaaa</td>
                        <td>jj/hh</td>
                    </tr>
                    <tr>
                        <th scope="row">Tâche 2</th>
                        <td>jj/mm/aaaa</td>
                        <td>jj/mm/aaaa</td>
                        <td>jj/hh</td>
                    </tr>
                    <tr>
                        <th scope="row">Tâche 3</th>
                        <td>jj/mm/aaaa</td>
                        <td>jj/mm/aaaa</td>
                        <td>jj/hh</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Done_tasks;