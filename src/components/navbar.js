import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
        return (
        	<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light col-xl-12">
					<ul className="nav navbar-nav">
						<li>
							<Link to="/">Food Jokes</Link>
						</li>
						<li>
							<Link to="/special">Celebrity Jokes</Link>
						</li>
					</ul>



				  <a href="https://www.isep.fr/"><img src ="http://www.financetesetudes.com/wp-content/uploads/2013/08/logo-isep.jpg" width="6%" height="6%"/> </a>
				  <a href="https://educ.isep.fr/moodle/login/index.php"> Moodle </a> 
				  <a href="http://weberp.isep.fr"> Weberp </a>
				</nav>
			</div>
);}
}
export default Navbar;