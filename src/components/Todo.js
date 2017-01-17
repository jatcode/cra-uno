import React, { PropTypes } from 'react';

const Todo = ({onClick, name, description, completed })=>(
	<li 
		onClick= {onClick}
		style={{ 
			textDecoration: 
				completed ? 'line-through':none 
		}}
	>
	<span> {	text } </span>
	<span> {	description } </span>
	</li>
)
Todo.propTypes ={
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	description: PropTypes.string,
}

export default Todo;