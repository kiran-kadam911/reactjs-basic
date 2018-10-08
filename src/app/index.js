import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		homeLink: 'Home'
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

  render() {
  	var user = {
  		name: 'Nilesh',
  		age: '27',
  		hobbies: ['Riding', 'Shooting', 'Dhol']
  	}
    return (
    	<div className="container">
	    	<div className="row">
		    	<div className="col-lg-12">
		    		<Header homeLink={this.state.homeLink} aboutLink='About' contactLink='Contact' />
		    	</div>
		    </div>
		    <div className="row">
		    	<div className="col-lg-12">
		    		<Home name={'Kiran'} initialAge={29} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink} >
		    			<p>This is a Pragraph!</p>
		    		</Home>
		    	</div>
		    </div>
    	</div>
    );
  }
}

render(<App/>, document.getElementById('reactapp'));