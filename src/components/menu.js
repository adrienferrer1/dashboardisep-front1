import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends React.Component {

    render() {
    	let role = sessionStorage.getItem('role');
    	switch(role){
			case "0":
				return(
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a href="/Welcome" className="list-group-item list-group-item-action" role="tab">Accueil</a>
                        <a className="list-group-item list-group-item-action" href="/Groupmanagement" role="tab">Création
                            d'un groupe</a>
                        <a className="list-group-item list-group-item-action" href="/Planification"
                           role="tab">Planification</a>
                        <a className="list-group-item list-group-item-action" href="/Modification"
                           role="tab">Modification</a>
                        <a className="list-group-item list-group-item-action" href="/Tracking" role="tab">Suivi</a>
                        <a className="list-group-item list-group-item-action" href="#" role="tab">Reporting</a>
                        <a className="list-group-item list-group-item-action" href="/Studenttracking" role="tab">Suivi
                            Elève</a>
                    </div>
                </div>);
				break;
            case "1":
                return(
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a href="/Welcome" className="list-group-item list-group-item-action" role="tab">Accueil</a>
                            <a className="list-group-item list-group-item-action" href="/Groupmanagement" role="tab">Création
                                d'un groupe</a>
                            <a className="list-group-item list-group-item-action" href="/Planification"
                               role="tab">Planification</a>
                            <a className="list-group-item list-group-item-action" href="/Modification"
                               role="tab">Modification</a>
                            <a className="list-group-item list-group-item-action" href="/Tracking" role="tab">Suivi</a>
                            <a className="list-group-item list-group-item-action" href="#" role="tab">Reporting</a>
                            <a className="list-group-item list-group-item-action" href="/Studenttracking" role="tab">Suivi
                                Elève</a>
                        </div>
                    </div>);
                break;
            case "2":
            return(
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a href="/Welcome" className="list-group-item list-group-item-action" role="tab">Accueil</a>
                        <a href="/Tutorsmanagement" className="list-group-item list-group-item-action" role="tab">Gestion
                            Tuteurs</a>
                        <a className="list-group-item list-group-item-action" href="/Groupmanagement" role="tab">Création
                            d'un groupe</a>
                        <a className="list-group-item list-group-item-action" href="/Planification"
                           role="tab">Planification</a>
                        <a className="list-group-item list-group-item-action" href="/Modification"
                           role="tab">Modification</a>
                        <a className="list-group-item list-group-item-action" href="/Tracking" role="tab">Suivi</a>
                        <a className="list-group-item list-group-item-action" href="#" role="tab">Reporting</a>
                        <a className="list-group-item list-group-item-action" href="/Studenttracking" role="tab">Suivi
                            Elève</a>
                    </div>
                </div>);
            break;
            case "3":
                return(
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a href="/Welcome" className="list-group-item list-group-item-action" role="tab">Accueil</a>
                            <a href="/Tutorsmanagement" className="list-group-item list-group-item-action" role="tab">Gestion
                                Tuteurs</a>
                            <a className="list-group-item list-group-item-action" href="/Groupmanagement" role="tab">Création
                                d'un groupe</a>
                            <a className="list-group-item list-group-item-action" href="/Planification"
                               role="tab">Planification</a>
                            <a className="list-group-item list-group-item-action" href="/Modification"
                               role="tab">Modification</a>
                            <a className="list-group-item list-group-item-action" href="/Tracking" role="tab">Suivi</a>
                            <a className="list-group-item list-group-item-action" href="/Studenttracking" role="tab">Suivi
                                Elève</a>
                        </div>
                    </div>);
                break;

		}
	}
};

export default Menu;