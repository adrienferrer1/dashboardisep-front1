import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Tutorsmanagement from "./components/pages/tutorsmanagement/tutorsmanagement";

const app = document.getElementById('root');

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={App}/>
		</div>
	</Router>
	,app);
registerServiceWorker();
