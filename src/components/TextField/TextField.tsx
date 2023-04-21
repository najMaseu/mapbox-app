import { ReactNode, forwardRef, useId } from 'react';
import { errorMessage, fieldLabel, textField } from './TextField.styles';
import { Input, InputProps } from 'components/Input/Input';

interface TextfieldProps extends InputProps {
  label: ReactNode;
  errorMsg?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
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
