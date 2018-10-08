import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		}
		setTimeout(() => {
			this.setState({
				status: 1
			})
		}, 3000);
	}
	
	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
	}

	render() {
		let content = '';
		if(true) {
			content = <p>Hello, Its True variable!</p>;
		}
		return (
			<div>
				<p>In a new Component!</p>

			    {/*Dynamic data, print variables, ternary expression*/}
				{ 2 + 2 }
				{content}
				{ 5 == 2 ? 'Yes' : 'No' }

				{/*Passing data with Props*/}
				<p>Your name is: {this.props.name} and your age is: {this.props.initialAge}</p>
				<p>User object: Your name is => {this.props.user.name} and your age is: {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}

				{/*Event and State*/}
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
				
				<hr/>
			    {/*Communicating between Parent and Child Component*/}
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>

				<hr/>
			    {/*Communicating between Parent and Child Component with actual data not alert*/}
			    {/*Two-Way-Binding*/}
			    <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header link</button>
			</div>
		);
	}
}

// PropTypes enforce components to get used properly.
Home.propTypes = {
	name: PropTypes.string,
	initialAge: PropTypes.number,
	user: PropTypes.object,
	greet: PropTypes.func,
	initialLinkName: PropTypes.string
}