import React, { Component } from 'react';
import { SingleListItem }  from '../../components/MyComponents';
import './user.css';
class User extends Component {
	

	
 componentDidMount(){
		this.props.loadAllusers();
	}
	
	handleLinkClick(e,{index}){
		e.preventDefault();
		alert('this is the index',index);
	}
	render(){
		const { users } = this.props;
		// console.log('users ,',users)
		return (
			<div>
				{users.map((user, i)=> SingleListItem(user,i))}
			</div>
		);
	}
}

export default User;