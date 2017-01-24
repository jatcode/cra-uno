import React , { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/todos/TodoList';
import { bindActionCreators } from 'redux'
// import { getAllTodos, createTodo, updateTodo, deleteTodo } from './actions';
import  * as actionCreators  from './actions';
import Lista from '../../components/todos/Lista';
class TodoListContainer extends Component {
	
componentDidMount(){
	this.props.dispatch(actionCreators.getAllTodos());
	//  console.log('was here didmount',this.props);//nothgin here
}

render(){
	// var {mytodos, dispatch } = this.props
	// let boundActionCreators = bindActionCreators(actionCreators,dispatch);
	// console.log('antes del return',this.props.mytodos);
	return(
		<div>
			hello 
			{/* <TodoList todos={mytodos} onTodoClick={()=>{'hello world 123'}} /> */}
			<Lista />
			
		</div>
	);
}

}
const mapStateToProps=(state)=>({
		todos: state.mytodos
})

TodoListContainer = connect(mapStateToProps)(Lista) 
export default TodoListContainer;
