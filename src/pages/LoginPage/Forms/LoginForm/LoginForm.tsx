import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'components/Button/Button';
import TextField from 'components/TextField/TextField';
import { form } from '../forms.styles';

const schema = yup
  .object({
    username: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function LoginForm() {
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
      <TextField label={'Username'} errorMsg={errors.username?.message} {...register('username')} />
      <TextField
        label={'Password'}
        errorMsg={errors.password?.message}
        type='password'
        {...register('password')}
      />
      <Button label='Sign In' />
    </form>
  );
}

export default LoginForm;
