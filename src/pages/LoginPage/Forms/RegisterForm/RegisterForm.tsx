import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'components/Button/Button';
import TextField from 'components/TextField/TextField';
import { form } from '../forms.styles';

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required!'),
    password: yup
      .string()
      .required('Password is required!')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup
      .string()
      .required('Password is required!')
      .oneOf([yup.ref('password')], 'Passwords must match!')
      .min(8, 'Password must be at least 8 characters'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <TextField label={'Email'} errorMsg={errors.email?.message} {...register('email')} />
      <TextField
        label={'Password'}
        errorMsg={errors.password?.message}
        type='password'
        {...register('password')}
      />
      <TextField
        label={'Confirm password'}
        errorMsg={errors.confirmPassword?.message}
        type='password'
        {...register('confirmPassword')}
      />
      <Button label='Sign In' variant='grey' />
    </form>
  );
}

export default RegisterForm;
