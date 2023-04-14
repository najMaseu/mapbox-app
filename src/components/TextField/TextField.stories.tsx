import { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TextField>;

export const Basic: StoryObj<typeof TextField> = {
  args: {
    label: 'Username',
    value: 'xXUsernameXx',
  },
};

export const Password: StoryObj<typeof TextField> = {
  args: {
    label: 'Password',
    type: 'password',
    value: 'password',
  },
};

export const WithError: StoryObj<typeof TextField> = {
  args: {
    label: 'Username',
    errorMsg: 'error  message',
  },
};

export const Disabled: StoryObj<typeof TextField> = {
  args: {
    label: 'Password',
    type: 'password',
    value: 'password',
    disabled: true,
  },
};
