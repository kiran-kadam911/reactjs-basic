import React from 'react';

import { StatelessHeader } from './StatelessHeader';
import { Home } from './Home';

export class HomeContent extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		homeLink: 'Home',
  		homeMounted: true
  	}
  }

  onGreet() {
  	alert('Hello React!');
  }

  onChangeLinkName(newName) {
	this.setState({
		homeLink: newName
	});
  }

  // Component Mount and Unmount
  onChangeHomeMounted() {
	this.setState({
		homeMounted: !this.state.homeMounted
	});
  }

  render() {
  	var user = {
  		name: 'Nilesh',
  		age: '27',
  		hobbies: ['Riding', 'Shooting', 'Dhol']
  	}

	// Component Mount and Unmount
	let homeCmp = '';
  	if(this.state.homeMounted) {
		homeCmp = (
			<Home name={'Kiran'} initialAge={29} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink} >
    			<p>This is a Pragraph!</p>
    		</Home>
		)
  	}

    return (
    	<div className="container">
	    	<div className="row">
		    	<div className="col-lg-12">
		    		<StatelessHeader homeLink={this.state.homeLink} aboutLink='Menu 2' contactLink='Menu 3' />
		    	</div>
		    </div>
		    {/*<div className="row">
		    	<div className="col-lg-12">
		    		<Home name={'Kiran'} initialAge={29} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink} >
		    			<p>This is a Pragraph!</p>
		    		</Home>
		    	</div>
		    </div>*/}
		    <div className="row">
		    	<div className="col-lg-12">
		    		{homeCmp}
		    		<hr/>
		    		<button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Home Component</button>
		    	</div>
		    </div>
    	</div>
    );
  }
}