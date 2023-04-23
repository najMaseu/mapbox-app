import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'color',
    onClick: () => console.log('clicked'),
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'grey',
    onClick: () => console.log('clicked'),
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    label: 'Sign In',
    variant: 'ghost',
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
