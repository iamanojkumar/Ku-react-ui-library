import type { Preview } from "@storybook/react";
import React from 'react';
import '../../../core/src/styles/tokens.css';
import '../../../core/src/styles/fonts.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview; 