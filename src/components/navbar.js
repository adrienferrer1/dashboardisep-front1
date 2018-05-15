import React, { Component } from 'react';
import App from '../App';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        //this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        App.IsLoggedIn.setState(false);
        console.log('hello');
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        return (
        	<div className="row">
				<nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
					<a className="col-4" href="https://www.isep.fr/"><img src ="http://www.financetesetudes.com/wp-content/uploads/2013/08/logo-isep.jpg" width="20%"/> </a>
					<ul className="nav navbar-nav col-4">
						<li>
							<a href="https://educ.isep.fr/moodle/login/index.php" className="btn btn-warning log"> Moodle </a>
						</li>
						<li>
							<a href="http://weberp.isep.fr" className="btn btn-warning log"> Weberp </a>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right col-4">
						<li><a className="btn btn-success log" href="/Login" onClick="this.handleLogInClick">S'identifier</a></li>
						<li><a className="btn btn-danger log">Se déconnecter </a></li>
					</ul>
				</nav>
			</div>
);}
}

function LoginButton(props) {
    return (
		<button onClick={props.onClick}>
			Login
		</button>
    );
}

function LogoutButton(props) {
    return (
		<button onClick={props.onClick}>
			Logout
		</button>
    );
}


export default Navbar;