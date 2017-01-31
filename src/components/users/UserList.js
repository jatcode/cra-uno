import React, { Component } from 'react';
import data from './data';
import { SingleListItem } from '../MyComponents';



// {data.map((todo, i) => TodoItem(todo, i))}

class Lista extends Component {
	
	render(){
		console.log(data);
		return(
			<div>
				{data.data.map((user, id)=>SingleListItem(user, id))}
			</div>
		);
	}
}
	export default Lista;