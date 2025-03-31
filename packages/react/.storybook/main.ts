import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@ku/react': resolve(__dirname, '../src'),
          '@ku/core': resolve(__dirname, '../../../core/src'),
          '@ku-design-system/core': resolve(__dirname, '../../../core')
        }
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          'react',
          'react-dom',
          '@tabler/icons-react'
        ]
      }
    };
  }
};

export default config; 