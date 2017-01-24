import React,{Component} from 'react';
import { Header, Segment, Container, Divider } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
export default class ViewTodo extends Component {
	
	componentDidMount() {
		this.props.getSingleTodo(this.props.params.id);
	}
	onUpdateTodoClick(){
		console.log(this.props.params.id);
		browserHistory.push(`/updatetodo/${this.props.params.id}`);
  }
	onDeletePostClick(){
    this.props.deleteTodo(this.props.params.id);
  }

    render() {
			const todoItem = this.props.currTodo;
				if (!todoItem.hasOwnProperty('todo')) {
				 return (<p>Loading...</p>)
				}
        return (
	        <div className="class-name">
						
						<Divider/>
						<button 
		          className='ui button left primary floated'
		          onClick={this.onUpdateTodoClick.bind(this)}
		          >
		          Edit Todo
		        </button>
						<button 
		          className='ui negative button right floated'
		          onClick={this.onDeletePostClick.bind(this)}
		          >
		          Delete Todo
		        </button>
						<Header as='h2' textAlign='center' >{todoItem.todo}</Header>
						 <Segment>
							 {todoItem.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
						 </Segment>
						 <Container text>
							 {todoItem.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
						 </Container>
	        </div>
        );
    }
}