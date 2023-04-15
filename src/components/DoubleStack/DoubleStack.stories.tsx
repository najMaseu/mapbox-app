import DoubleStack from './DoubleStack';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'DoubleStack',
  component: DoubleStack,
  decorators: [
    (Story) => (
      <div style={{ width: 1200, height: '100vh', backgroundColor: '#cccddd' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof DoubleStack>;

export const Primary: StoryObj<typeof DoubleStack> = {
  args: {
    mainContent: 'Main Content',
    secondaryConent: 'Secondary Content',
    mainContentCollapsed: 'Main COLLAPSED',
    secondaryContentCollapsed: 'Secondary COLLAPSED',
  },
};
