import { cx } from '@emotion/css';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonCommon, buttonPrimary, buttonSecondary, buttonTertiary } from './Button.styles';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  label: ReactNode;
}

function Button({ variant = 'primary', label, ...passedProps }: ButtonProps) {
  return (
    <button
      className={cx(
        buttonCommon,
        variant === 'primary' && buttonPrimary,
        variant === 'secondary' && buttonSecondary,
        variant === 'tertiary' && buttonTertiary,
      )}
      {...passedProps}
    >
      {label}
    </button>
  );
}

export default Button;
