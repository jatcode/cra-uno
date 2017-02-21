import React, { Component } from 'react';
import {  MyLinkItem, MenuList } from './MyComponents'
import { Header, Container } from '../layout/index'

class Main extends Component {
	render(){
		return (
			<div>
				<Header>
					<MyLinkItem toValue='/' label='Home'/>
					<MyLinkItem toValue='/userlist' label='User List'/>
					<MyLinkItem toValue='/adduser' label='Add User'/>
				</Header> 
				<Container >
					{/* <Content> */}
						{React.cloneElement(this.props.children, this.props)}
					{/* </Content> */}
					{/* <Footer /> */}
				</Container>
				
			</div>
		);
	}
};

export default Main;