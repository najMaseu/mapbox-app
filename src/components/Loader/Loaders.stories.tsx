import Loader from './Loader';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Loader',
  component: Loader,
} as Meta<typeof Loader>;

export const Primary: StoryObj<typeof Loader> = {};
