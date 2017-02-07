import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Message } from 'semantic-ui-react';
import { Field } from 'redux-form'
import { startCase, toLower } from 'lodash/string'
import { withGoogleMap, Marker, GoogleMap } from "react-google-maps";

export const MyLink = ({toValue, label}) =>
  <div className='ui compact menu'>
    <Link to={ toValue } className='link item'>
      {label}
    </Link>
  </div>

export function initialCapitalCase(string) {
  return startCase(toLower(string));
}

export function MyInput({input, meta: { touched, error }, ...custom}) {

  const hasError = touched && error;
  return (
    <div className="formItem">
      <label >{initialCapitalCase(input.name)}</label>
      <div>
        <input {...input} />
        {hasError && <Message error header='Error' content={error} />}
      </div>
    </div>
  );
}
export function MyTextarea({input, meta: { touched, error }, ...custom}) {
  const hasError = touched && error;
  return (
    <div>
      <label >{initialCapitalCase(input.name)}</label>
      <div>
        <textarea {...input} placeholder='contente' />
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
}
export function MyFileInput({input, meta: { touched, error }, ...custom}) {
    const hasError = touched && error;
    return (
      <div className="formItem">
        <label >{initialCapitalCase(input.name)}</label>
        <div>          
          <input {...input}  type="file" value={ null }/>
          {hasError && <Message error header='Error' content={error} />}
        </div>
      </div>
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

export const SingleListItem= (
  {_id, firstName, lastName, description, email, 
    picture, racis='T',roleName,geoLocation:{longitude,latitude}},i)=>
  <div key={i}>
     <a href={_id} ><h3>{firstName} {lastName}</h3></a> 
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