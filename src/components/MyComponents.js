import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Message } from 'semantic-ui-react';
import { Field } from 'redux-form'
import { startCase, toLower } from 'lodash/string'

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
    <div>
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
export const MyForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, _id } = props
  console.log('this is the props on pristine', pristine);
  console.log('this is the props on reset', reset);
  console.log('this is the props on submitting', submitting);
  console.log('this is the props on _id', _id);
  console.log('this is the props on handleSubmit', handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <Field name='todo' component={MyInput} />
      <Field name='description' component={MyTextarea} />
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}
const MyGrid= (fcolumn,scolumn,tcolumn,...props)=>
<div className="pure-g">
    <div className="pure-u-1-3"><p>{fcolumn}</p></div>
    <div className="pure-u-1-3"><p>{scolumn}</p></div>
    <div className="pure-u-1-3"><p>{tcolumn}</p></div>
		{props.children}
</div>

MyGrid.propTypes={
	fcolumn: PropTypes.string.isRequired,
	scolumn: PropTypes.string.isRequired,
	tcolumn: PropTypes.string.isRequired,
}
export {MyGrid};

export const SingleListItem= ({_id,firsName,lastName, email, picture,options:{racis='T',geoLocation:{longitude,latitude}}},i)=>
  <div key={i}>
     <a href={_id} ><h3>{firsName} {lastName}</h3></a> 
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