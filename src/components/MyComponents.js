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

export const SingleListItem= ({firstName,lastName, email, picture, options})=>
  <div>
		 <dl>
			 <dt>{firstName}</dt>
			 <dt>{lastName}</dt>
			 <dt>{email}</dt>
			 <dt>{picture}</dt>
			 <dt>{options}</dt>
			 <dd>{options.geoLocation}</dd>
       <dd>{options.geoLocation.latitude}</dd>
       <dd>{options.geoLocation.longitude}</dd>
			 <dd>{options.racis}</dd>
		 </dl>
  </div>