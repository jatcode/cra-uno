import React , { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/todos/TodoList';
import { getAllTodos } from './actions';

class TodoListContainer extends Component {

	componentDidMount(){
		// console.log('was here didmount',this.props);
		this.props.getAllTodos();
	}
	
	componentDidUpdate(){
		// console.log('was here didUPDATE',this.props);
		this.props.getAllTodos();
	}
	
	render(){
		// console.log('this are the props,',...this.props);
		// return(< TodoList {...this.props} />);
		return(<div>hello</div>);
	}
}

function todoHandler(){
	return 'hello';
}
const mapStateToProps=(state, ...ownProps)=>{
		console.log('this is the state',state);
		console.log('this is the ownProps',ownProps);
		return {todos: state.mytodos}
	};

const mapDispatchToProps =(dispatch,...ownProps )=>{
	// console.log('this is the dispatch on diPATCH',dispatch);
	// console.log('this is the ownProps on diPATCH',ownProps);
	return {
		onTodoClick:(id)=>{
			dispatch(todoHandler(id));//TODO past whats needed for the component
		},
		getAllTodos
	}
}
TodoListContainer = 
	connect(mapStateToProps,mapDispatchToProps)(TodoListContainer) 

export default TodoListContainer;
