import { ReactNode, forwardRef, useId } from 'react';
import Input, { InputProps } from '../Input/Input';
import { errorMessage, fieldLabel, textField } from './TextField.styles';

interface TextfieldProps extends InputProps {
  label: ReactNode;
  errorMsg?: ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
  const { label, errorMsg, ...inputProps } = props;
  const id = useId();

  return (
    <span className={textField}>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      <Input ref={ref} id={id} {...inputProps} />
      <span className={errorMessage}>{errorMsg}</span>
    </span>
  );
});

export default TextField;
