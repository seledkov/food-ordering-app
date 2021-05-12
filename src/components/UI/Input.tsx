import { Fragment } from 'react';
import './Input.scss';
const Input = (props: any) => {
  return (
    <div className='input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} {...props.input} />
    </div>
  );
};
export default Input;
