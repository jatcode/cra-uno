import React, { PropTypes } from 'react';
// import { Grid, Card } from 'semantic-ui-react'
// import { Button, Cell } from 'react-pure';
import { MyGrid } from '../MyComponents'

const TodoItem = ({id, username, job },idTodo)=>(
	<div className="pure-g" key={idTodo} >
    <div className="pure-u-1-3 pure-u-md-1-2 pure-u-lg-1-4"><p>{id}</p></div>
    <div className="pure-u-1-3 pure-u-md-1-2 pure-u-lg-1-4"><p>{username}</p></div>
    <div className="pure-u-1-3 pure-u-md-1-2 pure-u-lg-1-4"><p>{job}</p></div>
	</div>
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