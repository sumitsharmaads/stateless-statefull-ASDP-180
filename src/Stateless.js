import React, {Component} from 'react';

const Stateless = ({child}) =>{
	return(
		<div>
			<h1> This is Staeless Component and value is:{child}</h1>
		</div>
	);
}

export default Stateless;