import React,{Component} from 'react';
import { browserHistory } from 'react-router';

export default class ViewUser extends Component {
	
	componentDidMount() {
		this.props.getSingleUser(this.props.params.id);
		// console.log('Viewing...',this.props.params.id);
	}
	onEditUserClick(){
		browserHistory.push(`/updateuser/${this.props.params.id}`);
  }
	onDeletePostClick(){
    this.props.deleteUser(this.props.params.id);
  }

    render() {
			const userItem = this.props.currUser;
				if (!userItem.hasOwnProperty('firstName')) {
				 return (<p>Loading...</p>)
				}
				const {
					firstName, lastName, email, username,
					description, roleName, picture, racis,
					geoLocation
				} = userItem;
        return (
	        <div className="mycard pure-g">
						<button 
		          className='pure-button button-secondary pure-button-active'
		          onClick={this.onEditUserClick.bind(this)}
		          >
		          Edit User
		        </button>
						<button 
		          className='pure-button button-error'
		          onClick={this.onDeletePostClick.bind(this)}
		          >
		          Delete Todo
		        </button>
						
						<div className='mycarbody pure-u-1 '>
							<img src={picture} role='presentation' className=' myimage'></img>
							<fieldset className='pure-group '>
								<h1>{firstName} {lastName}</h1>
								<span><h2>Username:</h2>{username} </span>						 
								<span><h2>Email</h2>{email} </span>						 
							</fieldset>
							<fieldset className='pure-group'>
								<span><h2>RoleName</h2>{roleName} </span>						 
								<span><h2>RACIS</h2>{racis}</span>						 
							</fieldset>
							<fieldset className='pure-group'>
								<span><h2> Latitude:</h2>{geoLocation.latitude} <h2>Latitude:</h2>{geoLocation.longitude}</span>						 
								<p>
									{description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
								</p>
							</fieldset>
						</div>
	        </div>
        );
    }
}