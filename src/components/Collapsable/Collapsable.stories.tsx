import { Collapsable } from './Collapsable';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Collapsable',
  component: Collapsable,
} as Meta<typeof Collapsable>;

export const Primary: StoryObj<typeof Collapsable> = {
  args: {
    header: 'Collapsable',

    children: 'content',
  },
};
