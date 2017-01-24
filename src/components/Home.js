import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import Lista from './todos/Lista';

class Home extends Component {
  render() {
    return (
      <div>
        <Divider />
				<Lista {...this.props}/>
      </div>
    );
  }
}

export default Home;