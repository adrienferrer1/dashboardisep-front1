import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {

    render() {
        return (
            <div>
                <form class="row col-10 offset-2">
                    <div class="col-6">
                        <h4> Identification</h4>
                        <input type="text" class="form-control" placeholder="Identifiant" name="login"/>
                        <br></br>
                        <input type="password" class="form-control" placeholder="Mot de passe" name="password"/>
                        <br></br>
                        <button class="btn btn-warning">
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
            </div>
        );
    }
}
export default Login;

