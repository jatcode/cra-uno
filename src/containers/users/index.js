import React, { Component } from 'react';
import { SingleListItem, FlexComponent }  from '../../components/MyComponents';
import './user.css';
class User extends Component {
	
	componentDidMount(){
		// this.props.loadAllusers();
		// {users.map((user, i)=> SingleListItem(user,i))}
	}
	
	render(){
		const { users } = this.props;
		// console.log('users ,',users)
		return (
			<div>
				<FlexComponent />
			</div>
		);
	}
}

export default User;