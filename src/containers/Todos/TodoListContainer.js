import React , { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/todos/TodoList';
import { bindActionCreators } from 'redux'
// import { getAllTodos, createTodo, updateTodo, deleteTodo } from './actions';
import  * as actionCreators  from './actions';

class TodoListContainer extends Component {
	
componentDidMount(){
	// let { dispatch }=this.props;
	// let action = actionCreators.getAllTodos();
	// dispatch (action); 
	this.props.dispatch(actionCreators.getAllTodos());
	 console.log('was here didmount',this.props);
}

render(){
	var {mytodos, dispatch } = this.props
	let boundActionCreators = bindActionCreators(actionCreators,dispatch);
	// console.log('antes del return',this.props);
	return(
		<div>
			hello 
			{/* <TodoList todos={mytodos} onTodoClick={()=>{'hello world 123'}} /> */}
		</div>
	);
}

}
const mapStateToProps=(state)=>({
		todos: state.mytodos
})

// const mapDispatchToProps= (actionCreators,dispatch)=>{
// 	return {
// 		getAllTodos: getAllTodos
// 	}	
// }

TodoListContainer = connect(mapStateToProps)(TodoListContainer) 
export default TodoListContainer;
