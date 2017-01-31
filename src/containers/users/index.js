import React, { Component } from 'react';
import { SingleListItem }  from '../../components/MyComponents';
import { loadAllusers } from './actions';

class User extends Component {
	
	componentDidMount(){
		loadAllusers();
	}
	
	render(){
		return (
			<div>
				Hello mundo user
			</div>
		);
	}
}

export default User;