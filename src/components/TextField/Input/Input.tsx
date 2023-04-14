import { InputHTMLAttributes } from 'react';
import { input } from './Input.styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return <input className={input} {...props} />;
}

export default Input;
