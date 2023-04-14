import { ReactNode } from 'react';
import Input, { InputProps } from '../Input/Input';
import { errorMessage, fieldLabel, textField } from './TextField.styles';

interface TextfieldProps extends InputProps {
  label: ReactNode;
  errorMsg: ReactNode;
}

function TextField({ label, errorMsg, ...inputProps }: TextfieldProps) {
  return (
    <span className={textField}>
      <span className={fieldLabel}>{label}</span>
      <Input {...inputProps} />
      <span className={errorMessage}>{errorMsg}</span>
    </span>
  );
}

export default TextField;
