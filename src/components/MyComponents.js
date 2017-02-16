/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form'
import { startCase, toLower } from 'lodash/string'
import { withGoogleMap, Marker, GoogleMap } from "react-google-maps";
import { browserHistory } from 'react-router';

export const MyLink = ({toValue, label}) =>
  <div className='ui compact menu'>
    <Link to={ toValue } className='link item'>
      {label}
    </Link>
  </div>
export const MyLinkItem = ({toValue, label}) =>
    <Link to={ toValue } className='pure-menu-item pure-menu-link'>
      {label}
    </Link>
export const MenuList = (props) =>
    <div className="pure-menu pure-menu-horizontal">
      <div className="pure-menu-list">
        {props.children}
      </div>
    </div>
export function initialCapitalCase(string) {
  return startCase(toLower(string));
}

export function MyInput({input, meta: { touched, error }, ...custom}) {

  const hasError = touched && error;
  return (
      <div className="formContainer">
        <label >{initialCapitalCase(input.name)}</label>
        <input className="formItem" {...input} />
        {/* {hasError && <Message error header='Error' content={error} />} */}
        {/* {hasError && <span>{error}</span> } */}
        {hasError && <MyMessage message={error} />}
      </div>
  );
}
export function MyTextarea({input, meta: { touched, error }, ...custom}) {
  const hasError = touched && error;
  return (
      <div className="formContainer">
        <label >{initialCapitalCase(input.name)}</label>
        <textarea  rows="15" className="  formItem" {...input} placeholder='contente' />
        {hasError && <span>{error}</span>}
      </div>
  );
}
export function MyMessage(props){
  const { children, message } = props;
  return (
    <span className='message'>{message}</span>
  );
}
export class MyFileInput extends Component {
    constructor(props){
      super(props);
      this.onChange = this.onChange.bind(this);
    }
    onChange(e){
      const { input:{ onChange } }= this.props;
      onChange(e.target.files[0]);
    }
    render(){
      const { input: { value }} = this.props
      return(
        <input type="file" value={value} onChange={this.onChange} />
      );
    }
  }
export function MySelect({options}){
  return (
    <select >
      <option value="">Select a racis...</option>
      {options.map(option=>
        <option value={option} key={option}>{option}</option>
      )}
    </select>
  );
}
export  const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
  ));
export const SimpleMap= withGoogleMap(props =>(
  <GoogleMap
    
    defaultZoom={8}
    defaultCenter={{lat:13.66191391961704,lng:-89.25284385681152}}
    onClick={props.onMapClick}
  > 
  <Marker
    defaultPosition={{lat:13.66191391961704,lng:-89.25284385681152}}
    draggable={true}
    // {...marker}
    // onRightClick={() => props.onMarkerRightClick(index)}
    onClick={props.onMarkerClick}
  />
    
  </GoogleMap>));  

export const SingleListItem= (
  {_id, firstName, lastName, description, email, 
    picture, racis='T',roleName,geoLocation:{longitude,latitude}},i,myFunc)=>
  <div key={i}>
     <a href={`/viewuser/${_id}`}  onClick={(e)=>myFunc(e, _id)}>
      <h3>{firstName} {lastName}</h3>
    </a> 
    <em>{email}-{picture}</em>
    <br></br>
    <span>
      Lat={latitude}, Long={longitude}
      <br></br>
      <a href="#" >{racis}</a>
    </span>
  </div>
  export function FlexComponent(){
    return (
      <div className="contenedor">
        <div className="box box1">1</div>
        <div className="box box2">2</div>
        <div className="box box3">3</div>
        <div className="box box4">4</div>
        <div className="box box5">5</div>
        <div className="box box6">6</div>
        <div className="box box7">7</div>
        <div className="box box8">8</div>
        <div className="box box9">9</div>
        <div className="box box10">10</div>
      </div>
    );
  }