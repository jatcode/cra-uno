import React, { Component } from 'react';


class SelectBox extends Component {
  constructor(props){
    super(props)
    this.state={defaultOptions:['R', 'A', 'C', 'I', 'S' ]}
    this.renderOptions = this.renderOptions.bind(this);
  }
  renderOptions(){
    return(
      this.state.defaultOptions.map((option, i)=>
        <option key={i}>{option}</option>
      )
    );
  }
  
  componentDidMount(){
    
  }
  
  render(){
    return (
      <select >
        <option disabled="" value="">Select a racis...</option>
        {this.renderOptions()}
      </select>
    );
  };
}

export default SelectBox;