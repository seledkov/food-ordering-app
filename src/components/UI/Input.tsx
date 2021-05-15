import React, { useRef } from 'react';
import './Input.scss';
type IInputProps = {
  label: string;
  id: any;
  input: {};
};
const Input = React.forwardRef((props: IInputProps, ref: any) => {
  return (
    <div className='input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} id={props.id} {...props.input} />
    </div>
  );
});
export default Input;
