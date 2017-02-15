import React, { Component } from 'react';
import User from '../containers/users/index';

class Home extends Component {
  render() {
    return (
      <div>
        <User {...this.props}/>
      </div>
    );
  }
}

export default Home;