import React, { PropTypes } from 'react';
import { Grid, Card } from 'semantic-ui-react'
// import { /*, Link*/ } from 'react-router';
import { Button, Cell } from 'react-pure';

const TodoItem = ({id, username, job },idTodo)=>(
    <Grid.Row>
      <Grid.Column width={3}>{id}</Grid.Column>
      <Grid.Column width={3}>{username}</Grid.Column>
      <Grid.Column width={3}>{job}</Grid.Column>
    </Grid.Row>
)
TodoItem.propTypes ={
	todo: PropTypes.string.isRequired,
	description: PropTypes.string,
}

export default TodoItem;

// {/* <div className="pure-g">	
// 	
// 	<Cell md="1-3" lg="1-4">
// 		<div className="l-box">
// 			<h3> ID</h3>
// 		</div>
// 	</Cell>
// 	<Cell md="1-3" lg="1-4"> UserName </Cell>
// 	<Cell md="1-3" lg="1-4"> Job </Cell>
// 	
// </div> */}
// {/* <Cell md="1-3" >{id}</Cell><Cell md="1-3" >{username}</Cell><Cell md="1-3" >{job}</Cell> */}
// {/* <Cell md="1-3" >ID</Cell><Cell md="1-3" > UserName </Cell><Cell md="1-3">Job</Cell> */}

// {/* <Card
// 	centered   
// 	key={id}
// 	header={username}
// 	description={job}
// /> */}