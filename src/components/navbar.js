import React, { Component } from 'react';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        //this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(event) {
        sessionStorage.setItem('token', '');
        window.location.replace("/Login");
        event.preventDefault();
    }


    render() {
        return (
        	<div className="row">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="col-xl-4 col-lg-4 col-md-3 col-sm-2 col-1">
                        <a href="https://www.isep.fr/"><img src ="http://www.financetesetudes.com/wp-content/uploads/2013/08/logo-isep.jpg" width="20%"/> </a>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-5 col-sm-4 col-4">
                        <ul className="nav navbar-nav">
                            <li className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <a href="https://educ.isep.fr/moodle/login/index.php" className="btn btn-warning log"> Moodle </a>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <a href="http://weberp.isep.fr" className="btn btn-warning log "> Weberp </a>
                            </li>
                        </ul>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4">
                        <ul className="nav navbar-nav navbar-right col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                            <button className="btn btn-danger log" onClick={this.handleLogoutClick}>Se déconnecter</button>
                        </ul>
					</div>
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