import { SearchBar } from './SearchBar';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

export const Primary: StoryObj<typeof SearchBar> = {
  args: {},
};
