import { InputHTMLAttributes, forwardRef } from 'react';
import { input } from './Input.styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input type='text' ref={ref} className={input} {...props} />;
});

export default Input;
