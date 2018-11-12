import React from 'react';

export class Error extends React.Component {
	render() {
		return (
			<div className="container">
		    	<div className="row">
			    	<div className="col-lg-12">
			    		<h1>404 Error</h1>
			    		<hr/>
			    		<p>The requested page not found.</p>
			    	</div>
			    </div>
		    </div>
		)
	}
}