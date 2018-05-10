import React, { Component } from 'react';



const isLoggedIn = true;
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        //this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        return (
        	<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
					<a href="https://www.isep.fr/"><img src ="http://www.financetesetudes.com/wp-content/uploads/2013/08/logo-isep.jpg" width="6%" height="6%"/> </a>
					<ul className="nav navbar-nav">
						<li>
							<a href="https://educ.isep.fr/moodle/login/index.php" className="btn btn-warning log"> Moodle </a>
						</li>
						<li>
							<a href="http://weberp.isep.fr" className="btn btn-warning log"> Weberp </a>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><button className="btn btn-success log">S'identifier</button></li>
						<li><button className="btn btn-danger log">Se déconnecter </button></li>
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