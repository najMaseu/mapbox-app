import { userEvent, render, screen, waitFor } from 'tests/utils';
import LoginForm from './LoginForm';
import { vi } from 'vitest';
import { tesonetAxios } from 'api/axios';

vi.mock('api/axios');

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays correct fields', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Sign In');
  });

  it('displays field required error', async () => {
    render(<LoginForm />);

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Username is required!')).toBeInTheDocument();
    expect(await screen.findByText('Password is required!')).toBeInTheDocument();
  });

  it('sends a request with proper data', async () => {
    const testUserName = 'test';
    const testPassword = 'test';

    vi.mocked(tesonetAxios.post, true).mockImplementationOnce(() =>
      Promise.resolve({ data: { token: 'dasdsadsa' } }),
    );

    render(<LoginForm />);
    const usernameField = screen.getByLabelText('Username');
    const passwordField = screen.getByLabelText('Password');

    await userEvent.type(usernameField, testUserName);
    await userEvent.type(passwordField, testPassword);

    expect(usernameField).toHaveValue(testUserName);
    expect(passwordField).toHaveValue(testPassword);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(tesonetAxios.post).toHaveBeenCalledOnce());
  });

  it('should not send a request when validation fails', async () => {
    const testUserName = 'test';

    vi.mocked(tesonetAxios.post, true).mockImplementationOnce(() =>
      Promise.resolve({ data: { token: 'dasdsadsa' } }),
    );

    render(<LoginForm />);
    const usernameField = screen.getByLabelText('Username');

    await userEvent.type(usernameField, testUserName);

    expect(usernameField).toHaveValue(testUserName);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(tesonetAxios.post).not.toHaveBeenCalledOnce());
  });
});
