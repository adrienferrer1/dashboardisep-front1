import React, { Component } from 'react';

class Addphase extends Component {
    render() {
        return (
            <div className="Addphase" class="col-xl-12">
                <br></br>
                <h5> Ajouter une phase</h5>
                <form id="addphase">
                    <div class ="row">
                        <div class="form-group col-xl-6">
                            <input type="text" class="form-control" id="Intitulé" placeholder="Intitulé"/>
                        </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de début : </p>
                                <input type="date" class=" form-control" id="date de fin théorique" placeholder="Date de début"/>
                            </div>
                            <div class="form-group col-xl-3">
                                <p class="">date de fin : </p>
                                <input type="date" class=" form-control" id="date de fin théorique" placeholder="Date de fin théorique"/>
                            </div>
                    </div>
                    <div class ="row">
                        <div class="col-xl-6">
                            <textarea class="form-control" id="Commentaires" placeholder="Commentaires"/>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Valider</button>
                </form>

            </div>
        );
    }
}

export default Addphase;