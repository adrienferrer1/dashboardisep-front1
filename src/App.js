import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Groupmanagement from "./components/pages/groupmanagement/groupmanagement";
import Tutorsmanagement from "./components/pages/tutorsmanagement/tutorsmanagement";
import Planification from "./components/pages/planification/planification";
import LoginControl from "./components/login";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <div className="App" className="row">
        <Navbar></Navbar>
        <Menu></Menu>
        <Router>
            <div className="col-xl-10">
                <Route path="/groupmanagement" component={Groupmanagement}/>
                <Route path="/Tutorsmanagement" component={Tutorsmanagement}/>
                <Route path="/Planification" component={Planification}/>
                <Route path="/LoginControl" component={LoginControl}/>
            </div>
        </Router>
    </div>
}
function GuestGreeting(props) {
    return <h4 class="col-4"></h4>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return (
    	<form class="row col-8 offset-2">
			<div class="col-6">
                <h4> Identification</h4>
				<input type="text" class="form-control" placeholder="Identifiant" name="login"/>
				<br></br>
				<input type="password" class="form-control" placeholder="Mot de passe" name="password"/>
				<br></br>
				<button class="btn btn-warning" onClick={props.onClick}>
					S'identifier
				</button>
			</div>
			<br></br>
            <br></br>
            <br></br>
            <div className="col-6">
				<h4> Inscription</h4>
				<input type="text" className="form-control" placeholder="Identifiant" name="login"/>
				<br></br>
				<input type="password" className="form-control" placeholder="Mot de passe" name="password"/>
				<br></br>
				<input type="password" className="form-control" placeholder="Mot de passe" name="password"/>
				<br></br>
				<button className="btn btn-warning" onClick="">
					S'inscrire
				</button>
			</div>

		</form>



    );
}
function LogoutButton(props) {
    return (
        <button class="btn btn-warning" onClick={props.onClick}>
            Se déconnecter
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)


export default App;
