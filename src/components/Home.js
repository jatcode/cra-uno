import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import User from '../containers/users/index';

class Home extends Component {
  render() {
    return (
      <div>
        <Divider />
        <User {...this.props}/>
      </div>
    );
  }
}

export default Home;