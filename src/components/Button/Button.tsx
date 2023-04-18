import { cx } from '@emotion/css';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonCommon, buttonColor, buttonGrey, buttonGhost } from './Button.styles';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'color' | 'grey' | 'ghost';
  label: ReactNode;
}

function Button({ variant = 'color', label, ...passedProps }: ButtonProps) {
  return (
    <button
      className={cx(
        buttonCommon,
        variant === 'color' && buttonColor,
        variant === 'grey' && buttonGrey,
        variant === 'ghost' && buttonGhost,
      )}
      {...passedProps}
    >
      {label}
    </button>
  );
}

export default Button;
