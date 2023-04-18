import DoubleStack from 'pages/LoginPage/DoubleStack/DoubleStack';
import LoggedOutLayout from 'layout/LoggedOutLayout/LoggedOutLayout';
import LoginForm from './Forms/LoginForm/LoginForm';
import RegisterForm from './Forms/RegisterForm/RegisterForm';

function LoginPage() {
  return (
    <LoggedOutLayout>
      <DoubleStack
        mainContent={<LoginForm />}
        secondaryConent={<RegisterForm />}
        mainCardTitle='Sign In.'
        secondaryCardTitle='Register.'
      />
    </LoggedOutLayout>
  );
}

export default LoginPage;
