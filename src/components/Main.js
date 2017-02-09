import React from 'react';
// import { Link,browserHistory } from 'react-router';
import { Header, Container, Content, Footer } from '../layout/index';
import { MyLink } from './MyComponents'
const Main = React.createClass({
	render(){
		return (
			<div>
				{/* <Header> */}
					<MyLink toValue='/' label='Home'/>
					<MyLink toValue='/adduser' label='Add User'/>
				{/* </Header>  */}
				{/* <Container > */}
					{/* <Content> */}
						{React.cloneElement(this.props.children, this.props)}
					{/* </Content> */}
					{/* <Footer /> */}
				{/* </Container> */}
				
			</div>
		);
	}
});

export default Main;