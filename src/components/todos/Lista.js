import React,{Component} from 'react';
import { Card } from 'semantic-ui-react';
import TodoItem from './TodoItem';

export default class Lista extends Component {
	componentDidMount() {		
		this.props.getAllTodos();
	}

  render() {
		// console.log('props before render LISTA', this.props)
		let { mytodos } = this.props
      return (
				<Card.Group itemsPerRow={5}>
					{mytodos.map((todo, i) => TodoItem(todo, i))}
			 	</Card.Group>
      );
  }
}