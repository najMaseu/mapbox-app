import { injectGlobal } from '@emotion/css';
import type { Preview } from '@storybook/react';
import React from 'react';
import { reset } from '../src/styles/reset';
import { fonts } from '../src/styles/fonts';

const withInjectGlobal = (Story) => {
  injectGlobal(reset, fonts);
  return (
    <>
      <Story />
    </>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withInjectGlobal],
};

export default preview;
