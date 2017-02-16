import React, { Component } from 'react';
import { SingleListItem }  from '../../components/MyComponents';
import { browserHistory } from 'react-router';
import './user.css';
class User extends Component {
	
 componentDidMount(){
		this.props.loadAllusers();
	}
	
	// handleLinkClick(e,{_id}){
	handleLinkClick(e,id){
		e.preventDefault();
		browserHistory.push(`/viewuser/${id}`);
	}
	render(){
		const { users } = this.props;
		// console.log('users ,',users)
		const handler=this.handleLinkClick.bind(this)
		return (
			<div>
				{users.map((user, i)=> SingleListItem(user,i,handler))}
			</div>
		);
	}
}

export default User;