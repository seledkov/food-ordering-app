import { Fragment } from 'react';
import './Input.scss';
type IInputProps = {
  label: string;
  id: any;
  input: {};
};
const Input = (props: IInputProps) => {
  return (
    <div className='input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} {...props.input} />
    </div>
  );
};
export default Input;
