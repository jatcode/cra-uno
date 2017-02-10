import React from 'react';
// import { Link,browserHistory } from 'react-router';
// import { Header, Container, Content, Footer } from '../layout/index';
import {  MyLinkItem, MenuList } from './MyComponents'
const Main = React.createClass({
	render(){
		return (
			<div>
				{/* <Header> */}
				<MenuList>
					<MyLinkItem toValue='/' label='Home'/>
					<MyLinkItem toValue='/adduser' label='Add User'/>
				</MenuList>
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