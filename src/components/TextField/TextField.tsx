import { ReactNode, useId } from 'react';
import Input, { InputProps } from './Input/Input';
import { errorMessage, fieldLabel, textField } from './TextField.styles';

interface TextfieldProps extends InputProps {
  label: ReactNode;
  errorMsg?: ReactNode;
}

function TextField({ label, errorMsg, ...inputProps }: TextfieldProps) {
  const id = useId();
  return (
    <span className={textField}>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      <Input id={id} {...inputProps} />
      <span className={errorMessage}>{errorMsg}</span>
    </span>
  );
}

export default TextField;
