import React from 'react';
// import { Link,browserHistory } from 'react-router';
import { /*Menu, Header,*/ Container} from 'semantic-ui-react'
import { MyLink } from './MyComponents'
const Main = React.createClass({
	render(){
		return (
			<Container>
				<MyLink toValue='/' label='Todos List'/>				
				<MyLink toValue='/addtodo' label='Add Todo'/>
				{React.cloneElement(this.props.children, this.props)}
			</Container>
		);
	}
});

export default Main;