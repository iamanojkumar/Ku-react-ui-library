import type { Preview } from "@storybook/react";

// Import core styles first
import '../../../core/src/styles/index.css';

// Import component styles
import '../src/styles/tokens.css';
import '../src/components/Radio/Radio.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview; 