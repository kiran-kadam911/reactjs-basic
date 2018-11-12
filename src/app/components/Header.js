import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/">ReactJS Basic</a>
				    </div>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav">
							<li className="nav-item"><NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink></li>
							<li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink></li>
							<li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="active">Contact Us</NavLink></li>
						</ul>
					</div>	
				</div>
			</nav>
		)
	}
}