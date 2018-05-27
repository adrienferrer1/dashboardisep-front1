import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Welcome from "./components/pages/welcome/welcome";
import Groupmanagement from "./components/pages/groupmanagement/groupmanagement";
import Tutorsmanagement from "./components/pages/tutorsmanagement/tutorsmanagement";
import Planification from "./components/pages/planification/planification";
import Tracking from "./components/pages/tracking/tracking";
import Studenttracking from "./components/pages/student_tracking/studenttracking";
import Login from "./components/login";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        //this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLogged: true}; // A REMPLACER PAR LE RENVOI DE L'API
    }
    render() {
        return (
            <div className="App">
                <App_logged isLogged={this.state.isLogged}/>
            </div>
        );
    }
}

function App_logged(foo) {
    const isLogged = foo.isLogged;
    if (isLogged == true){
        return(
            <div className="App" className="row">
                <Navbar></Navbar>
                <Menu></Menu>
                <Router>
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6">
                        <Route path="/welcome" component={Welcome}/>
                        <Route path="/groupmanagement" component={Groupmanagement}/>
                        <Route path="/Tutorsmanagement" component={Tutorsmanagement}/>
                        <Route path="/Planification" component={Planification}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/Tracking" component={Tracking}/>
                        <Route path="/Studenttracking" component={Studenttracking}/>
                    </div>
                </Router>
            </div>
        )
    }
    else{
        return(
            <div className="App" className="row">
                <Login/>
            </div>);
    }
}

export default App;



// Ce code n'est pas encore utilisé mais il le sera bientôt. Il s'agit du formulaire authentification/inscription
