import { InputHTMLAttributes, forwardRef } from 'react';
import { ghostInput, input } from './Input.styles';
import { cx } from '@emotion/css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'normal' | 'ghost';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'normal', ...props }, ref) => {
    return (
      <input
        type='text'
        ref={ref}
        className={cx(input, variant === 'ghost' && ghostInput)}
        {...props}
      />
    );
  },
);
