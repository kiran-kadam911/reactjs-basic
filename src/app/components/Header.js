import React from 'react';

// Stateless component. This is the way of defining.
export const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="nav navbar-nav">
					<li className="nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
					<li className="nav-item"><a className="nav-link" href="#">{props.aboutLink}</a></li>
					<li className="nav-item"><a className="nav-link" href="#">{props.contactLink}</a></li>
				</ul>
			</div>	
		</nav>
	);
}