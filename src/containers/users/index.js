import React, { Component } from 'react';
import { SingleListItem }  from '../../components/MyComponents';
import { List, Image, Header, Icon } from 'semantic-ui-react'
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
			// <div>
			// 	{users.map((user, i)=> SingleListItem(user,i,handler))}
			// </div>
			<div>
				<Header as='h2' icon textAlign='center'>
		      <Header.Content>
		        User List
		      </Header.Content>
		    </Header>
				<List  divided selection verticalAlign='middle'>
					 	{users.map((user, i)=> SingleListItem(user,i,handler))}
		    </List>
			</div>
		);
	}
}

export default User;