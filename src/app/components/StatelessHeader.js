import React from 'react';

// Stateless component. The way of defining.
export const StatelessHeader = (props) => {
	return (
		<ul className="nav navbar-nav">
			<li className="nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
			<li className="nav-item"><a className="nav-link" href="#">{props.aboutLink}</a></li>
			<li className="nav-item"><a className="nav-link" href="#">{props.contactLink}</a></li>
		</ul>
	);
}