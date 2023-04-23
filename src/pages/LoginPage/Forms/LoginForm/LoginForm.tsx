import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'components/Button/Button';
import { TextField } from 'components/TextField/TextField';
import { form } from '../forms.styles';
import { getToken } from 'api/auth/auth';
import { useSignIn } from 'react-auth-kit';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { displayToastError } from 'felpers/toasts';

const schema = yup
  .object({
    username: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [isLoaderVisible, setLoaderVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoaderVisible(true);
    try {
      const { token } = await getToken(data);

      signIn({
        token,
        tokenType: 'Bearer',
        expiresIn: 3600,
        authState: { username: data.username },
      });
      navigate('/dashboard');
      setLoaderVisible(false);
    } catch (e) {
      const error = e as AxiosError | Error;
      displayToastError(error.message);
    }
    setLoaderVisible(false);
  };

  return (
    <>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={'Username'}
          errorMsg={errors.username?.message}
          {...register('username')}
        />
        <TextField
          label={'Password'}
          errorMsg={errors.password?.message}
          type='password'
          {...register('password')}
        />
        <Button label='Sign In' />
      </form>
      {isLoaderVisible ? <Loader /> : null}
    </>
  );
};
