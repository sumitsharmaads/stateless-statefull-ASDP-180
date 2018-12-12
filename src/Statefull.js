import React, {Component} from 'react';
import Stateless from './Stateless'

class Statefull extends Component{
	constructor(props){
		super(props);
		this.state={name:"Satefull", child:"Stateless"}
	}

	render() {
		return(
			<div>
				<h1>This is Statefull Component and name is coming from state property: {this.state.name}</h1>
				<Stateless child={this.state.child} />
			</div>
		);
	}
}
export default Statefull;