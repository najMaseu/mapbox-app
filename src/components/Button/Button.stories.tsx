import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'primary',
    onClick: () => console.log('clicked'),
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'secondary',
    onClick: () => console.log('clicked'),
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'tertiary',
    onClick: () => console.log('clicked'),
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    disabled: true,
    onClick: () => console.log('clicked'),
  },
};
