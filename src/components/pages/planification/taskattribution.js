import React, { Component } from 'react';

class Taskattribution extends Component {
    render() {
        return (
            <div className="Taskattribution" class="col-xl-12">
                <br></br>
                <h5> Attribuer une tâche</h5>
                <form id="taskattribution">
                    <div class ="row">
                        <div class="form-group col-xl-6">
                            <select class="custom-select" name="choosetask">
                                <option value="" disabled selected>Sélectionner une phase</option>
                                <option>Phase 1</option>
                                <option>Phase 2</option>
                            </select>
                        </div>
                        <div class="form-group col-xl-6">
                            <select class="custom-select" name="choosestudent">
                                <option value="" disabled selected>Choisir élève</option>
                                <option>Elève 1</option>
                                <option>Elève 2</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Valider</button>
                </form>

            </div>
        );
    }
}

export default Taskattribution;