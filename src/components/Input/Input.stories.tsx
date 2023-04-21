import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

export const Basic: StoryObj<typeof Input> = {
  args: {},
};

export const Password: StoryObj<typeof Input> = {
  args: {
    type: 'password',
  },
};

export const Ghost: StoryObj<typeof Input> = {
  args: {
    variant: 'ghost',
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};
