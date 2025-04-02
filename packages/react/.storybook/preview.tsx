import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider/ThemeProvider";

// Import core styles
import "../../../core/src/styles/index.css";

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
    docs: {
      autodocs: true,
    },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Introduction',
          'Getting Started',
          ['Installation', 'Usage', 'Theming'],
          'Layout',
          ['Container', 'Divider', 'Stack', 'Grid'],
          'Forms',
          ['Button', 'Checkbox', 'Radio', 'Select', 'Switch', 'TextArea', 'TextField'],
          'Navigation',
          ['Breadcrumb', 'Menu'],
          'Data Display',
          ['Avatar', 'Badge', 'Card', 'Image', 'List'],
          'Feedback',
          ['Alert', 'LoadingIndicator', 'ProgressBar', 'Skeleton', 'Toast'],
          'Overlay',
          ['Dropdown', 'Modal', 'Tooltip'],
          '*',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview; 