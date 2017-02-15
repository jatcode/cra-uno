import React,{Component} from 'react';
import { browserHistory } from 'react-router';

export default class ViewUser extends Component {
	
	componentDidMount() {
		this.props.getSingleUser(this.props.params.id);
	}
	onEditUserClick(){
		console.log('Viewing...',this.props.params.id);
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
        return (
	        <div className="class-name">
						
						<button 
		          className='ui button left primary floated'
		          onClick={this.onEditUserClick.bind(this)}
		          >
		          Edit User
		        </button>
						<button 
		          className='ui negative button right floated'
		          onClick={this.onDeletePostClick.bind(this)}
		          >
		          Delete Todo
		        </button>
						<h2>`${userItem.firstName} ${userItem.lastName}`</h2>
						 <div>{userItem.roleName} </div>						 
						 <div >
							 {userItem.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
						 </div>
	        </div>
        );
    }
}