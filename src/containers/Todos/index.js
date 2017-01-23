import React , { Component } from 'react';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from './actions';
import { connect } from 'react-redux';

class Lista extends Component {
  
  componentDidMount(){
  	this.props.dispatch(getAllTodos());
  	console.log('was here didmount',this.props);
  }
  
  
  render(){
    console.log(this.props);
    return(
      <div>
        Hello lista
      </div>        
    );
  }
}

const mapStateToProps=(state)=>({
		todos: state.mytodos
})

// const mapDispatchToProps =(dispatch)=>{
// 	return {		
// 		getAllTodos, createTodo, updateTodo, deleteTodo
// 	}
// }


Lista = connect(mapStateToProps)(Lista)

export default Lista;