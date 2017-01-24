import React,{Component} from 'react';
import { Grid,Card } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import PedroItem from './PedroItem';

export default class Lista extends Component {
	componentDidMount() {		
		this.props.getAllTodos();
	}

 json = [{
    "id": 1,
    "username": "username1",
    "job": "Employee1"
}, {
    "id": 2,
    "username": "username2",
    "job": "Employee2"
}, {
    "id": 3,
    "username": "username3",
    "job": "Employee3"
}, {
    "id": 4,
    "username": "username4",
    "job": "Employee4"
}, {
    "id": 5,
    "username": "username5",
    "job": "Employee5"
}, {
    "id": 6,
    "username": "username6",
    "job": "Employee6"
}, {
    "id": 7,
    "username": "username7",
    "job": "Employee7"
}, {
    "id": 8,
    "username": "username8",
    "job": "Employee8"
}, {
    "id": 9,
    "username": "username9",
    "job": "Employee9"
}];



  render() {
		// console.log('props before render LISTA', this.props)
    // {/* {mytodos.map((todo, i) => TodoItem(todo, i))} */}
		// let { mytodos } = this.props
      
      return (
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>{'ID'}</Grid.Column>
            <Grid.Column width={3}>{'USERNAME'}</Grid.Column>
            <Grid.Column width={3}>{'JOB'}</Grid.Column>
          </Grid.Row>
          {this.json.map((item, i) => PedroItem(item, i))}
        </Grid>
      );
  }
}