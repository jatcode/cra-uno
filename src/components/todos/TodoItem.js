import React, { PropTypes } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory, Link } from 'react-router';

const TodoItem = ({_id, todo, description },idTodo)=>(
	<Card
    centered   
		key={idTodo}
    header={todo}
    meta='Description'
    description={`${description.substring(0, 100)}...`}
    onClick={() => browserHistory.push(`/view/${_id}`)}
  />
)
TodoItem.propTypes ={
	todo: PropTypes.string.isRequired,
	description: PropTypes.string,
}

export default TodoItem;