import React, { PropTypes } from 'react';
import { List } from 'semantic-ui-react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onTodoClick}) =>(
	<ul>
		{todos.map(todo=>
			<TodoItem 
				key={todo.id}
				{...todo }
				onClick={()=>onTodoClick(todo.id)}
			/>
		)}
	</ul>
	
)

TodoList.propTypes ={
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
		description: PropTypes.string
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func
}


export default TodoList