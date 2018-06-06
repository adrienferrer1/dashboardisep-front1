import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <br/>
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-12">
                    <div className="container">
                        <h5>Bienvenue sur DashBoard'ISEP</h5>
                    </div>
                </div>
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-12">
                    <div class="card container">
                    <br/>
                        <p> </p>
                        <h6>Tutoriel d'utilisation :</h6>
                        <div class="card-body">
                            <p>
                                Avec DashBoard'ISEP vous pourrez gérer de façon dynamique votre travail dans le cadre de l'APP Informatique.
                            </p>
                            <p>
                                Voici les étapes pour utiliser l'outil de façon adéquate :
                            </p>
                            <p>
                                -  S'inscrire (à priori c'est déjà fait) ;
                            </p>
                            <p>
                                -  Créer votre groupe en allant sur la page "Création d'un groupe", puis affecter l'ensemble des élèves au groupe fraîchement créé (il faudra que les membres se soient inscrits au préalable sur la plateforme ;
                            </p>
                            <p>
                                -  Dans l'onglet "Planification", créer une première phase (vous ne pourrez pas ajouter de tâche sinon) ;
                            </p>
                            <p>
                                -  Toujours dans l'onglet "Planification", vous pouvez désormais créer vos tâches ;
                            </p>
                            <p>
                                -  Penser à attribuer les tâches aux personnes souhaitées (onglet planification) ;
                            </p>
                            <p>
                                -  Les onglets "Suivi" et "Suivi élève" vous permettront d'avoir de précieuses informations sur l'avancement des tâches/phases ainsi que sur l'activité de tous les membres ;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;

